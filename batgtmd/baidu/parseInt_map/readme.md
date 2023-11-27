# 百度面试题


- NaN 
    - html5 提供了增强的表单类型    email/number/range/color...
    - 表单收集的是数据是字符串类型，age -> parseInt() 确保类型和值正确，如果无法解析为number，NaN来表达 not a number 类型依然是number

- [1, 2, 3].map(parseInt)
    foreach 


- 看 MDM文档 parseInt(str, radix?)
    map(item, index, array)

    parsInt(1, 0)    // 0进制是错误的进制会用10进制来替代  1
    parsInt(2, 1)    // 1进制  0 0 0 1进制解析不了2 NaN
    parsInt(3, 2)    // 2进制  2进制解析不了3 NaN
    

- npm init -y   初始化为一个后端项目 多了一个package.json
- npm i json-server 多一个node_modules目录
- db.json 把数据以json存在了一个文件中
- script dev: json_server -w db.json 会去监听这个文件，并且提供一个API服务
    http://localhost:3000/posts     api服务