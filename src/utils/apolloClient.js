import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_API;

const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
  headers: {
    Authorization: `JWT ${localStorage.getItem('token')}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
