import {
	GET_TWITTER_MESSAGES_PENDING,
	GET_TWITTER_MESSAGES_SUCCESS,
	GET_TWITTER_MESSAGES_ERROR
} from '../actions/actionTypes'

let initialState = {
	error: null,
	isLoading: false,
	messages: []
};

export default function twitterMessages(state = initialState, action){
	console.log("Reducer log", state, action);
	switch (action.type){
		case GET_TWITTER_MESSAGES_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case GET_TWITTER_MESSAGES_SUCCESS:

			return {
				...state,
				isLoading: false,
				messages: action.tweets
			}
			break;
		case GET_TWITTER_MESSAGES_ERROR:
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