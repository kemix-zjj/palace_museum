//对于axios进行二次封装
import axios from 'axios';

const requests = axios.create({
    //配置对象
    //基础路径
    baseURL: "/mock",
    //代表请求超时的时间5s
    timeout: 5000,
});

//响应拦截器
requests.interceptors.response.use((res) => {
    return res.data;
}, () => {
    return Promise.reject(new Error('false'));
});

export default requests;