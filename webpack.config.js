module.exports = {

    //entry point
    entry:'./src/App.js',

    rules:[
        {
            test:/\.(png|jpg)$/,
            use:[{
                loader: "url-loader",
                options:{limit: 5000}
            }]
        }
    ],


    output:{
        path:'dist',
        filename:'bundle.js'
    },
    

} 
