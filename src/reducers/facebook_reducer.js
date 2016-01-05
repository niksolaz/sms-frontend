import {
	GET_FACEBOOK_MESSAGES_PENDING,
	GET_FACEBOOK_MESSAGES_SUCCESS,
	GET_FACEBOOK_MESSAGES_ERROR
} from '../actions/actionTypes'

let initialState = {
	error: null,
	isLoading: false,
	messages: []
};

export default function facebookMessages(state = initialState, action){
	switch (action.type){
		case GET_FACEBOOK_MESSAGES_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case GET_FACEBOOK_MESSAGES_SUCCESS:
			return {
				...state,
				isLoading: false,
				messages: action.statuses
			}
			break;
		case GET_FACEBOOK_MESSAGES_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.error
			}

		default:
			break;
	}
	return state;
}
