import { useRoutes } from 'react-router-dom'
import Login from './pages/Login'
//import ProductList from './pages/ProductList'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import LoginLayout from './layouts/LoginLayout/LoginLayout'
export default function useRouteElements() {
  const routerElements = useRoutes([
    {
      path: '/',
      element: (
        //<ProductList />
        <LoginLayout>
          <Login />
        </LoginLayout>
      )
    },
    {
      path: '/login',
      element: (
        <LoginLayout>
          <Login />
        </LoginLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routerElements
}
