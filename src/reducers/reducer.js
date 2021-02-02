import { ADD_FEATURE, REMOVE_FEATURE } from '../actions'; //don't forget to import action types

const initialState = { // always an object
         additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      };

      export const reducer = (state = initialState, action) => { // convention to declare state this way
          switch (action.type) { // similar to an if else statement 
              case ADD_FEATURE:
                  return {
                      ...state,
                      car: {
                          ...state.car,
                          features: [...state.car.features, action.payload],
                          price: state.car.price + action.payload.price,
                      },
                      additionalFeatures: [
                          ...state.additionalFeatures.filter(
                              (feature) => feature.id !== action.payload.id // whatevers left
                          ),
                      ],
                      };
                      case REMOVE_FEATURE:
                          return {
                              ...state,
                              car: {
                                  ...state.car,
                                  features: [
                                      ...state.car.features.filter(
                                          (feature) => feature.id !== action.payload.id  // REVIEW similar to toggle?
                                      ),
                                  ],
                                  price: state.car.price - action.payload.price, // when you remove the feature, decrease the price (action payload) from the total
                              },
                              additionalFeatures: [...state.additionalFeatures, action.payload],
                          };
                      default: 
                      return state;
                  }
          };
      