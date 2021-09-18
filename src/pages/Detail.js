import React from 'react'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export default ({ detailId }) => (
  <Layout title={`Fotografía ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
