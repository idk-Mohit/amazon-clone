import React, { useState, createContext } from 'react'

const QueryContext = createContext({
    enteredQuery: '',
    EnteredQueryHandler: (query) => { }
})


export const QueryContextProvider = (props) => {
    const [enteredQuery, SetEnteredQuery] = useState('')

    const EnteredQueryHandler = (query) => {
        SetEnteredQuery(query)
        localStorage.setItem('FetchDataQuery', query)
    }

    return <QueryContext.Provider value={{ enteredQuery, EnteredQueryHandler }}>
        {props.children}
    </QueryContext.Provider>
}


export default QueryContext