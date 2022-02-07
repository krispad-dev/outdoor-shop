import React, { createContext, useReducer, Dispatch } from 'react';
import { UiReducer, ActionType } from './UiReducer';

export interface UiState {
	headerMenuIsOpen: boolean;
}

interface ContextProps {
	state: UiState;
	dispatch: Dispatch<ActionType>;
}

const initialState: UiState = {
	headerMenuIsOpen: false,
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
