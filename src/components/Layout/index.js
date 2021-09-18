import React from 'react'
import { Helmet } from 'react-helmet'
import { Title, Div, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle, showHeader = false }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram</title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    <Div>
      {
        showHeader &&
        (
          <>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </>
        )
      }
      {children}
    </Div>
  </>
)
