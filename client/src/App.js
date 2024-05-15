import React, { useContext, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Modals from './components/modal/Modals';
import { useLocationChange } from './hooks/useLocationChange';
import { bodyLock, bodyUnlock } from './utils/functions';
import {
	CART_MODAL,
	FAVORITES_MODAL,
	SEARCH_MODAL,
} from './components/modal/modalNames';

const initialModalsObject = {
	CART_MODAL: false,
	FAVORITES_MODAL: false,
	SEARCH_MODAL: false,
};

const App = observer(() => {
	const { user } = useContext(Context);
	// Holds all  modals open/close state
	const [modals, setModals] = useState(initialModalsObject);

	// Close an opened modal on page change
	useLocationChange(() => {
		setModals(initialModalsObject);
	});

	// This will return an api in which we can toggle, close or open a modal
	// ie: set the boolean to true or false
	/**
	 * @param {string} modalName
	 * @returns {modalHandler}
	 */
	const getModalHandler = (modalName) => {
		return {
			isOpen: modals[modalName],
			open: () => {
				bodyLock();
				setModals((state) => ({ ...state, [modalName]: true }));
			},
			close: () => {
				bodyUnlock();
				setModals((state) => ({ ...state, [modalName]: false }));
			},
			closeAll: () => {
				bodyUnlock();
				setModals(initialModalsObject);
			},
		};
	};

	return (
		<div className="wrapper">
			<Header getModalHandler={getModalHandler} />
			<AppRouter />
			<Footer />
			<Modals getModalHandler={getModalHandler} />
		</div>
	);
});

export default App;
