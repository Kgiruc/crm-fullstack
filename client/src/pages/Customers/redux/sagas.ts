import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GET_CUSTOMERS_FETCH, GET_CUSTOMERS_SUCCESS, getCustomersFetch } from './actions/actions';
import { Customer } from '../../../types/customer';

async function customersFetch() {
  const response = await axios.get<Customer[]>('http://localhost:8800/clients');
  return response.data;
}

function* workGetCustomersFetch() {
  const customers: Customer[] = yield call(customersFetch);
  yield put({ type: GET_CUSTOMERS_SUCCESS, customers });
}

function* mySaga() {
  yield takeEvery(GET_CUSTOMERS_FETCH, workGetCustomersFetch);
}

export default mySaga;
