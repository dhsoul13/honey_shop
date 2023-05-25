export const MapContent: React.FC = () => {
	return (
		<iframe
			src="https://yandex.ru/map-widget/v1/?um=constructor%3A3b86a746504b95a05076d51a9b3c4ea434c6bd317ab63c01337e33f5130ce2a5&amp;source=constructor"
			width="100%"
			height="400"
			frameBorder="0"
			style={{
				borderRadius: '30px',
			}}
		/>
	);
};
