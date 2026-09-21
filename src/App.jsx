import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Guide from './sections/Guide'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import TechStack from './sections/TechStack'
import Download from './sections/Download'
import Feedback from './sections/Feedback'
import Footer from './sections/Footer'
import StarsBackground from './components/StarsBackground'

export default function App() {
  return (
    <>
      <StarsBackground />
      <Navbar />
      <main>
        <Hero />
        <Guide />
        <Features />
        <HowItWorks />
        <TechStack />
        <Download />
        <Feedback />
      </main>
      <Footer />
    </>
  )
}
