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
    const listeners = []
    targets.forEach((el) => {
      const onEnter = () => toggleHover(true)
      const onLeave = () => toggleHover(false)
      listeners.push({ el, onEnter, onLeave })
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('pointermove', move)

    return () => {
      window.removeEventListener('pointermove', move)
      listeners.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return <div className="cursor" ref={cursorRef} aria-hidden="true" />
}

export default Cursor
