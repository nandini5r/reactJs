import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../../src/Components/Home/Home'
import {RouterProvider} from 'react-router-dom'



const Route = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
          
            
        },
       


    ])
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Route
