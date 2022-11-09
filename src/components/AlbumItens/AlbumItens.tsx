import './styles.css'
import { Link } from 'react-router-dom'

type Props = {
  id: number,
  title: string
}

const AlbumItens = ({id, title}: Props) => {
  return (
    <Link className='album' to={`/albums/${id}`}>
      {title}
    </Link>
  )
}

export default AlbumItens