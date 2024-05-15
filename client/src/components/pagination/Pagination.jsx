import React, { memo, useMemo, useState } from 'react';
import Container from '../container/Container';
import './Pagination.scss';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Pagination = ({
	onPageChange = (page) => {},
	pageCount = 10,
	initialPage = 0,
	pageRange = 2,
}) => {
	const items = useMemo(() => {
		return [...Array(pageCount).keys()];
	}, [pageCount]);

	const [activePage, setActivePage] = useState(initialPage);
	const isMobileSize = !useMediaQuery('(min-width: 36.25em)');

	if (pageCount === 0) {
		return <Container className="pagination" />;
	}

	const handleClick = (page) => {
		if (!(page === activePage)) {
			setActivePage(page);
			onPageChange(page);
		}
	};

	const nextButtonClick = () => {
		const page = activePage + 1;
		setActivePage(page);
		onPageChange(page);
	};

	const prevButtonClick = () => {
		const page = activePage - 1;
		setActivePage(page);
		onPageChange(page);
	};

	const margin = isMobileSize ? 1 : pageRange;

	let leftBound = activePage - margin,
		rightBound = activePage + margin + 1;
	if (leftBound < 0) {
		rightBound += -leftBound;
	} else if (rightBound > pageCount) {
		leftBound -= rightBound - pageCount;
	}
	leftBound = Math.max(leftBound, 0);
	rightBound = Math.min(rightBound, pageCount);

	const pageMarginItems = items.slice(leftBound, rightBound);

	return (
		<Container className="pagination">
			<button
				onClick={() => prevButtonClick()}
				disabled={activePage === 0}
				className={`pagination__button prev _icon-arrow-right`}
			></button>
			<ul className="pagination__list">
				{pageMarginItems.map((page) => {
					const isActivePage = page === activePage;
					return (
						<li key={page} className="pagination__item">
							<button
								onClick={() => handleClick(page)}
								className={[
									'pagination__button',
									isActivePage ? 'active' : '',
								].join(' ')}
							>
								{page + 1}
							</button>
						</li>
					);
				})}
			</ul>
			<button
				onClick={() => nextButtonClick()}
				disabled={activePage + 1 === pageCount}
				className={`pagination__button next _icon-arrow-right`}
			></button>
		</Container>
	);
};

export default memo(Pagination);
