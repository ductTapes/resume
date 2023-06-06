import React from 'react'
import { Link as MUILink } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { LinkProps } from 'src/components/atoms/Link/types'

const Link: React.FC<LinkProps> = props => {
  const isHashLink =
    typeof props.to === 'string'
      ? props.to.indexOf('#') !== -1
      : !!props.to.hash || (props.to.pathname?.indexOf('#') || -1) !== -1
  return (
    <MUILink
      underline="none"
      color="textPrimary"
      smooth={isHashLink || undefined}
      {...props}
      component={isHashLink ? HashLink : ReactLink}
    />
  )
}

export default Link
