module.exports = {

    //entry point
    // entry:'./src/App.js',

    // output:{
    //     path:'dist',
    //     filename:'bundle.js'
    // }

    loaders:[
        {
            test:/\.(png|jpg)$/,
            loader: 'file-loader',
            include: path.join(__dirname, 'src')

    }
]

} 