const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Webpack = require('webpack')

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin({ //默认清除的文件夹是dist文件夹
			verbose: true,
			dry: false
		}),
		new Webpack.optimize.MinChunkSizePlugin({ //限制最小chunk体积
			minChunkSize: 10000
		})
	],
})
