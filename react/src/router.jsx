import {createBrowserRouter, Navigate} from 'react-router-dom'
import DefaultLayout from './Layouts/DefaultLayout';
import GuestLayout from './Layouts/GuestLayout';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Register from './views/Register';
import UserForm from './views/UserForm';
import Users from './views/Users';

const router= createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to='/users'/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/users",
                element:<Users/>
            },
            {
                path:"/users/new",
                element:<UserForm key="userCreate"/>
            },
            {
                path:"/users/:id",
                element:<UserForm key="userUpdate"/>
            },
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },        
        ]
    },
   
    {
        path:"*",
        element:<NotFound/>
    }
]);

export default router;

