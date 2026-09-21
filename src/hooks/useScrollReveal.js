import { useEffect, useRef } from 'react'

/**
 * Custom hook for GSAP-style scroll-triggered reveal animations.
 * Uses IntersectionObserver. Adds 'visible' class when element enters viewport.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply staggered delay based on sibling index
          const parent = el.parentElement
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll('.reveal, .reveal-left'))
            const index = siblings.indexOf(el)
            const delay = index >= 0 ? index * 100 : 0
            setTimeout(() => {
              el.classList.add('visible')
            }, delay)
          } else {
            el.classList.add('visible')
          }
          observer.unobserve(el)
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

/**
 * Hook for batch-observing multiple children with staggered reveals.
 * Call on the parent container.
 */
export function useStaggerReveal(selector = '.reveal') {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(selector)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const allSiblings = Array.from(elements)
            const index = allSiblings.indexOf(entry.target)
            const delay = index >= 0 ? index * 100 : 0
            
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, delay)
            
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])

  return containerRef
}
