import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IInitialStateSliceModal = {
  isActive: false,
  typeModal: 'AUTH',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isShowModal: (
      state: IInitialStateSliceModal,
      { payload }: PayloadAction<IInitialStateSliceModal>
    ) => {
      state.isActive = true;
      state.typeModal = payload.typeModal;
    },
    isCloseModal: (state: IInitialStateSliceModal) => {
      state.isActive = false;
      state.typeModal = 'AUTH';
    },
  },
});

export const { isShowModal } = modalSlice.actions;

export default modalSlice.reducer;
