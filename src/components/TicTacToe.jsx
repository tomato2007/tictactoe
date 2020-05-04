import React from 'react';
import PropTypes from 'prop-types';
import { Board } from './Board';
import styled from 'styled-components';


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

const TicTacToe = React.memo(({
	handleNewGame,
	handleClick,
	localHistory,
	status,
	moves
}) => {
	console.log('render TTT',moves, typeof moves);
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

TicTacToe.propTypes = {
	handleNewGame: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	status: PropTypes.func.isRequired,
	localHistory: PropTypes.array.isRequired,
	moves: PropTypes.array.isRequired
};

export {
	TicTacToe
};


