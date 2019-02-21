// podemos usar a mesma configuração que é exigida pelo webpackm
// entretanto, lembre-se de remover a entrada original, uma vez
// que não precisamo durante os testes
var webpackConfig = require('./webpack.config.js')
delete webpackConfig.entry

// karma.conf.js
module.exports = function (config) {
    config.set({
      browsers: ['PhantomJS'],
      frameworks: ['jasmine'],
      // este é o arquivo de entrada para todos os nossos testes
      files: ['test/index.js'],
      // vamos passar o arquivo de entrada para webpack empacotar
      preprocessors: {
        'test/index.js': ['webpack']
      },
      // use a configuração do webpack
      webpack: webpackConfig,
      // evita pedaços de texto inúteis
      webpackMiddleware: {
        noInfo: true
      },
      singleRun: true
    })
  }