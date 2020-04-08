import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';
import { CartItem } from "./CartItem/CartItem";

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
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    // Add a "selected" variable to pass state to Cart
    const selected = this.state.selected

    // Move to CartItemList.js
    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    const summary = Object.keys(selected).map((feature, idx) => {

      const featureHash = feature + '-' + idx;
      const selectedOption = selected[feature];

      return (
        <CartItem key={featureHash} feature={feature} selectedOption={selectedOption} USCurrencyFormat={USCurrencyFormat}/>
        // Move to CartItem.js
        // <div className="summary__option" key={featureHash}>
        //   <div className="summary__option__label">{feature} </div>
        //   <div className="summary__option__value">{selectedOption.name}</div>
        //   <div className="summary__option__cost">
        //     {USCurrencyFormat.format(selectedOption.cost)}
        //   </div>
        // </div>
        //
    
      );
    });
    //

    // Move to Cart.js
    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
    // 

    return (
      // Keep this in App.js
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        {/*  */}

        {/* LaptopCustomizer tag here.  Props needed:  */}

        <main>

          {/* Move to LaptopCustomizer: */}
          <form className="main__form">
            <h2>Customize your laptop</h2>

            {/* Move to CustomizerOptions */}
            {features}
            {/*  */}

          </form>
          {/*  */}

          {/* Cart tag here.  Props needed: USCurrencyFormat selected */}

          {/* Move to Cart tag*/}
          <section className="main__summary">
            <h2>Your cart</h2>

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
          {/* */}       

        </main>
      </div>
    );
  }
}
