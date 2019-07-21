
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { setContext } from 'apollo-link-context'

import * as QUERIES from './queries'

import App from './App'
import './index.css'

const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql'})

const authLink = setContext(( _, {headers} ) => {
    const API_TOKEN = process.env.API_TOKEN
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${API_TOKEN}`
        }
    }
})

const link = authLink.concat(httpLink)

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
});

client.query({ query: QUERIES.POPULAR_REPOSITORIES_LIST }).then(console.log)

ReactDOM.render(
    <ApolloProvider client={client}> 
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
)

