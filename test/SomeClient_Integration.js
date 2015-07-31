// KMSClient.js

var wrapObjects = require('../invocation/TransportWrapper');
var netstr = require('../net/NetstringObject');
var tcpCall = require('../net/TCPClientFactory');

describe('printOutFinalObjectInString', function(){
  it('type1', function(){
  	var cipherDataObject = new wrapObjects.CipherDataObject();
    cipherDataObject.setKeyId("some_key_name");
    cipherDataObject.setEncodedData(["YWJjZHBxcnM=","YWJjZGdoYnk="]);
  	cipherDataObject.setIsPKCS7(false);

  	var tcpObj = new wrapObjects.TCPRequestObject();
    tcpObj.setOperation("encrypt");
    tcpObj.setVersion(1);
  	tcpObj.setAppName("my_application_name");
    tcpObj.setCorrelationId("abcd1234");
  	tcpObj.setSecret("some_secret");


    tcpObj.setParams(cipherDataObject);
  	console.log("Pure TCPRequestObject :");
    console.log(JSON.stringify(tcpObj));

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
    //console.log("NetString in hex format: ");
    //console.log(netStringData.toString('hex'));

    //Make the TCP call using NetString Protocol
    tcpCall.makeTCPCall(netStringData, response);
    function response(res){
      console.log("In Client : \n" + res);
    }

  });
})
