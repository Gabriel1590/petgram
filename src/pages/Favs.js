import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'

export default () => (
  <Layout title='Tus Favoritos' subtitle='Aquí puedes encontrar tus favoritos' showHeader>
    <ListOfFavs />
  </Layout>
)
