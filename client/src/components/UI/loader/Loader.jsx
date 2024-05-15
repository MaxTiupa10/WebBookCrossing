import React from 'react'

import "./Loader.scss";
const Loader = ({className}) => {
	const classNames = [className, "loader"]
	return (
		<div className={classNames.join(" ")}></div>
	)
}

export default Loader