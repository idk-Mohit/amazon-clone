import React, { useState, createContext } from 'react'

const FetchDataContext = createContext({
    APIFetchProductsQuery: '',
    // products: {},
    // FetchDataHandler: (data) => { },
    FetchDataQueryHandler: (query) => { }
})


export const FetchDataProvider = (props) => {
    // const [products, setProducts] = useState({})  //Used To grab data from db
    const [APIFetchProductsQuery, setAPIFetchProductsQuery] = useState('')

    const FetchDataQueryHandler = (query) => {
        setAPIFetchProductsQuery(query)
        localStorage.setItem('FetchDataQuery', query)
    }

    //Used To grab data from db
    // const FetchDataHandler = async (data) => {
    //     const products = await axios({
    //         method: 'post',
    //         url: 'http://localhost:3001/getProduct',
    //         data: { name: data }
    //     })

    //     if (products) {
    //         localStorage.setItem(`Fetched ${data}`, JSON.stringify(products.data))
    //         setProducts(products)
    //     }
    // }

    return <FetchDataContext.Provider value={{ FetchDataQueryHandler, APIFetchProductsQuery }}>
        {props.children}
    </FetchDataContext.Provider>
}


export default FetchDataContext