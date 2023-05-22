interface IUseCountProps {
  availableCount: number | string;
}

type TStatusUseCount = 'not' | 'available' | 'crowded';

type TUseCount = ({
  availableCount,
}: IUseCountProps) => [number, () => void, () => void, TStatusUseCount];

type TUseActiveModalCardShop = () => {
  isActive: boolean;
  changeActiveOnClick: () => void;
};
