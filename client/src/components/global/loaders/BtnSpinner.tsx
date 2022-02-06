import React from 'react';

import styled from 'styled-components';
export default function BtnSpinner() {
	return <SpinnerContainer></SpinnerContainer>;
}

const SpinnerContainer = styled.div`
	background-color: #fff;

	height: 1.5rem;
	width: 1.5rem;
	border-radius: 100%;
	border: 5px solid white;
	border-top: 5px solid ${props => props.theme.accentColor};
	background-color: transparent;
	position: absolute;

	animation: spin 1s ease-in-out infinite, puls 1s ease-in-out alternate-reverse infinite;


	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	@keyframes puls {
		from {
			opacity: 100%;
		}

		to {
			opacity: 50%;
		}
	}
`;
