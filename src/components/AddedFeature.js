import React from 'react';

const AddedFeature = props => {
  const removeFeatureProp = () => {
    props.removeFeatureProp(props.feature)
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button"
      onClick = {removeFeatureProp}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
