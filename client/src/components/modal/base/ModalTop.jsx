import React from 'react';

const ModalTop = ({ title, closeModal, className }) => {
	return (
		<div className={'popup__top ' + (className ?? '')}>
			<div className="popup__title">{title}</div>
			<button
				type="button"
				onClick={closeModal}
				className="popup__close _icon-shop"
			></button>
		</div>
	);
};

export default ModalTop;
