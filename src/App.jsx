import './App.css'
import Products from './components/Products/Products'
import { ProductProvider } from './context/ProductContext/ProductState'

function App() {

  return (
    <>
      <ProductProvider>
        <Products/>
      </ProductProvider>
    </>
  )
}

export default App
