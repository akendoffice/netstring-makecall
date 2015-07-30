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
	this.app_name = "";
	this.correlation_id = "";
	this.secret = "";
	this.params;

	this.setOperation = function (operation) {
		this.operation = operation;
	};

	this.setVersion = function (version){
		this.version = version;
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

	this.setParams = function (params) {
		this.params = params;
	};

};

function TCPResponseObject(){
	this.response_code = -1;
	this.request_id = "";
	this.result;
	this.errorObject;

	this.setResponseCode = function (response_code){
		this.response_code = response_code;
	};

	this.setRequestId = function (request_id) {
		this.request_id = request_id;
	};

	this.setResult = function(result) {
		this.result = result;
	};

	this.setError = function(errorObject) {
		this.errorObject = errorObject;
	}
};

function ErrorObject(){
	this.error_code = -1;
	this.error_msg = "";

	this.setErrorCode = function(error_code) {
		this.error_code = error_code;
	};

	this.setErrorMsg = function(error_msg) {
		this.error_msg = error_msg;
	};
};