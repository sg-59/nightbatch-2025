import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home"
import Singlepage from './Pages/Singlepage'


function App(){


  const abc=createBrowserRouter([
    {
      path:'/',
      element: <Home/> 
    },
    {
      path:'/singlepage/:category',
      element:<Singlepage/>
    }

  ])

  return(
    <>
<RouterProvider router={abc}></RouterProvider>
    </>
  )
}

export default App



