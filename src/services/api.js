import _ from 'lodash';
import cookie from 'react-cookie';

const tweets = [
	{
		id:"1",
		messageText: 'Hello World',
		retweet: 1,
		likes: 2

	},
	{
		id:"2",
		messageText: 'This is a new message',
		retweet: 10,
		likes: 42
	},
	{
		id:"2",
		messageText: 'I am Margot , girlfriend of Lupin',
		retweet: 14,
		likes: 22
	},
];
const facebookStatuses = [
	{
		id:"3",
		messageText: 'Hello from Facebook',
		shares: 3,
		likes: 1
	},
	{
		id:"4",
		messageText: 'Bla bla bla',
		shares: 22,
		likes: 4
	},
	{
		id:"5",
		messageText: 'Hello, I am Dylan..Bob Dylan',
		shares: 12,
		likes: 34
	},
];

const users = [
	{
		id: "1",
		username: "nicola",
		password: "password",
		age: 39,
		city: "Asti"
	},
	{
		id: "2",
		username: "mario",
		password: "mario123",
		age: 24,
		city: "Torino"
	},
];

export function getTweets(){
	return new Promise((resolve, reject) => {
		setTimeout(resolve.bind(null, tweets), 2000);
	});
}

export function getFacebookStatuses(){
	return new Promise((resolve, reject) => {
		setTimeout(resolve.bind(null, facebookStatuses), 5000);
	});
}

export function getTweet(myId){
	return new Promise((resolve, reject) => {
		const message = _.find(tweets, {id: myId});

		if (message){
			resolve(message);
		}else{
			reject("Message not found");
		}

	});
}

export function getFacebookStatus(myId){
	return new Promise((resolve, reject) => {

		const message = _.find(facebookStatuses, {id:myId});
		if (message){
			resolve(message);
		}else{
			reject("Message not found");
		}

	});
}

export function logout(){
	return new Promise((resolve, reject) => {
		const cookieAuthentication = 'cookieMonster';
		cookie.remove(cookieAuthentication);
		resolve();
	});
}


export function login(username, password){
	return new Promise((resolve, reject) => {
		const user = _.find(users, {username: username, password: password});
		
		if(user){
			console.log("User Login: ",user.username,user.password);
			const cookieAuthentication = 'cookieMonster';
			cookie.save(cookieAuthentication, 'myBeautifulCookie');
			resolve();
		}else{
			reject("Username / password are invalid");
		}
	});
}

export function getUser(username){
	return new Promise((resolve, reject) => {
		const user = _.find(users, {username: username});
		console.log("Get User",user.username );
		if(user){
			resolve(user);
		}else{
			reject("User cannot be retrieved....");
		}
	});
}

