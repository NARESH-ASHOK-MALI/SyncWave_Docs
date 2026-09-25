import { useState, useRef } from 'react'

const ACCESS_KEY = 'bb09276a-5dfd-4898-837f-c5cfc7f62a70'
const SUBMIT_URL = 'https://api.web3forms.com/submit'

export default function Feedback() {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus({ type: '', message: '' })

    const formData = new FormData(formRef.current)

    const hasAccessKey = ACCESS_KEY !== 'YOUR_WEB3FORMS_KEY' && ACCESS_KEY !== ''

    try {
      if (!hasAccessKey) {
        // Demo mode
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setStatus({ type: 'success', message: 'Feedback received! (Demo Mode)' })
        formRef.current.reset()
      } else {
        const response = await fetch(SUBMIT_URL, {
          method: 'POST',
          body: formData,
        })
        const data = await response.json()
        if (data.success) {
          setStatus({ type: 'success', message: 'Thanks! Your feedback has been sent.' })
          formRef.current.reset()
        } else {
          throw new Error(data.message || 'Submission failed')
        }
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
      console.error(error)
    } finally {
      setSending(false)

      // Auto-clear success after 5s
      if (status.type !== 'error') {
        setTimeout(() => {
          setStatus((prev) => (prev.type === 'success' ? { type: '', message: '' } : prev))
        }, 5000)
      }
    }
  }

  return (
    <section id="feedback" className="relative py-[96px] z-[1]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-primary mb-4 px-4 py-[6px] bg-primary/[0.06] border border-primary/[0.1] rounded-full">
            Feedback
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-[800] tracking-[-0.02em] leading-[1.2] mb-4">
            Help improve <span className="gradient-text">SyncWave</span>
          </h2>
          <p className="text-[1.1rem] text-text-secondary max-w-[560px] mx-auto">
            Encountered a bug or have a feature request? Let me know below.
          </p>
        </div>

        {/* Form */}
        <div
          className="max-w-[600px] mx-auto bg-surface-dark border border-border rounded-md p-10 max-md:p-6"
          style={{ boxShadow: 'var(--shadow-inset)' }}
        >
          <form
            ref={formRef}
            id="syncwave-feedback-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <input type="hidden" name="access_key" value={ACCESS_KEY} />
            <input type="hidden" name="subject" value="SyncWave Feedback Submission" />

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[0.95rem] font-medium text-text-secondary">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                
                className="bg-background border border-border-dark-muted rounded-sm py-2 px-3 text-text-primary font-sans text-base outline-none transition-all duration-300 focus:border-primary focus:shadow-focus placeholder:text-text-muted w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[0.95rem] font-medium text-text-secondary">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Describe any issues, bugs, or feature requests you have..."
                className="bg-background border border-border-dark-muted rounded-sm py-2 px-3 text-text-primary font-sans text-base outline-none transition-all duration-300 focus:border-primary focus:shadow-focus placeholder:text-text-muted w-full resize-y min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              id="feedback-submit-btn"
              className="w-full inline-flex items-center justify-center gap-[10px] px-7 py-[14px] rounded-xs bg-primary text-primary-text font-[510] text-[14px] transition-all duration-[150ms] ease-out hover:bg-primary-hover active:opacity-75 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              <span>{sending ? 'Sending...' : 'Send Feedback'}</span>
            </button>

            {status.message && (
              <div
                className={`text-center text-[0.95rem] mt-[10px] min-h-[24px] ${
                  status.type === 'success' ? 'text-primary' : 'text-[#eb5757]'
                }`}
                id="form-status"
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
