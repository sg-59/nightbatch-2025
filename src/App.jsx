import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home"
import Singlepage from './Pages/Singlepage'
import Usereducerone from './Pages/Usereducerone'
import First from './Study/First'
import Second from './Study/Second'
import Third from './Study/Third'
import Signup from './Study/Signup'
import Userefone from './Study/Userefone'
import Useeffectone from './Study/Useeffectone'
import Memo1 from './Study/Memo1'




function App(){



  const abc=createBrowserRouter([
    {
      path:'/',
      element: <Useeffectone/> 
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
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/useref",
      element:<Userefone/>
    },
    {
      path:'/memo1',
      element:<Memo1/>
    },
 
 

  ])

  return(
    <>
 
<RouterProvider router={abc}></RouterProvider>

    </>
  )
}

export default App



