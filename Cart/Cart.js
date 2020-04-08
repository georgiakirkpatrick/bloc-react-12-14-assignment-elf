import React from "react";

export const Cart = (props) => {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>

            {/* CartItemsList tag here props needed:  */}
            {/* Move to CartItemsList */}
            {summary}
            {/* */}

            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        </section>
    )  
}