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

            let _quantity = input.quantity;

            let _item;

            switch (_action) {
                case "REMOVE":
                    _items = _items.filter(a => {
                        if (a.productIdentifier == _productIdentifier) return false;
                        return true;
                    });
                    break;
                case "APPEND":
                    if (_productIdentifier in _items) {
                        _quantity += _items[_productIdentifier].quantity;
                    }
                    _items[_productIdentifier] = {
                        product: _product,
                        quantity: _quantity
                    };
                    break;
                case "MODIFY":
                    _item = _items[_productIdentifier];
                    _quantity += _item.quantity;
                    _items[_productIdentifier] = {
                        ..._item,
                        quantity: Math.max(0, _quantity)
                    };
                    break;
                case "SET":
                    _item = _items[_productIdentifier];
                    _items[_productIdentifier] = {
                        ..._item,
                        quantity: _quantity
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
