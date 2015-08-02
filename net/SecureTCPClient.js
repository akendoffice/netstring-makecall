var constant = require('./NetstringConstants');

//var net = require('net');
var factory = require('./TCPClientFactory');
var SOCKET_TIMEOUT = 25;
//Get the below from CONFIG
// var HOST = '127.0.0.1',
// 	PORT = 23456;

var res;

module.exports = {
	makeTCPCall: makeTCPCall
};

function makeTCPCall(request, response){
//Without using socket pooling
/*
var client = new net.Socket();

client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write(request);

});
//'data' event handler for the client socket
client.on('data', function(data) {
    res = data.toString('utf-8');
    // Close the client socket completely
    client.destroy(); 
});
//'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
    return response(res);
});
*/
var client = factory.pool.acquire();

// acquire is 'sync', you either get back a socket or you don't 
if (client) {
	client.setTimeout(SOCKET_TIMEOUT);
	client.setNoDelay(true);
	client.write(request);
	client.end();
	console.log("###### CHECK POINT 111  #######");
} 
else{
	console.log("No socket acquired");
}
console.log("###### CHECK POINT 222  #######");
client.on('error', onError);
client.on('timeout', onTimeOut);
client.on('data', onReceive);
console.log("###### CHECK POINT 333  #######");

function onError(){
	console.log("Error in TCP connection");
};

function onTimeOut(){
	console.log("TIMED_OUT");
	response(new Error("No data received within in time budget"));
};

function onEnd() {
	console.log("ON END EVENT");
};

function onReceive(data) {
		res = data.toString('utf-8');
		console.log(res);
		client.release();
		if(res == null) {
			response("Error : No Data Received on the Socket");
			console.log("********");
		} 
		else {
			//console.log(res);
			response(res);	
		}
		
}

};