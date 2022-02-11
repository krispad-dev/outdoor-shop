import { UiState } from './UiStateContext';
import { User } from '../models/User';

export type ActionType =
    | { type: 'TOGGLE_HEADER_MENU_IS_OPEN' }
    | { type: 'CLOSE_HEADER_MENU' }
    | { type: 'SET_SEARCH_STRING', payload: string }



export function UiReducer(state: UiState, action: ActionType) {
    switch (action.type) {
        case 'TOGGLE_HEADER_MENU_IS_OPEN':
            return {
                ...state,
                headerMenuIsOpen: !state.headerMenuIsOpen,
            };

        case 'CLOSE_HEADER_MENU':
            return {
                ...state,
                headerMenuIsOpen: false,
            };
        case 'SET_SEARCH_STRING':
            return {
                ...state,
                searchString: action.payload,
            };

        default:
            return state;
    }
}