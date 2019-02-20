/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import Navigation from "./navigation";

const actionTypes = {
  CLEAR_CART: "CLEAR_CART",
  MODIFY_CART: "MODIFY_CART",
  MODIFY_POTENTIAL_QUANTITY: "MODIFY_POTENTIAL_QUANTITY",
  SET_CART_POSITION: "SET_CART_POSITION",
  RECALL_CART: "RECALL_CART",
  PURGE_CART: "PURGE_CART"
};

const getActions = uri => {
  const objects = {
    clearCart: () => {
      return {
        type: actionTypes.CLEAR_CART
      };
    },
    refreshCart: input => {
      return dispatch => {
        let _items = input.items;
        let _coupon = input.coupon;
        let _max = input.max;
        for (let key of Object.keys(_items)) {
          if (input.itemId == null || key.includes(input.itemId)) {
            let _item = _items[key];
            dispatch(
              objects.modifyCart({
                items: _items,
                action: "SET",
                max: _max,
                productIdentifier: key,
                product: _item.product,
                quantity: _item.quantity,
                coupon: _coupon
              })
            );
          }
        }
      };
    },
    modifyPotentialQuantity: input => {
      let _tag = input.tag;

      let _potentialQuantity = input.potentialQuantity;
      let _action = input.action;
      let _max = input.max;

      let _quantity = Math.min(input.quantity, _max);

      if (_tag != null && typeof _potentialQuantity === "number")
        _potentialQuantity = { [_tag]: _quantity };
      else if (_tag == null && typeof _potentialQuantity === "object")
        _potentialQuantity = 1;

      switch (_action) {
        case "SET":
          if (_tag == null) _potentialQuantity = _quantity;
          else _potentialQuantity[_tag] = _quantity;
          break;
        case "MODIFY":
          _potentialQuantity = Math.min(
            Math.max(1, _quantity + _potentialQuantity),
            _max
          );
          if (_tag == null)
            _potentialQuantity = Math.min(
              Math.max(1, _quantity + _potentialQuantity),
              _max
            );
          else
            _potentialQuantity[_tag] = Math.min(
              Math.max(1, _quantity + (_potentialQuantity[_tag] || 1)),
              _max
            );
          break;
        case "CLEAR":
          if (_tag == null) _potentialQuantity = 1;
          else delete _potentialQuantity[_tag];
          break;
      }

      return {
        type: actionTypes.MODIFY_POTENTIAL_QUANTITY,
        input: _potentialQuantity
      };
    },
    modifyCart: input => {
      let _items = input.items;
      let _action = input.action;
      let _max = input.max;

      let _productIdentifier = input.productIdentifier;
      let _product = input.product;

      let { _per, _amount } = (() => {
        if (_product == null) return {};
        let _amount = _productIdentifier.replace(/\D/g, "");
        return {
          _per: _product.price[["5", "10", "25"].indexOf(_amount)],
          _amount
        };
      })();

      let _coupon = input.coupon;
      let sale = (() => {
        if (_coupon == null) return undefined;

        if (_coupon.itemId == _product.sotiId || _coupon.type == "%") {
          if (_coupon.type == "%") {
            return _per * (1 - _coupon.amount / 100);
          } else if (_coupon.type == "$") {
            return Math.max(0, _per - _coupon.amount);
          }
        }
        return undefined;
      })();

      let _quantity = Math.min(input.quantity, _max);

      let _item, price;

      switch (_action) {
        case "REMOVE":
          delete _items[_productIdentifier];
          break;
        case "APPEND":
          if (_productIdentifier in _items) {
            _quantity += _items[_productIdentifier].quantity;
          }
          _quantity = Math.min(_quantity, _max);
          price = (sale == null ? _per : sale) * _quantity;
          _items[_productIdentifier] = {
            product: _product,
            quantity: _quantity,
            price,
            per: _per,
            sale,
            amount: _amount
          };
          break;
        case "MODIFY":
          _item = _items[_productIdentifier];
          _quantity = Math.min(Math.max(0, _quantity + _item.quantity), _max);
          price = (sale == null ? _per : sale) * _quantity;
          if (_quantity == 0) delete _items[_productIdentifier];
          else {
            _items[_productIdentifier] = {
              ..._item,
              quantity: _quantity,
              price,
              sale,
              per: _per
            };
          }
          break;
        case "SET":
          _quantity = Math.min(_quantity, _max);
          price = (sale == null ? _per : sale) * _quantity;
          _item = _items[_productIdentifier];
          _items[_productIdentifier] = {
            ..._item,
            quantity: _quantity,
            price,
            sale,
            per: _per
          };
        default:
      }

      let _price = Object.values(_items)
        .map(a => {
          if (isNaN(a.price)) return 0;
          return a.price;
        })
        .reduce((a, b) => {
          return a + b;
        }, 0);

      let _discount = (() => {
        if (_coupon == null) return 0;
        if (_coupon.type == "%") {
          return Object.values(_items)
            .map(a => {
              if (isNaN(a.price) || isNaN(a.sale)) return 0;
              return (a.per - a.sale) * a.quantity;
            })
            .reduce((a, b) => {
              return a + b;
            }, 0);
        } else if (_coupon.type == "$") {
          let _ = _coupon.amount;
          _price = Math.max(0, _price - _);
          return _;
        }
      })();

      let _obj = {
        items: _items,
        price: _price,
        discount: _discount
      };

      sessionStorage.setItem("cart", JSON.stringify(_obj));

      return {
        type: actionTypes.MODIFY_CART,
        ..._obj
      };
    },
    purgeCart: () => {
      sessionStorage.removeItem("cart");
      return {
        type: actionTypes.PURGE_CART
      };
    },
    recallCart: () => {
      return dispatch => {
        return new Promise((resolve, reject) => {
          let recall = sessionStorage.getItem("cart");
          let _obj = {
            items: {},
            price: 0,
            discount: 0
          };
          if (recall != null) {
            _obj = JSON.parse(recall);
            resolve(_obj);
          } else {
            resolve({});
          }

          dispatch({
            type: actionTypes.RECALL_CART,
            ..._obj
          });
        });
      };
    },
    setCartPosition: posObj => {
      return {
        type: actionTypes.SET_CART_POSITION,
        posObj: posObj
      };
    }
  };

  return { ...objects };
};
const query = {};

const mutation = {};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
