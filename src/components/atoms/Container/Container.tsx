import React from 'react'
import * as S from './styles'
import { ContainerProps } from 'src/components/atoms/Container/types'

const Container: React.FC<ContainerProps> = ({ children, className, size = 'default' }) => {
  return (
    <S.Root className={className} size={size}>
      {children}
    </S.Root>
  )
}

export default Container
