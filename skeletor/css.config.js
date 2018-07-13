module.exports = {
	name: "css",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-postcss",
			"config": {
				"files": [
					{
						"src": "source/css/global.css",
						"dest": "patternlab/css/global.css"
					},
					{
						"src": "source/css/styleguide.css",
						"dest": "patternlab/css/styleguide.css"
					}
				],
				"plugins": [
					require('postcss-easy-import'),
			    	require('postcss-custom-properties'),
			    	require('postcss-custom-selectors'),
			    	require('postcss-custom-media'),
			   		require('postcss-color-function'),
			    	require('postcss-nested'),
			    	require('autoprefixer'),
					require('cssnano')
				]
			}
		}
	]
};