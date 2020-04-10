import React from 'react';
import { Board } from './Board';
import styled from 'styled-components';

import 'style/style.css'

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
				<GameInfo className="game-info">
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


