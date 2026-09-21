import { Suspense } from 'react'
import HeroVisual3D from '../components/HeroVisual3D'
import logo from '../assets/logo.png'

const DOWNLOAD_URL = 'https://github.com/NARESH-ASHOK-MALI/SyncWave/releases/download/v2.0.1/SyncWave.exe'
const GITHUB_URL = 'https://github.com/NARESH-ASHOK-MALI/SyncWave'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center pt-[140px] pb-[80px] z-[1]">
      {/* 3D Background System */}
      <div className="absolute inset-0 w-full h-full z-[-2] pointer-events-auto">
        <Suspense fallback={null}>
          <HeroVisual3D />
        </Suspense>
      </div>

      {/* Content Container */}
      <div className="w-[94%] max-w-[1800px] mx-auto px-6 relative z-10 flex flex-col justify-center pointer-events-none">
        <div className="max-w-[700px] max-lg:max-w-full text-left max-lg:flex max-lg:flex-col max-lg:items-center pointer-events-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-[6px] bg-primary/[0.08] border border-primary/[0.15] rounded-full text-[0.8rem] font-semibold text-primary mb-7 tracking-[0.03em] uppercase animate-[fadeInUp_0.8s_ease-out]">
            <span className="w-[6px] h-[6px] bg-primary rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]" />
            Open Source & Free
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(3rem,5vw,5rem)] font-[800] leading-[1.1] tracking-[-0.03em] mb-6">
            <span className="block animate-[fadeInUp_0.8s_ease-out_0.1s_backwards]">One Sound.</span>
            <span className="block gradient-text animate-[fadeInUp_0.8s_ease-out_0.25s_backwards]">Many Devices.</span>
          </h1>

          {/* Subtitle & Features */}
          <div className="flex flex-col gap-6 mb-10 max-w-[600px] max-lg:mx-auto">
            <p className="text-[1.15rem] text-text-secondary leading-[1.6]" style={{ animation: 'fadeInUp 0.8s ease-out 0.35s backwards' }}>
              Stream system audio to multiple outputs simultaneously. Experience flawless synchronization across all your hardware.
            </p>
            
            {/* Interactive Feature Pills */}
            <div className="flex flex-wrap gap-3 max-lg:justify-center">
              {[
                { 
                  text: 'Bluetooth, USB & Wired', 
                  icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>, 
                  delay: '0.45s' 
                },
                { 
                  text: 'Per-Device Volume', 
                  icon: <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></>, 
                  delay: '0.50s' 
                },
                { 
                  text: 'Real-Time Sync', 
                  icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, 
                  delay: '0.55s' 
                }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-border-dark-muted/50 bg-surface-dark-alt/50 backdrop-blur-md text-text-muted text-[0.85rem] font-medium tracking-wide transition-all duration-300 hover:border-primary/50 hover:text-text-primary hover:bg-primary/10 hover:-translate-y-0.5 cursor-default shadow-sm hover:shadow-[0_4px_20px_rgba(94,106,210,0.15)]"
                  style={{ animation: `fadeInUp 0.8s ease-out ${feature.delay} backwards` }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/80 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </svg>
                  {feature.text}
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap mb-10 max-lg:justify-center max-[480px]:flex-col max-[480px]:w-full" style={{ animation: 'fadeInUp 0.8s ease-out 0.65s backwards' }}>
            <a
              href={DOWNLOAD_URL}
              id="hero-download-btn"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center gap-[10px] px-8 py-[16px] rounded-xs bg-primary text-primary-text font-[510] text-[15px] transition-all duration-[150ms] ease-out hover:bg-primary-hover active:opacity-75 min-w-[220px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download for Windows
            </a>
            <a
              href={GITHUB_URL}
              id="hero-github-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[10px] px-8 py-[16px] rounded-xs bg-transparent text-text-primary border border-border-light transition-all duration-[150ms] ease-out hover:text-text-on-dark-hover active:opacity-75 min-w-[220px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Meta badges */}
          <div className="flex gap-6 flex-wrap max-lg:justify-center max-[480px]:gap-3" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s backwards' }}>
            <div className="flex items-center gap-2 text-[0.85rem] text-text-muted">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>
              </svg>
              Windows 10/11
            </div>
            <div className="flex items-center gap-2 text-[0.85rem] text-text-muted">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              No Install Required
            </div>
            <div className="flex items-center gap-2 text-[0.85rem] text-text-muted">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              MIT License
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
