import gql from 'graphql-tag';

export const createUsuario = gql`
mutation createUsuario($username:String!, $fullname:String!, $rol:String!){
    createUsuario(username:$username, fullname: $fullname, rol:$rol)
  }
`;