import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { customersApi } from '../pages/Customers/services/customersApi';
import { loginApi } from '../pages/Login/services/loginApi';
import accountReducer from '../pages/Login/services/accountSlice';
import detailsReducer from '../pages/Agreements/services/detailsSlice';
import detailsInvReducer from '../pages/Invoices/services/detailsInvSlice';
import { registerApi } from '../pages/Register/services/registerApi';
import { agreementsApi } from '../pages/Agreements/services/agreementsApi';
import { invoicesApi } from '../pages/Invoices/services/invoicesApi';
import { tasksApi } from '../pages/Tasks/services/tasksApi';

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
    [agreementsApi.reducerPath]: agreementsApi.reducer,
    [invoicesApi.reducerPath]: invoicesApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    account: accountReducer,
    details: detailsReducer,
    detailsInv: detailsInvReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      agreementsApi.middleware,
      customersApi.middleware,
      invoicesApi.middleware,
      tasksApi.middleware,
      loginApi.middleware,
      registerApi.middleware,
    ]),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
