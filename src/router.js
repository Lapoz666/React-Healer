import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Aboutus from "./components/Aboutus";
import Lists from "./components/crud/List";
import Create from "./components/crud/Create";
import Edit from "./components/crud/Edit";
import Register from "./components/auth/Signup";
import Login from "./components/auth/Login";
import ViewPost from "./components/crud/View";




const router = createBrowserRouter([
    { path: '/', element:<Register/>},
    { path: '/login', element:<Login/>},
    { path: '/home', element: <App/> },
    { path: '/aboutus', element: <Aboutus/> },
    { path: '/list', element:<Lists/>},
    { path: 'crud/posts/create', element:<Create/>},
    { path: 'crud/posts/:postId/edit', element: <Edit/>},
    { path: 'crud/posts/:postId',element:<ViewPost/>},
    
    

]);

export default router;