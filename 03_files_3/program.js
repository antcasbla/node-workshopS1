'use strict';

const fs = require('fs');

// console.log(process.argv)

const path = process.argv[2];

if (path === undefined){
	console.log('introduce el path');
	return;
}

fs.readdir(path, function(err, list){
	console.log(list);
});
