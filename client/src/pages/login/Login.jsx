import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/UI/button/Button';
import Checkbox from '../../components/UI/checkbox/Checkbox';
import Input from '../../components/UI/input/Input';
import PasswordInput from '../../components/UI/passwordInput/PasswordInput';
import Container from '../../components/container/Container';
import Heading from '../../components/heading/Heading';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import { ACCOUNT_ROUTE, REGISTRATION_ROUTE } from '../../utils/paths';
import './Login.scss';

const Login = observer(() => {
	const { user } = useContext(Context);
	const navigation = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMeChecked, setRememberMeChecked] = useState(false);

	async function signIn(e) {
		e.preventDefault();

		try {
			const data = await UserAPI.login(email, password);
			console.log(data);
			user.setIsAuth(true);
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
			<Heading title="Login" />
			<Container className="login">
				<form method="POST" onSubmit={signIn}>
					<h1 className="login__form-title">Sign in</h1>
					<section className="login__field">
						<Input
							id="email"
							name="email"
							type="email"
							label="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="username"
							required
						/>
					</section>
					<section className="login__field">
						<PasswordInput
							label="Password"
							id="password"
							name="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
							required
						/>
					</section>
					<section className="login__checkbox">
						<Checkbox
							checked={rememberMeChecked}
							onChange={() => setRememberMeChecked(!rememberMeChecked)}
							id="rememberMe"
							name="rememberMe"
							label="Remember me"
						/>
					</section>
					<section className="login__buttons">
						<Button className="login__button" type="submit" id="sign-in">
							Sign in
						</Button>
						<div className="login__footer-text">
							Have no account ?
							<Link
								className="login__footer-link"
								to={REGISTRATION_ROUTE}
							>
								Register !
							</Link>
						</div>
					</section>
				</form>
			</Container>
		</main>
	);
});

export default Login;
