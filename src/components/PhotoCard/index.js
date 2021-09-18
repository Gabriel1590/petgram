import React from 'react'
import { Article, Image, ImgWrapper } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { likePhoto } from '../../apollo/mutations/likePhoto'
import { useMutation } from '@apollo/client'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const [sendMutation] = useMutation(likePhoto, { variables: { input: { id } } })

  const handleFavClick = () => {
    sendMutation()
  }

  return (
    <Article ref={element}>
      {
        show
          ? (
            <>
              <Link to={`/detail/${id}`}>
                <ImgWrapper>
                  <Image src={src} />
                </ImgWrapper>
              </Link>

              <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
            </>
            )
          : null
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName) => {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be equal or greater than 0`)
    }
  }
}
