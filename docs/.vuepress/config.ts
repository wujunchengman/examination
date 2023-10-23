import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '考试准备中',
  description: '对考试内容的复习准备',
  theme: defaultTheme({
    repoLabel: "我的博客",
    repo: "https://cnblogs.com/wujuncheng",
    navbar: [
        {
            text: '操作系统',
            link: '/Os/NormalForm.md'
        },
        {
          text: '面试准备',
          link: '/Interview/iot.md'
        }
    ],
    sidebar:
    {
      '/Interview':[
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