// 用于项目打包的文件
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const path = require('path')
const chalk = require('chalk')

// 文件主入口
let input = path.resolve(__dirname, '..', 'src/main.js')
// 文件打包模块输出的格式
let formatesList = ['umd', 'es']

// 输入参数
const inputOptions = {
	input,
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**',
			babelrc: false,
			presets: [['env', {modules: false}]]
		})
	]
}

// 打包方法
async function build(inputOption, outputOption) {
	const bundle = await rollup.rollup(inputOption) //返回一个promise对象
	return bundle.write(outputOption) //输出写入磁盘
}

let promises = formatesList.map((format) => {
	let outputOptions = {
		file: path.resolve(__dirname, '..', 'dist/<%= name %>.${format.js'),
		// file: path.resolve(__dirname, '..', 'dist/index.js'),
		format
	}
	format === 'umd' && (outputOptions.name = '<%= version %>')
	// format === 'umd' && (outputOptions.name = 'hello')
	return build(inputOptions, outputOptions)
})

// 异步执行打包方法
Promise.all(promises)
.then(() => {
	console.log(chalk.green('good job, build done'))
})
.catch((e) => {
	console.log(chalk.red(e));
})
