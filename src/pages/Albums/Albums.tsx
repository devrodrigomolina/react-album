import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { AlbumsContainer, ImageContainer } from './styles';

type Album = {
  userId: number;
  id: number;
  title: string;
}

const Albums = () => {
  
  const { id } = useParams()
  const navigate = useNavigate()

  const [info, setInfo] = useState([])
  const [albumInfos, setAlbumInfos] = useState<Album>({id: 0, title: '', userId: 0})

  const getAlbunsID = async () => {
    const data = await api.getAlbumPhotos(id)
    setInfo(data)
  }
  const albumInfo = async () => {
    const data = await api.getAlbumId(id)
    setAlbumInfos(data)
  }
  const openPhoto = async () => {
   /*  const data = await api.getPhoto(id) */
  }
  const handdleBack = () => {
    navigate(-1);
  }
  useEffect(() => {
    albumInfo()
    getAlbunsID()
  },[])

  return (
    <AlbumsContainer>
      <button onClick={handdleBack}>Voltar</button>
      <h1>{albumInfos.title}</h1>
      {info?.map(({ url, id }) => (
        <ImageContainer onClick={openPhoto} key={id}>
          <img src={url} />
        </ImageContainer>
      ))}
    </AlbumsContainer>
  )
}

export default Albums