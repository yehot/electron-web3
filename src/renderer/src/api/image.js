import axios from '@renderer/axios'

export function getImageClassList(page) {
  return axios.get('/admin/image_class/' + page)
}

export function getImageList(id, page = 1) {
  return axios.get(`/admin/image_class/${id}/image/${page}`)
}

export function createImageClass(data) {
  return axios.post('/admin/image_class', data)
}

export function updateImageClass(id, data) {
  return axios.post('/admin/image_class/' + id, data)
}

export function deleteImageClass(id) {
  return axios.post(`/admin/image_class/${id}/delete`)
}
