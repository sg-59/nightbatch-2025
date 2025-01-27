import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home"
import Singlepage from './Pages/Singlepage'
import Usereducerone from './Pages/Usereducerone'
import First from './Study/First'
import Second from './Study/Second'
import { createContext } from 'react'
import Third from './Study/Third'


function App(){



  const abc=createBrowserRouter([
    {
      path:'/',
      element: <Usereducerone/> 
    },
    {
      path:'/singlepage/:category',
      element:<Singlepage/>
    },
    {
      path:"/first",
      element:<First/>
    },
    {
      path:"/second",
      element:<Second/>
    },
    {
      path:"/third",
      element:<Third/>
    }

  ])

  return(
    <>
 
<RouterProvider router={abc}></RouterProvider>

    </>
  )
}

export default App



