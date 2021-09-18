import { useEffect, useRef, useState } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(window.IntersectionObserver || import('intersection-observer'))
      .then(() => {
        const observer = new window.IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  return [show, element]
}
