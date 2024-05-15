import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { adminRoutes, authRoutes, publicRoutes } from '../utils/routes';
import { Context } from '../index';
import { observer } from 'mobx-react';
import { HOME_ROUTE } from '../utils/paths';

const AppRouter = observer(() => {
	const { user } = useContext(Context);

	return (
		<Routes>
			{user.userData.role === 'admin' &&
				adminRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
		</Routes>
	);
});

export default AppRouter;
