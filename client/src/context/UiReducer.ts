import { UiState } from './UiStateContext';

export type ActionType =
    | { type: 'TOGGLE_HEADER_MENU_IS_OPEN' }


export function UiReducer(state: UiState, action: ActionType) {
    switch (action.type) {
        case 'TOGGLE_HEADER_MENU_IS_OPEN':
            return {
                ...state,
                headerMenuIsOpen: !state.headerMenuIsOpen,
            };

        default:
            return state;
    }
}