// 判断token是否存在 ？ 允许跳转 ： 重定向去登录
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

// 高阶组件
function AuthorRoute({ children }){
    const isToken = getToken()
    if(isToken){
        return <>{children}</>
    }else{
    return <Navigate to='/login' replace></Navigate>
    }
}

export  {AuthorRoute}