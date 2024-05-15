import React from 'react';
import './Counter.scss';
export default function Counter({ count, setCount, className }) {
	const maxValue = 9999999;
	const classNames = ['counter', className];
	function plus() {
		if (count >= maxValue) return;
		setCount(count + 1);
	}
	function minus() {
		if (count <= 1) return;
		setCount(count - 1);
	}
	function unfocusCheck(e) {
		if (e.target.value === '') setCount(1);
	}
	function getValidValue(e) {
		const res = parseInt(e.target.value);
		if (isNaN(res)) return '';
		if (res < 1) return 1;
		if (res > maxValue) return maxValue;
		return res;
	}
	return (
		<div className={classNames.join(' ')}>
			<button
				onClick={minus}
				className="counter__button counter__button_minus"
			>
				-
			</button>
			<input
				className="counter__value"
				value={count}
				onChange={(e) => setCount(getValidValue(e))}
				onBlur={(e) => unfocusCheck(e)}
				onFocus={(e) => e.target.select()}
			/>
			<button
				onClick={plus}
				className="counter__button counter__button_plus"
			>
				+
			</button>
		</div>
	);
}
