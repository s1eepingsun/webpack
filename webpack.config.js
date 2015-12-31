var webpack = require("webpack");
var path = require('path');

const PATHS = {
    libs: path.join(__dirname, 'libs'),
    build: path.join(__dirname, 'build')
};
console.log('PATHS.libs', PATHS.libs);

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
/*var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});*/

//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: "./entry",
    output: {
        //path: 'build',
        sourceMapFilename: 'sourceMap.map',
        filename: "bundle.js" // Template based on keys in entry above
    },

    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            //{test: /\.js$/, loader: "webpack-strip?strip[]=debug,strip[]=console.log"},
            //{test: /\.js$/, loader: "strip-loader?strip[]=debug"},
            //{ test: /\.js$/, loader: WebpackStrip.loader('debug', 'console.log') },

            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015'},
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015']}},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
        ]/*,
        noParse: [PATHS.libs + '/jquery-1.11.3.min.js']*/
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
        /*new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jQuery",
            "windows.jQuery": "jquery"
        })*/
        /*DefinePlugin({
            'NODE_ENV': JSON.stringify('production')
        }),*/
        //commonsPlugin
    ],
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        alias: {
            'jquery': PATHS.libs + '/jquery-1.11.3'
        },
        extensions: ['', '.js', '.json', '.coffee']
    }
};

/*
var compiler = webpack(config);
compiler.run(function (err, stats) {
    console.log(stats.toJson()); // по завершению, выводим всю статистику
});*/
