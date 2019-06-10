import gql from 'graphql-tag';

export const getUsuarios = gql`
query{
    usuarios{
      id,
      username,
      fullname,
      rol
    }
  }
`;

export const getUserUsername = gql`
query userByUsername($username:String!){
    userByUsername(username:$username){
      id,
      username,
      fullname,
      rol
    }
  }
`;