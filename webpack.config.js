module.exports = {

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    
    //entry point
    entry:'./src/App.js',

    output:{
        path:'dist',
        filename:'bundle.js'
    }

}