import { AppToken } from 'app/shared/domain/app-token';
import { tassign } from 'tassign';
import { TokenService } from 'app/shared/services/token/token.service';
import { UserActionConstant } from './user-action-constant';

export interface IUserAppState {
    token: AppToken;
}

export const USER_INITIAL_STATE: IUserAppState = {
    token: Object.assign({}) as AppToken
}


class UserActions {

    constructor(private state: IUserAppState, private action: any, private tokenService: TokenService) {}

    saveUser() {
        this.tokenService.save(this.action.token);

        return tassign(this.state, { token: this.tokenService.tokenAsObject() });
    }

    setUser() {
        return tassign(this.state, { token: this.tokenService.tokenAsObject() });
    }

    logout() {
        this.tokenService.clear();
        return tassign(this.state, { token: null});
    }

}

export function userReducer(state: IUserAppState  = USER_INITIAL_STATE, action): IUserAppState  {


    const obj = new UserActions(state, action, new TokenService());

    switch (action.type) {
        case UserActionConstant.SAVE_AUTH_USER: return obj.saveUser();
        case UserActionConstant.SET_AUTH_USER: return obj.setUser();
        case UserActionConstant.LOG_OUT: return obj.logout();
        default: return state;
    }

}

