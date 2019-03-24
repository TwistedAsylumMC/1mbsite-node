const querystring = require("querystring");
const request = require("request");

class API{

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
		this.performRequest({
			action: "keyverify",
			username: this.username,
			key: this.key
		}, callback);
	}

	deploy(resource, code, callback){
		this.performRequest({
			action: "deploy",
			site: this.username,
			key: this.key,
			resource: resource,
			code: code
		}, callback);
	}

	viewSite(site, resource, callback){
		this.performRequest({
			action: "view",
			site: site,
			resource: resource
		}, callback);
	}

	listResources(site, callback){
		this.performRequest({
			action: "resources",
			site: site
		}, callback);
	}

	performRequest(postData, callback){
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