import React from 'react';
import { FeatureOption } from '../FeatureOption/FeatureOption';
import slugify from 'slugify';

export const FeatureItem = (props) => {
    const options = props.features[props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));

        return (
          <FeatureOption key={itemHash} itemHash={itemHash} feature={props.feature} item={item} USCurrencyFormat={props.USCurrencyFormat} updateFeature={props.updateFeature}/>
        );
    });

    return (
    <fieldset className="feature" key={props.featureHash}>
        <legend className="feature__name">
        <h3>{props.feature}</h3>
        </legend>
        {options}
    </fieldset>
    );
}