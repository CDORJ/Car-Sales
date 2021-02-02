import React from 'react';
import { connect } from "react-redux"
import { removeFeature } from '../actions'
// must import action at top and bottom

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {/* feature is each item in the map */}
      {props.feature.name} 
    </li>
  );
};

// an actual function isn't always necessary, null can be a placeholder function
// connect is always called twice (function currying) always requires a function, and an objext, second with the component we are trying to connect

export default connect(null, { removeFeature })(AddedFeature);
