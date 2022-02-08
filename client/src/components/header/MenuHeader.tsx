import React, { useContext } from 'react';
import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri'
import {Link} from 'react-router-dom'
import { UiStateContext } from '../../context/UiStateContext';

import useGetCart from '../../modules/cart/useGetCart'
import useAuth from '../../modules/auth/useAuth';

export default function MenuHeader() {

	const { state, dispatch } = useContext(UiStateContext);
  const { data: auth } = useAuth()
  const { data: cart } = useGetCart()
  

	return (
		<ButtonsWrapper disabled={auth?.loggedIn}>
			<div className='inner-wrapper'>
				<button onClick={() => dispatch({'type': 'TOGGLE_HEADER_MENU_IS_OPEN'})} className='menu-btn'>MENY</button>
				<button disabled={true} className='cart-btn'>CART (<p data-testid="cart-quantity" >{cart?.data?.length ? cart?.data?.length : 0 }</p>) <RiShoppingCartLine /></button>
			</div>

      {state.headerMenuIsOpen &&
      <div className="menu-items-container">
        <button className="menu-item-card">LOGIN<Link to={'/login'}></Link> </button> 
      </div>
      }
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
      opacity: ${props => !props.disabled ? '20%' : '100%'};
    }
	}

  button.menu-item-card{
    height: 2rem;
    background-color: black;
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
		background-color: black;
    border: none;
    cursor: pointer;
    border-left: 1px solid white;
    svg {
      margin: 0rem 0.5rem;
    }
	}
`;
