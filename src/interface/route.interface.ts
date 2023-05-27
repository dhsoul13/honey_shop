type TRouterName = 'home' | 'shop' | 'honey' | 'contact' | 'dev' | '404';
type TRouterDevName =
	| 'header'
	| 'footer'
	| 'button'
	| 'modalCard'
	| 'ModalsAuthentically'
	| 'CarouselWrapperCustom';

interface IRoute {
	visibleNameRouter: string;
	path: string;
}

type TRoutes = Record<TRouterName, IRoute>;
type TRoutesDev = Record<TRouterDevName, IRoute>;
