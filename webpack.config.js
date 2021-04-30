module.exports = {

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 2048,
                    publicPath: '',
                    publicStylePath: '../',
                    fallback: 'react-url-loader',
                    name: 'images/[name].[ext]?[hash]'
                    }
                }
        //   { test: /\.ts$/, use: 'ts-loader' },
            }
        ],
      },
    
    //entry point
    entry:'./src/App.js',

    output:{
        path:'dist',
        filename:'bundle.js'
    }

}