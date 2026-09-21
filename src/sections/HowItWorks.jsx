import { useStaggerReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    num: 1,
    title: 'System Audio Capture',
    desc: 'WASAPI loopback captures all system audio in real-time at native quality — games, music, calls, everything.',
  },
  {
    num: 2,
    title: 'Latency Measurement',
    desc: (
      <>Each device's hardware latency is measured via <code>AudioClient.StreamLatency</code>. The maximum is used as the sync baseline.</>
    ),
  },
  {
    num: 3,
    title: 'Delay Compensation',
    desc: (
      <>High-performance circular buffers insert calculated delays: <code>maxLatency − deviceLatency + manualOffset</code></>
    ),
  },
  {
    num: 4,
    title: 'Volume Scaling & Output',
    desc: 'Real-time volume scaling (0–200%) applied per-device, then routed through WasapiOut to each physical device.',
  },
]

export default function HowItWorks() {
  const pipelineRef = useStaggerReveal('.reveal-left')

  return (
    <section id="how-it-works" className="relative py-[96px] bg-canvas-secondary z-[1]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,rgba(94,106,210,0.15),transparent)]" />
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,rgba(94,106,210,0.15),transparent)]" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-primary mb-4 px-4 py-[6px] bg-primary/[0.06] border border-primary/[0.1] rounded-full">
            How It Works
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-[800] tracking-[-0.02em] leading-[1.2] mb-4">
            Engineered for <span className="gradient-text">perfect sync</span>
          </h2>
          <p className="text-[1.1rem] text-text-secondary max-w-[560px] mx-auto">
            A sophisticated audio pipeline built on Windows Core Audio (WASAPI).
          </p>
        </div>

        {/* Pipeline */}
        <div className="max-w-[700px] mx-auto" ref={pipelineRef}>
          {steps.map((step, i) => (
            <div key={step.num}>
              {/* Step */}
              <div className="reveal-left flex gap-6 items-start">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-primary rounded-full text-[1.1rem] font-[800] text-primary-text shadow-[0_0_30px_rgba(94,106,210,0.2)]">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[1.15rem] font-bold mb-2 tracking-[-0.01em]">{step.title}</h3>
                  <p className="text-[0.95rem] text-text-secondary leading-[1.7]">{step.desc}</p>
                </div>
              </div>

              {/* Connector (except after last step) */}
              {i < steps.length - 1 && (
                <div className="flex items-center pl-[23px] h-12">
                  <div className="w-[2px] h-full bg-[linear-gradient(to_bottom,rgba(94,106,210,0.3),rgba(94,106,210,0.1))] rounded-sm" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
