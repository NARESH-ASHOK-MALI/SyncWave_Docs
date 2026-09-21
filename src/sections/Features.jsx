import { useStaggerReveal } from '../hooks/useScrollReveal'

const features = [
  { className: 'md:col-span-2 md:row-span-2 p-8', emoji: '🔊', title: 'Multi-Device Output', desc: 'Stream to unlimited audio devices in parallel. Bluetooth headphones, USB speakers, wired monitors — all at once.' },
  { className: 'md:col-span-1 md:row-span-1', emoji: '🎯', title: 'Latency Compensation', desc: 'Auto-syncs faster devices to the slowest.' },
  { className: 'md:col-span-1 md:row-span-1', emoji: '🔈', title: 'Real-Time Volume', desc: 'Per-device volume control from 0–200%.' },
  { className: 'md:col-span-1 md:row-span-2 p-8', emoji: '📊', title: 'Live Monitoring', desc: 'Waveform visualization, buffer health bars, and latency readouts — see your audio pipeline in real-time.' },
  { className: 'md:col-span-1 md:row-span-1', emoji: '🔄', title: 'Auto-Reconnect', desc: 'Gracefully handles disconnects automatically.' },
  { className: 'md:col-span-2 md:row-span-1', emoji: '🚫', title: 'Echo Prevention', desc: 'Auto-detects the source device and skips it to prevent the feedback loop that causes audio doubling.' },
  { className: 'md:col-span-1 md:row-span-1', emoji: '💾', title: 'Profile Persistence', desc: 'Settings are automatically saved.' },
  { className: 'md:col-span-2 md:row-span-1', emoji: '🎨', title: 'Dark Theme UI', desc: 'Beautiful modern WPF interface with cyan-purple gradient accents designed for comfortable, extended use.' },
]

export default function Features() {
  const gridRef = useStaggerReveal('.reveal')

  return (
    <section id="features" className="relative py-[120px] z-[1]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-primary mb-4 px-4 py-[6px] bg-primary/[0.06] border border-primary/[0.1] rounded-full">
            Core Features
          </span>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-[800] tracking-[-0.02em] leading-[1.2] mb-4">
            Everything you need for <span className="gradient-text">multi-device audio</span>
          </h2>
          <p className="text-[1.2rem] text-text-secondary max-w-[600px] mx-auto">
            Professional-grade audio routing with a beautiful, intuitive interface.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-5"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className={`reveal group relative bg-surface-dark border border-border rounded-md p-6 transition-all duration-300 overflow-hidden hover:brightness-[1.2] hover:translate-y-[-2px] hover:border-primary/30 flex flex-col justify-between ${f.className || ''}`}
              style={{ boxShadow: 'var(--shadow-inset)' }}
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <div className={`flex items-center justify-center text-[1.8rem] bg-primary/[0.06] border border-primary/[0.08] rounded-2xl mb-6 ${f.className?.includes('col-span-2') ? 'w-[64px] h-[64px]' : 'w-[52px] h-[52px]'}`}>
                  {f.emoji}
                </div>
                <h3 className={`font-bold mb-3 tracking-[-0.01em] ${f.className?.includes('col-span-2') ? 'text-[1.4rem]' : 'text-[1.1rem]'}`}>{f.title}</h3>
                <p className="text-[0.95rem] text-text-secondary leading-[1.6]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
