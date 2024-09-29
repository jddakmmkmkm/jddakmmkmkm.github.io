
import { useCopyCode } from 'E:/desktop/wtfvpp/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.104_typescript@5.6.2_vue@3.5.10_typescript@5.6.2__vue_54oltwzq352xj7lwecvjnyldsa/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'E:/desktop/wtfvpp/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.104_typescript@5.6.2_vue@3.5.10_typescript@5.6.2__vue_54oltwzq352xj7lwecvjnyldsa/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
