// KMSClient.js

var wrapObjects = require('../invocation/TransportWrapper');

describe('printOutFinalObjectInString', function(){
  it('type1', function(){
  	var cipherDataObject = new wrapObjects.CipherDataObject();
  	cipherDataObject.setEncodedData(["YWJjZGFiY2Q="]);
  	cipherDataObject.setKeyId("encrypted_test_cryptutil_crypt_key");
  	cipherDataObject.setIsPKCS7(false);

  	var tcpObj = new wrapObjects.TCPRequestObject();
  	tcpObj.setAppName("apitest");
  	tcpObj.setSecret("JGabcdefghi_TVQjklknopqurstuvk_Fuy");
  	tcpObj.setVersion(1);
  	tcpObj.setCorrelationId("1234567899");
  	tcpObj.setOperation("encrypt");
  	tcpObj.setParams(cipherDataObject);
  	console.log(JSON.stringify(tcpObj));
  });
})
