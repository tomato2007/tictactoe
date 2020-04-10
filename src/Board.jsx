import React from 'react';
import styled from 'styled-components';
import { Square } from './Square';
import { calculateWinner } from 'utils/calculateWinner'
import { useDidMountEffect } from 'utils/useDidMountEffect'

const BoardRow = styled.div`
	:after {
		clear: both;
		content: '';
		display: table;
	}
`;

const Status = styled.div`
	margin-bottom: 10px;
`;

const NewGame = styled.button`
	margin-top: 25px;
`;

const Board = React.memo(() => {
	const initialBoard = Array(9).fill(null)
	const [squares, setSquares] = React.useState(initialBoard);
	const [xIsNext, setXIsNext] = React.useState(true);

	useDidMountEffect(() => {
		// calculateWinner(squares)
	}, [squares]);


	const renderSquare = (i) => {
		return <Square
			value={squares[i]}
			onClick={() => handleClick(i)}
		/>;
	};

	const handleClick = (i) => {
		console.log('handleClick', i);
		const arr = squares.slice();
		if (calculateWinner(arr) || squares[i]) {
			return undefined;
		}
		arr[i] = xIsNext ? 'X' : 'O';
		console.log('handle click arr: ', arr);
		setXIsNext(!xIsNext);
		setSquares(arr)
	}

	const status = (squares) => {
		const winner = calculateWinner(squares)
			if(winner) {
				return `Победил ${winner}`;
			} else {
				return `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
			}

	}

	const handleNewGame = () => {
		setXIsNext(true);
		setSquares(initialBoard)
	}

	return (
		<>
			<Status className="status">{status(squares)}</Status>
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
			<NewGame onClick={handleNewGame}>Начать заново</NewGame>
		</>
	);
});

export {
	Board
}