import { useLocation } from 'react-router-dom';
import React from 'react'

export const useLocationChange = (action) => {
	const location = useLocation();
	React.useEffect(() => {
		action(location);
	}, [location]);
};
