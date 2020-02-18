import { ADD_FEATURE, REMOVE_FEATURE } from '../actions'

export const addFeature = feature => {
    console.log('Add feature', feature)
    return { type: ADD_FEATURE, payload: feature };
}

export const removeFeature = feature => {
    console.log('This feature was removed', feature)
    return { type: REMOVE_FEATURE, payload: feature }
}