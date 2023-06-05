import React from 'react'
import { SvgIconProps as MUISvgIconProps } from '@mui/material'

export interface SvgIconProps extends MUISvgIconProps {
  component: React.ComponentType
  width?: string
  height?: string
}
