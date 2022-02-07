import React, { useContext } from 'react';
import styled from 'styled-components';

import { UiStateContext } from '../../context/UiStateContext';


export default function MenuHeader() {
  
  const { state, dispatch } = useContext(UiStateContext)

  console.log(state);
  


  return <div><button onClick={() => dispatch({type:'TOGGLE_HEADER_MENU_IS_OPEN'}) } >TEST</button></div>;
}
