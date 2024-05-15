import {
	HOME_ROUTE,
	SHOP_ROUTE,
	PRODUCT_ROUTE,
	ACCOUNT_ROUTE,
	CART_ROUTE,
	REGISTRATION_ROUTE,
	LOGIN_ROUTE,
	ADMIN_MENU_ROUTE,
	CHECKOUT_ROUTE,
} from './paths.js';
import {
	Home,
	Account,
	Login,
	Registration,
	Product,
	Cart,
	Shop,
	AdminMenu,
	Checkout,
} from '../pages/pages.js';

export const adminRoutes = [
	{
		path: ADMIN_MENU_ROUTE,
		Component: AdminMenu,
	},
];

export const authRoutes = [
	{
		path: ACCOUNT_ROUTE,
		Component: Account,
	},
];

export const publicRoutes = [
	{
		path: HOME_ROUTE,
		Component: Home,
	},
	{
		path: SHOP_ROUTE,
		Component: Shop,
	},
	{
		path: LOGIN_ROUTE,
		Component: Login,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Registration,
	},
	{
		path: PRODUCT_ROUTE + '/:id',
		Component: Product,
	},
	{
		path: CART_ROUTE,
		Component: Cart,
	},
	{
		path: CHECKOUT_ROUTE,
		Component: Checkout,
	},
];
