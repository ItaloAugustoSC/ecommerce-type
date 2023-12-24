import { useState } from 'react'
import './App.css'
import { ProductsData } from './interface/ProductsData'
import { Card } from './components/card';

function App() {
  const data: ProductsData[] = [];

  return (
    <div className="container">
      <h1>Ecommerce</h1>
      <div className="products-grid">
        {data.map(productsData => 
          <Card 
            price = {productsData.price} 
            title = {productsData.title} 
            image = {productsData.image}
          />
        )}
      </div>
    </div>
  )
}

export default App
