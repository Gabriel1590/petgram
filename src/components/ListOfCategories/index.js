import React, { useEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Category } from '../Category'
import { Item, List } from './styles'

function useCategoriesData () {
  const [categories, loading, error] = useFetch('https://petgram-server-test-mu.vercel.app/categories')
  return { categories: categories || [], loading, error }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, _setShowFixed] = useState(false)
  const showFixedRef = useRef(showFixed)
  const setShowFixed = (state) => {
    showFixedRef.current = state
    _setShowFixed(state)
  }

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      if (showFixedRef.current !== newShowFixed) {
        setShowFixed(newShowFixed)
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? (
              [1, 2, 3, 4, 5, 6].map((category, i) => (
                <Item key={i}>
                  <Category />
                </Item>
              ))
            )
          : (
              categories.map((category, i) => (
                <Item key={i}>
                  <Category {...category} path={`/pet/${category.id}`} />
                </Item>
              ))
            )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
