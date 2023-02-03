// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ]
// })

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/todo_list/'
  : '/'
})
