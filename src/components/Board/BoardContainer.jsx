import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Board } from './Board';
import { SquareContainer as Square } from '../Square/SquareContainer';
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
		return <Square
			key={i}
			value={squares[i]}
			onClick={() => onClick(i)}
		/>;
	};

	return <Board
		{...props}
		createBoard={createBoard}
	/>
});

BoardContainer.defaultProps = {
	onClick: () => {},
	squares: []
};

BoardContainer.propTypes = {
	onClick: PropTypes.func.isRequired,
	squares: PropTypes.array.isRequired
}