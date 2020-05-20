import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
// import {cleanup, fireEvent, render} from '@testing-library/react';

import {SquareContainer} from './SquareContainer';
import { act } from 'react-dom/test-utils';

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

// afterEach(cleanup);


it('render some component', () => {
	act(() => {
		render(<SquareContainer />, container)
	})
	expect(container.textContent).toBe('')
	

});