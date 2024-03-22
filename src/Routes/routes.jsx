import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../../src/Components/Home/Home'
import {RouterProvider} from 'react-router-dom'
import Dashboard from '../Components/Dashboard/Dashboard'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Services from '../Components/Secrvices/Services'
const Route = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Dashboard/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path:'/services',
                    element:<Services/>
                },
               
            ]
        },


    ])
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Route
