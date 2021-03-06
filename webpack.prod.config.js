const webpack = require('webpack');

module.exports = {
    cache: true,
    entry: './src/admin.js',
    output: {
      path: __dirname + '/docs/js',
      publicPath: '/',
      filename: 'admin.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] }
        ]
    },
    resolve:{
        modulesDirectories: ['node_modules']
    },
    externals: {
        lodash: '_',
        firebase: 'firebase',
        react: 'React',
        'react-dom': 'ReactDOM',
        mobx: 'mobx',
        'mobx-react': 'mobxReact'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};
