import { useRef, useContext } from 'react';
import { UiStateContext } from '../../context/UiStateContext';
import SearchField from './SearchField';
import SearchList from './SearchList';
import styled from 'styled-components';

import useOutsideClick from '../../helpers/hooks/useOutsideClick';

export default function Search() {
	const ref = useRef<HTMLHeadingElement>(null);

	const { state, dispatch } = useContext(UiStateContext);

	useOutsideClick(ref, () => {
		dispatch({
			type: 'SET_SEARCH_STRING',
			payload: '',
		});
	});

	return (
		<StyledSearchContainer ref={ref}>
			<SearchField />
			<SearchList />
		</StyledSearchContainer>
	);
}

const StyledSearchContainer = styled.div`
	position: relative;
`;
