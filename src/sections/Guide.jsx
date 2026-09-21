import { useState, useRef, useCallback } from 'react'
import { useStaggerReveal } from '../hooks/useScrollReveal'

// Import all screenshots
import step1 from '../assets/screenshots/Step1_LocateDownloadedexefile.webp'
import addBg from '../assets/screenshots/Addtobackground.webp'
import connect from '../assets/screenshots/ConnectAllDevices.webp'
import toggle from '../assets/screenshots/ToggleSecondaryDevicesYouWantToPlay.webp'
import playing from '../assets/screenshots/Playing.webp'
import trayVolume from '../assets/screenshots/ManageVolumeofsecondaryAudiodeviceFromSystemTray.webp'
import trayExit from '../assets/screenshots/ExitOrOpenFromSystemTray.webp'
import advMenu from '../assets/screenshots/AdvanceMenu.webp'
import lowCpu from '../assets/screenshots/LowCPUConsumptionTaskManager.webp'

const slides = [
  { img: step1, alt: 'Step 1', title: '1. Download & Run', desc: 'No installation required. Just double click the executable to get started.' },
  { img: addBg, alt: 'Add to background', title: 'Runs Quietly', desc: 'Add SyncWave to the background and let it run seamlessly.' },
  { img: connect, alt: 'Connect devices', title: '2. Connect Devices', desc: 'All your connected devices appear automatically in the UI.' },
  { img: toggle, alt: 'Toggle devices', title: '3. Toggle & Play', desc: 'Enable the secondary devices you want to sync in real-time.' },
  { img: playing, alt: 'Playing audio', title: 'Stream Everywhere', desc: 'Play anything on your PC — it streams to every connected device simultaneously without noticeable delay.' },
  { img: trayVolume, alt: 'System Tray Volume', title: 'Tray Volume Control', desc: 'Adjust volume or toggle devices directly from the system tray.' },
  { img: trayExit, alt: 'System Tray Options', title: 'Quick Access', desc: 'Open or exit anytime conveniently from the system tray menu.' },
  { img: advMenu, alt: 'Advanced Menu', title: 'Advanced Settings', desc: 'Fine-tune latency compensation, enable audio boost, or use High Performance Mode.' },
  { img: lowCpu, alt: 'Low CPU usage', title: 'Ultra-Lightweight', desc: 'Runs light — barely visible CPU consumption in Task Manager.' },
]

export default function Guide() {
  const [current, setCurrent] = useState(0)
  const containerRef = useStaggerReveal('.reveal')

  return (
    <section id="guide" className="relative py-[120px] z-[1] bg-surface-dark-alt" ref={containerRef}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-primary mb-4 px-4 py-[6px] bg-primary/[0.06] border border-primary/[0.1] rounded-full">
            Interactive Walkthrough
          </span>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-[800] tracking-[-0.02em] leading-[1.2] mb-4">
            Syncing made <span className="gradient-text">simple</span>
          </h2>
          <p className="text-[1.2rem] text-text-secondary max-w-[600px] mx-auto">
            See how easy it is to manage multiple audio devices with SyncWave.
          </p>
        </div>

        {/* Tabbed Layout */}
        <div className="reveal w-full mx-auto flex gap-8 max-lg:flex-col">
          {/* Left: Tabs */}
          <div className="w-[380px] shrink-0 flex flex-col gap-2 max-lg:w-full max-lg:flex-row max-lg:overflow-x-auto max-lg:pb-4 no-scrollbar">
            {slides.map((slide, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`p-5 rounded-md cursor-pointer transition-all duration-300 border flex-shrink-0 max-lg:w-[260px] ${
                  current === i
                    ? 'bg-primary/[0.08] border-primary/20 shadow-[0_0_20px_rgba(94,106,210,0.1)]'
                    : 'bg-transparent border-transparent hover:bg-surface-dark hover:border-border'
                }`}
              >
                <h3 className={`font-bold mb-2 tracking-[-0.01em] transition-colors ${
                  current === i ? 'text-primary' : 'text-text-primary'
                }`}>
                  {slide.title}
                </h3>
                <p className={`text-[0.9rem] leading-[1.5] transition-colors ${
                  current === i ? 'text-text-primary' : 'text-text-secondary'
                }`}>
                  {slide.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Active Image */}
          <div className="flex-1 w-full bg-[#050505] rounded-lg border border-border flex items-center justify-center aspect-video relative overflow-hidden" style={{ boxShadow: 'var(--shadow-inset)' }}>
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.img}
                alt={slide.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={`absolute w-full h-full object-contain transition-all duration-500 ${
                  current === i ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.95] pointer-events-none'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
