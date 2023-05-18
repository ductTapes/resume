import React from 'react'
import { ButtonProps } from '@mui/material'
import * as S from './styles'

const Button: React.FC<ButtonProps> = props => {
  return <S.Button disableRipple variant="contained" {...props} />
}

export default Button
