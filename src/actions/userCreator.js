import {
	GET_USER_INFO_PENDING,
	GET_USER_INFO_SUCCESS,
	GET_USER_INFO_ERROR
} from './actionTypes'


import  * as dataService from '../services/api'

function userInfoPending(){
	return {
		type: GET_USER_INFO_PENDING
	}
}

function userInfoSuccess(user){
	return {
		type: GET_USER_INFO_SUCCESS,
		user
	}
}

function userInfoError(error){
	return {
		type: GET_USER_INFO_ERROR,
		error
	}
}


export function getUserInfo(username){
	return (dispatch, getState) => {
		dispatch(userInfoPending());

		dataService.getUser(username)
			.then((user) => dispatch(userInfoSuccess(user)))
			.catch((error) => dispatch(userInfoError(error)))
	};
}