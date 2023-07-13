import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { customersApi } from '../pages/Customers/services/customersApi';
import { invoicesApi } from '../pages/Invoices/services/invoicesApi';
import { loginApi } from '../pages/Login/services/loginApi';
import accountReducer from '../pages/Login/services/accountSlice';
import detailsReducer from '../pages/Agreements/services/detailsSlice';
import detailsInvoiceReducer from '../pages/Invoices/services/detailsInvoiceSlice';
import { registerApi } from '../pages/Register/services/registerApi';
import { agreementsApi } from '../pages/Agreements/services/agreementsApi';
import { tasksApi } from '../pages/Tasks/services/tasksApi';
import { profileApi } from '../pages/Profie/services/profileApi';

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
    [agreementsApi.reducerPath]: agreementsApi.reducer,
    [invoicesApi.reducerPath]: invoicesApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    account: accountReducer,
    details: detailsReducer,
    detailsInvoice: detailsInvoiceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      agreementsApi.middleware,
      customersApi.middleware,
      invoicesApi.middleware,
      tasksApi.middleware,
      loginApi.middleware,
      registerApi.middleware,
      profileApi.middleware,
    ]),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
