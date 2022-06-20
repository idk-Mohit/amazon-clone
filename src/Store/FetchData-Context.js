import React, { useState, createContext } from 'react'
import axios from 'axios'

const FetchDataContext = createContext({
    products: {},
    FetchDataHandler: (data) => { }
})


export const FetchDataProvider = (props) => {
    const [products, setProducts] = useState({})

    const FetchDataHandler = async (data) => {
        const products = await axios({
            method: 'post',
            url: 'http://localhost:3001/getProduct',
            data: { name: data }
        })

        if (products) {
            localStorage.setItem(`Fetched ${data}`, JSON.stringify(products.data))
            setProducts(products)
        }
    }

    return <FetchDataContext.Provider value={{ FetchDataHandler, products }}>
        {props.children}
    </FetchDataContext.Provider>
}


export default FetchDataContext