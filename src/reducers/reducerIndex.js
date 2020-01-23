import { combineReducers } from 'redux';
import priceReducer from './priceReducer';
import carReducer from './carReducer';
import featureReducer from './featureReducer';

export default combineReducers ( {priceReducer, carReducer, featureReducer } );