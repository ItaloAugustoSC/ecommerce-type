import './App.css'
import { Card } from './components/card';
import { useProductData } from './hooks/useProductData';

function App() {
  const { data } = useProductData();

  return (
    <div className="container">
      <h1>Ecommerce</h1>
      <div className="products-grid">
        {data?.map(productsData =>
          <Card
            price = {productsData.price} 
            name = {productsData.name} 
            image = {productsData.image}
          />
        )} 
      </div>
    </div>
  )
}

export default App



        // {data?.map(productsData => 
        //   <Card 
        //     price = {productsData.response.price} 
        //     name = {productsData.response.name} 
        //     image = {productsData.response.image}
        //   />
        // )}