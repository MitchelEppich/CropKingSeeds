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
  MODIFY_POTENTIAL_QUANTITY: "MODIFY_POTENTIAL_QUANTITY"
};

const getActions = uri => {
  const objects = {
    clearCart: () => {
      return {
        type: actionTypes.CLEAR_CART
      };
    },
    modifyPotentialQuantity: input => {
      let _potentialQuantity = input.potentialQuantity;
      let _action = input.action;

      let _quantity = input.quantity;

      switch (_action) {
        case "SET":
          break;
        case "MODIFY":
          _quantity = Math.max(1, _quantity + _potentialQuantity);
          break;
        case "CLEAR":
          _quantity = 1;
          break;
      }

      return {
        type: actionTypes.MODIFY_POTENTIAL_QUANTITY,
        input: _quantity
      };
    },
    modifyCart: input => {
      let _items = input.items;
      let _action = input.action;

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

      let _quantity = input.quantity;

      let _item;

      switch (_action) {
        case "REMOVE":
          delete _items[_productIdentifier];
          break;
        case "APPEND":
          if (_productIdentifier in _items) {
            _quantity += _items[_productIdentifier].quantity;
          }
          _items[_productIdentifier] = {
            product: _product,
            quantity: _quantity,
            price: _per * _quantity,
            per: _per,
            amount: _amount
          };
          break;
        case "MODIFY":
          _item = _items[_productIdentifier];
          _quantity = Math.max(0, _quantity + _item.quantity);
          if (_quantity == 0) delete _items[_productIdentifier];
          else {
            _items[_productIdentifier] = {
              ..._item,
              quantity: _quantity,
              price: _per * _quantity,
              per: _per
            };
          }
          break;
        case "SET":
          _item = _items[_productIdentifier];
          _items[_productIdentifier] = {
            ..._item,
            quantity: _quantity,
            price: _per * _quantity,
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

      return {
        type: actionTypes.MODIFY_CART,
        items: _items,
        price: _price
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
