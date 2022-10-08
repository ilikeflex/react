npm init
npm i webpack webpack-cli -D

/* Each webapck command start with npx */

//will generate all files combined in dist folder

npx webpack

//Help for watch command

npx webpack help --watch


//basic aommand to create webpack config file

npx webpack init //creates a big file with lots of default settings. Advised not to run the command


//get the version of webpack

npx webpack version


//modify package.json to add webpack command

npm run webpack

//Following needs to be added to package.json
 "scripts": {
    "webpack": "webpack --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

//install dev server

npm i webpack-dev-server -D

//Run dev server
npx webapack serve


//Loading Babel
npm i -D babel-loader @babel/core @babel/preset-env

//install type script and loader
npm i -D typescript ts-loader

//install webpack plugin to copy html

npm i -D html-webpack-plugin

//install css-loader and style-loader

// The css‑loader is the loader that actually processes CSS files and understands them and works with them. The style‑loader takes the CSS that's been processed by the css‑loader and actually injects it into our JavaScript bundle. The style‑loader, on the other hand, is what actually puts the CSS into our build

npm i -D css-loader style-loader