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
    const { data: json } = await api.get(`/albums`);
    setAlbums(json);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <ul>
      {albums.map((item, index) => (
        <AlbumItens 
          key={index}
          title={item.title}
          id={item.id} 
        />
      ))}
    </ul>
  );
};

export default Home;
