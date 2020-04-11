import React from 'react';
import { Board } from './Board';
import styled from 'styled-components';
import { calculateWinner } from 'utils/calculateWinner';
import { useDidMountEffect } from 'utils/useDidMountEffect';

import 'style/style.css'

const Game = styled.div`
    display: flex;
    flex-direction: row;
`;

const GameInfo = styled.div`
    margin-left: 20px;
`;

const NewGame = styled.button`
	margin-top: 25px;
`;

const App = React.memo(() => {
	const initialBoard = Array(9).fill(null);
	const [localHistory, setLocalHistory] = React.useState({initialBoard});
	const [xIsNext, setXIsNext] = React.useState(true);

	// useDidMountEffect(() => {
	// 	const history = localHistory;
	// 	const current = history[history.length - 1];
	// 	const winner = calculateWinner(current.squares);
	// 	console.log('%c', 'background: yellow; color: black;', localHistory);
	// },[localHistory])

	const handleNewGame = () => {
		console.log('New game start!!!');
		setXIsNext(true);
		setLocalHistory(initialBoard)
	};



	const status = () => {
		// const winner = calculateWinner(current.squares) || null;
		const winner =  null;
			if(winner) {
				return `Победил ${winner}`;
			} else {
				return `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
			}

	};

	const handleClick = (i) => {
		const history = localHistory;
		const current = localHistory[localHistory.length - 1];
		const squares = current.squares.slice();
		if(calculateWinner(squares) || squares[i]) {
			return undefined;
		}
		squares[i] = xIsNext ? 'X' : 'O';
		history.concat([{
			squares
		}])
		setLocalHistory({
			history
		})
	}

	return (
			<Game>
				<div className="game-board">
					<Board
						squares={localHistory[localHistory.length - 1]}
						onClick={(i) => handleClick(i)}
					/>
				</div>
				<NewGame onClick={handleNewGame}>Начать заново</NewGame>
				<GameInfo className="game-info">
					<div>{status()}</div>
					<ol>{/* TODO */}</ol>
				</GameInfo>
			</Game>
		);
	}
);

export {
	App
};


