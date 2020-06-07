import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
<<<<<<< HEAD
    baseURL:'http://152.136.185.210:8000/api/n3',
=======
    baseURL:'http://123.207.32.32:8000',
>>>>>>> 562e9e8ab27897c6c03563c8ea95daf82ba8f38a
    // baseURL:'http://adi-v3.dev',
    timeout:5000
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, err => {
    console.log(err)
  })

  // 相应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}