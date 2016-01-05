import { combineReducers } from 'redux';
import facebookMessages from './facebook_reducer';
import twitterMessages from './twitter_reducer';
import currentMessage from './message_reducer';
import userInfo from './user_reducer';
import authInfo from './authentication_reducer';

const rootReducer = combineReducers({
	facebookMessages,
	twitterMessages,
	currentMessage,
	userInfo,
	authInfo,
});


export default rootReducer;