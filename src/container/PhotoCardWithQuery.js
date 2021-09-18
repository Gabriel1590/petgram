import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { useQuery } from '@apollo/react-hooks'
import { getPhotoQuery } from '../apollo/queries/getPhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { data, loading, error } = useQuery(getPhotoQuery, { variables: { id } })

  if (loading) return <h1>LOADING...</h1>
  if (error) return <p>{error}</p>

  const { photo, photo: { categoryId, src, likes, liked } } = data

  return <PhotoCard id={photo.id} src={src} categoryId={categoryId} liked={liked} likes={likes} />
}
