import { SvgIconProps } from 'src/components/atoms/SvgIcon/types'
import { ReactNode } from 'react'

export interface StackCardProps {
  type: 'frontend' | 'backend' | 'other'
}

export type GetStackCardByType = (type: StackCardProps['type']) => {
  icon: SvgIconProps['component']
  title: ReactNode
  description: ReactNode
  svgIconProps?: Omit<SvgIconProps, 'component'>
}
