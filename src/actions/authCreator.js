import {
	AUTH_PENDING,
	AUTH_SUCCESS,
	AUTH_ERROR
} from './actionTypes'

import {
	getUserInfo
} from './userCreator';

import  * as dataService from '../services/api'


function authenticatePending(){
	return {
		type: AUTH_PENDING
	}
}

function authenticateSuccess(username){
	return {
		type: AUTH_SUCCESS,
		username
	}
}

function authenticateError(error){
	return {
		type: AUTH_ERROR,
		error
	}
}


export function authenticate(username, password){
	return (dispatch, getState) => {
		dispatch(authenticatePending());

		dataService.login(username, password)
			.then(() => {
				dispatch(authenticateSuccess(username));

				getUserInfo(username);
			})
			.catch((error) => dispatch(authenticateError(error)))
	};
}