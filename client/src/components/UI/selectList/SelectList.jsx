import React, { useRef, useEffect } from 'react';
import './SelectList.scss';

import { NavLink } from 'react-router-dom';

//before breakpoint it's a select list, and after its a common list
export default function SelectList({ items, title }) {
	const breakPoint = 767.98;
	const bodyRef = useRef(null);

	function showBody(e) {
		const listBody = bodyRef.current;
		const title = e.target.closest('.select-list__title');
		if (listBody.classList.contains("active")) {
			listBody.classList.remove("active");
			title.classList.remove('active');
		} else {
			listBody.classList.add("active");
			title.classList.add('active');
		}
	}
	return (
		<ul className="select-list">
			<div onClick={(e) => showBody(e)} className="select-list__title">
				{title}
			</div>
			<div ref={bodyRef} className="select-list__body">
				<div className="select-list__content">
					{items.map((item) => (
						<li key={item.title} className="select-list__element">
							<NavLink to={item.href} className="select-list__link">
								{item.title}
							</NavLink>
						</li>
					))}
				</div>
			</div>
		</ul>
	);
}
