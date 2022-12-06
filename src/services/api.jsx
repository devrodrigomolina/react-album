import axios from "axios";

export const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
  getAlbum: async () => {
    const req = await request('/albums')
    return req.data
  },
  getAlbumId: async (id) => {
    const req = await request(`/albums/${id}`)
    return req.data
  },
  getAlbumPhotos: async (id) => {
    const req = await request(`/albums/${id}/photos`)
    return req.data
  },
  getPhoto: async (id) => {
    const req = await request(`/photos/${id}`)
    return req.data
  }
};