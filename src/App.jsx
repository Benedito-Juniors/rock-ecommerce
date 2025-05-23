import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ExclusiveSection from './components/ExclusiveSection'
import Testimonials from './components/Testimonials'
import { Footer } from './components/Footer'

const App = () => {

  const[products,setProducts] = useState([])


  useEffect(()=>{
     fetch('/db.json')
     .then((res) => res.json())
     .then((data) => setProducts(data.products))
  },[])

  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <div className='page-inner-content'>
          <div className='section-title'>
            <h3>Produtos Selecionados</h3>
          </div>
          <div className='underline'></div>
        </div>

        <div className='main-content'>
          <ProductList products={products} />
          <ExclusiveSection />
          <Testimonials/>
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default App