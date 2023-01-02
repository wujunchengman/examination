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
            text: '数据库系统原理',
            link: '/DataBase/NormalForm.md'
        },
        {
          text: '凤宝宝的考研',
          link: '/Fbaby/Political/xiao401'
        },
        {
          text: '面试准备',
          link: '/Interview/Dalong.md'
        }
    ],
    sidebar:[
      '/Fbaby/Political/xiao401',
      '/Fbaby/Political/xiao402',
      '/Fbaby/Political/xiao403',
      '/Fbaby/Political/xiao404',
      '/DataBase/NormalForm.md',
      '/DataBase/BasicKnowledge.md',
      '/DataBase/RelationalAlgebra.md',
      '/DataBase/QuestionAndAnswer.md',
      '/DataBase/MyGuess.md',
      '/DataBase/SimulationExercise.md',
      
    ]
  })
})