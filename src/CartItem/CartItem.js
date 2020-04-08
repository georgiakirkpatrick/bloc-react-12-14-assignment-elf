import React from 'react';
import './CartItem.css';

export const CartItem = (props) => {
    return (
        <div className="summary__option">
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {props.USCurrencyFormat.format(props.selectedOption.cost)}
          </div>
        </div>
    )
}