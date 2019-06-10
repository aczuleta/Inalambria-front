
import gql from 'graphql-tag';

export const getReservasUsuario = gql`
query reservasUsuario($usuario:ID!){
    reservasUsuario(usuario: $usuario){
      id,
      idLibro,
      idPersona,
      fechaCheckout,
      fechaRetorno,
      fechaRetornado,
      libro{
        title
      }
    }
}
`;