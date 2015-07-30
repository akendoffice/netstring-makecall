'use strict';

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