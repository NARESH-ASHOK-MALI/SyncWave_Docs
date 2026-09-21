import { useRef, useEffect } from 'react'
import { useStaggerReveal } from '../hooks/useScrollReveal'

const techCards = [
  { icon: '.NET', title: '.NET 8 (C#)', subtitle: 'Runtime' },
  { icon: 'WPF', title: 'WPF (XAML)', subtitle: 'UI Framework' },
  { icon: '♪', title: 'NAudio 2.2.1', subtitle: 'Audio Library' },
  { icon: 'W', title: 'WASAPI', subtitle: 'Core Audio API' },
]

const stats = [
  { value: '<10%', label: 'CPU Usage' },
  { value: '~100ms', label: 'Pipeline Latency' },
  { value: '5s', label: 'Buffer Depth' },
  { value: '0', label: 'GC Pressure' },
]

export default function TechStack() {
  const techGridRef = useStaggerReveal('.reveal')
  const statsRef = useRef(null)

  // Stat pulse animation on scroll
  useEffect(() => {
    const container = statsRef.current
    if (!container) return

    const statEls = container.querySelectorAll('.stat-value')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out'
            entry.target.style.transform = 'scale(1.1)'
            setTimeout(() => {
              entry.target.style.transform = 'scale(1)'
            }, 400)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    statEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech" className="relative py-[96px] z-[1]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-primary mb-4 px-4 py-[6px] bg-primary/[0.06] border border-primary/[0.1] rounded-full">
            Tech Stack
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-[800] tracking-[-0.02em] leading-[1.2] mb-4">
            Built with <span className="gradient-text">modern technology</span>
          </h2>
        </div>

        {/* Tech Grid */}
        <div ref={techGridRef} className="grid grid-cols-4 gap-5 mb-16 max-lg:grid-cols-2">
          {techCards.map((card, i) => (
            <div
              key={i}
              className="reveal bg-surface-dark border border-border rounded-md py-9 px-6 text-center transition-all duration-300 hover:brightness-[1.2] hover:translate-y-[-4px] hover:border-primary/20"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-[1.5rem] font-[800] gradient-text border border-primary/[0.1] rounded-2xl">
                {card.icon}
              </div>
              <h3 className="text-base font-bold mb-1">{card.title}</h3>
              <p className="text-[0.85rem] text-text-muted">{card.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-4 gap-5 py-12 px-10 bg-surface-dark border border-border rounded-md max-lg:grid-cols-2 max-lg:gap-8 max-md:px-6 max-md:py-8 max-[480px]:grid-cols-2"
          style={{ boxShadow: 'var(--shadow-inset)' }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center reveal">
              <div className="stat-value text-[2rem] font-[800] gradient-text mb-1 font-mono">{stat.value}</div>
              <div className="text-[0.85rem] text-text-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
