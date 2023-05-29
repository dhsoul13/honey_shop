import { useState } from 'react';

export const useModalNews: TUseModalNews = () => {
	const [active, setActie] = useState<boolean>(false);

	const changeActive = () => {
		setActie((prev) => !prev);
	};

	return {
		isActive: active,
		changeActiveOnClickAlerts: changeActive,
	};
};
