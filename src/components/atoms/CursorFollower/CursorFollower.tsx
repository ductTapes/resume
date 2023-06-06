import { useEffect, useState } from 'react'
import * as S from './styles'
import throttle from 'src/helpers/throttle'

const CursorFollower = () => {
  const [position, setPosition] = useState<{ left: number; top: number }>({ left: 0, top: 0 })
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const mouseMoveHandler = throttle((e: MouseEvent) => {
      setPosition({
        top: e.clientY,
        left: e.clientX,
      })
    }, 100)

    const mouseleaveHandler = () => {
      setShow(false)
    }

    const mouseenterHandler = () => {
      setShow(true)
    }

    window.addEventListener('mousemove', mouseMoveHandler)
    document.documentElement.addEventListener('mouseleave', mouseleaveHandler)
    document.documentElement.addEventListener('mouseenter', mouseenterHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
      document.documentElement.removeEventListener('mouseleave', mouseleaveHandler)
      document.documentElement.removeEventListener('mouseenter', mouseenterHandler)
    }
  }, [])

  return <S.Root style={{ top: position.top, left: position.left, opacity: show ? 1 : 0 }} />
}

export default CursorFollower
