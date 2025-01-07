// Importa la función `gql` desde la biblioteca `@apollo/client`
// `gql` es una función que permite crear consultas y mutaciones GraphQL.
import { gql } from '@apollo/client';

// Definición de la consulta `ME_QUERY`:
// Esta consulta se utiliza para obtener la información del usuario actualmente autenticado
// y sus empresas asociadas (si existen).
export const ME_QUERY = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      companies {
        edges {
          node {
            id
            name
            default
          }
        }
      }
    }
  }
`;
