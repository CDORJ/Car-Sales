import React from 'react';

import AddedFeature from './AddedFeature';
import { connect } from "react-redux"

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? ( // is there an added feature? ternary
        <ol type="1">
          {props.car.features.map(item => ( // for every item make a new added feature component when clicked
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car, // car is the only necessary prop for this component
  }
}
 // props are being passed down to AddedFeature
export default connect(mapStateToProps, {})(AddedFeatures);
