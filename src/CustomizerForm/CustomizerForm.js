import React from 'react';
import { FeatureItem } from '../FeatureItem/FeatureItem';
import './CustomizerForm.css';

export const CustomizerForm = (props) => {
    const featuresList = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        
        return <FeatureItem key={featureHash} features={props.features} feature={feature} USCurrencyFormat={props.USCurrencyFormat} updateFeature={props.updateFeature} featureHash={featureHash}/>
    });

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>

            {featuresList}
      </form>
    )
        

}