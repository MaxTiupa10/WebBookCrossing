import { makeAutoObservable } from 'mobx';
import { UserAPI } from '../http/userAPI';
import { verifyJWT } from '../utils/functions';
import { jwtDecode } from 'jwt-decode';

export class UserStore {
	constructor() {
		this._isAuth = false;
		this._userData = {};
		const token = localStorage.getItem(UserAPI.TOKEN_NAME);
		token && console.log(jwtDecode(token));
		if (token && verifyJWT(token)) {
			this._isAuth = true;
			const decodedToken = jwtDecode(token);
			this._userData = decodedToken;
			this.setUserId(decodedToken.userId);
			this.setRole(decodedToken.role);
		}
		makeAutoObservable(this);
	}

	exitAccount() {
		this._isAuth = false;
		this._userData = {};
		localStorage.removeItem(UserAPI.TOKEN_NAME);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}
	setUserData(userData) {
		this._userData = userData;
	}
	setUserId(userId) {
		this._userData.userId = userId;
	}
	setRole(role) {
		this._userData.role = role;
	}

	get isAuth() {
		return this._isAuth;
	}
	get userData() {
		return this._userData;
	}
	get userId() {
		return this._userData.userId;
	}
	get role() {
		return this._userData.role;
	}
}
