import axios from '../api/http'
import QS from 'qs'
import base from './base'

//
// 这是测试接口的方法
// get方法，对应get请求
// @desc登录请求
// @param {String} url [请求的url地址]
// @param {Object} params [请求时携带的参数]
//
export function TestLogin () {
  return axios({
    url: `${base.url}/login/`,
    method: 'get'
  })
}

// post方法，对应post请求
// @desc注册请求
// @param {String} url [请求的url地址]
// @param {Object} params [请求时携带的参数]
export function Login (data) {
  return axios({
    url: `${base.url}/login/`,
    method: 'post',
    data: QS.stringify(data)
  })
}

// 获取饲喂站id
export function getstation () {
  return axios({
    url: `${base.url}/station/`,
    method: 'get'
  })
}

// 获取猪只信息
export function querypig () {
  return axios({
    url: `${base.url}/pig/`,
    method: 'get'
  })
}

// 入栏母猪
export function additionpig (data) {
  return axios({
    url: `${base.url}/pig/`,
    method: 'post',
    data: QS.stringify(data)
  })
}
