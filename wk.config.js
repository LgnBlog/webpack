const autoprefixer = require('autoprefixer')
const path  =  require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        //必须是一个绝对路径
        path:path.resolve(__dirname,"./build")
    },
    module:{
        rules:[
            // {},rule对象
            {
                test: /\.css$/,  //匹配资源 正则表达式  $以什么结尾
                // loader:'css-loader',
                use:[
                    // {loader:'css-loader'},
                    // {loader:'style-loader'},  
                    //webpack 从后往前加载 -所以'css-loader'先加载放到后面
                    "style-loader",
                    // 'css-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1
                        }
                    },
                    'postcss-loader',
                    // {
                    //     //加载loader
                    //     loader:'postcss-loader',
                    //     options:{
                    //         postcssOptions:{
                    //             //loader依赖的插件
                    //             plugins:[
                    //                 // require("autoprefixer"),
                    //                 require("postcss-preset-env")  //配置的时候可以直接写字符串"postcss-preset-env"，会自动补齐
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test: /\.less$/,  //匹配资源 正则表达式  $以什么结尾
                use:[
                    "style-loader",
                    // "css-loader",
                    {
                        loader:'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    // {
                    //     //加载loader
                    //     loader:'postcss-loader',
                    //     options:{
                    //         postcssOptions:{
                    //             //loader依赖的插件
                    //             plugins:[
                    //                 // require("autoprefixer"),
                    //                 require("postcss-preset-env")  //配置的时候可以直接写字符串"postcss-preset-env"，会自动补齐
                    //             ]
                    //         }
                    //     }
                    // },
                    'less-loader',
                ]
            }
        ]
    }
}