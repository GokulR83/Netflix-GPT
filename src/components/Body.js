import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import EntireMovie from './EntireMovie';
import Header from './Header';


const FirstComponent = () =>{
      return(
        <>
        <Header />
        <Outlet />
        </>
      )
}

const Body = () => {
    const AppRouter = createBrowserRouter([
        {
            path:"/login",
            element:<Login />,
        },
        {
            path:"/",
            element: <FirstComponent />,
            children:[
              {
                path:"/",
                element: <Browse />,
            },
              {
                path:"movie/:id",
                element:<EntireMovie />
              }
            ]
        },
])
  return (
    <div>
        <RouterProvider router={AppRouter} />
    </div>
  )
}

export default Body