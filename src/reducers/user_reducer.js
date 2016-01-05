import {
	GET_USER_INFO_PENDING,
	GET_USER_INFO_SUCCESS,
	GET_USER_INFO_ERROR
} from '../actions/actionTypes'


let initialState = {
	isLoading: false,
	id: null,
	username: null,
	age: null, 
	city: null
};

export default function userInfo(state = initialState, action){
	switch (action.type){
		case GET_USER_INFO_PENDING:
			return {
				...state,
				isLoading: true
			};
			break;
		case  GET_USER_INFO_SUCCESS:
			return {
				...state,
				isLoading: false,
				id: action.user.id,
				username: action.user.message,
				age: action.user.age,
				city: action.user.city
			}
			break;
		case  GET_USER_INFO_ERROR:
			return {
				...state,
				isLoading: false,
				error: error
			}

		default:
			break;
	}
	return state;
}
