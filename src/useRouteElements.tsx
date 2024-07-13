import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from './constants/path'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import { AppContext } from './contexts/app.context'
import { useContext } from 'react'
import About from './pages/About'
import Profile from './pages/Profile'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'
// Đã xác thực đăng nhập -> dùng Outlet để hiển thị các route con -> không thì redirect về trang login
function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}
// Chưa xác thực đăng nhập -> dùng Outlet để hiển thị các route con -> không thì redirect về trang home
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: path.home,
          index: true,
          element: <Home />
        },
        {
          path: path.about,
          element: <About />
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <MainLayout />,
          children: [
            {
              path: path.profile,
              element: <Profile />
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '',
          element: <RegisterLayout />,
          children: [
            {
              path: path.login,
              element: <Login />
            },
            {
              path: path.register,
              element: <Register />
            }
          ]
        }
      ]
    }
  ])
  return routeElements
}
