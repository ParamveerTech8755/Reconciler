const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public')
		},
		port: 9000
	}
}