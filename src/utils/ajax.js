import axios from "axios";


// axios.create 创建一个axios的实例
const instance = axios.create({});

/**
 * 发起 get 请求
 * @param {*} url       请求地址
 * @param {*} config    请求的配置信息
 *  可以设置params  表示url中传递的参数
 */
export function get(url, config) {
    return instance.get(url, config);
}


export function post(url, data, config) {
    return instance.post(url, data, config);
}

export function put(url, data, config) {
    return instance.put(url, data, config);
}

export function del(url, config) {
    return instance.delete(url, config);
}