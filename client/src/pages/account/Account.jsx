import React from 'react';
import Container from '../../components/container/Container';
import { Link } from 'react-router-dom';
import './Account.scss';
import { ADMIN_MENU_ROUTE } from '../../utils/paths';

const Account = () => {
	return (
		<main>
			<Container>
				Account  
				<Link to={ADMIN_MENU_ROUTE}> To Admin Menu</Link>
			</Container>
		</main>
	);
};

export default Account;
