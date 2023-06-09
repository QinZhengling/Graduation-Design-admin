import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/Login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/AdminInfo',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: '/admin/LogOut',
    method: 'post'
  })
}
