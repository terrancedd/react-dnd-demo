module.exports={
	entry:'./src/index.js',
	output:{
		filename:'bundle.js'
	},
    module:{
	  loaders:[
	  	{
		test:/\.js[x]?$/,
		exclude: /node_modules/,
		loader:'babel-loader?presets=[]=es2015&presets=[]=es2016&presets=[]=es2017&presets[]=react&plugins[]=transform-object-rest-spread&plugins[]=transform-es2015-modules-commonjs',
	  	},
	  	{ test: /\.json$/, 
	  	  exclude: /node_modules/,
	  	  loader: 'json-loader' 
	  	},
	  	{ test: /\.css$/, 
	  	  loader: 'style-loader!css-loader' }
	  ]
    }
};