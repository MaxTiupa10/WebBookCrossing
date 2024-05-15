import React, {useMemo} from 'react';
import './Colors.scss';
import { NavLink } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../utils/paths';
function Colors({ colors, id, className }) {
	const colorsObject = useMemo(() => {
		const classNames = ['color-list', className];
		if (colors == undefined) return '';
		return (
			<div className={classNames.join(' ')}>
				{colors.map((itemColor) => {
					const classNames = ['color-list__item'];
					if (itemColor.id == id) classNames.push('active');
					return (
						<NavLink
							to={PRODUCT_ROUTE + '/' + itemColor.productId}
							key={itemColor.productId}
							style={{ backgroundColor: itemColor.color }}
							className={classNames.join(' ')}
						></NavLink>
					);
				})}
			</div>
		);
	}, [colors]);

	return colorsObject;
}

export default Colors;
