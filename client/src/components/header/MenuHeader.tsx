import { useContext, useRef } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { UiStateContext } from '../../context/UiStateContext';

import styled from 'styled-components';
import useGetCart from '../../modules/cart/useGetCart';
import useAuth from '../../modules/auth/useAuth';
import useLogoutUser from '../../modules/auth/useLogoutUser';
import useOutsideClick from '../../helpers/hooks/useOutsideClick';

export default function MenuHeader() {
	const { state, dispatch } = useContext(UiStateContext);
	const { data: auth } = useAuth();
	const { data: cart } = useGetCart();
	const { mutate } = useLogoutUser();

	const ref = useRef<HTMLHeadingElement>(null);
	const isLoggedIn = auth?.loggedIn;
	const cartItemCount = cart?.data?.length ? cart?.data?.length : 0;
	const menuIsOpen = state.headerMenuIsOpen;


	const isAuthenticatedAdmin = auth?.loggedIn 
	&& auth?.user?.role
	 === 'admin'

	useOutsideClick(ref, () => {
		dispatch({
			type: 'CLOSE_HEADER_MENU',
		});
	});

	function toggleMenuHandler() {
		dispatch({ type: 'TOGGLE_HEADER_MENU_IS_OPEN' });
	}

	return (
		<ButtonsWrapper ref={ref} disabled={isLoggedIn}>
			<div className='inner-wrapper'>
				<button onClick={toggleMenuHandler} className='menu-btn'>
					MENY
				</button>

				<button disabled={true} className='cart-btn'>
					CART&nbsp;(<p data-testid='cart-quantity'>{cartItemCount}</p> )
					<RiShoppingCartLine />
					{isLoggedIn && <Link to={'/cart'}></Link>}
				</button>
			</div>

			{menuIsOpen && (
				<div className='menu-items-container'>
					{!isLoggedIn && (
						<button className='menu-item-card'>
							LOGIN<Link to={'/login'}></Link>
						</button>
					)}

					{isLoggedIn && (
						<button onClick={() => mutate()} className='menu-item-card'>
							LOGOUT{' '}
						</button>
					)}
					{isAuthenticatedAdmin && (
						<button className='menu-item-card'>
							ADMIN<Link to={'/admin'}></Link>
						</button>
					)}
				</div>
			)}
		</ButtonsWrapper>
	);
}

const ButtonsWrapper = styled.div<{ disabled: boolean }>`
	position: relative;
	z-index: 999;
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

		width: 100%;
	}

	button {
		margin: 0.1rem 0rem;
		position: relative;
		:hover {
			opacity: 80%;
			transition: ease-in-out 0.2s;
		}
		display: flex;
		justify-content: center;
		align-items: center;
		height: 2.5rem;
		width: auto;
		color: white;
		border: none;
		cursor: pointer;
		border-radius: 3px;
		border-left: 1px solid white;
		svg {
			margin: 0rem 0.5rem;
		}
	}
`;
