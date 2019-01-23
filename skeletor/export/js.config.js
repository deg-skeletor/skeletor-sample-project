const commonConfig = require('../common/js.config.js');
const terser = require('rollup-plugin-terser').terser();

module.exports = {
	name: "js",
	plugins: [
		{
			"name": "@deg-skeletor/plugin-rollup",
			"config": [
                {
                    input: commonConfig.input,
                    output: commonConfig.output("../dist/js"),
                    plugins: [
                        ...commonConfig.plugins(),
                        terser
                    ],
                    experimentalCodeSplitting: true
                },
                {
                    input: commonConfig.input,
                    output: commonConfig.output("../dist/js", false),
                    plugins: [
                        ...commonConfig.plugins(false),
                        terser
                    ],
                    experimentalCodeSplitting: true
                }
            ]
        }
	]
};