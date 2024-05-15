import React, {useMemo} from 'react'
import './StarRating.scss';

function StarRating({rate, className}) {
	const classNames = ['star-rating', className];
	const ratingStars = useMemo(() => {
		if (rate === undefined) return "";
		const number = 5;
		const rating = Math.round(rate);
		let stars = [];
		for (let i = 1; i <= number; i++) {
			let className = "star-rating__star ";
			className += (i <= rating) ? "active" : "";
			stars.push(
				<span key={i} className={className}>★</span>
			);
		}
		return stars;
	}, [rate]);

	return (
		<span className={classNames.join(" ")}>
			{ratingStars}
		</span>
	)
}

export default StarRating