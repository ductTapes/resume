import React from 'react'
import { SvgIcon as MUISvgIcon } from '@mui/material'

import { SvgIconProps } from './types'

export const SvgIcon: React.FC<SvgIconProps> = ({
  component,
  inheritViewBox = true,
  width = 'auto',
  height = 'auto',
  ...props
}) => {
  return (
    <MUISvgIcon
      component={component}
      inheritViewBox={inheritViewBox}
      {...props}
      sx={{
        width,
        height,
        fill: 'none',
        ...props.sx,
      }}
    />
  )
}

export default React.memo(SvgIcon)
