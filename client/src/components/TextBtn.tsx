import React from 'react';
import styled from 'styled-components';

export default function TextBtn({ text }: { text: string }) {
	return <StyledTextBtn>{text}/ </StyledTextBtn>;
}

const StyledTextBtn = styled.button`
	background-color: transparent;
	color: ${props => props.theme.textColorDark};
	opacity: ${props => props.theme.textHighEmph};
	text-transform: uppercase;
	font-size: 1.4rem;
	border: none;
	font-weight: 500;
  cursor: pointer;
  border-radius: 1px;
  padding: 0.5rem 0.2rem;
  margin-right: 0.5rem;
  :hover {
    opacity: 80%;
    transition: ease-in-out 0.2s;
    background-color: black;
    color: white;
  }
`;
