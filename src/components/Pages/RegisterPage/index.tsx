/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"

const Register = () => {
  const router = useRouter()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.img
            src="https://images.pexels.com/photos/7031723/pexels-photo-7031723.jpeg"
            alt="Luxury Interior"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        </div>

        {/* Animated Decorative Elements */}
        <motion.div
          className="absolute left-0 top-0 w-1/12 h-full bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae7b4b23')] bg-cover mix-blend-soft-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Registration Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 px-4 w-full max-w-2xl"
        >
          <form onSubmit={handleSubmit} className="bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716')] bg-cover bg-center rounded-xl shadow-2xl overflow-hidden">
            <div className="backdrop-blur-lg bg-slate-900/80 p-8">
              {/* Animated Logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex justify-center mb-8"
              >
                <img
                  src="https://images.pexels.com/photos/205316/pexels-photo-205316.png"
                  alt="Luxury brand logo"
                  className="h-16 w-16 object-contain hover:rotate-180 transition-transform duration-1000"
                />
              </motion.div>

              {/* Enhanced Title Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-4xl font-playfair font-bold text-gold-500 mb-8 text-center">
                  Exclusive Membership
                </h1>
                <p className="text-gray-300 text-center mb-6 max-w-md mx-auto">
                  Join our elite community and experience luxury redefined
                </p>
              </motion.div>

              {/* Form Inputs with Animations */}
              <div className="space-y-6">
                {[
                  { label: "Full Name", type: "text", placeholder: "Johnathan Smith" },
                  { label: "Email Address", type: "email", placeholder: "contact@luxury.com" },
                  { label: "Password", type: "password", placeholder: "••••••••" }
                ].map((field, index) => (
                  <motion.div
                    key={field.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <label className="block text-white mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-gold-500 focus:outline-none transition-all placeholder-gray-400 hover:border-gold-500/30"
                      required
                    />
                  </motion.div>
                ))}

                {/* Enhanced Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black py-3 px-6 uppercase tracking-widest font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-gold-500/30"
                >
                  <img
                    src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.png"
                    alt="Diamond icon"
                    className="h-5 w-5 animate-pulse"
                  />
                  Register Now
                </motion.button>
              </div>

              {/* Enhanced Footer Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-6"
              >
                <p className="text-gray-300">
                  Already have an account?{' '}
                  <Link href="/login" className="text-gold-500 hover:text-gold-400 underline transition-colors group">
                    Sign In
                    <span className="block h-0.5 bg-gold-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </p>
              </motion.div>
            </div>
          </form>
        </motion.div>

        {/* Animated Corner Elements */}
        <motion.div
          className="absolute right-8 top-8 w-32 h-32 border-t-2 border-r-2 border-gold-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
        <motion.div
          className="absolute left-8 bottom-8 w-32 h-32 border-b-2 border-l-2 border-gold-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        />
      </section>
    </div>
  )
}

export default Register