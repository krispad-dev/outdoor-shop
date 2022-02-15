import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { UiReducer, ActionType } from './UiReducer';
import { User } from '../models/User';
import { Product } from '../models/Product';
import { useLocation } from 'react-router-dom';

export interface UiState {
	headerMenuIsOpen: boolean;
	userAuthState: { success: boolean; data: User | {} };
	searchString: string;
	adminMode?: string;
	productToUpdate?: Product | null;
	snackIsActive?: boolean;
	snackMessage?: string;
}

interface ContextProps {
	state: UiState;
	dispatch: Dispatch<ActionType>;
}

const initialState: UiState = {
	headerMenuIsOpen: false,
	userAuthState: { success: false, data: {} },
	searchString: '',
	adminMode: 'new',
	productToUpdate: null,
	snackMessage: '',
	snackIsActive: false,
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
