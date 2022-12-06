import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlbumItens from "../../components/AlbumItens/AlbumItens";
import { api } from "../../services/api";

type Albums = {
  id: number;
  title: string;
  userId: number;
};

const Home = () => {
  const [albums, setAlbums] = useState<Albums[]>([]);

  const getAlbums = async () => {
    const albumsReq = await api.getAlbum();
    setAlbums(albumsReq);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <>
      {albums.map((item, index) => (
        <AlbumItens 
          key={index}
          title={item.title}
          id={item.id} 
        />
      ))}
    </>
  );
};

export default Home;
