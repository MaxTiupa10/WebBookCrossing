import { useState } from 'react';

export function useFetching(callback, initialIsLoading = false) {
	const [isLoading, setIsLoading] = useState(initialIsLoading);
	const [error, setError] = useState(null);
	const fetching = async (...args) => {
		try {
			setIsLoading(true);
			await callback(...args);
		} catch (e) {
			setError(e);
		} finally {
			setIsLoading(false);
		}
	};
	return [fetching, isLoading, error];
}
