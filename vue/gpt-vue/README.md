## 如何表达项目的亮点和难点？

- 如何安排和设计的
   - gpt AIGC的时代
      AIGC 生成式的人工智能   openai chatgpt 应用形式 chatbot
      文本生成 文本生成图片(stablediffusion) 文本生成视频(sora)
      AGI 通用人工智能 机器人

      智能驾驶
      终局思维 技术变革已来  LLM加速了学习速度和能力，什么都能做，团队里想通过未来3年的团里，成为一名优秀的开发工程师，配团队一起拥抱AI

      - 技术栈
         项目介绍，可以提前打好草稿，多练几次   1000字
         - vue/vue-router/pinia   全家桶
            陈述的过程，表达技术栈是必需（没有亮点就是亮点）
         - TypeScript
         - 学习一下，dependiences 有点深度的依赖包
            - markdown-it 用来解析 markdown 成 html
            - cypto-js 用来加密 保证安全性
            - tailwindcss 
               - 原子化的css 让开发省力高效，可以少写些css
               - css 工程化 开发依赖 配置 生成css文件
               - 适配 rem
               - 自定过tailwind 组件类 @apply一下 解决复用
               typography 字体
            - highlight.js 高亮代码


### 亮点
   - 路由懒加载
      - 优化了首页加载速度  () => import()
      - Suspense 优化一步加载组件体验，比如显示loading...
         - slot
            默认 具名...
      - 路由守卫
         transition 页面加载
      - 骨架屏

   - 代码的封装写的挺好
      - 干净漂亮的分离一些函数，一个函数只做一个功能（好代码）
      举例
         - getApiKey 开源项目可以获取免费的api-key
         - clearMessageContent
         - switchConfigStatus

- 难点
   - 使用了cryptoJS 加密用户openai的apiKey 更安全
      - 引入 crypto-js
      - 调用上面的相应的算法 .AES.encrypt(原字符串， 签名)
      - .AES.dencrypt()

- 功能点介绍
   - chatbot 模块
      - 与openai llm 进行生成式问答的互动 
      - 使用了crypto-js对用户的apiKey进行了加密
      - 根据功能点，函数封装的很细，便于复用和维护
         getApiKey saveApiKey getSecretKey clearMessageContent switchConfigStatus sendOrSave