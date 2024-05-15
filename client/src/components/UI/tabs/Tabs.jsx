import React, { useState } from 'react';
import './Tabs.scss';
//proporties[0] = {title: "title", content: content}
function Tabs({ className, elements }) {
	const [curTab, setCurTab] = useState(0);
	const classNames = ['tabs', className];
	
	return (
		<div className={classNames.join(' ')}>
			<div className="tabs__title">
				{elements.map((elem, index) => (
					<a
						key={index}
						href="#"
						className={
							curTab == index ? 'tabs__link active' : 'tabs__link'
						}
						onClick={(e) => {
							e.preventDefault();
							setCurTab(index);
						}}
					>
						{elem.title}
					</a>
				))}
			</div>
			<div className="tabs__content">{elements[curTab].content}</div>
		</div>
	);
}

export default Tabs;
