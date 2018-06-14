module.exports = {
	name: "css",
	plugins: [
		{
			"name": "skeletor-plugin-postcss",
			"config": {
				"files": [
					{
						"src": "source/css/main.css",
						"dest": "dist/css/main.css"
					}
				],
				"plugins": [
					require('stylelint'),
					require('cssnano')
				]
			}
		}
	]
};