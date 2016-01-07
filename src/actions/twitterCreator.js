import {
	GET_TWITTER_MESSAGES_PENDING,
	GET_TWITTER_MESSAGES_SUCCESS,
	GET_TWITTER_MESSAGES_ERROR,
	GET_TWITTER_MESSAGE_PENDING,
	GET_TWITTER_MESSAGE_SUCCESS,
	GET_TWITTER_MESSAGE_ERROR
} from './actionTypes';

import  * as dataService from '../services/api'

/** 
 Actions
*/
function getTweetsPending(){
	console.log("Sending tweets pending...");
	return {
		type: GET_TWITTER_MESSAGES_PENDING
	};
}

function getTweetsError(error){
	console.log("Sending tweets error...");
	return {
		type: GET_TWITTER_MESSAGES_ERROR,
		error
	};
}

function getTweetsSuccess(tweets){
	console.log("Sending tweets success...", tweets);
	return {
		type: GET_TWITTER_MESSAGES_SUCCESS,
		tweets
	};
}

function getTweetMessagePending(){
	return {
		type: GET_TWITTER_MESSAGE_PENDING
	};
}

function getTweetMessageError(error){
	return {
		type : GET_TWITTER_MESSAGE_ERROR,
		error
	};
}

function getTweetMessageSuccess(message){
	console.log("Success", message);
	return {
		type: GET_TWITTER_MESSAGE_SUCCESS,
		message
	}
}

/**
 Actions used from the view
*/
export function getTweets(){
	return (dispatch, getState) => {

		dispatch(getTweetsPending());
		dataService.getTweets()
			.then((tweets) => dispatch(getTweetsSuccess(tweets)))
			.catch((error) => dispatch(getTweetsError(error)))
	};
}
export function getTweet(id){
	return (dispatch, getState) => {
		dispatch(getTweetMessagePending());

		dataService.getTweet(id)
			.then((message) => dispatch(getTweetMessageSuccess(message)))
			.catch((error) => dispatch(getTweetMessageError(error)))
	};
}
