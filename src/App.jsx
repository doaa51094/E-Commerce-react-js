
import React from 'react'
import { createHashRouter,RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import ProductList from '../src/ProductList/ProductList'
import { Home } from './Components/Home/Home'
import CounterContextProvider from './Context/CounterContext'
import Bag from './Components/Bag/Bag'
import Products from './Components/Products/Products'

let routers=createHashRouter([{
  path:'/',element:<Layout/> ,children:[
    {path:'productList/:id' ,element:<ProductList/>},
    {index:true ,element:<Home/>},
    {path:'bag',element:<Bag/>},
    {path:'products',element:<Products/>},
   
  ]
}]);
export default function App() {
  return (
    <>
    <CounterContextProvider>
    <RouterProvider router={routers}/>
    </CounterContextProvider>
   

    </>
  )
}
