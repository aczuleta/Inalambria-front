
import gql from 'graphql-tag';

export const createReserva = gql`
mutation createReserva($idLibro:Int!, $idPersona:Int!){
    createReserva(idLibro:$idLibro, idPersona:$idPersona)
}
`;

export const devolverLibro = gql`
mutation returnBook($id:ID!) {
    returnBook(id:$id)
}
`;