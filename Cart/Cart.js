import React from "react";
import { CartItemList } from "./CartItemList/CartItemList";

const Cart = (props) => {
    const total = Object.keys(selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
    );

    console.log('selected', props.selected)


    return (
        <section className="main__summary">
            <h2>Your cart</h2>

            <CartItemList selected={props.selected} USCurrencyFormat={props.USCurrencyFormat} />

            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        </section>
    )  
}

export default Cart;