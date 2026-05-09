import { useEffect, useRef } from 'react'

function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) return undefined

    const move = (event) => {
      cursor.style.transform = `translate3d(${event.clientX - 16}px, ${event.clientY - 16}px, 0)`
    }

    const toggleHover = (active) => {
      cursor.dataset.hover = String(active)
    }

    const targets = document.querySelectorAll('a, button, .magnetic, video')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', () => toggleHover(true))
      el.addEventListener('mouseleave', () => toggleHover(false))
    })

    window.addEventListener('pointermove', move)

    return () => {
      window.removeEventListener('pointermove', move)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', () => toggleHover(true))
        el.removeEventListener('mouseleave', () => toggleHover(false))
      })
    }
  }, [])

  return <div className="cursor" ref={cursorRef} aria-hidden="true" />
}

export default Cursor
