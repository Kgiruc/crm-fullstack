import { GET_CUSTOMERS_SUCCESS } from './actions/actions';

const CustomersListReducer = (state = { customer: [] }, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_SUCCESS:
      return { ...state, cutomers: action.customers };
    default:
      return state;
  }
};

export default CustomersListReducer;
