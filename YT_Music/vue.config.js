module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target:'http://localhost:3000',
                ws:true,//代理websocked
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''//重写路径
                }
            }
        }
    }
}