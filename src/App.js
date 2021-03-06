import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { addFeature, removeItem } from "./actions";

// const App = () => {
//   const state = {
//     additionalPrice: 0,
//     car: {
//       price: 26395,
//       name: '2019 Ford Mustang',
//       image:
//         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//       features: []
//     },
//     store: [
//       { id: 1, name: 'V-6 engine', price: 1500 },
//       { id: 2, name: 'Racing detail package', price: 1500 },
//       { id: 3, name: 'Premium sound system', price: 500 },
//       { id: 4, name: 'Rear spoiler', price: 250 }
//     ]
//   };

const App = ({ state, addFeature, removeItem }) => {
    const removeFeature = item => {
        console.log(item);
        removeItem(item);
    };

    const buyItem = item => {
        console.log(item);
        addFeature(item);
    };

    return (
        <div className="boxes">
            <div className="box">
                <Header car={state.car} />
                <AddedFeatures car={state.car} removeFeature={removeFeature} />
            </div>
            <div className="box">
                <AdditionalFeatures
                    store={state.store}
                    buyItem={buyItem}
                />
                <Total
                    car={state.car}
                    additionalPrice={state.additionalPrice}
                />
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
    { addFeature, removeItem }
)(App);