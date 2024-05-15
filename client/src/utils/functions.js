let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
};
export let bodyUnlock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('[data-lp]');
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove('lock');
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
};
export let bodyLock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('[data-lp]');
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			// if (window.matchMedia('(max-width: 90em)').matches)
			el.style.paddingRight = getScrollBarSize() + 'px';
		}
		body.style.paddingRight = getScrollBarSize() + 'px';
		document.documentElement.classList.add('lock');

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
};
export function getScrollBarSize() {
	return window.innerWidth - document.querySelector('.wrapper').offsetWidth;
}
export let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};
export const isTouch = isMobile.any() ? true : false;
export function addTouchClass() {
	// Додавання класу _touch для HTML, якщо браузер мобільний
	if (isTouch) document.documentElement.classList.add('touch');
}

export function getStringPrice(startPrice, currency = '₴') {
	startPrice = startPrice.toFixed(2);
	let res = startPrice.slice(-3);
	for (let i = startPrice.length - 4; i >= 0; i -= 3) {
		if (i < 3) {
			res = startPrice.slice(0, i + 1) + res;
			break;
		}

		res = ',' + startPrice.slice(i - 2, i + 1) + res;
	}
	if (startPrice.length < 3) res = '0' + res;
	return currency + ' ' + res;
}
