import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
[
  ['link'{ rel'icon'type'image/png'href'https://images.mcsl.com.cn/laughing.png' }]
 ]
'zh-CN'
"文田垃圾场"
'记录遇到的大大小小笑料，享受美好生活 | MCSL 开发组强势驱动'
  themeplumeTheme({
    // more...
    blogfalse
    'https://images.mcsl.com.cn/laughing.png'
"https://lz.mcsl.com.cn"
    autoFrontmatterfalse
{"<a target='_blank' href='fun.amxosi.icu'>文田垃圾场</a></br>李玉州我冯了个福""copyright""© 2022-2024 <a href='https://fun.amxosi.icu'>文田垃圾场</a> 保留所有权利。" }
[
      {
        text
'/'
'heroicons:home'
      }
      {
'垃圾场目录'
'/arts/'
'ic:round-list'
      }
      {
'投稿须知'
'/eula'
'f7:doc-text-fill'
      }
      {
'进入仓库'
'https://github.com/MCSLTeam/YourWholeFamilyIsInThe.Icu'
'mdi:github'
      }
    ]
{
      // watermark: true,
{
        // enabled: false,  // boolean 类型控制是否全局启用
// function 类型 过滤哪些页面启用水印
0// 添加水印的延时。以毫秒为单位。

        /**
         * 是否全屏水印，默认为 `true`，
         * 设置为 `false` 时，水印仅在 内容区域中显示。
         */
true

{
'文田中学-wt.amxosi.icu版权所有'
          // ...
        }
      }
    }
  })
viteBundler()
})
