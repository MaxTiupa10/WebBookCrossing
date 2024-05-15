import React, { useState } from 'react';
import './PasswordInput.scss';

const PasswordInput = ({ id, className, ...props }) => {
	const [isShownPassword, setIsShownPassword] = useState(false);
	return (
		<section className="password-input">
			<label className="password-input__label" htmlFor={id}>
				Password
			</label>
			<div className="password-input__wrapper">
				<input {...props} id={id}
            type={isShownPassword ? "text" : "password"}
            className="password-input__input" />
            <button
					className={`password-input__show-button _icon-eye-${isShownPassword ? 'closed' : 'open'}`}
					id="toggle-password"
               onClick={() => setIsShownPassword(!isShownPassword)}
					type="button"
					aria-label="Show password as plain text. Warning: this will display your password on the screen."
				></button>
			</div>
		</section>
	);
};

export default PasswordInput;
