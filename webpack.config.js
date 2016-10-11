var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require("webpack-livereload-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var config = require("./config.json");

module.exports = [{
  cache: true,
  devtool: "source-map",
  entry: {
    [config.projectNameUMD]: config.indexFilePath
  },
  babelrc: false,
  output: {
    path: config.distFolderPath,
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  eslint: {
    failOnWarning: false,
    failOnError: false,
    emitError: true,
    configFile: config.esLintRCFilePath,
    formatter: require("eslint/lib/formatters/stylish")
  },
  plugins: [
    new CleanWebpackPlugin([config.distFolderPath], {
      verbose: true,
      dry: false
    }),
    new ExtractTextPlugin(config.projectNameUMD + ".css", {
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: "src/index.html"
      }]),
    new LiveReloadPlugin({
      port: config.liveReloadPort
    })
  ],
  externals: {
    "simple-react-table": {
      commonjs: "simple-react-table",
      commonjs2: "simple-react-table",
      amd: "SimpleReactTable",
      root: "SimpleReactTable"
    },
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "material-ui": {
      commonjs: "material-ui",
      commonjs2: "material-ui",
      amd: "material-ui",
      root: "material-ui"
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }, {
        test: /\.css$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract("style",
          "css?modules&importLoaders=1&localIdentName=RC_[name]__[local]")
      }, {
        test: /\.css$/,
        include: [/node_modules/],
        loaders: ["style", "css"]
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/svg+xml"
      }, {
        test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/gif"
      }, {
        test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/png"
      }
    ]
  }
}, {
  cache: true,
  devtool: "source-map",
  entry: {
    demo: "./demo/demo.js"
  },
  babelrc: false,
  output: {
    path: config.distFolderPath,
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  eslint: {
    failOnWarning: false,
    failOnError: false,
    emitError: true,
    configFile: config.esLintRCFilePath,
    formatter: require("eslint/lib/formatters/stylish")
  },
  plugins: [],
  externals: {
    "simple-react-table": {
      commonjs: "simple-react-table",
      commonjs2: "simple-react-table",
      amd: "SimpleReactTable",
      root: "SimpleReactTable"
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }, {
        test: /\.css$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract("style",
          "css?modules&importLoaders=1&localIdentName=RC_[name]__[local]")
      }, {
        test: /\.css$/,
        include: [/node_modules/],
        loaders: ["style", "css"]
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/svg+xml"
      }, {
        test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/gif"
      }, {
        test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/png"
      }
    ]
  }
}];
