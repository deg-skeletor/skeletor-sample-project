module.exports = {
	tasks: [
		{
			name: "build",
			subTasks: [
				require('./skeletor/css.config.js')
			]
		}

	]
}