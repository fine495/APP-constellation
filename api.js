import axios from 'axios';
// import qs from 'qs';
let axiosIns = axios.create({});

if (process.env.NODE_ENV == 'development'){
  axiosIns.defaults.baseURL = 'http://web.juhe.cn:8080/constellation/getAll?consName=%E7%8B%AE%E5%AD%90%E5%BA%A7&type=today&key=ca5fa201dd0d91b4da33e03a55bdb404'; //本地访问地址
} else if (process.env.NODE_ENV == 'debug'){
  axiosIns.defaults.baseURL = 'http://web.juhe.cn:8080/constellation/getAll?consName=%E7%8B%AE%E5%AD%90%E5%BA%A7&type=today&key=ca5fa201dd0d91b4da33e03a55bdb404';
} else if (process.env.NODE_ENV == 'production'){
  axiosIns.defaults.baseURL = 'http://web.juhe.cn:8080/constellation/getAll?consName=%E7%8B%AE%E5%AD%90%E5%BA%A7&type=today&key=ca5fa201dd0d91b4da33e03a55bdb404'; //正式访问地址
}
axiosIns.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axiosIns.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';
// axiosIns.defaults.responseType = 'json';
// axiosIns.defaults.transformRequest = [function (data) {
//   //数据序列化
//   return qs.stringify(data);
// }];
// axiosIns.defaults.validateStatus = function (status) {
//   return true;
// };
// axiosIns.interceptors.request.use(function (config) {
//   config.headers.Accept = 'application/json';
//   config.headers.System = 'vue';
//   let token = Vue.localStorage.get('token');
//   if(token){
//       config.headers.Token = token;
//   }
//   return config;
// });
axiosIns.interceptors.response.use(function (response) {
  let data = response.data;
  let status = response.status;
  if (status === 200) {
    return Promise.resolve(data);
  } else {
    return Promise.reject(response);
  }
});
let api = {};
  //数组取值的两种方式
  api['get'] = function (uri, data, config) {
    return new Promise(function (resolve, reject) {
      axiosIns['get'](uri, {params:data}, config).then((response) => {
        resolve(response);
      }).catch((response) => {
        reject(response)
      })
    })
  }
  api['post'] = function (uri, data, config) {
    return new Promise(function (resolve, reject) {
      axiosIns['post'](uri, data, config).then((response) => {
        resolve(response);
      }).catch((response) => {
        reject(response)
      })
    })
  }
export default api