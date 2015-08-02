var Pool = require('socket-pool');
//Make the below configurable
var HOST = '127.0.0.1';
	PORT = 23456;

var pool = new Pool(
		[{ host: HOST, port: PORT }], 
		{ min: 5, max: 20 }
	);

exports.pool = pool; 
// var do_stuff_with_socket = function(socket) {
//   socket.on('data', function(data) {
//     // do stuff with data 
//     socket.release();
//   });
 
//   socket.write('some data');
// }
 
// var socket = pool.acquire();
 
// // acquire is 'sync', you either get back a socket or you don't 
// if (socket) {
//   do_stuff_with_socket(socket);
 
// } else {
//   // if there's no available socket...  
 
//   // we can queue and let the pool 
//   // call it whenever a socket is available 
//   pool.queue(do_stuff_with_socket);
 
 
//   // Or we can create our own socket for now... 
//   socket = new Socket();
//   socket.connect(...)
//   .... do some stuff with the socket ...
 
//   // when we're done we can give it to the pool too 
//   pool.add(socket);
// }