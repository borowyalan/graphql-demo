import React from 'react';
import logo from './logo.svg';
import './App.css';

import * as QUERIES from './queries'
import { graphql } from 'react-apollo'

const  App = graphql(QUERIES.POPULAR_REPOSITORIES_LIST)(props =>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Top 10 Github repos (based on stars) </h3>
        <ul className='App-list'>
          { !props.data.loading && props.data.search.edges.map((item, index) => 
            <li key={index}>
              {item.node.owner.login} / {' '}
              <a 
                className="App-link"
                href={'https://github.com/' + item.node.owner.login + "/" + item.node.name}
                target="_blank"
                rel="noopener noreferrer"
              >{item.node.name}</a>: {' '} 
              <strong>{item.node.stargazers.totalCount} stars</strong> 
            </li>
          )}
        </ul>
        <a
          className="App-link"
          href="https://graphql.org/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GraphQL
        </a>
      </header>
    </div>
  )


export default App;
