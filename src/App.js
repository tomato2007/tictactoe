import React from 'react';
import { Board } from './Board';
import styled from 'styled-components';

const Game = styled.div`
    display: flex;
    flex-direction: row;
`;

const GameInfo = styled.div`
    margin-left: 20px;
`;

const App = React.memo(() => {

		return (
			<Game>
				<div className="game-board">
					<Board />
				</div>
				<GameInfo>
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</GameInfo>
			</Game>
		);
	}
);

export {
	App
};


