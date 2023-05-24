type TTypeSliceModal = 'AUTH' | 'REG';

interface IInitialStateSliceModal {
  isActive?: boolean;
  typeModal: TTypeSliceModal;
}
