import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import { ACCOUNT_ROUTE, LOGIN_ROUTE } from '../../utils/paths';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import './Registration.scss';
import PasswordInput from '../../components/UI/passwordInput/PasswordInput';
import Heading from '../../components/heading/Heading';

const Registration = observer(() => {
	const { user } = useContext(Context);
	const navigation = useNavigate();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function signUp(e) {
		e.preventDefault();

		try {
			e.preventDefault();
			const data = await UserAPI.registration(
				firstName,
				lastName,
				email,
				password
			);
			user.setIsAuth(true);
			console.log(data);
			user.setUserData(data);
			user.setUserId(data.userId);
			user.setRole(data.role);
			navigation(ACCOUNT_ROUTE);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<main>
			<Heading title="Registration" />
			<Container className="registration">
				<form method="POST" onSubmit={signUp}>
					<h1 className="registration__form-title">Sign up</h1>
					<section className="registration__field">
						<Input
							id="firstName"
							name="firstName"
							autoComplete="firstName"
							label="First Name"
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
							required
						/>
					</section>
					<section className="registration__field">
						<Input
							id="lastName"
							name="lastName"
							autoComplete="lastName"
							label="Last Name"
							onChange={(e) => {
								setLastName(e.target.value);
							}}
							required
						/>
					</section>
					<section className="registration__field">
						<Input
							id="email"
							name="email"
							label="Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							autoComplete="username"
							type="email"
							required
						/>
					</section>
					<section className="registration__field">
						<PasswordInput
							id="password"
							name="password"
							autoComplete="new-password"
							minLength="8"
							aria-describedby="password-constraints"
							required
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<div className="registration__hint" id="password-constraints">
							Eight or more characters.
						</div>
					</section>
					<section className="registration__buttons">
						<Button
							className="registration__button"
							type="submit"
							id="sign-up"
						>
							Sign up
						</Button>
						<div className="registration__footer-text">
							Have account ?
							<Link
								className="registration__footer-link"
								to={LOGIN_ROUTE}
							>
								Log in !
							</Link>
						</div>
					</section>
				</form>
			</Container>
		</main>
	);
});

export default Registration;
