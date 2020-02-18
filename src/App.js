import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, removeFeature } from './components/hooks';
import { connect } from 'react-redux';

const App = ({ state, addFeature, removeFeature }) => {
  const removedFeature = item => {
    console.log('Item being removed', item);
    removeFeature(item);
  };

  const buyItem = item => {
    console.log('Item being added', item);
    addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature = {removedFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} addFeature = {buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
