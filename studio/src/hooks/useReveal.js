import { useEffect, useRef, useState } from 'react'

// One shared observer for every revealed element on the page.
let observer = null
const callbacks = new WeakMap()

function getObserver() {
  if (observer || typeof IntersectionObserver === 'undefined') return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        callbacks.get(entry.target)?.()
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  )
  return observer
}

// Returns [ref, visible]; `visible` flips to true the first time the
// element scrolls into view. Kept in React state so re-renders that
// change the element's className never undo the reveal.
export function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = getObserver()
    if (!io) {
      setVisible(true)
      return
    }
    callbacks.set(el, () => setVisible(true))
    io.observe(el)
    return () => {
      io.unobserve(el)
      callbacks.delete(el)
    }
  }, [])

  return [ref, visible]
}
