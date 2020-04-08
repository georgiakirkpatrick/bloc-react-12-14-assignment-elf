import React from 'react';
import { CartItem } from "../CartItem/CartItem";

export const CartItemList =(props) => {
  const selected = props.selected;

  const summary = Object.keys(selected).map((feature, idx) => {

    const featureHash = feature + '-' + idx;
    const selectedOption = selected[feature];

    return (
      <CartItem key={featureHash} feature={feature} selectedOption={selectedOption} USCurrencyFormat={props.USCurrencyFormat}/>
    );
  });

  return summary
}
