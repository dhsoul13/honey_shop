type TTypeSliceModal = 'AUTH' | 'REG';

interface IInitialStateSliceModal {
  isActive?: boolean;
  typeModal?: TTypeSliceModal;
}

interface IInitialStateSliceAlert<T, Key extends keyof T> {
  isActive: boolean;
  alertType: Pick<T, Key>[Key];
  descriptions?: string;
  message?: string;
}
