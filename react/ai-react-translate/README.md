# react + AI 结合

- 百度翻译
    - nlp 任务 翻译
        选择语言  ->  transformers.js  huggingface 推出的transformers python 的平替


- 项目介绍
    - 代码优化
        - 函数封装
        - 配置const 声明大写
        - 面向对象封装
            - es6提供了类java等企业级大型项目的class static extends get set等语法糖（底层还是原型式）
            - transmformers pipeline 封装了 MyTranslationPipeline类
            - 使用了单例模式一次
                开销很大，只能实例化，在一次任务中，也只需要一次，之后可以复用，单例化杜绝了没必要的多次实例化

- transformers js库
    - 单例
        反复调用
    - 耗时
        - initiate
            装载下载文件
        - progress
            file percentage
            更新进度（模型运行在前端）
        - done
            移除 filter
        - update
            nlp translate 任务
        - complete