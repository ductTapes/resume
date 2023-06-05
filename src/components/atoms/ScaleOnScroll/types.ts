import { PropsWithChildren } from 'react'

export interface ScaleOnScrollProps extends PropsWithChildren {
  from?: number
  to?: number
  className?: string
}
