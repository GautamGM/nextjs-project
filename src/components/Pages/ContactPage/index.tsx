/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from "next/navigation"

const ContactPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af" 
            alt="Luxury Lobby" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold text-gold-500 mb-6 animate-fade-in">
            Connect With Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
            Your vision deserves our personal attention
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-4xl font-playfair font-bold text-gold-500 mb-6">
              Personal Concierge
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-gold-500 text-2xl mt-1">✆</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">+1 (555) 234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold-500 text-2xl mt-1">✉</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">concierge@luxinteriors.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold-500 text-2xl mt-1">📍</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Showroom</h3>
                  <p className="text-gray-300">450 Park Avenue, New York</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gold-500/20">
              <h3 className="text-2xl font-playfair text-gold-500 mb-4">Business Hours</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Mon-Fri: 9AM - 7PM EST</li>
                <li>Saturday: 10AM - 5PM EST</li>
                <li>Sunday: By appointment</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-xl shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-gold-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-700/50 border border-gold-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gold-500 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-700/50 border border-gold-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-gold-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gold-500 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-slate-700/50 border border-gold-500/30 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-gold-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-black px-8 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
          alt="Location Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={() => router.push("/contact")}
            className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get Directions
          </button>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-gold-500/10 py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
            Begin Your Design Journey
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Schedule a private consultation with our design experts to transform your space
          </p>
          <button className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 uppercase tracking-widest font-semibold transition-all duration-300">
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  )
}

export default ContactPage