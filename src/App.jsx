import { CssBaseline } from "@mui/material"
import SignUp from "./component/SignUp"
import {  RouterProvider, createBrowserRouter } from "react-router-dom"
import Chat from "./component/Chat"


const router=createBrowserRouter([
  {
    path:'/',
    element:<SignUp/>
  },
  {
    path:'chat',
    element:<Chat/>
  }
])


function App() {
  return (
    <div>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App