import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { UiReducer, ActionType } from './UiReducer';
import { User } from '../models/User';

export interface UiState {
	headerMenuIsOpen: boolean;
	userAuthState: { success: boolean, data: User | {} }
}

interface ContextProps {
	state: UiState;
	dispatch: Dispatch<ActionType>;
}

const initialState: UiState = {
	headerMenuIsOpen: false,
	userAuthState: { success: false, data: {} }
};

export const UiStateContext = createContext<ContextProps>({
	state: initialState,
	dispatch: () => null,
});



function UiStateProvider({ children }: React.PropsWithChildren<{}>) {
	const [state, dispatch] = useReducer(UiReducer, initialState);


	return (
		<UiStateContext.Provider value={{ state, dispatch }}>{children}</UiStateContext.Provider>
	);
}

export default UiStateProvider;
