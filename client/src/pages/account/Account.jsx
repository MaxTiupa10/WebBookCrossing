import React, { useContext, useEffect, useState } from 'react';
import Container from '../../components/container/Container';
import { Link } from 'react-router-dom';
import './Account.scss';
import { ADMIN_MENU_ROUTE } from '../../utils/paths';
import Heading from '../../components/heading/Heading';
import Button from '../../components/UI/button/Button';
import Loader from '../../components/UI/loader/Loader';
import { ADMIN_ROLE } from '../../types';
import { Context } from '../..';
import { useFetching } from '../../hooks/useFetching';
import { UserAPI } from '../../http/userAPI';

const Account = () => {
	const { user } = useContext(Context);
	const [userInfo, setUserInfo] = useState();
	const [getUserInfo, isUserInfoLoading, userInfoError] = useFetching(() => {
		UserAPI.getUserInfo(user.userData.userId)
			.then((userInfo) => {
				setUserInfo(userInfo);
				console.log(userInfo);
			})
			.catch((error) => {
				console.log(error);
			});
	}, true);

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<main>
			<Heading title={'Account'} />
			<Container className="account">
				<div className="account__profile">
					{!userInfo || isUserInfoLoading ?
						<Loader className="account__loader" />
					:	<>
							<div className="account__name">
								{userInfo.firstname + ' ' + userInfo.lastname}
							</div>
							<div className="account__contacts">
								<a className="account__email">{userInfo.email}</a>
							</div>
						</>
					}
				</div>
				<div className="account__buttons">
					{user.role === ADMIN_ROLE && (
						<Button className="account__button">
							<Link to={ADMIN_MENU_ROUTE}>To Admin Menu</Link>
						</Button>
					)}
					<Button
						onClick={() => {
							user.exitAccount();
						}}
						className="account__button"
					>
						Log out of the Account
					</Button>
				</div>
			</Container>
		</main>
	);
};

export default Account;
