const DOWNLOAD_URL = 'https://github.com/NARESH-ASHOK-MALI/SyncWave/releases/download/v2.1.0/SyncWave-v2.1.0-win-x64.zip'

export default function Download() {
  return (
    <section id="download" className="relative py-[96px] z-[1]">
      <div className="section-container">
        <div
          className="relative bg-surface-dark border border-border rounded-md py-20 px-10 text-center overflow-hidden max-md:py-12 max-md:px-6"
          style={{ boxShadow: 'var(--shadow-inset)' }}
        >
          {/* Background glow */}
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(94,106,210,0.08),rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

          <div className="relative z-[1]">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-[800] tracking-[-0.02em] mb-4">
              Ready to sync your audio?
            </h2>
            <p className="text-[1.1rem] text-text-secondary mb-9 max-w-[460px] mx-auto">
              Download SyncWave for free. No installation, no sign-up — just run the exe.
            </p>

            <div className="mb-6">
              <a
                href={DOWNLOAD_URL}
                id="footer-download-btn"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-[10px] px-9 py-[18px] rounded-xs bg-primary text-primary-text font-[510] text-[1.1rem] transition-all duration-[150ms] ease-out hover:bg-primary-hover active:opacity-75"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download SyncWave.zip
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-[0.85rem] text-text-muted flex-wrap">
              <span>Windows 10/11 (64-bit)</span>
              <span>•</span>
              <span>~70 MB</span>
              <span>•</span>
              <span>Self-contained</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
