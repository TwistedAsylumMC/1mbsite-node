# 1mbsite NodeJS ![Version](https://img.shields.io/github/package-json/v/TwistedAsylumMC/1mbsite-node.svg?style=for-the-badge) ![Weekly Downloads](https://img.shields.io/npm/dw/1mbsite-node.svg?style=for-the-badge) ![Licence](https://img.shields.io/npm/l/1mbsite-node.svg?style=for-the-badge)
1mbsite NodeJS is an NPM package built to communicate with the [1mbsite API](https://gist.github.com/DaltonWebDev/739ddb6bb17004f72bca8f74fc874bfd).
> Note: No functions in this package are synchronous, they all have callback parameters which are run when the request package returns data

## Getting Started
Before you begin, you must install the NPM package by executing the following command:
```
npm install 1mbsite-node --save
```
When using this API you will need to provide your 1mbsite account key, you can obtain your account key by [logging in here](https://account.1mb.site) and clicking the ``API`` category in the settings. There you should see your account key.

Once you have this done, you can require 1mbsite-node by doing the following:
```javascript
const mbsite = require("1mbsite-node");
```
After requiring the ``1mbsite-node`` library you need to create a new ``API`` instance by doing the following:
```javascript
const API = mbsite.API;
```
Now you are ready to use the API.

## Examples
### Verifying your API key
> Note: This process is not required as this method is called in the constructor of the API class.
```javascript
API.verifyKey(function(result){
// Code here will be executed when the request has returned data
});
```
The verifyKey() method requires a callback parameter. A JSON object is passed through the callback and has an "error" key and a "data key". The data key here is unused but the error key will be true on success, or an error string on failure.
### Deploying to your 1mb.site
```javascript
API.deploy("resource", "code", function(result){
// Code here will be executed when the request has returned data
});
```
The deploy() method requires a string parameter for the resource you want to deploy to, another string parameter for the code you want to deploy and a callback parameter. The callback parameter passes through a JSON object which has the keys "error" and "data". Once again, the data key is unused but the error key either returns true on success, or an error string on failure.
### Viewing a 1mb.site resource
```javascript
API.viewSite("site name", "resource", function(result){
// Code here will be executed when the request has returned data
});
```
The viewSite() method requires a string parameter for the site name (a username), another string parameter for the resource you want to view and a callback parameter. The callback parameter passes through a JSON object with the keys "error" and "data". If there are no errors, the error key will be false and the data key will be a string of the code of the provided resource. If there is an error, the error will be a string error and the data key will be false.
### Listing a sites resources
```javascript
API.listResources("site name", function(result){
// Code here will be executed when the request has returned data
});
```
The listResources() method requires a string parameter for the site name (a username) and a callback parameter. The callback parameter passes through a JSON object with the keys "error" and "data". If there is an error, the error key will be an error string, but if there is no error, error will be false and the data key will be an array with all the resources on a site.

API made with :heart: by TwistedAsylumMC!