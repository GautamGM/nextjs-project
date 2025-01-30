/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from "next/navigation"
export const products = [
  {
    id: 1,
    title: "Luxury Sofa Set",
    price: "$12,499",
    image: "https://images.unsplash.com/photo-1615874959474-39d5b99a3a6f",
  },
  {
    id: 2,
    title: "Elegant Wooden Chair",
    price: "$3,499",
    image: "https://images.pexels.com/photos/276224/pexels-photo-276224.jpeg",
  },
  {
    id: 3,
    title: "Premium Marble Table",
    price: "$7,999",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  }
]

const Home = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold text-gold-500 mb-6 animate-fade-in">
            Luxury Redefined
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
            Experience unparalleled elegance in every detail
          </p>
          <button onClick={() => router.push("/products")} className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gold-500 mb-4">
              Curated Excellence
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover our exclusive collection of premium designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500"></div>
                <img
                  src={item.image}
                  alt="Luxury item" 
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">Premium Design {item.title}</h3>
                  <p className="text-gold-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold-500/10 py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
            Crafting Timeless Elegance
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Immerse yourself in a world where sophistication meets modern design, creating spaces that inspire and delight.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 uppercase tracking-widest font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border border-gold-500 hover:bg-gold-500/20 text-gold-500 px-8 py-3 uppercase tracking-widest font-semibold transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
