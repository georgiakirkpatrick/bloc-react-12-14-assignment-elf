import React from "react";
import { CartItemList } from "../CartItemList/CartItemList";
import './Cart.css';

export const Cart = (props) => {
    const USCurrencyFormat = props.USCurrencyFormat;
    const selected = props.selected;

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <CartItemList selected={selected} USCurrencyFormat={props.USCurrencyFormat}/>
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    { USCurrencyFormat.format(total) }
                </div>
            </div>
        </section>

    )
}