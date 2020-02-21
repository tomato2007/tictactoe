import React from 'react';
import styled from 'styled-components';

const CellWrap = styled.div`
	box-sizing: border-box;
	width: 150px;
	height: 150px;
`;

const Cell = styled.div`
	height: 50px;
	width: 50px;
	display: inline-block;
	box-sizing: border-box;
	margin: 0;
	background-color: aquamarine;
	float: left;
	//border: red 1px solid;
	border-collapse: separate;
	text-align: center;
	line-height: 50px;
`;


const Field = React.memo(() => {
	return <CellWrap>
		<Cell>1</Cell>
		<Cell>2</Cell>
		<Cell>3</Cell>
		<Cell>4</Cell>
		<Cell>5</Cell>
		<Cell>6</Cell>
		<Cell>7</Cell>
		<Cell>8</Cell>
		<Cell>9</Cell>
	</CellWrap>
})

export default Field;
