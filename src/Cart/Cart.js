import React from "react";
import { CartItemList } from "../CartItemList/CartItemList";
import { CartTotal } from '../CartTotal/CartTotal';
import './Cart.css';

export const Cart = (props) => {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <CartItemList selected={props.selected} USCurrencyFormat={props.USCurrencyFormat} />
            <CartTotal selected={props.selected} USCurrencyFormat={props.USCurrencyFormat} />
        </section>
    )
}