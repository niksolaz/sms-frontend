import {
	AUTH_PENDING,
	AUTH_SUCCESS,
	AUTH_ERROR
} from '../actions/actionTypes'


let initialState = {
	isAuthenticating: false,
	isLogged: false,
	username: null
};

export default function authInfo(state = initialState, action){
	switch (action.type){
		case AUTH_PENDING:
			return {
				...state,
				isAuthenticating: true
			};
			break;
		case AUTH_SUCCESS:
			return {
				...state,
				isAuthenticating: false,
				isLogged: true,
				username: action.username
			}
			break;
		case AUTH_ERROR:
			return {
				...state,
				isAuthenticating: false,
				error: action.error
			}

		default:
			break;
	}
	return state;
}
