import React from 'react';
import { connect } from 'react-redux';
import { TicTacToe } from './TicTacToe'
import { calculateWinner } from 'utils/calculateWinner';
import { actionChangeFirst } from 'store/actions'


const TTTContainer = React.memo(({
	first,
	changeFirst,
}) => {
	const initialBoard = Array(9).fill(null);
	const [localHistory, setLocalHistory] = React.useState([{ squares: initialBoard }]);

	const handleClick = (i) => {
		const history = localHistory;
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return undefined;
		}
		squares[i] = first ? 'X' : 'O';
		history.push({ squares });
		setLocalHistory(history);
		changeFirst(!first);
	};

	const handleNewGame = () => {
		console.log('New game start!!!');
		changeFirst(true);
		setLocalHistory([{ squares: initialBoard }])
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


	return <TicTacToe
		handleNewGame={handleNewGame}
		handleClick={handleClick}
		localHistory={localHistory}
		status={status}
		moves={moves}
	/>
})

const mapStateToProps = state => {
	return {
		first: state.first
	}
};

const mapDispatchToProps = {
	changeFirst: actionChangeFirst
}

const TicTacToeContainer = connect(mapStateToProps, mapDispatchToProps)(TTTContainer);

export {
	TicTacToeContainer
}
