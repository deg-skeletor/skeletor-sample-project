module.exports = {
	tasks: [
		{
			name: "build",
			subTasks: [
				require('./skeletor/css.config.js'),
				require('./skeletor/images.config.js'),
				require('./skeletor/patterns.config.js')
			]
		},
		{
			name: "serve",
			subTasks: [
				require('./skeletor/serve.config.js')
			]
		},
		{
			name: "watch",
			subTasks: [
				require('./skeletor/watch.config.js')
			]
		}
	]
}