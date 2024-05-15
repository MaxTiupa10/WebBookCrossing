import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import Container from '../../components/container/Container';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import { ACCOUNT_ROUTE } from '../../utils/paths';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import './Registration.scss';
import PasswordInput from '../../components/UI/passwordInput/PasswordInput';
import Heading from '../../components/heading/Heading';

const Registration = observer(() => {
	const { user } = useContext(Context);

	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function signUp(e) {
		e.preventDefault();
		console.log('Sigh In');
		user.setIsAuth(true);

		redirect(ACCOUNT_ROUTE);
		// try {
		// 	e.preventDefault();
		// 	const data = await UserAPI.registration(userName, email, password);
		// 	user.setIsAuth(true);
		// } catch (error) {
		// 	console.log(error);
		// }
	}

	return (
		<main>
			<Heading title='Registration'/>
			<Container className="registration">
				<form method="POST" onSubmit={signUp}>
					<h1 className="registration__form-title">Sign up</h1>
					<section className="registration__field">
						<Input
							id="name"
							name="name"
							autoComplete="name"
							label="User Name"
							onChange={(e) => {
								setUserName(e.target.value);
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
					<section className="registration__button">
						<Button className="login__button" type="submit" id="sign-up">
							Sign up
						</Button>
					</section>
				</form>
			</Container>
		</main>
	);
});

export default Registration;
