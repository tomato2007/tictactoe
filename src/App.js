import React from 'react';
import { Board } from './Board';
import styled from 'styled-components';
import { calculateWinner } from 'utils/calculateWinner';
// import { useDidMountEffect } from 'utils/useDidMountEffect';

import 'style/style.css'

const Game = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

const GameInfo = styled.div`
    margin-top: 20px;
`;

const NewGame = styled.button`
	margin-top: 25px;
`;

const App = React.memo(() => {

		const initialBoard = Array(9).fill(null);
		const [localHistory, setLocalHistory] = React.useState([{squares: initialBoard}]);
		const [xIsNext, setXIsNext] = React.useState(true);


		const handleClick = (i) => {
			const history = localHistory;
			const current = history[history.length - 1];
			const squares = current.squares.slice();
			if (calculateWinner(squares) || squares[i]) {
				return undefined;
			}
			squares[i] = xIsNext ? 'X' : 'O';
			history.push({squares});
			setLocalHistory(history);
			setXIsNext(!xIsNext);
		};

		const handleNewGame = () => {
			console.log('New game start!!!');
			setXIsNext(true);
			setLocalHistory([{squares: initialBoard}])
		};

		const status = () => {
			const winner = calculateWinner(localHistory[localHistory.length - 1].squares);
			if (winner) {
				return `Победил ${winner}`;
			} else {
				return `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
			}
		};

		const moves = localHistory.map((step, move) => {
			const desc = move ?
				`Go to move # ${move}` :
				'Go to game start';
			return (
				<li>
					<button
						onClick={() => console.log('move to ...')}
					>{desc}</button>
				</li>
			)
		});

		return (
			<Game>
				<div className="game-board">
					<Board
						squares={localHistory[localHistory.length - 1].squares}
						onClick={(i) => handleClick(i)}
					/>
				</div>
				<GameInfo className="game-info">
					<div>{status()}</div>
					<NewGame onClick={handleNewGame}>Начать заново</NewGame>
					<ol>{moves}</ol>
				</GameInfo>

			</Game>
		);
	}
);

export {
	App
};


