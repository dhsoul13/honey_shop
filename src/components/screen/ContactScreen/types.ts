type TDopInfo = {
	dopVisitableTitle: string;
	dopVisibleInformation: string;
	iconDop?: React.ReactElement;
};

export interface IContentInfoAboutSeller {
	visitableTitle: string;
	visibleInformation: string | Array<TDopInfo>;
	icon?: React.ReactElement;
}
