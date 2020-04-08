import React from 'react';
import { CartItem } from "./CartItem/CartItem";

const CartItemList =(props) => {
    const selected = props.selected;

    console.log('selected', props.selected)

    Object.keys(selected).map((feature, idx) => {

        const featureHash = feature + '-' + idx;
        const selectedOption = selected[feature];
    
        return (
          <CartItem key={featureHash} feature={feature} selectedOption={selectedOption} USCurrencyFormat={USCurrencyFormat}/>
        );
      });
}

export default CartItemList;

