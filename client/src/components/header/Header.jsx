import React, { useState, useEffect, useContext } from 'react';
import Container from '../container/Container.jsx';
import {
	ACCOUNT_ROUTE,
	HOME_ROUTE,
	SHOP_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
} from '../../utils/paths.js';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { bodyLockToggle, bodyUnlock } from '../../utils/functions.js';
import { Context } from '../../index.js';
import { observer } from 'mobx-react';
import './Header.scss';
import {
	CART_MODAL,
	FAVORITES_MODAL,
	SEARCH_MODAL,
} from '../modal/modalNames.js';

/**
 * @param {Object} props
 * @param {(modalName) => modalHandler} props.getModalHandler
 * @returns
 */
const Header = observer(({ getModalHandler }) => {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const location = useLocation();
	const { user, cart, favorites, search } = useContext(Context);

	// close menu on location change
	useEffect(() => {
		menuClose();
	}, [location]);

	function toggleMenu() {
		setIsMenuActive(!isMenuActive);
		bodyLockToggle(0);
		document.documentElement.classList.toggle('menu-open');
	}
	function menuClose() {
		if (!isMenuActive) return;
		bodyUnlock(0);
		setIsMenuActive(false);
		document.documentElement.classList.remove('menu-open');
	}

	let accountButton;
	if (user.isAuth) {
		accountButton = (
			<NavLink
				to={ACCOUNT_ROUTE}
				className="actions-header__icon _icon-account"
			></NavLink>
		);
	} else if (location.pathname === LOGIN_ROUTE) {
		accountButton = (
			<Link
				to={REGISTRATION_ROUTE}
				className="actions-header__icon _icon-account-create"
			></Link>
		);
	} else {
		accountButton = (
			<Link
				to={LOGIN_ROUTE}
				className="actions-header__icon _icon-sign-in"
			></Link>
		);
	}

	return (
		<header
			data-lp // to correct right padding on body lock by bodyUnlock and bodyLock functions
			className="header"
		>
			<Container className="header__container">
				<div className="header__menu menu">
					<NavLink to={HOME_ROUTE} className="header__logo">
						Furniro
					</NavLink>
					<nav className="menu__body">
						<ul className="menu__list">
							<li className="menu__item">
								<NavLink to={HOME_ROUTE} className="menu__link">
									Home
								</NavLink>
							</li>
							<li className="menu__item">
								<NavLink to={SHOP_ROUTE} className="menu__link">
									Shop
								</NavLink>
							</li>
							<li className="menu__item">
								<NavLink to={'/about'} className="menu__link">
									About
								</NavLink>
							</li>
							<li className="menu__item">
								<NavLink to={'/contact'} className="menu__link">
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
					<ul className="header__actions actions-header">
						<li className="actions-header__item account-btn">
							{accountButton}
						</li>
						<li className="actions-header__item">
							<button
								type="button"
								className="actions-header__icon _icon-search"
								onClick={() => getModalHandler(SEARCH_MODAL).open()}
							></button>
						</li>
						<li className="actions-header__item">
							<button
								type="button"
								className="actions-header__icon _icon-heart label-value"
								onClick={() => getModalHandler(FAVORITES_MODAL).open()}
							>
								{favorites.amountOfItems > 0 && (
									<span>{favorites.amountOfItems}</span>
								)}
							</button>
						</li>
						<li className="actions-header__item">
							<button
								type="button"
								className="actions-header__icon _icon-cart label-value"
								onClick={() => getModalHandler(CART_MODAL).open()}
							>
								{cart.amountOfItems > 0 && (
									<span>{cart.amountOfItems}</span>
								)}
							</button>
						</li>
						<button
							type="button"
							className="actions-header__icon icon-menu"
							onClick={toggleMenu}
						>
							<span></span>
						</button>
					</ul>
				</div>
			</Container>
		</header>
	);
});

export default Header;
