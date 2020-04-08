import React from 'react';
import slugify from 'slugify';
import './FeatureOption.css';

export const FeatureOption = (props) => {
    const feature = props.feature;
    // const selected = props.selected;


    return (
        <div className="feature__item">
            <input
              type="radio"
              id={props.itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={props.item.name === feature.name}
              onChange={e => props.updateFeature(feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
              {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
            </label>
        </div>
    )
}