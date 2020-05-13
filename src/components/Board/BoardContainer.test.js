import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import {BoardContainer} from './BoardContainer';
import { SquareContainer } from '../Square/SquareContainer';
import styled from 'styled-components';

const BoardRow = styled.div`
	:after {
		clear: both;
		content: '';
		display: table;
	}
`;

let container = null;
beforeEach(() => {
	// подготавливаем DOM-элемент, куда будем рендерить
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	// подчищаем после завершения
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('render some component', () => {
	act(() => {
		render(<><BoardRow>
			<SquareContainer />
			<SquareContainer />
			<SquareContainer />
		</BoardRow>
			<BoardRow>
				<SquareContainer />
				<SquareContainer />
				<SquareContainer />
			</BoardRow>
		<BoardRow>
			<SquareContainer />
			<SquareContainer />
			<SquareContainer />
		</BoardRow>
		</>, container);
	});

	const square = document.querySelectorAll('.square');
	const length = square.length;
	console.log('square', length);
	expect(length).toEqual(9)

});