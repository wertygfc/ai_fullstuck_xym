# 跨境电商
AI 开店
玩具店 -> 拼多多海外版
- 翻译？ NLP 不用google翻译， 谢程序就行
    pipeline('translate')
    AIGC 生成
- 卖什么货
- 卖多少钱
- 营销内容怎么更吸引人

- 如何让openai帮你开店？
    大模型（openai 接口调用） + Prompt Engineer    （编写prompt）

## Prompt 工程
会问问题的人比解决问题的更厉害
大模型超越了大部分人的能力

## openai 封装的过程
python 特别适合NLP 一个功能写法就一种
    风格独特 缩进
def get_response(prompt)：
    调用了openai库的Completions模块（其他模块）.create方法
    向 openai 发出网络请求
    completions = openai.Completions.create(
        engine = ,
        prompt = ,吴恩达prompt
        temperature = 0,
        max_tokens = 512
    )
    大部分语言是同步的，如Python，Java，但js是异步的
    print(completions)
