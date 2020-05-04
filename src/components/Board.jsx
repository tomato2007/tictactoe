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

	const createBoard = () => {
		const initialBoard = Array(3).fill(null);
		const rows = []
		for (let i = 0; i < 3; i++) {
			const row = <BoardRow className="board-row">
				{initialBoard.map((elem, ii) => {
					// console.log(elem, ii);
					return renderSquare(ii + i)
				})
				}
			</BoardRow>;
			rows.push(row)
		}
	}

	const renderSquare = (i) => {
		return <Square
			value={squares[i]}
			onClick={() => onClick(i)}
		/>;
	};

	return (
		<>
			{createBoard()}
			{/*<BoardRow className="board-row">*/}
			{/*	{renderSquare(0)}*/}
			{/*	{renderSquare(1)}*/}
			{/*	{renderSquare(2)}*/}
			{/*</BoardRow>*/}
			{/*<BoardRow className="board-row">*/}
			{/*	{renderSquare(3)}*/}
			{/*	{renderSquare(4)}*/}
			{/*	{renderSquare(5)}*/}
			{/*</BoardRow>*/}
			{/*<BoardRow className="board-row">*/}
			{/*	{renderSquare(6)}*/}
			{/*	{renderSquare(7)}*/}
			{/*	{renderSquare(8)}*/}
			{/*</BoardRow>*/}
		</>
	);
});

export {
	Board
}