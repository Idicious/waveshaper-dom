var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src"),
  externals: {
    hammerjs : {
      root: "Hammer",
      commonjs2: "hammerjs",
      commonjs: "hammerjs",
      amd: "hammerjs",
      umd: "hammerjs"
    }
    // waveshaper : {
    //   root: "WS",
    //   commonjs2: "waveshaper",
    //   commonjs: "waveshaper",
    //   amd: "waveshaper",
    //   umd: "waveshaper"
    // }
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "waveshaper-dom.js",
    library: 'WS',
    libraryTarget: 'umd',
    libraryExport: 'default',
    publicPath: "/"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ]
  }
};
