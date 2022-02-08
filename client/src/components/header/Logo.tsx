import React from 'react';
import styled from 'styled-components';
import { GiCampingTent } from 'react-icons/gi';
import { Link } from 'react-router-dom';


export default function Logo() {
	return (
		<StyledLogoContainer>
			<Link to={'/'}></Link>
			<h1>.outdoor</h1>
			<GiCampingTent />
		</StyledLogoContainer>
	);
}

const StyledLogoContainer = styled.div`
display: flex;
align-items: flex-end;
	position: relative;
	font-size: 2rem;
	cursor: pointer;
	a {
		z-index: 200;
	}

	svg {
		font-size: 4rem;
		color: ${props => props.theme.accentColor};
	}


`;
