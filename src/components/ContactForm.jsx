import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Get in touch</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">I’d love to hear about your project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm" required />
              </div>
              <button type="submit" className="inline-flex justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black">Send</button>
              {submitted && <p className="text-sm text-green-600">Thanks! I’ll get back to you soon.</p>}
            </div>
          </form>
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 dark:text-gray-300">
              Prefer email? Reach me at <a href="mailto:hello@example.com" className="font-medium text-indigo-600">hello@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
