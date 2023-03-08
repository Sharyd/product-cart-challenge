import { useState } from 'react'
import Cart from './components/Cart'
import Layout from './components/Layout'
import Product from './components/Product'
import { ShoppingCartAndNavProvider } from './store/CartContext'

function App() {
    return (
        <ShoppingCartAndNavProvider>
            <Layout>
                <Product />
            </Layout>
        </ShoppingCartAndNavProvider>
    )
}

export default App
