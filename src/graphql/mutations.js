// Importa la función `gql` desde la biblioteca `@apollo/client`
// `gql` es una función que permite crear consultas y mutaciones GraphQL.
import { gql } from '@apollo/client';

// Definición de la mutación `TOKEN_AUTH`:
// Esta mutación se utiliza para autenticar un usuario a través de su correo electrónico y contraseña,
// y devuelve un token de autenticación junto con información relacionada con la sesión.
export const TOKEN_AUTH = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      payload
      refreshToken
      refreshExpiresIn
    }
  }
`;