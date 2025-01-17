import { gql } from '@apollo/client';

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