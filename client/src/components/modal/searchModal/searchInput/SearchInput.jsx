import React from 'react';
import './SearchInput.scss';

const SearchInput = ({ id, className, ...props }) => {
	return (
		<section className="search-input">
			<div className="search-input__wrapper">
				<input
					{...props}
					id={id}
					type="text"
					className="search-input__input"
					placeholder='Search...'
				/>
				<button
					className="search-input__button _icon-search"
					id="search-submit"
					type="submit"
				></button>
			</div>
		</section>
	);
};

export default SearchInput;
