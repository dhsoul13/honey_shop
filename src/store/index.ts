import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modal-slice';
import alertSlice from './slices/alert-slice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    alert: alertSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
