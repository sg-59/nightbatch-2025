import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home"
import Singlepage from './Pages/Singlepage'
import Usereducerone from './Pages/Usereducerone'


function App(){


  const abc=createBrowserRouter([
    {
      path:'/',
      element: <Usereducerone/> 
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



