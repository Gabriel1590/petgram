import React from 'react'
import { Link, Image } from './styles'

export const FavCard = ({ id, src = '' }) => (
  <Link to={`/detail/${id}`}>
    <Image src={src} />
  </Link>
)
