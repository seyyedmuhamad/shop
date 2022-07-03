import React from 'react'
import './App.css'
import Products from './components/menu/products/Products'
import SideBar from './components/partials/SideBar'

function App () {
  return (
    <div className="">
      <SideBar></SideBar>
      <Products />
    </div>
  )
}

export default App
