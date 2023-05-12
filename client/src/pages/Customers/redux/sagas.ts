import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_CUSTOMERS_FETCH ,GET_CUSTOMERS_SUCCESS } from './actions/actions';

function* mySaga() {
  yield takeEvery(GET_CUSTOMERS_FETCH, workGetCustomersFetch);
}

export default mySaga;
