import React from 'react';
import './Modal.scss';
import Container from '../../container/Container';

const Modal = ({
	active,
	closeModal,
	children,
	className,
	variant = 'centered',
}) => {
	return (
		<div
			onClick={closeModal}
			aria-hidden={active}
			aria-modal={active}
			role='dialog'
			className={['popup', active ? 'popup_show' : ''].join(' ')}
		>
			<div className='popup__wrapper'>
				<Container className={'popup__container ' + (variant ?? '')}>
					<div
						className={"popup__content " + (className ?? '')}
						onClick={(e) => e.stopPropagation()}
					>
						{children}
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Modal;
