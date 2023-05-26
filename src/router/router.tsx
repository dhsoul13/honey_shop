import { createBrowserRouter } from 'react-router-dom';
import { devroutes, routes } from './routes';
import { Footer, Header, ModalCard, ModalsAuthentically } from 'src/components';
import { MainLayout } from 'src/components/layout/MainLauout';
import { DevLayout } from 'src/components/layout/DevLayout';
import { MainButton } from 'src/components/ui/buttons';
import { MainPage, ShopPage } from 'src/page';
import { demoCardContent } from 'src/shared/constant/demoCardContent';
import { Page404 } from 'src/page/404Page';
import { ContactPage } from 'src/page/ContactPage';

export const router = createBrowserRouter([
	{
		path: routes.home.path,
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: routes.shop.path,
				element: <ShopPage />,
			},
			{
				path: routes['404'].path,
				element: <Page404 />,
			},
			{
				path: routes.contact.path,
				element: <ContactPage />,
			},
		],
	},
	{
		path: routes.dev.path,
		element: <DevLayout />,
		children: [
			{
				index: true,
				element: (
					<>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<MainButton type="link" href={devroutes.button.path}>
								{devroutes.button.visibleNameRouter}
							</MainButton>
							<MainButton type="link" href={devroutes.header.path}>
								{devroutes.header.visibleNameRouter}
							</MainButton>
							<MainButton type="link" href={devroutes.footer.path}>
								{devroutes.footer.visibleNameRouter}
							</MainButton>
							<MainButton type="link" href={devroutes.modalCard.path}>
								{devroutes.modalCard.visibleNameRouter}
							</MainButton>
							<MainButton type="link" href={devroutes.ModalsAuthentically.path}>
								{devroutes.ModalsAuthentically.visibleNameRouter}
							</MainButton>
						</div>
					</>
				),
			},
			{
				path: devroutes.header.path,
				element: (
					<div
						style={{
							backgroundColor: '#ffd057',
						}}
					>
						<Header />
					</div>
				),
			},
			{
				path: devroutes.footer.path,
				element: (
					<div
						style={{
							backgroundColor: '#ffd057',
						}}
					>
						<div>
							<Footer />
						</div>
					</div>
				),
			},
			{
				path: devroutes.button.path,
				element: (
					<div
						style={{
							gap: '30px',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<MainButton type="primary">Text</MainButton>
						<MainButton type="default">Text</MainButton>
						<MainButton type="link">Text</MainButton>
					</div>
				),
			},
			{
				path: devroutes.ModalsAuthentically.path,
				element: (
					<>
						<ModalsAuthentically isActive />
					</>
				),
			},
			{
				path: devroutes.modalCard.path,
				element: (
					<>
						<ModalCard content={demoCardContent[0]} />
					</>
				),
			},
		],
	},
]);
