import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Square } from './Square';

export const SquareContainer = memo(({
	value,
	onClick,
	...props
}) => {
	return <Square
		{...props}
		value={value}
		onClick={onClick}
	/>
});

SquareContainer.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

SquareContainer.defaultProps = {
	value: '',
	onClick: () => {}
}