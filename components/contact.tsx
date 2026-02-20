'use client'

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', topic: '', message: '' })
  }

  return (
    <section className="bg-primary text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              Get in Touch With Us
            </h2>
            
            <p className="text-gray-200 mb-8 leading-relaxed">
              We welcome your inquiries, feedback, and suggestions. Please don't hesitate to reach out to us using the contact form below, and our team will be happy to assist you promptly
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📍</span>
                </p>
                <p className="text-gray-300 text-sm">
                  3L Lot 91-83 Phase II<br />
                  Area II Maye-Maya St.<br />
                  Navotas, M.M.<br />
                  Philippines
                </p>
              </div>
              
              <div>
                <p className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✉️</span>
                </p>
                <p className="text-gray-300 text-sm">sm-zoto@yahoo.com</p>
              </div>
              
              <div>
                <p className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📞</span>
                </p>
                <p className="text-gray-300 text-sm">(+632) 285-0254</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-600">
              <p className="font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:opacity-80">f</a>
                <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:opacity-80">in</a>
                <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:opacity-80">▶</a>
                <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:opacity-80">𝕏</a>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="bg-gray-50 text-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2 text-primary">Contact Us</h3>
            <p className="text-gray-600 text-sm mb-6">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">How can we help you?</label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="programs">Programs and Services</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="donation">Donation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded font-semibold hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
