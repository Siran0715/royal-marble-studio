import { useState } from 'react'
import { motion } from 'framer-motion'

const initialState = { name: '', email: '', phone: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please tell us your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.phone.trim()) e.phone = 'Please add a phone number.'
    if (!form.message.trim()) e.message = 'Tell us a little about your project.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (key) => (ev) => setForm((f) => ({ ...f, [key]: ev.target.value }))

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm(initialState)
    }, 1100)
  }

  const fieldClass = (key) =>
    `w-full bg-transparent border px-4 py-3 text-sm outline-none transition-colors ${
      errors[key] ? 'border-red-400' : 'border-[var(--line)] focus:border-brass'
    }`

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-10 text-center"
      >
        <p className="font-display text-2xl mb-3">Message received.</p>
        <p className="opacity-70 text-sm mb-6">
          A design consultant will reach out within one business day to discuss your project.
        </p>
        <button className="btn-ghost" onClick={() => setStatus('idle')}>Send another message</button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div>
        <label className="spec-tag block mb-2" htmlFor="name">Name</label>
        <input id="name" className={fieldClass('name')} value={form.name} onChange={handleChange('name')} placeholder="Your full name" />
        {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="spec-tag block mb-2" htmlFor="email">Email</label>
          <input id="email" type="email" className={fieldClass('email')} value={form.email} onChange={handleChange('email')} placeholder="you@example.com" />
          {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
        </div>
        <div>
          <label className="spec-tag block mb-2" htmlFor="phone">Phone</label>
          <input id="phone" type="tel" className={fieldClass('phone')} value={form.phone} onChange={handleChange('phone')} placeholder="+91 00000 00000" />
          {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="spec-tag block mb-2" htmlFor="message">Message</label>
        <textarea id="message" rows={5} className={fieldClass('message')} value={form.message} onChange={handleChange('message')} placeholder="Tell us about your space, stone preferences and timeline..." />
        {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-brass justify-center">
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
