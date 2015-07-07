/**
 * New node file
 */
// file system 모듈 추출
var fs = require('fs');

// 비동기로 파일 읽기
fs.readFile('test.txt', 'utf-8', function (err, data){
	if (err) throw err;
	console.log(data);
});

// 동기로 파일 읽기
var data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);