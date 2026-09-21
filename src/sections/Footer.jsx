import logo from '../assets/logo.png'

const links = [
  { label: 'GitHub', href: 'https://github.com/NARESH-ASHOK-MALI/SyncWave' },
  { label: 'Releases', href: 'https://github.com/NARESH-ASHOK-MALI/SyncWave/releases' },
  { label: 'Issues', href: 'https://github.com/NARESH-ASHOK-MALI/SyncWave/issues' },
  { label: 'License', href: 'https://github.com/NARESH-ASHOK-MALI/SyncWave/blob/main/LICENSE' },
]

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border py-12 bg-canvas-secondary">
      <div className="w-[94%] max-w-[1800px] mx-auto px-6">
        {/* Top */}
        <div className="flex items-center justify-between mb-8 max-md:flex-col max-md:gap-5">
          <div className="flex items-center gap-[10px] font-bold text-[1.1rem]">
            <img src={logo} alt="SyncWave" className="w-7 h-7 rounded-md" />
            <span>SyncWave</span>
          </div>
          <div className="flex gap-7 max-[480px]:flex-wrap max-[480px]:justify-center max-[480px]:gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9rem] text-text-secondary transition-colors duration-300 hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-6 border-t border-border">
          <p className="text-[0.85rem] text-text-muted">Made with ❤️ for multi-device audio enthusiasts</p>
          <p className="text-[0.8rem] text-text-muted opacity-60 mt-2">© 2026 SyncWave. Released under the MIT License.</p>
        </div>
      </div>
    </footer>
  )
}
