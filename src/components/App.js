import React from 'react';
import { Board } from './Board';
import styled from 'styled-components';
import { calculateWinner } from 'utils/calculateWinner';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
	actionChangeFirst,
	actionChangeSecond
} from 'store/actions'
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

const App = React.memo(({
	first,
	second,
	changeFirst
}) => {

		const initialBoard = Array(9).fill(null);
		const [localHistory, setLocalHistory] = React.useState([{squares: initialBoard}]);

		const handleClick = (i) => {
			const history = localHistory;
			const current = history[history.length - 1];
			const squares = current.squares.slice();
			if (calculateWinner(squares) || squares[i]) {
				return undefined;
			}
			squares[i] = first ? 'X' : 'O';
			history.push({squares});
			setLocalHistory(history);
			changeFirst(!first);
		};

		const handleNewGame = () => {
			console.log('New game start!!!');
			changeFirst(true);
			setLocalHistory([{squares: initialBoard}])
		};

		const status = () => {
			const winner = calculateWinner(localHistory[localHistory.length - 1].squares);
			if (winner) {
				return `Победил ${winner}`;
			} else {
				return `Следующий ход: ${first ? 'X' : 'O'}`;
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
	console.log('App', changeFirst);
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

const mapStateToProps = state => {
	return {
		first: state.first,
		second: state.second
	}
};

const mapDispatchToProps = dispatch => {
	return {
		changeFirst: bindActionCreators(actionChangeFirst, dispatch),
		changeSecond: bindActionCreators(actionChangeSecond, dispatch)
	}
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export {
	WrappedApp
};


