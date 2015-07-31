'use strict';

var net = require('net');
//Get the below from CONFIG
var HOST = '127.0.0.1',
	PORT = 23456;

var res;

module.exports = {
	makeTCPCall: makeTCPCall
};

function makeTCPCall(request, response){
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
}