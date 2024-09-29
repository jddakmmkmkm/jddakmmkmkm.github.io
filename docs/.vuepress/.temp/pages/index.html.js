import comp from "E:/desktop/wtfvpp/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"hero\":{\"name\":\"文田垃圾场！\",\"text\":\"记录遇到的大大小小的b事\"}},{\"type\":\"features\",\"features\":[{\"title\":\"什么都敢写\",\"icon\":\"✍\",\"details\":\"发挥想象，都能挂。\"},{\"title\":\"什么都不怕\",\"icon\":\"🤓\",\"details\":\"只要脱敏，欢迎投稿。\"},{\"title\":\"什么都能评\",\"icon\":\"🤣\",\"details\":\"不怕b事多，就怕不够写。\"}]},{\"type\":\"custom\"}],\"watermark\":true,\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.79,\"words\":236},\"filePathRelative\":\"README.md\",\"categoryList\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
