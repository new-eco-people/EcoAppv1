import { combineReducers } from 'redux';
import { IUserAppState, USER_INITIAL_STATE, userReducer } from './user-state/user-store';
import { Location } from '@angular/common';

export const AppInjector = {
    location: {} as Location
}

export interface IAppState {
    user: IUserAppState;
}

export const INITIAL_STATE: IAppState = {
    user: USER_INITIAL_STATE,
}

export const rootReducer = combineReducers({
    user: userReducer
});

