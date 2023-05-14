import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import customerReducer from '../pages/Customers/redux/states/Customers';
import customersSaga from '../pages/Customers/redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
  middleware: (getDeafultMiddleware) => getDeafultMiddleware().concat(middleware),
});

sagaMiddleware.run(customersSaga);

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
