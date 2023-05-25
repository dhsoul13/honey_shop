import { createFromIconfontCN } from '@ant-design/icons';
import Icon, {
	CustomIconComponentProps,
} from '@ant-design/icons/lib/components/Icon';
import { TelegramSVG } from './telegram';
import { VKSVG } from './vk';

export const TelegramIcon = (props: Partial<CustomIconComponentProps>) => (
	<Icon component={TelegramSVG} {...props} />
);

export const VKIcon = (props: Partial<CustomIconComponentProps>) => (
	<Icon component={VKSVG} {...props} />
);
