import { useQuery } from '@apollo/client'
import React from 'react'
import { getFavsQuery } from '../../apollo/queries/getFavs'
import { FavCard } from '../FavCard'
import { Grid } from './styles'

export const ListOfFavs = () => {
  const { loading, error, data } = useQuery(getFavsQuery, { fetchPolicy: 'cache-and-network' })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const { favs } = data

  return (
    <Grid>
      {
        favs.map(({ id, src }) => <FavCard key={id} id={id} src={src} />)
      }
    </Grid>
  )
}
