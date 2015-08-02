'use strict';
var netstringConstant = require('./NetstringConstants');
module.exports = {
	RFCNetStringObj: RFCNetStringObj
};

function RFCNetStringObj(){

	this.data;

	this.convertToNetStringBuffer = function () {
		var buffer,
			encoding = "utf8",
			bufferedData = new Buffer(this.data || '', encoding);

		buffer = Buffer.concat([new Buffer(this.data.length + ':', encoding), bufferedData, new Buffer(',', encoding)]);
		//console.log(buffer.toString('utf-8'));
		//console.log(buffer.toString('hex'));

		return buffer;
	};

	this.setData = function (data) {
		this.data = data;
	};

};

// function RFCNetStringReader(buff){
// 	var data;
// 	var nsLength = 0;
// 	const ZERO = 0;
// 	//Read till we get the netstring's length

// 	while(true){
// 		data = buff;
// 		if(data == null){
// 			console.log("DATA IS NULL");
// 		}
// 		// Read from the stream till we receive a CHARACTER_COLON so that
// 		// we can calculate the length of the netstring.
// 		// Based on the length we will read that many bytes from the socket stream.
// 		if(data != netstringConstant.CHARACTER_COLON) {
// 			if(data != ZERO) {
// 				nsLength = nsLength * 10 + (data - netstringConstant.CHARACTER_ZERO);
// 			}
// 		} else {
// 			break;
// 		}
// 	}

// 	var baos;
// 	var content = new Buffer(65536);
// 	var bytesRead = -1;

// 	while( (baos.length < nsLength) && (bytesRead = buff))

// 	var buffer; // need to check
// 	var netStrObj = new RFCNetStringObj();

// 	buffer = 
// };