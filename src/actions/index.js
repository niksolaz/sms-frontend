import * as twitterActions from './twitterCreator';
import * as facebookActions from './facebookCreator';
import * as authActions from './authCreator';
import * as userActions from './userCreator';

function getMessage(social, id){
	switch(social.toLowerCase()){
		case "facebook":
			return facebookActions.getFacebookStatus(id);
			break;
		case "twitter":
			return twitterActions.getTweet(id);
			break;
		default:
			console.log("not defined yet");
	}
}

module.exports = {
	...twitterActions,
	...facebookActions,
	...authActions,
	...userActions,
	getMessage
}