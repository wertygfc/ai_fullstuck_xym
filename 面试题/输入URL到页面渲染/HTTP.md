# HTTP 超文本(比如html)传输协议 /0.9
- 基于TCP的连接
- 只有请求行  GET /index.html 
- 以ASCII字符流的编码方式进行传输


# HTTP /1.0
- 0.9的缺点
    只支持html一种类型的资源传输
js，css，图片，音频，视频各种类型资源
- 请求头
    accept: text/html
    accept-encoding: gzip || deflate || br
    accept-language: zh-CN
- 响应头
    content-type: text/html
    content-encoding: br 

为了传输不同的类型资源而诞生的


# HTTP /1.1
- TCP的长连接也叫持久连接（默认开启）（TCP的持久连接最多存在6个），减轻了服务器的负担

- 队头阻塞
    1. 前一个http请求没有得到响应，后一个http请求就会阻塞，无法发出

- HOST

- 响应头：
    1.0   Content-Length:1024

    后端动态内容生成，无法确定数据大小

    1.1   分片机制（Chunk transfer 机制）：将资源文件处理成若干个数据块，最后发送一个标记为0的数据块来告诉客户端资源传输完成
