interface IModalCard {
  content: IRequestElement;
  isActive?: boolean;
  onChangeActiveOnClick?: () => void;
}
