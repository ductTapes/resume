import { MutableRefObject, useEffect, useMemo, useState } from 'react'

const useIsInViewport: UseIsInViewportType = ref => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)),
    [],
  )

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current as Element)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}

type UseIsInViewportType = (ref: MutableRefObject<Element | null>) => boolean

export default useIsInViewport
