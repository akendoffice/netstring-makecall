'use strict';

module.exports = {
        CipherDataObject: CipherDataObject,
        TCPRequestObject: TCPRequestObject
};

function CipherDataObject(){
	this.keyId = "";
	this.encodedData = "";
	this.signedData = "";
	this.isPKCS7 = false;
	this.isVerified = false;

	this.setKeyId = function(keyId){
		this.keyId = keyId;
	};

	this.setEncodedData = function(encodedData) {
		this.encodedData = encodedData;
	};

	this.setSignedData = function(signedData) {
		this.signedData = signedData;
	};

	this.setIsPKCS7 = function(isPKCS7){
		this.isPKCS7 = isPKCS7;
	};

	this.setIsVerified = function(isVerified){
		this.isVerified = isVerified;
	};
};

function TCPRequestObject(){

	this.operation = "";
	this.version = 0;
	this.request_id = "";
	this.app_name = "";
	this.correlation_id = "";
	this.secret = "";
	this.cipherDataObject;

	this.setOperation = function (operation) {
		this.operation = operation;
	};

	this.setVersion = function (version){
		this.version = version;
	};

	this.setRequestId = function (requestId) {
		this.request_id = requestId;
	};

	this.setAppName = function (app_name) {
		this.app_name = app_name;
	};

	this.setCorrelationId = function (correlation_id) {
		this.correlation_id = correlation_id;
	};

	this.setSecret = function(secret){
		this.secret = secret;
	};

	this.setCipherDataObject = function (params) {
		cipherDataObject = params;
	};

};