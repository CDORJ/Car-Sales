import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions"

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button> 
      {/* adding and dispatching to the action */}
      {props.feature.name} (+{props.feature.price}) 
      {/* // name and price string */}
    </li>
  );
};

// no need for mapToProps, props are being passed down from AdditionalFeatures
export default connect(null, { addFeature })(AdditionalFeature);
