import React, {memo} from 'react';
import styled from 'styled-components';

const Cell = styled.button`
 	background: #fff;
	border: 1px solid #999;
	float: left;
	font-size: 24px;
	font-weight: bold;
	line-height: 34px;
	height: 34px;
	margin-right: -1px;
	margin-top: -1px;
	padding: 0;
	text-align: center;
	width: 34px;
	:focus {
		outline: none
	}
`;

const Square = memo(({ value, onClick, ...props }) => {
	return (
		<Cell
			{...props}
			className='square'
			onClick={onClick}
		>
			{value}
		</Cell>
	);
}
);

export {
	Square
}
