module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://120.79.67.30',
				// changeOrigin: true,
			}
		}
	}
}
