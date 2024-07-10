import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: 'Iphone',
      price: 300
    },
    {
      id: 2,
      title: 'Realme',
      price: 150
    },
  ])

  const handleAddToCart = (id: number) => {
    console.log("Clicked", id);

  }
  return (
    <>
      {products.map((product) => <Products product={product} key={product.id} handleAddToCart={handleAddToCart} />)}
    </>
  );
}

export default App;
