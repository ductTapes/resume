import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import useIsInViewport from 'src/hooks/useIsInViewport'
import { ScaleOnScrollProps } from 'src/components/atoms/ScaleOnScroll/types'

const ScaleOnScroll: React.FC<ScaleOnScrollProps> = ({
  children,
  className,
  from = 0.9,
  to = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInViewport = useIsInViewport(containerRef)

  const [scale, setScale] = useState(from)

  useEffect(() => {
    const calcAreaAboveTheBottom = ({
      blockHeight,
      windowHeight,
      top,
    }: {
      blockHeight: number
      windowHeight: number
      top: number
    }): number => {
      if (top <= 0) return 1

      if (top >= windowHeight) return 0

      return (windowHeight - top) / blockHeight
    }

    const onScrollHandler = () => {
      if (containerRef.current) {
        const windowHeight = window.innerHeight
        const { top, height } = containerRef.current.getBoundingClientRect()

        const areaAboveTheBottom = calcAreaAboveTheBottom({
          top,
          blockHeight: height,
          windowHeight,
        })

        setScale(Math.min(1, from + (to - from) * areaAboveTheBottom))
      }
    }

    if (isInViewport) {
      window.addEventListener('scroll', onScrollHandler)
    } else {
      window.removeEventListener('scroll', onScrollHandler)
    }

    return () => window.removeEventListener('scroll', onScrollHandler)
  }, [isInViewport, from, to])

  return (
    <Box
      className={className}
      ref={containerRef}
      sx={{ transition: 'scale 0.2s linear', transform: `scale(${scale})` }}
    >
      {children}
    </Box>
  )
}

export default ScaleOnScroll
