import { UiState } from './UiStateContext';
import { Product } from '../models/Product';

export type ActionType =
    | { type: 'TOGGLE_HEADER_MENU_IS_OPEN' }
    | { type: 'CLOSE_HEADER_MENU' }
    | { type: 'SET_SEARCH_STRING', payload: string }
    | { type: 'SET_ADMIN_MODE', payload: string }
    | { type: 'SET_PRODUCT_TO_EDIT', payload: Product | null }
    | { type: 'SET_ACTIVATE_SNACK', payload: string }
    | { type: 'SET_DEACTIVATE_SNACK'}




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
        case 'SET_ADMIN_MODE':

            return {
                ...state,
                adminMode: action.payload === null ? 'new' : action.payload,
            };
        case 'SET_PRODUCT_TO_EDIT':

            return {
                ...state,
                productToUpdate: action.payload
            };

        case 'SET_ACTIVATE_SNACK':
            return {
                ...state,
                snackMessage: action.payload,
                snackIsActive: true,
            };

        case 'SET_DEACTIVATE_SNACK':
            return {
                ...state,
                snackMessage: state.snackMessage,
                snackIsActive: false,
            };

        default:
            return state;
    }
}