import { useRoutes } from 'react-router-dom'
import Albums from '../pages/Albums/Albums'
import Home from '../pages/Home/Home'

export const RouteList = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/albums/:id', element: <Albums /> }
  ])
}