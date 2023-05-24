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
      {
        payload: { typeModal = 'AUTH' },
      }: PayloadAction<IInitialStateSliceModal>
    ) => {
      state.isActive = true;
      state.typeModal = typeModal;
    },
    isCloseModal: (state: IInitialStateSliceModal) => {
      state.isActive = false;
      state.typeModal = 'AUTH';
    },
  },
});

export const { isShowModal, isCloseModal } = modalSlice.actions;

export default modalSlice.reducer;
