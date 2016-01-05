import {
	GET_FACEBOOK_MESSAGES_PENDING,
 	GET_FACEBOOK_MESSAGES_SUCCESS,
 	GET_FACEBOOK_MESSAGES_ERROR,
 	GET_FACEBOOK_MESSAGE_PENDING,
 	GET_FACEBOOK_MESSAGE_SUCCESS,
 	GET_FACEBOOK_MESSAGE_ERROR,

}from './actionTypes';

import  * as dataService from '../services/api'


function getFacebookMessagesPending(){
	return {
		type: GET_FACEBOOK_MESSAGES_PENDING
	};
}

function getFacebookMessagesError(error){
	return {
		type: GET_FACEBOOK_MESSAGES_ERROR,
		error
	}
}

function getFacebookMessagesSuccess(statuses){
	return {
		type: GET_FACEBOOK_MESSAGES_SUCCESS,
		statuses
	}
}

function getFacebookMessagePending(){
	return {
		type: GET_FACEBOOK_MESSAGE_PENDING
	};
}

function getFacebookMessageError(error){
	return {
		type : GET_FACEBOOK_MESSAGE_ERROR,
		error
	};
}

function getFacebookMessageSuccess(message){
	console.log("Success", message);
	return {
		type: GET_FACEBOOK_MESSAGE_SUCCESS,
		message
	}
}

export function getFacebookStatuses(){
	return (dispatch, getState) => {

		dispatch(getFacebookMessagesPending());
		dataService.getFacebookStatuses()
			.then((statuses) => dispatch(getFacebookMessagesSuccess(statuses)))
			.catch((error) => dispatch(getFacebookMessagesError(error)))
	};
}


export function getFacebookStatus(id){
	return (dispatch, getState) => {
		dispatch(getFacebookMessagePending());

		dataService.getFacebookStatus(id)
			.then((status) => dispatch(getFacebookMessageSuccess(status)))
			.catch((error) => dispatch(getFacebookMessageError(error)))
	};
}