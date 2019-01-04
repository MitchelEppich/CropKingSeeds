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
  MODIFY_CART: "MODIFY_CART"
};

const getActions = uri => {
  const objects = {
    clearCart: () => {
      return {
        type: actionTypes.CLEAR_CART
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

      console.log(_items);
      return {
        type: actionTypes.MODIFY_CART,
        input: _items
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
