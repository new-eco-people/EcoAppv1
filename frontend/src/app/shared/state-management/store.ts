import { combineReducers } from 'redux';
import { IUserAppState, USER_INITIAL_STATE, userReducer } from './user-state/user-store';

export interface IAppState{
    user: IUserAppState;
}

export const INITIAL_STATE: IAppState = {
    user: USER_INITIAL_STATE,
}

export const rootReducer = combineReducers({
    user: userReducer
});

