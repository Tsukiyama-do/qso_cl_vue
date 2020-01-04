const fs = require('fs')
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }

        return options
      })
  },
  devServer: {
    port: 8443,
    disableHostCheck: true,
    https: {
      key: fs.readFileSync('./private/https-jj1pow-com-003.key'),
      cert: fs.readFileSync('./private/https-jj1pow-com-003.crt')
    }
  }
}

