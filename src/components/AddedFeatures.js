import React from 'react';

import AddedFeature from './AddedFeature';
import { removeFeature, removeFeaturePrice } from '../actions/actionIndex';
import { connect } from 'react-redux';

const AddedFeatures = props => {
  const removeFeatureProp = item => {
    props.removeFeature(item);
    props.removeFeaturePrice(item.price);
  }
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature 
              key={item.id} 
              feature={item} 
              removeFeatureProp = {removeFeatureProp}

            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.carReducer
  }
}

export default connect(
  mapStateToProps, 
  {
    removeFeature, removeFeaturePrice 
  })(AddedFeatures);
