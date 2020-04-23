import React from 'react';
import styled from 'styled-components';
import { Square } from './Square';

const BoardRow = styled.div`
	:after {
		clear: both;
		content: '';
		display: table;
	}
`;

const Board = React.memo(({
	squares = [],
	onClick = () => {}
}) => {
	const renderSquare = (i) => {
		return <Square
			value={squares[i]}
			onClick={() => onClick(i)}
		/>;
	};

	return (
		<>
			<BoardRow className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</BoardRow>
			<BoardRow className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</BoardRow>
			<BoardRow className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</BoardRow>
		</>
	);
});

export {
	Board
}