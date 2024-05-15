import { useState, useEffect } from 'react';

export const useMediaQuery = (query, callback = null) => {
	const [matches, setMatches] = useState(false);

	const handleChange = (e) => {
		setMatches(e.matches);
		if (callback && e.matches) { 
			callback(e);
		}
	};

	useEffect(() => {
		const m = window.matchMedia(query);

		setMatches(m.matches);

		m.addEventListener('change', handleChange);

		return () => {
			m.removeEventListener('change', handleChange);
		};
	}, []);

	return matches;
};