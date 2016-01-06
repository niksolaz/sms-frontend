import {
	AUTH_PENDING,
	AUTH_SUCCESS,
	AUTH_ERROR,
	AUTH_LOGOUT_ERROR,
	AUTH_LOGOUT_SUCCESS
} from '../actions/actionTypes'


let initialState = {
	isAuthenticating: false,
	isLogged: false,
	username: null,
	error: null
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
		case AUTH_LOGOUT_ERROR:
			return {
				...state,
				isAuthenticating: false,
				error: action.error
			}
			break;
		case AUTH_LOGOUT_SUCCESS:
			console.log(action);
			return {
				...state,
				isAuthenticating: false,
				isLogged: false
			}
		default:
			break;
	}
	return state;
}
