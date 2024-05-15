import React from 'react';
import Container from '../container/Container.jsx';
import './Footer.scss';
import { HOME_ROUTE, SHOP_ROUTE } from '../../utils/paths.js';
import { Link } from 'react-router-dom';
import SelectList from '../UI/selectList/SelectList.jsx';

const listLinks = [
	{ title: 'Home', href: HOME_ROUTE },
	{ title: 'Shop', href: SHOP_ROUTE },
	{ title: 'About', href: HOME_ROUTE },
	{ title: 'Contact', href: HOME_ROUTE },
];

const listHelp = [
	{ title: 'Payment Options', href: HOME_ROUTE },
	{ title: 'Returns', href: SHOP_ROUTE },
	{ title: 'Privacy Policies', href: HOME_ROUTE },
];

const Footer = () => {
	return (
		<footer className="footer">
			<Container className="footer__container">
				<div className="footer__content">
					<div className="footer__title">
						<Link to={HOME_ROUTE} className="footer__logo">
							Funiro.
						</Link>
						<p className="footer__location">
							400 University Drive Suite 200 Coral Gables, FL 33134 USA
						</p>
					</div>

					<SelectList
						className="select-list"
						items={listLinks}
						title="Links"
					/>
					<SelectList
						className="select-list"
						items={listHelp}
						title="Help"
					/>

					<div className="footer__newsletter newsletter">
						<h3 className="newsletter__title">Newsletter</h3>
						<form className="newsletter__form" action="">
							<input
								placeholder="Enter your email address"
								className="newsletter__input"
								type="text"
							/>
							<button
								onClick={(e) => e.preventDefault()}
								className="newsletter__button"
							>
								SUBSCRIBE
							</button>
						</form>
					</div>
				</div>

				<div className="footer__rights">
					2023 funiro. All rights reverved
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
