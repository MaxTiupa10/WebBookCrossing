import { makeAutoObservable } from 'mobx';

export class UserStore {
	constructor() {
		this._isAuth = true;
		this._userData = {
			role: 'admin'
		}; // { role: 'admin' };
		makeAutoObservable(this);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}
	setUserData(userData) {
		this._userData = userData;
	}

	get isAuth() {
		return this._isAuth;
	}
	get userData() {
		return this._userData;
	}
}
