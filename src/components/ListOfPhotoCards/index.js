import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { useQuery } from '@apollo/react-hooks'
import { getPhotosQuery } from '../../apollo/queries/getPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotosQuery, { variables: { categoryId } })

  if (loading) return null
  if (error) return <p>{error}</p>

  return (
    <ul>
      {
        data.photos.map(({ id, src, likes, liked }) => <PhotoCard key={id} id={id} src={src} liked={liked} likes={likes} />)
      }
    </ul>
  )
}
