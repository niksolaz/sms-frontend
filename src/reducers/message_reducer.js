import {
	GET_FACEBOOK_MESSAGE_PENDING,
	GET_FACEBOOK_MESSAGE_SUCCESS,
	GET_FACEBOOK_MESSAGE_ERROR,
	GET_TWITTER_MESSAGE_PENDING,
	GET_TWITTER_MESSAGE_SUCCESS,
	GET_TWITTER_MESSAGE_ERROR
} from '../actions/actionTypes'


let initialState = {
	id: null,
	isLoading: false,
	messageText: null,
	likes: null,
	shares: null,
};

export default function currentMessage(state = initialState, action){
	switch (action.type){
		case GET_FACEBOOK_MESSAGE_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case GET_TWITTER_MESSAGE_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case GET_FACEBOOK_MESSAGE_SUCCESS:
			return {
				...state,
				isLoading: false,
				messageText: action.message.messageText,
				likes: action.message.likes,
				shares: action.message.shared,
				id: action.message.id
			}
			break;
		case GET_TWITTER_MESSAGE_SUCCESS:
			return {
				...state,
				isLoading: false,
				messageText: action.message.messageText,
				likes: action.message.likes,
				shares: action.message.shared,
				id: action.message.id
			}
			break;
		case GET_FACEBOOK_MESSAGE_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.error
			};
			break;
		case GET_TWITTER_MESSAGE_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.error
			};
			break;
		default:
			break;
	}
	return state;
}
