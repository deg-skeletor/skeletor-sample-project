# Skeletor Sample Website Project

The purpose of this sample website project is to test plugins and configurations for the Skeletor family of build tools. This is just a starter project intended for you to clone and modify as needed. To learn more about Skeletor, [go here](https://github.com/deg-skeletor/skeletor-core).

## Getting Started
After you have cloned this repository, run `npm install` in a terminal to install `skeletor-core` and a few common Skeletor plugins. 
Now, you're ready to use Skeletor to build the assets of the sample website. This project ships with a basic Skeletor task configuration, so you should be able to run `npm run build` to execute the build task.

## Installing Published Plugins
To install a published Skeletor plugin to the sample project, run `npm install [plugin-package-name] --save` in a terminal. Then, add the plugin to the task configuration file(s).

## Installing Local Plugins
To install a Skeletor plugin that is currently under development on your local machine, you will need to make use of npm's ability to [symlink a local package folder](https://docs.npmjs.com/cli/link). 

First, run `npm link` in a terminal within the folder of the local plugin to create a symlink in the global `node_modues/` folder.

Next, run `npm link [plugin-package-name]` within this sample project's folder to create a symlink from the globally-installed plugin to the `node_modules/` of this sample project.

Your local plugin should now be installed to this sample project and can be added to the task configuration. 
> Note: the above two steps must be repeated to reflect any changes made to the local plugin's source code.
