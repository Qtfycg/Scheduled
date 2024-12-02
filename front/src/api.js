import axios from 'axios';

// 创建axios实例
const api = axios.create({
    baseURL: 'http://127.0.0.1:8080', //替换成你的接口地址
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',// 设置传输类型
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'//请求头
    }
});

// 添加请求拦截器
api.interceptors.request.use(
    config => {
        // 发送请求前做一些处理
        return config;
    },
    error => {
        // 请求错误处理
        return Promise.reject(error);
    }
);

// 添加响应拦截器
api.interceptors.response.use(
    response => {
        // 响应数据处理
        return response;
    },
    error => {
        // 响应错误处理
        return Promise.reject(error);
    }
);

export default api;