import React from "react";
import { connect } from "react-redux";
import { deleteFeature } from "./actions/index";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.deleteFeature(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { deleteFeature })(AddedFeature);
