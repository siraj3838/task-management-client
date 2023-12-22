import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
// import LetsExplore from "../Pages/LetsExplore/LetsExplore";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            },
            // {
            //     path: '/letsExplore',
            //     element: <LetsExplore></LetsExplore>
            // }
        ]
    }
])

export default MyRouter;