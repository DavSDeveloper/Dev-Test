import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

// URL del servidor GraphQL
const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_API;

// Configuración del enlace HTTP con la URL del servidor
const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
  headers: {
    // Se guarda el Token en el LocalStorage del Navegador
    Authorization: `JWT ${localStorage.getItem('token')}`,
  },
});

// Configuración del cliente Apollo con el cache y el enlace HTTP
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
