import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { customersApi } from '../pages/Customers/services/customersApi';
import { loginApi } from '../pages/Login/services/loginApi';
import accountReducer from '../pages/Login/services/accountSlice';
import detailsReducer from '../pages/Agreements/services/detailsSlice';
import { registerApi } from '../pages/Register/services/registerApi';
import { agreementsApi } from '../pages/Agreements/services/agreementsApi';

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
    [agreementsApi.reducerPath]: agreementsApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    account: accountReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      agreementsApi.middleware,
      customersApi.middleware,
      loginApi.middleware,
      registerApi.middleware,
    ]),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
