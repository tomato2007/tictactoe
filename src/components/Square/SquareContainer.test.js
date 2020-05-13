import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import {SquareContainer} from './SquareContainer';

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
	const onClick = jest.fn();
	act(() => {
		render(<SquareContainer onClick={onClick}/>, container);
	});

	const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const square = document.querySelectorAll('.square');
	const length = square.length;
	console.log('square', length);
	expect(length).toEqual(1)
});