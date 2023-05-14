import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { Customer } from '../../../types/customer';
import { getCustomersSuccess } from './states/Customers';

async function customersFetch() {
  const response = await axios.get<Customer[]>('http://localhost:8800/clients');
  return response.data;
}

function* workGetCustomersFetch() {
  const customers: Customer[] = yield call(customersFetch);
  yield put(getCustomersSuccess(customers));
}

function* customersSaga() {
  yield takeEvery('customers/getCustomersFetch', workGetCustomersFetch);
}

export default customersSaga;
