import React from 'react';

import styled from 'styled-components';
export default function BtnSpinner() {
	return <SpinnerContainer></SpinnerContainer>;
}

const SpinnerContainer = styled.div`
	background-color: #fff;

	height: 2rem;
	width: 2rem;
	border-radius: 100%;
	border: 5px solid white;
	border-top: 5px solid ${props => props.theme.accentColor};
	background-color: transparent;
	position: absolute;

	animation: spin 1s ease-in-out infinite;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;
