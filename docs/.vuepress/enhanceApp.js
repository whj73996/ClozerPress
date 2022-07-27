// 使用异步函数也是可以的
// .vuepress\enhanceApp.js

import VueRouter from 'vue-router'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  let fatherSonArr = [{
    f: '/pages/views/test.html',
    s: ['/pages/views/BarBar.html', '/pages/views/FooFoo.html']
  }]
  let fatherArr = fatherSonArr.map(item => item.f)
  let fatherSonRoutes = []
  fatherSonArr.forEach(item => {
    let fatherRoute, sonRoute = []
    fatherRoute = router.options.routes.find(route => {
      return route.path === item['f']
    })
    sonRoute = router.options.routes.filter(route => {
      return item['s'].indexOf(route.path) > -1
    })
    fatherSonRoutes.push({fatherRoute,sonRoute})
  })

  let exceptFatherArr = router.options.routes.filter(route => {
    return fatherArr.indexOf(route.path) === -1
  })
  
  let fsArr = fatherSonRoutes.map(item => {
    item.fatherRoute.children = item.sonRoute
    return item.fatherRoute
  })

  let resultsRoutes = [...exceptFatherArr, ...fsArr]
  resultsRoutes.forEach(item => {
    item.path = item.path + 'ttt'
  })
  router.options.routes = resultsRoutes
  router = new VueRouter({
    ...router.options,
    routes: resultsRoutes
  })
  console.log(resultsRoutes, 'tttt');
  console.log(router, 'tttt');
  // ...做一些其他的应用级别的优化
}