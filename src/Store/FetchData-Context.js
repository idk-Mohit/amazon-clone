import React, { useState, createContext } from 'react'

const FetchDataContext = createContext({
    APIFetchProductsQuery: '',
    FetchDataQueryHandler: (query) => { }
})


export const FetchDataProvider = (props) => {
    const [APIFetchProductsQuery, setAPIFetchProductsQuery] = useState('')

    const FetchDataQueryHandler = (query) => {
        setAPIFetchProductsQuery(query)
        localStorage.setItem('FetchDataQuery', query)
    }

    return <FetchDataContext.Provider value={{ FetchDataQueryHandler, APIFetchProductsQuery, }}>
        {props.children}
    </FetchDataContext.Provider>
}


export default FetchDataContext