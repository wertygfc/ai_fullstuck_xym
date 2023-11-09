# git 大厂代码提交原则

- 开发目录
    PWD 获取当前的目录地址 一切皆文件
    git init 初始化代码目录为代码仓库
    - 反馈成功初始化一个代码仓库
        git 仓库不能嵌套
        .git 文件夹 仓库的秘密，不要去动它
        默认 master/main 主分支
        HEAD 指针指向第一次提交
        暂存区和仓库两部分
- 本地代码仓库
- git 是一个(分布式)版本控制系统，开源
    仓库里放的是文件的多个版本
- 为什么把一个文件添加到仓库需要
    git add
    git commit  两步呢？
    严格的代码提交
    git add 添加一个文件/修改，所以单位是文件 html css js 三个文件一起构成 一次任务 login页面的开发
    git commit -m 'login页开发完成'
    这两步的关系：  1：n
    git add 把文件添加到暂存区
    git commit 确认添加到仓库

- git 是一个分布式的
    本地仓库
    远程仓库
    合作伙伴的仓库

- 严格
    代码提交之前一定要人间清醒
    当前的修改和上一次的修改改了哪些地方
    git diff 命令可以帮我们比较修改，在提交前用

- commit -m ''不能乱写，要写清楚完成了什么任务
    - leader 以后就看-m 后的东西了解我们的工作
- git status 随时使用这个命令了解当前我们仓库的状态
- git log 
    打印所有的提交
    包含一个唯一的id 叫hash
    HEAD 指针，指向目前的最后一次提交
    master 代表分支，等于main
- git log --oneline
    打印当前一行

- 可以通过git reset 快速来到任务一个版本
    version control 时间管理大师 秒懂了 小猪

- git reset --hard id 可以让我们拥有时光机
    git reflog 会记下所有的操作记录

    <!-- 本地代码仓库中有两个文件发生了改变使用两次add将我们的问价天际到暂存区，再用 commit 一次性奖暂存区的文件提交到master主分支上，HEAD指针指向当前的操作 -->

- Changes + Untracked 