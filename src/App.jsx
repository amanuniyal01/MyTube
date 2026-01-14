import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

const App=() => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "/watch",
          element: <WatchPage />
        }
      ]
    }
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
