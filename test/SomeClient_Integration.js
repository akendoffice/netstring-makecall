// KMSClient.js

var wrapObjects = require('../invocation/TransportWrapper');
//var Netstring = require('netstring-stream');
var netstr = require('../net/NetstringObject');

describe('printOutFinalObjectInString', function(){
  it('type1', function(){
  	var cipherDataObject = new wrapObjects.CipherDataObject();
    cipherDataObject.setKeyId("encrypted_test_cryptutil_crypt_key");
    cipherDataObject.setEncodedData(["YWJjZHBxcnM=","YWJjZGdoYnk="]);
  	cipherDataObject.setIsPKCS7(false);

  	var tcpObj = new wrapObjects.TCPRequestObject();
    tcpObj.setOperation("encrypt");
    tcpObj.setVersion(1);
  	tcpObj.setAppName("keymakerapitest");
    tcpObj.setCorrelationId("abcd1234");
  	tcpObj.setSecret("JGzi?QX_TVQI7qJ6ck0bW_#pd4Dk_FLM");


    tcpObj.setParams(cipherDataObject);
  	console.log("Pure TCPRequestObject :");
    console.log(JSON.stringify(tcpObj));
    //Using netstring-stream
    //var bytes = System.Text.Encoding.UTF8.GetBytes(JSON.stringify(tcpObj));

    /** works ***/
    // console.log("Before NetString conversion");
    // var netStringData = Netstring.write(JSON.stringify(tcpObj), "utf8");
    // console.log(netStringData.toString('utf-8'));
    // console.log("After NetString conversion");
    /** works **/
    var netStrObj = new netstr.RFCNetStringObj();
    netStrObj.setData(JSON.stringify(tcpObj));
    var netStringData = netStrObj.convertToNetStringBuffer();
    console.log("Netstring in Str format: ");
    console.log(netStringData.toString('utf-8'));
    console.log("NetString in hex format: ");
    console.log(netStringData.toString('hex'));

  });
})
