import { useContext } from 'react';
import { UiStateContext } from '../../context/UiStateContext';

import styled from 'styled-components';

export default function SearchField() {
	const { state, dispatch } = useContext(UiStateContext);

	function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: 'SET_SEARCH_STRING', payload: e.target.value });
	}

	return (
		<StyledInput
			onChange={e => onChangeHandler(e)}
			value={state.searchString}
			placeholder='Sök på en produkt'
		/>
	);
}

const StyledInput = styled.input`
	width: 100%;
	padding-left: 0.4rem;
	height: 2.5rem;

	border: none;
	border-radius: 3px;
	background-color: ${props => props.theme.cardColorDark};
`;
