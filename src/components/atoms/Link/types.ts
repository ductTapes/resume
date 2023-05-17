import { LinkProps as MUILinkProps } from '@mui/material'
import { LinkProps as ReactLinkProps } from 'react-router-dom'

export type LinkProps = Omit<MUILinkProps, 'href'> & ReactLinkProps
