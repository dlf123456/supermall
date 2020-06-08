module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
  }
}
// module.exports = {
//   resolve: {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       '@': resolve('src')
//     }
//   }
// }