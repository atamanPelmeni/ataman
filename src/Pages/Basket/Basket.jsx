import React from 'react'
import useStore2  from '../../Store.js'
import {useStore} from 'zustand'

const Basket = () => {

  function ProductCounter() {
    const products = useStore2((state) => state.products)
    console.log(products);
  }
  ProductCounter()
  function Controls() {
    const addProducts = useStore2((state) => state.addProducts)
  }
  Controls()

  return (
    <div>fghfggf</div>
  )
}

export default Basket