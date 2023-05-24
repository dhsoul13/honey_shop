import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

// const selectSelf = (state: State) => state

const selectorModal = (state: RootState) => state;

export const selectorModalState = createSelector(
  selectorModal,
  (state) => state.modal
);

export const selectorModalStateActive = createSelector(
  selectorModal,
  (state): boolean => !!state.modal.isActive
);
