import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home"


function App(){


  const abc=createBrowserRouter([
    {
      path:'/',
      element: <Home/> 
    },

  ])

  return(
    <>
<RouterProvider router={abc}></RouterProvider>
    </>
  )
}

export default App



