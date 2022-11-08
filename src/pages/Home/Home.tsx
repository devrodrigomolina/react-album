import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'


type Albums = {
  id: number,
  title: string,
  userId: number
}

const Home = () => {
  const [albums, setAlbums] = useState<Albums[]>([])

  const getAlbums = async () => {
    const { data: json } = await api.get('/albums')
    setAlbums(json)
  }

  useEffect(() => {
    getAlbums()
  }, [])

  return (
    <ul>
      {albums.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  )
}

export default Home