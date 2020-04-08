import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';
import { Cart } from "./Cart/Cart";
import { FeatureItem } from './FeatureItem/FeatureItem';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const selected = this.state.selected;
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      
      return <FeatureItem key={featureHash} features={this.props.features} feature={feature} USCurrencyFormat={USCurrencyFormat} updateFeature={this.updateFeature} featureHash={featureHash}/>
    });   

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>

        <main>
          {/* <CustomizerForm  /> */}
            <form className="main__form">
              <h2>Customize your laptop</h2>

              {/* {FeatureList} */}
              {features}

            </form>

          <Cart USCurrencyFormat={USCurrencyFormat} selected={selected} />
        </main>
      </div>
    );
  }
}
