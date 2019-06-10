import gql from 'graphql-tag';

export const getBooks = gql `query{
                                books{
                                  id,
                                  title,
                                  ISBN,
                                  quantity,
                                  genre,
                                  author,
                                  pages,
                                  cover
                                }
                              }`;
