# 怎么介绍项目？

- 全栈项目
    - vue 全家桶 重点做
    - node 后端api服务   koa/express  做登录 + post表
    - ElementPlus（后台组件管理系统）  比如：文章列表页 登录
    
- 介绍项目
    - 后端API服务
        - sql 设计
            - user 表
                CREATE TABLE `user` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `name` varchar(255) NOT NULL,
                    `password` varchar(255) NOT NULL,
                    PRIMARY KEY (`id`),
                    UNIQUE KEY `name` (`name`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                user表字段尽量简单，最重要的，次要内容分表设计，有利于性能
            - avatar 表 (头像表)
                CREATE TABLE `avatar` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `mimetype` varchar(255) NOT NULL,
                    `filename` varchar(255) NOT NULL,
                    `size` int(11) NOT NULL,
                    `user_id` int(11) NOT NULL,
                    PRIMARY KEY (`id`),
                    KEY `user_id` (`user_id`),  // 添加一个普通索引，用于加速
                    CONSTRAINT `avatar_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) 
                )

                索引 meet 查询

        - sql 是后端项目的核心
        - 面试官心态 考查索引
            - 主键索引 auto_increment
            - 唯一索引
            - 普通索引
                索引是为了提升查询的速度
                项目里用到了哪些查询就加索引
                索引会分配相应的空间和数据结构 来加速查询 索引是数据库的主要性能瓶颈
            - 外键索引
                CREATE TABLE `comment` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `content` longtext NOT NULL,
                    `postId` int(11) NOT NULL,
                    `user_id` int(11) NOT NULL,
                    `parent_id` int(11) DEFAULT NULL,   // 评论的评论
                    PRIMARY KEY (`id`),
                    KEY `postId` (`postId`),
                    KEY `user_id` (`user_id`),
                    KEY `parent_id` (`parent_id`),
                )

                
