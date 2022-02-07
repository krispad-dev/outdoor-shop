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
		<StyledButton disabled={isDisabled} onClick={clickHandler}>
			{!isLoading && text}
			{!isLoading && icon}
			{isLoading && spinner}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: none;
	width: 15rem;
	height: 4rem;
	background-color: #111;
	color: #fff;
	border-radius: 0.4rem;
	font-size: 3rem;
	text-transform: uppercase;
	margin-right: 1rem;
	padding: 1rem;

	background-color: ${props => props.theme.black};
	color: ${props => props.theme.textColor};
	border: none;
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
