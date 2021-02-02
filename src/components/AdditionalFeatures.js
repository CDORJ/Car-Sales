import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? ( // are there additional features? (length ternary)
        <ol type="1">
          {props.additionalFeatures.map(item => ( // map through each item and create a AdditionalFeature component
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// passing props to additionalFeature

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures, // additionalFeatures is the only necessary piece of state
  }
}
export default connect(mapStateToProps, {}) (AdditionalFeatures);
