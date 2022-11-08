import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home/Home'

export const RouteList = () => {
  return useRoutes([
    { path: '/', element: <Home /> }
  ])
}