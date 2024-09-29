export const themeData = {"locales":{"/":{"selectLanguageName":"简体中文","selectLanguageText":"选择语言","appearanceText":"外观","lightModeSwitchTitle":"切换为浅色主题","darkModeSwitchTitle":"切换为深色主题","outlineLabel":"此页内容","returnToTopLabel":"返回顶部","editLinkText":"编辑此页","contributorsText":"贡献者","prevPageLabel":"上一页","nextPageLabel":"下一页","lastUpdated":{"text":"最后更新于"},"notFound":{"code":"404","title":"页面未找到","quote":"但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。","linkText":"返回首页"},"encryptButtonText":"确认","encryptPlaceholder":"请输入密码","encryptGlobalText":"本站只允许密码访问","encryptPageText":"本页面只允许密码访问","footer":{"message":"<a target='_blank' href='https://beian.miit.gov.cn/'>鲁ICP备2023001164号-2</a></br>本站由 木韩网络 提供 CDN 加速与防御支持。","copyright":"© 2022-2024 <a href='https://mcsl.com.cn'>MCSL开发组</a> 保留所有权利。"},"logo":"https://images.mcsl.com.cn/laughing.png","navbar":[{"text":"主页","link":"/","icon":"heroicons:home"},{"text":"垃圾场目录","link":"/arts/","icon":"ic:round-list"},{"text":"投稿须知","link":"/eula","icon":"f7:doc-text-fill"},{"text":"进入仓库","link":"https://github.com/MCSLTeam/YourWholeFamilyIsInThe.Icu","icon":"mdi:github"}]}},"appearance":true,"blog":false,"navbarSocialInclude":["github","twitter","discord","facebook"],"aside":true,"outline":[2,3],"externalLinkIcon":true,"editLink":true,"contributors":true,"prevPage":true,"nextPage":true,"footer":{"message":"<a target='_blank' href='https://beian.miit.gov.cn/'>鲁ICP备2023001164号-2</a></br>本站由 木韩网络 提供 CDN 加速与防御支持。","copyright":"© 2022-2024 <a href='https://mcsl.com.cn'>MCSL开发组</a> 保留所有权利。"},"logo":"https://images.mcsl.com.cn/laughing.png"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
