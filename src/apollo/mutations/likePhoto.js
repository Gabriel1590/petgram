import { gql } from 'apollo-boost'

export const likePhoto = gql`
    mutation likePhoto($input: LikePhoto!) {
        likePhoto(input: $input) {
            id
            liked
            likes
        }
    }
`
