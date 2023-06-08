import { useState } from 'react';

export const useModal: TUseModal = () => {
	const [active, setActive] = useState<boolean>(false);

	const changeActive = () => {
		setActive((prev) => !prev);
	};

	return {
		isActive: active,
		changeActiveOnClickAlerts: changeActive,
	};
};
