import gql from 'graphql-tag';

export const createBook = gql`
mutation createBook($title:String!, $ISBN:String!, $quantity:Int!, $genre:String!, $author: String!, $pages:Int!, $cover:String) {
    createBook(title:$title, ISBN:$ISBN, 
    quantity: $quantity, genre: $genre, author:$author,
    pages: $pages, cover:$cover)
}`;


export const deleteBook = gql`
mutation deleteBook($id:ID!){
    deleteBook(id:$id)
}`;

export const updateBook = gql`
mutation updateBook($id:ID!, $title:String!, $ISBN:String!, $quantity:Int!, $genre:String!, $author: String!, $pages:Int!, $cover:String!){
    updateBook(id:$id, title:$title, ISBN:$ISBN, 
        quantity: $quantity, genre: $genre, author:$author,
        pages: $pages, cover:$cover)
}`;