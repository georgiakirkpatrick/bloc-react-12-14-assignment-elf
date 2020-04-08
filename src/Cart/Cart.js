import React from "react";
import { CartItemList } from "../CartItemList/CartItemList";

export const Cart = (props) => {
    const USCurrencyFormat = props.USCurrencyFormat;
    const total = props.total;
    const selected = props.selected;

    console.log('total in Cart.js', total)


    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <CartItemList selected={selected} USCurrencyFormat={props.USCurrencyFormat}/>
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    { USCurrencyFormat.format(1) }
                </div>
            </div>
        </section>
    )
}