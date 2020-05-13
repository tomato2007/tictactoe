import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SquareContainer } from '../Square/SquareContainer';
import styled from 'styled-components';


const BoardRow = styled.div`
	:after {
		clear: both;
		content: '';
		display: table;
	}
`;

export const BoardContainer = memo(({
	                                    onClick,
	                                    squares,
	                                    ...props
                                    }) => {

	const createBoard = () => {
		const initialBoard = Array(3).fill(null);
		const rows = [];
		let counter = 0;
		for (let i = 0; i < 3; i++) {
			const row = <BoardRow className="board-row">
				{initialBoard.map(() => {
					return renderSquare(counter++)
				})
				}
			</BoardRow>;
			rows.push(row)
		}
		return rows
	};

	const renderSquare = (i) => {
		return <SquareContainer
			className="square-container"
			key={i}
			value={squares[i]}
			onClick={() => onClick(i)}
		/>;
	};

	return <>
		<div>test</div>w
		{createBoard()}
		<div>test</div>
		</>
});

BoardContainer.defaultProps = {
	onClick: () => {
	},
	squares: []
};

BoardContainer.propTypes = {
	onClick: PropTypes.func.isRequired,
	squares: PropTypes.array.isRequired
}