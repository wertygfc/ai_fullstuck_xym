import axios from "axios"

//配置
// 每个请求不用写完成的地址了，因为http://localhost:3000是一样的
// dev -> product douban.com 
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 10*1000    // 超时时间
axios.defaults.maxBodyLength = 5*1024*1024  // post 上传文件，照片大小不能超过5M
// 后端开发接口需要时间，所以自己先用localhost
// 负责封装项目需要的http对象
const http = {
    get(url, params){
        return new Promise((resolve, reject) => {
            axios
                .get(url, {params: params})
                .then(res => {
                    resolve(res.data)
                })
               .catch(err => {
                    reject(err.data)
                })
        })
    },
    post() {
        
    }
}

export default http