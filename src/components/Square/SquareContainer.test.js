import React from 'react';
import {ReactDOM} from 'react-dom';

import {SquareContainer} from './SquareContainer';


it('render some component', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SquareContainer />, div)

});