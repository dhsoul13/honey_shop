import { Screen404 } from 'src/components/screen/404Screen';
import { UseRedirect } from 'src/utils/hooks/useRedirect';

export const Page404 = () => {
	const { redirectOnClick } = UseRedirect();

	return <Screen404 redirect={redirectOnClick} />;
};
