const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 基本参数
const proEnv = process.env.NODE_ENV

function resolve(dir) {
	return path.join(__dirname, './', dir)
}

module.exports = {
	entry: [
		"babel-polyfill",
		path.join(__dirname, './src/main.js')
	],
	output: {
		filename: '[name].js',
		path: resolve('dist'),
		publicPath:
			proEnv === 'production' ? `https://r.51gjj.com/webpublic/myvue/` : '' //生产环境公共路径为CDN基础目录，开发环境为根目录
	},
	plugins: [ //编译打包公用html模板
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
	],
	resolve: {
		extensions: ['.js', '.vue', '.json'], //用于在引入这几种类型的文件时不需要加文件后缀名，webpack会自动解析
		alias: { //文件或者路径引用的别名
			vue$: 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {}
			},
			{
				test: /\.css$/,
				use: [ //可应用多个选项
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')] //必须匹配对应选项
			},
			{
				test: /\.(png|svg|jpg|gif)(\?.*)?$/,
				loader: 'file-loader',
				options: {
					limit: 1024 * 500
				}
			}
		]
	}
}
