interface IUseCountProps {
	availableCount: number | string;
}

type TStatusUseCount = 'not' | 'available' | 'crowded';

type TUseCount = ({
	availableCount,
}: IUseCountProps) => [number, () => void, () => void, TStatusUseCount];

////
type TUseActiveModalCardShop = (count: TStatusUseCount) => {
	isActive: boolean;
	changeActiveOnClickWithAlerts: () => void;
	changeActiveOnClickWithoutAlerts: () => void;
};

type TUseRedirect = () => {
	redirectOnClick: () => void;
};

///

type TUseModalNews = () => {
	isActive: boolean;
	changeActiveOnClickAlerts: () => void;
};
