import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/paths.js';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ className, lastCrumb }) => {
	const location = useLocation();
	// get path elements and get rid of empty strings
	const crumbs = location.pathname.split('/').filter((crumb) => crumb);

	return (
		<div className={['breadcrumbs', className].join(' ')}>
			<div className="breadcrumbs__container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link to={HOME_ROUTE}>Home</Link>
					</li>
					{crumbs.map((crumb, index) => {
						const link = '/' + crumb;
						return (
							<li
								key={crumb}
								className={
									'breadcrumbs__item' +
									(index + 1 === crumbs.length ? ' active' : '')
								}
							>
								<Link to={link}>
									{index + 1 === crumbs.length && lastCrumb ?
										lastCrumb
									:	crumb.charAt(0).toUpperCase() + crumb.slice(1)}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Breadcrumbs;
