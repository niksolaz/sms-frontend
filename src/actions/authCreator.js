import {
	AUTH_PENDING,
	AUTH_SUCCESS,
	AUTH_ERROR,
	AUTH_LOGOUT_SUCCESS,
	AUTH_LOGOUT_ERROR
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

function authenticationLogoutSuccess(){
	return{
		type: AUTH_LOGOUT_SUCCESS
	}
}
function authenticationLogoutError(){
	return{
		type: AUTH_LOGOUT_ERROR
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