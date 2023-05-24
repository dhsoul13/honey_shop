interface IUseCountProps {
  availableCount: number | string;
}

type TStatusUseCount = 'not' | 'available' | 'crowded';

type TUseCount = ({
  availableCount,
}: IUseCountProps) => [number, () => void, () => void, TStatusUseCount];

type TUseActiveModalCardShop = (count: TStatusUseCount) => {
  isActive: boolean;
  changeActiveOnClick: () => void;
};

type TUseRedirect = () => {
  redirectOnClick: () => void;
};
