import {request} from './request'

export function getHomeMultiData() {
  return request({
    url:'/home/multidata'
  });
}
<<<<<<< HEAD

export function getHomeGoods(type, page) {
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}
=======
>>>>>>> 562e9e8ab27897c6c03563c8ea95daf82ba8f38a
