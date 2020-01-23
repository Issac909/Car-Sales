import React from 'react';

import { addFeature, addFeaturePrice } from '../actions/actionIndex';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  const addFeature = item => {
    item.preventDefault();
    props.addFeature(props.feature);
    props.addFeaturePrice(props.feature.price);
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      className="button"
      onClick = {addFeature}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect (
  undefined,
  { 
    addFeature, 
    addFeaturePrice
  })(AdditionalFeature);
