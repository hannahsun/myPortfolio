module.exports = {

    //entry point
    entry:'./src/App.js',
    
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "css-loader"
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    "file-loader"
                ]
            }
        ],
    }


    // output:{
    //     path:'dist',
    //     filename:'bundle.js'
    // },
    

} 
