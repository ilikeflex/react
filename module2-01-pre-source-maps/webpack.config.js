const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

let production = process.env.NODE_ENV === "production";

let config = {
  /* Multiple Entry Points
  entry: {
    index: "./src/index", 
    home: "./src/home"
  }, */

  //Single Entry Point
  entry: ["./src/index", "./src/home"],

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, //delete existing files in dist folder
  },
  module: {
    rules: [
      // Typescript loader
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      //css loader
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader","css-loader"], // last to first. loader which is used first will be last in array
      }
       /* Babel Loader ( Not used any more )
       {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },*/
    ],
  },
  plugins: [ new HtmlWebpackPlugin({
    template: "./index.html"
  }) ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  mode: "development", //process.env.NODE_ENV === "production" ?  "production" : "development"
  devServer: {
    //liveReload: false  ( This will shut down live reloading )
    watchFiles: ["src/**/*","index.html"],
    static: "./dist",
  },
};

if (production) {
  config.mode = "production";
  config.devtool = "inline-source-map";
}

module.exports = config;
