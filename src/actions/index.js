// action types
// NOTE still don't really understand why this is necessary

export const ADD_FEATURE = "ADD_FEATURE";

export const REMOVE_FEATURE = "REMOVE_FEATURE";

// export const UPDATE_TOTAL = "UPDATE_TITLE";

export const addFeature = feature => { // action creator
    console.log(feature);
        return { // ACTION
            type: ADD_FEATURE,
            payload: feature
        };
};

export const removeFeature = (feature) => { // action creator
    return {
        type: REMOVE_FEATURE, // ACTION
        payload: feature
    };
};

