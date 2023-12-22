import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

import LetsExplore from "../Pages/LetsExplore/LetsExplore";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Contact/Dashboard";
import TaskDetails from "../DashboardPages/TaskDetails/TaskDetails";
import TaskManagement from "../DashboardPages/TaskManagement/TaskManagement";
import CreateTask from "../DashboardPages/CreateTask/CreateTask";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Edit from "../DashboardPages/Edit/Edit";

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
                path: '/letsExplore',
                element: <LetsExplore></LetsExplore>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: 'taskDetails',
                element: <PrivateRouter><TaskDetails></TaskDetails></PrivateRouter>
            },
            {
                path: 'taskManagement',
                element: <PrivateRouter><TaskManagement></TaskManagement></PrivateRouter>
            },
            {
                path: 'createTask',
                element: <PrivateRouter><CreateTask></CreateTask></PrivateRouter>
            },
            {
                path: 'edit/:id',
                element: <PrivateRouter><Edit></Edit></PrivateRouter>
            },
        ]
    },
])

export default MyRouter;