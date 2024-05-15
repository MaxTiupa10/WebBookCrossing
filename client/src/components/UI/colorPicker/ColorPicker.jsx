import React, { useMemo, useEffect, useRef, useState } from 'react';
import './ColorPicker.scss';
import Input from '../input/Input';
function ColorPicker({ label, id, className, curColor, setCurColor, ...props }) {
	const classNames = ['color-picker', className];

	const output = useRef();
	useEffect(() => {
		output.current.value = curColor;
	}, []);

	function ProcessOutputValue(e) {
		let color = e.target.value;
		if (color[0] != '#') color = '#' + color;
		if (color.length != 7) {
			e.target.value = curColor;
			return;
		}
		let curNum;
		for (let i = 1; i < 7; i += 2) {
			curNum = parseInt(color.slice(i, i + 2), 16);
			if (isNaN(curNum) || curNum < 0 || curNum > 255) {
				e.target.value = curColor;
				return;
			}
		}
		setCurColor(color);
		output.current.value = color;
	}

	return (
		<div className={classNames.join(' ')}>
			{label && (
				<label className="color-picker__label" htmlFor={id}>
					{label}
				</label>
			)}
			<div className="color-picker__content">
				<input
					value={curColor}
					onChange={(e) => {
						setCurColor(e.target.value);
						output.current.value = e.target.value;
					}}
					id={id}
					className="color-picker__color"
					{...props}
					type="color"
				/>
				<Input
					ref={output}
					type="text"
					onFocus={(e) => e.target.select()}
					onBlur={(e) => ProcessOutputValue(e)}
					onKeyDown={(e) => {
						if (e.keyCode === 13) {
							e.preventDefault();
							ProcessOutputValue(e);
						}
					}}
					className="color-picker__output"
				/>
			</div>
		</div>
	);
}

export default ColorPicker;
