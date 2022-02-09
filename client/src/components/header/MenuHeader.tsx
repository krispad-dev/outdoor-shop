import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { UiStateContext } from '../../context/UiStateContext';

import useGetCart from '../../modules/cart/useGetCart';
import useAuth from '../../modules/auth/useAuth';
import useLogoutUser from '../../modules/auth/useLogoutUser';

import useOutsideClick from '../../helpers/hooks/useOutsideClick';

export default function MenuHeader() {
	const { state, dispatch } = useContext(UiStateContext);
	const { data: auth } = useAuth();
	const { data: cart } = useGetCart();
	const { mutate } = useLogoutUser();

	const ref = useRef<HTMLHeadingElement>(null)

	useOutsideClick(ref, () => {

		  dispatch({
			type: 'CLOSE_HEADER_MENU',
		  });
	  });


	return (
		<ButtonsWrapper ref={ref} disabled={auth?.loggedIn}>
			<div className='inner-wrapper'>
				<button
					onClick={() => dispatch({ type: 'TOGGLE_HEADER_MENU_IS_OPEN' })}
					className='menu-btn'
				>
					MENY
				</button>
				<button disabled={true} className='cart-btn'>
					CART (
					<p data-testid='cart-quantity'>{cart?.data?.length ? cart?.data?.length : 0}</p>
					) <RiShoppingCartLine />
					<Link to={'/cart'}></Link>
				</button>
			</div>

			{state.headerMenuIsOpen && (
				<div className='menu-items-container'>
					{!auth?.loggedIn && (
						<button className='menu-item-card'>
							LOGIN<Link to={'/login'}></Link>{' '}
						</button>
					)}
					{auth?.loggedIn && (
						<button onClick={() => mutate()} className='menu-item-card'>
							LOGOUT{' '}
						</button>
					)}
				</div>
			)}
		</ButtonsWrapper>
	);
}

const ButtonsWrapper = styled.div<{ disabled: boolean }>`
	position: relative;

	div.menu-items-container {
		margin-top: 0.2rem;
		position: absolute;
		width: 9.4rem;
	}

	div.inner-wrapper {
		width: auto;
		border-radius: 3px;

		display: flex;
		justify-content: space-between;

		button.cart-btn {
			position: relative;
			opacity: ${props => (!props.disabled ? '20%' : '100%')};
			a {
				position: absolute;
				
			}
		}
	}

	button.menu-item-card {
		height: 2rem;
		background-color: ${props => props.theme.btnColor};
		opacity: 30%;
		width: 100%;
		
	}

	button {
		:hover {
			opacity: 80%;
			transition: ease-in-out 0.2s;
		}
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		width: auto;
		color: white;
		background-color: ${props => props.theme.btnColor};
		border: none;
		cursor: pointer;
		border-radius: 3px;
		border-left: 1px solid white;
		svg {
			margin: 0rem 0.5rem;
		}
	}
`;
