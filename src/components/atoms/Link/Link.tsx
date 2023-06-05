import { Link as MUILink } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import React from 'react'
import { LinkProps } from 'src/components/atoms/Link/types'

const Link: React.FC<LinkProps> = props => {
  return <MUILink underline="none" color="textPrimary" {...props} component={ReactLink} />
}

export default Link
