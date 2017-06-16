/**
 * Created by RomanPC on 16.06.2017.
 */
const initialState = {

};

export default function page(state = initialState, action) {

  switch (action.type) {

    case 'GET_DATA_ABOUT_SUCCESS':
      return { ...state, data: action.payload};

    default:
      return state;
  }

}
