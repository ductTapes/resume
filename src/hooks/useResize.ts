import debounce from '@mui/material/utils/debounce'
import { useEffect } from 'react'

const useResize: UseResizeType = cb => {
  useEffect(() => {
    const debouncedResize = debounce(cb, 300)
    window.addEventListener('resize', debouncedResize)

    return () => window.removeEventListener('resize', debouncedResize)
  }, [cb])
}

type UseResizeType = (cb: (event: Event) => void) => void

export default useResize
