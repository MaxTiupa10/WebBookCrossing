import React from 'react';
import Select from 'react-select';

const SelectWithoutDropDown = ({options, ...props}) => {
	return (
		<Select
			isSearchable={false}
			components={{
				DropdownIndicator: () => null,
				IndicatorSeparator: () => null,
			}}
			{...props}
			options={options}
		/>
	);
};

export default SelectWithoutDropDown;
