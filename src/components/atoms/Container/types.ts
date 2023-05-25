import { PropsWithChildren } from 'react'

export interface ContainerProps extends PropsWithChildren {
  className?: string
  size?: 'default' | 'small'
}
