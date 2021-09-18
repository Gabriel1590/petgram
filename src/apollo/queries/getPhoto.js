import { gql } from 'apollo-boost'

export const getPhotoQuery = gql`
    query getSinglePhoto($id: ID!) {
    photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
    }
    }
`
