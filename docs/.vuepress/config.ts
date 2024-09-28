import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig(
  {
  lang: 'zh-CN',
  title: '考试准备中',
  description: '对考试内容的复习准备',
  bundler:viteBundler(),
  plugins:[
    markdownMathPlugin({
      type: 'mathjax'
    })
  ],
  theme: defaultTheme({
    repoLabel: "我的博客",
    repo: "https://cnblogs.com/wujuncheng",
    navbar: [
        {
            text: '高数',
            link: '/Math/differential'
        },
        {
          text: '面试准备',
          link: '/Interview/iot.md'
        }
    ],
    sidebar:
    {
      '/Interview':[
        '/Interview/Beisen.md',
        '/Interview/Fulimeng.md',
        '/Interview/iot.md',
        '/Interview/Dalong.md'
      ],
      '/Os':[
        '/Os/NormalForm.md',
        '/Os/QuestionAndAnswer.md',
        '/Os/computed.md',
        
      ]
    }
  })
})