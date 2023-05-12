import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import mySaga from '../pages/Customers/redux/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {},
  middleware: (getDeafultMiddleware) => getDeafultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export const useAppDispath: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
