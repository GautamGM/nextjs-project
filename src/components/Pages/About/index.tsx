/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from "next/navigation"

const AboutPage = () => {
  const router = useRouter()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" 
            alt="Luxury Showroom" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold text-gold-500 mb-6 animate-fade-in">
            The Art of Elegance
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
            Crafting timeless spaces that redefine luxury living
          </p>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-black/40"></div>
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae7b4ac2"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-playfair font-bold text-gold-500 mb-6">
              Legacy of Excellence
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              For over three decades, we've transformed spaces into breathtaking experiences, 
              blending traditional craftsmanship with contemporary design.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-gold-500 pl-4">
                <h3 className="text-3xl font-bold text-white mb-2">30+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="border-l-4 border-gold-500 pl-4">
                <h3 className="text-3xl font-bold text-white mb-2">1500+</h3>
                <p className="text-gray-300">Premium Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="bg-gold-500/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gold-500 mb-4">
              Uncompromising Quality
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every detail perfected through generations of artisan expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-gold-500 text-5xl mb-4">✦</div>
              <h3 className="text-xl font-semibold text-white mb-2">Master Craftsmanship</h3>
              <p className="text-gray-300">Hand-finished by third-generation artisans</p>
            </div>
            <div className="text-center p-6">
              <div className="text-gold-500 text-5xl mb-4">♛</div>
              <h3 className="text-xl font-semibold text-white mb-2">Royal Materials</h3>
              <p className="text-gray-300">Sourced from exclusive global partners</p>
            </div>
            <div className="text-center p-6">
              <div className="text-gold-500 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lifetime Guarantee</h3>
              <p className="text-gray-300">Enduring quality you can trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
            alt="Luxury Showroom"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl sm:text-6xl font-playfair font-bold text-gold-500 mb-6">
            Experience Perfection
          </h2>
          <button 
            onClick={() => router.push("/contact")}
            className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Visit Our Showroom
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gold-500 mb-4">
              Visionary Leadership
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Guided by passion for exceptional design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Creative Director', 'Master Artisan', 'Design Architect'].map((role, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <img
                  src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 30}.jpg`}
                  alt="Team member"
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{role}</h3>
                  <p className="text-gold-500">20+ Years Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage