// test/index.js
// requisita todos os arquivos de testes usando 0 recursos especial do webpack
// https://webpack.github.io/docs/context.html#require-context
var testsContext = require.context('.', true, /\.spec$/)
testsContext.keys().forEach(testsContext)