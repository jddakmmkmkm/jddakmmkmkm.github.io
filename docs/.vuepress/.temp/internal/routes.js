export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/eula.html", { loader: () => import(/* webpackChunkName: "eula.html" */"E:/desktop/wtfvpp/docs/.vuepress/.temp/pages/eula.html.js"), meta: {"title":"投稿须知"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/desktop/wtfvpp/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/arts/flsq.html", { loader: () => import(/* webpackChunkName: "arts_flsq.html" */"E:/desktop/wtfvpp/docs/.vuepress/.temp/pages/arts/flsq.html.js"), meta: {"title":"风林水起"} }],
  ["/arts/", { loader: () => import(/* webpackChunkName: "arts_index.html" */"E:/desktop/wtfvpp/docs/.vuepress/.temp/pages/arts/index.html.js"), meta: {"title":"笑料目录"} }],
  ["/arts/wherewhere.html", { loader: () => import(/* webpackChunkName: "arts_wherewhere.html" */"E:/desktop/wtfvpp/docs/.vuepress/.temp/pages/arts/wherewhere.html.js"), meta: {"title":"wherewhere"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/desktop/wtfvpp/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
