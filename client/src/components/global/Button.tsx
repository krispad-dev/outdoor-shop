import React from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';

interface ButtonProps {
	text: string;
	isDisabled?: boolean;
	icon?: React.ReactChild;
	clickHandler?: () => void;
	spinner?: React.ReactChild;
	isLoading?: boolean;
}

export default function Button({
	text,
	icon,
	isDisabled,
	clickHandler,
	spinner,
	isLoading,
}: ButtonProps) {
	return (
		<StyledButton isDisabled={isDisabled} disabled={isDisabled} onClick={clickHandler}>
			{!isLoading && text}
			{!isLoading && icon}
			{isLoading && spinner}
		</StyledButton>
	);
}

const StyledButton = styled.button<{ isDisabled?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: none;
	height: 4rem;
	background-color: #111;
	color: #fff;
	border-radius: 0.1rem;
	text-transform: uppercase;
	padding: 1rem;
	opacity: ${props => props.isDisabled ? '30%' : '100%'};
	pointer-events: ${props => props.isDisabled && 'none'};;

	background-color: ${props => props.theme.black};
	color: ${props => props.theme.textColor};


	font-size: 1.5rem;
	font-weight: 300;
	width: 100%;

	:hover {
		transition: 0.2s;
		opacity: 80%;
	}

	cursor: pointer;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	position: static;
`;
