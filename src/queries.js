import gql from 'graphql-tag'

export const POPULAR_REPOSITORIES_LIST = gql`
{
  search(query: "stars:>50000", type: REPOSITORY, first: 10) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          name
          owner {
            login
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`

export const SCHEMA = gql`
    query {
        __schema {
            types {
                name
                kind
                description
                fields {
                    name
                }
            }
        }
    }
`
