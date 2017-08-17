let greet = require('./hello');

let s = 'qipeijun'


greet(s)

// 判断是否是 nodejs 环境
if (typeof (window) == 'undefined') {
	console.log(`nodejs`)
	// node js 版本
	console.log(process.version)
} else {
	console.log('browser')
}


// 下一次事件响应时触发事件
process.nextTick(function () {
	console.log(`nextTick`)
})

// 程序 即将退出时的回调函数
process.on('exit', function (code) {
	console.log(`about to exit with code:${code}`);
	for (var i = 0; i <= 3; i++) {
		console.log(i)
	}
})
