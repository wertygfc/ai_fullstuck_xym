# HuggingFace transformers

- 来到前端
    AIGC
    文生文：openai  Completions
    文生图: mid  stable diffusion
    文生音乐
    文生视频
    AIGC 交互 前端 transformers.js

- Q/A
    - 把一个资料交给大模型
    - Q/A AI程序
        Querstion
        Answer

- 开源素养
    - repo?
        项目
        提交代码 contributor
    - fork
        开源的，fork到自己的仓库，
        提交给原作者， commit 你的修改

- pandas 数据分析库
    - import pandas an pd
    - 最简单的数据结构 装载数据前选择合适的结构 pd.DataFrame.from_dict({
        key: value
    })       DataFrame构造函数
        new table数据的实例
    - from transformers import pipeline 
        const r = pipeline(task, model)  返回值是一个具体nlp功能的函数
        r(query="",table=context)
    - 伴随着模型的下载


- 文件系统  os
    后端思维，处理文件系统是核心  system
    - 读取目录下的文件
    os  文件系统，操作系统 网络， 数据库 内存
    import os
    os.listdir()

- AutoGen 直接接管这类代码的生成 70% 代码不用写
    - 
        管家 -> cooker
        AutoGen的AI思想
    - 提供两种 agent
        - UserProxyAgent
            以对话的方式，向其他agent发命令
            initiateChat(
                assistant,
                message =""
            )
            llm_config OpenAi 能力
            负责执行代码，结果是否已经完成用户的命令
        - AssistantAgent 助理Agent
            能够生成代码