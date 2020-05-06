import React from 'react';


const Board = React.memo(({
	createBoard,
}) => {

	return (
		<>
			{createBoard()}
		</>
	);
});

export {
	Board
}