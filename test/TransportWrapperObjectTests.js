var chai = require('chai');
 
chai.config.includeStack = true;
 
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

var wrapObjects = require('../invocation/TransportWrapper');

describe('testWrapperObjects', function(){
  it('create a new object of type CipherDataObject', function(){
  	var cipherDataObject = new wrapObjects.CipherDataObject();
  	assert(cipherDataObject.keyId == null, "keyId should be null for an empty object");
  	assert(cipherDataObject.encodedData != "someString", "encodedData should be empty for an empty object");
  	assert(cipherDataObject.isPKCS7 == null, "isPKCS7 should be null for an empty object");
  });

  it('retrieve constant value correctly', function(){
  	var cipherDataObject = new wrapObjects.CipherDataObject();
  	cipherDataObject.setKeyId("crypt_util_key");
  	cipherDataObject.setEncodedData("some-encoded-data");
  	cipherDataObject.setSignedData("some-signed-data");
  	cipherDataObject.setIsPKCS7(true);
  	cipherDataObject.setIsVerified(true);
  	//var cipherDataObject2 = new wrapObjects.CipherDataObject();
  	//assert(cipherDataObject != cipherDataObject2, "Symmetric nature not expected");
  	console.log(JSON.stringify(cipherDataObject));
  });
})