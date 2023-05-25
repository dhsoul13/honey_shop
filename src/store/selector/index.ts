import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

// const selectSelf = (state: State) => state

const selectorDefault = (state: RootState) => state;

///Modal
export const selectorModalState = createSelector(
	selectorDefault,
	(state) => state.modal
);

export const selectorModalStateActive = createSelector(
	selectorDefault,
	(state): boolean => !!state.modal.isActive
);

///Alert

export const selectorAlertState = createSelector(
	selectorDefault,
	(state) => state.alert
);
