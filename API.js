const querystring = require("querystring");
const request = require("request");

class API {

	constructor(username, key){
		this.api_url = "https://api.1mb.site";

		this.username = username;
		this.key = key;

		this.verifyKey(function(result){
			if(result.error){
				console.log("Unable to verify key: " + result.error);
			}
		});
	}

	verifyKey(callback){
		let postData = {
			action: "keyverify",
			username: this.username,
			key: this.key
		};
		let options = {
			url: this.api_url,
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": Buffer.byteLength(querystring.stringify(postData))
			},
			form: postData
		};
		request(options, function(error, response, body){
			if(error){
				throw new Error(error);
			}else{
				callback(JSON.parse(body));
			}
		});
	}

	deploy(resource, code, callback){
		let postData = {
			action: "deploy",
			site: this.username,
			key: this.key,
			resource: resource,
			code: code
		};
		let options = {
			url: this.api_url,
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": Buffer.byteLength(querystring.stringify(postData))
			},
			form: postData
		};
		request(options, function(error, response, body){
			if(error){
				throw new Error(error);
			}else{
				callback(JSON.parse(body));
			}
		});
	}

	viewSite(site, resource, callback){
		let postData = {
			action: "view",
			site: site,
			resource: resource
		};
		let options = {
			url: this.api_url,
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": Buffer.byteLength(querystring.stringify(postData))
			},
			form: postData
		};
		request(options, function(error, response, body){
			if(error){
				throw new Error(error);
			}else{
				callback(JSON.parse(body));
			}
		});
	}
}

module.exports = API;