var path = require('path');

function extsToRegExp(exts) {
	return new RegExp("\\.(" + exts.map(function(ext) {
		return ext.replace(/\./g, "\\.");
	}).join("|") + ")(\\?.*)?$");
}

function loadersByExtension(obj) {
	var loaders = [];
	Object.keys(obj).forEach(function(key) {
		var exts = key.split("|");
		var value = obj[key];
		var entry = {
			extensions: exts,
			test: extsToRegExp(exts)
		};
		if(Array.isArray(value)) {
			entry.loaders = value;
		} else if(typeof value === "string") {
			entry.loader = value;
		} else {
			Object.keys(value).forEach(function(valueKey) {
				entry[valueKey] = value[valueKey];
			});
		}
		loaders.push(entry);
	});
	return loaders;
};


module.exports = function(options) {

	var loaders = {
		"jsx":{
			loader:"babel-loader?stage=0",
			exclude: [path.join(__dirname, "node_modules")],
			include: [
				path.join(__dirname, "public/src/js"),
			],
			presets: ['es2015', 'react'],
		},
		"js":{
			loader:"babel-loader?stage=0",
			exclude: [path.join(__dirname, "node_modules")],
			include: [
				path.join(__dirname, "public/src/js"),
			],
		},
	}

	let myLoaders = [
		{
			exclude: /(node_modules|bower_components)/,
			test: /\.js$/,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			loader: 'style!css'
		}
    ]

	return {
		entry: "./public/src/js/index.js",
		output: {
			path: path.resolve(__dirname, 'build'),
			publicPath: 'http://localhost:5995/_assets/src/build',
			filename: "index.js",
		},
		resolve: {
			extensions: ["", ".web.js", ".js", ".jsx", '.css', '.less'],
			root: path.join(__dirname, 'public/src/'),
			modulesDirectories: ["node_modules"],
		},
	 	module : {
	 		loaders: [].concat(loadersByExtension(loaders), myLoaders)
	    }
	}
}