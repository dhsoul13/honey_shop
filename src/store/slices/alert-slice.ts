import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AlertProps } from 'antd';

const initialState: IInitialStateSliceAlert<AlertProps, 'type'> = {
  isActive: false,
  alertType: 'info',
};

export const alertSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isShowAlert: (
      state: IInitialStateSliceAlert<AlertProps, 'type'>,
      {
        payload: { alertType = 'info', message = '', descriptions = '' },
      }: PayloadAction<IInitialStateSliceAlert<AlertProps, 'type'>>
    ) => {
      state.isActive = true;
      state.alertType = alertType;
      state.message = message;
      state.descriptions = descriptions;
    },
  },
});

export const { isShowAlert } = alertSlice.actions;

export default alertSlice.reducer;
