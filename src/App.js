import React from 'react';
import { Board } from './Board';
import styled from 'styled-components';
import { calculateWinner } from 'utils/calculateWinner';
// import { useDidMountEffect } from 'utils/useDidMountEffect';

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
// 	class App extends React.Component {
// 		constructor(props) {
// 			super(props);
// 			this.state = {
// 				history: [{
// 					squares: Array(9).fill(null)
// 				}],
// 				xIsNext: true
// 			};
// 		}
//
// 		handleClick(i) {
// 			const history = this.state.history;
// 			const current = history[history.length - 1];
// 			const squares = current.squares.slice();
// 			if (calculateWinner(squares) || squares[i]) {
// 				return;
// 			}
// 			squares[i] = this.state.xIsNext ? 'X' : 'O';
// 			this.setState({
// 				history: history.concat([{
// 					squares: squares
// 				}]),
// 				xIsNext: !this.state.xIsNext,
// 			});
// 		}
//
// 		render() {
// 			const history = this.state.history;
// 			const current = history[history.length - 1];
// 			const winner = calculateWinner(current.squares);
//
// 			const moves = history.map((step, move) => {
// 				const desc = move ?
// 					'Go to move #' + move :
// 					'Go to game start';
// 				return (
// 					<li>
// 						<button onClick={() => this.jumpTo(move)}>{desc}</button>
// 					</li>
// 				);
// 			});
//
// 			let status;
// 			if (winner) {
// 				status = 'Winner: ' + winner;
// 			} else {
// 				status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
// 			}
//
// 			return (
// 				<div className="game">
// 					<div className="game-board">
// 						<Board
// 							squares={current.squares}
// 							onClick={(i) => this.handleClick(i)}
// 						/>
// 					</div>
// 					<div className="game-info">
// 						<div>{status}</div>
// 						<ol>{moves}</ol>
// 					</div>
// 				</div>
// 			);
// 		}
// 	}

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

		// useDidMountEffect(() => {
		// 	const history = localHistory;
		// 	const current = history[history.length - 1];
		// 	const winner = calculateWinner(current.squares);
		// 	console.log('%c', 'background: yellow; color: black;', localHistory);
		// },[localHistory])

		const handleNewGame = () => {
			console.log('New game start!!!');
			setXIsNext(true);
			setLocalHistory([{squares: initialBoard}])
		};


		const status = () => {
			// const winner = calculateWinner(current.squares) || null;
			const winner = null;
			if (winner) {
				return `Победил ${winner}`;
			} else {
				return `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
			}

		};


		return (
			<Game>
				<div className="game-board">
					<Board
						squares={localHistory[localHistory.length - 1].squares}
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


