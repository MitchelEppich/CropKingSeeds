import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus, faTimes);

//takes in the strain item as prop
//returns a cart item with the strain thumbnail, name, and quantity (also has buttons to increase or reduce qty)

const cartItem = props => {
    let currency = props.checkout.viewCurrency;
    let _coupon = props.checkout.orderDetails.coupon;
    let showCartProducts = () => {
        let _arr = [];

        let _items = props.cart.items;
        for (let item of Object.keys(_items)) {
            let _item = _items[item];
            let _product = _item.product;
            _arr.push(
                <div
                    key={item}
                    style={{
                        background: Object.keys(_items).indexOf(item) % 2 == 0 ? "#e6e6e6" : "#f6f6f6"
                    }}
                    className={`flex justify-between px-4 py-2`}>
                    <img className="h-32 mx-6" src={_product.packageImg} />
                    <div className="flex relative flex-wrap justify-between lg:w-250 lg:mr-auto md:w-250 md:mr-auto sm:w-200 sm:mr-auto">
                        <h3 className="text-black text-xl w-300 sm:w-150 h-16 pr-3 mt-2 sm:text-lg">
                            {_product.name}
                            <span className="text-base flex text-grey-light">({_item.amount + " pack"})</span>
                        </h3>
                        <div className="h-10 w-10 cursor-pointer absolute pin-t pin-r pt-1 hover:bg-red-dark hover:text-white text-center text-grey">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="fa-sm"
                                onClick={() => {
                                    props.modifyCart({
                                        items: props.cart.items,
                                        action: "REMOVE",
                                        productIdentifier: item
                                    });
                                }}
                            />
                        </div>
                        <div className="w-100 flex justify-between h-6 items-center">
                            <div className="w-100 flex justify-between h-6 items-center">
                                <button
                                    name="decreaseItem"
                                    onClick={() =>
                                        props.modifyCart({
                                            items: props.cart.items,
                                            action: "MODIFY",
                                            productIdentifier: item,
                                            product: _product,
                                            quantity: -1,
                                            coupon: _coupon
                                        })
                                    }
                                    className="px-2 py-1 scale-item bg-almost-black rounded text-xl text-white">
                                    <FontAwesomeIcon icon={faMinus} className="fa-sm text-white cursor-pointer" />
                                </button>
                                <input
                                    onBlur={e => {
                                        let _value = e.target.value;
                                        if (_value == "") {
                                            props.modifyCart({
                                                items: props.cart.items,
                                                action: "SET",
                                                productIdentifier: item,
                                                product: _product,
                                                quantity: 1,
                                                coupon: _coupon
                                            });
                                        }
                                    }}
                                    onChange={e => {
                                        let _value = e.target.value;

                                        if (_value == null || parseInt(_value) < 1) {
                                            _value = 1;
                                        }

                                        props.modifyCart({
                                            items: props.cart.items,
                                            action: "SET",
                                            productIdentifier: item,
                                            product: _product,
                                            quantity: parseInt(_value),
                                            coupon: _coupon
                                        });
                                    }}
                                    value={_item.quantity || ""}
                                    className="text-lg text-center w-12 border-0 font-bold pt-1 leading-none"
                                    type="number"
                                />
                                <button
                                    name="decreaseItem"
                                    onClick={() =>
                                        props.modifyCart({
                                            items: props.cart.items,
                                            action: "MODIFY",
                                            productIdentifier: item,
                                            product: _product,
                                            quantity: 1,
                                            coupon: _coupon
                                        })
                                    }
                                    className="px-2 py-1 scale-item bg-almost-black rounded text-xl text-white">
                                    <FontAwesomeIcon icon={faPlus} className="fa-sm text-white cursor-pointer" />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className="text-xl text-grey-light font-bold">
                                {currency != null
                                    ? `${currency.symbol}${(currency.convert * _item.price).toFixed(2)}`
                                    : ""}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        return _arr;
    };
    return <div>{showCartProducts()}</div>;
};

export default cartItem;
