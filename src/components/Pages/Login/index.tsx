/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"
import { Lock, User, Github, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Luxury background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      <div className="w-full max-w-6xl bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden flex flex-row-reverse relative z-10">
        {/* Left side with images */}
        <div className="hidden lg:block lg:w-1/2 relative ">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Luxury background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-4xl font-bold text-white mb-4">Experience Luxury</h2>
            <p className="text-xl text-gray-300">Indulge in the finest our platform has to offer.</p>
          </div>
        </div>

        {/* Right side with login form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-8 relative"
        >
          {/* Luxury Decorative Elements */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-1 bg-gold-500 rounded-full" />
          </div>

          {/* Header Section */}
          <div className="text-center mb-10">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-playfair font-bold text-gold-500 mb-2"
            >
              Welcome Back
            </motion.h1>
            <p className="text-gray-300">Sign in to your luxury account</p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Email Input */}
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500/80" size={20} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/30 border border-gold-500/20 rounded-lg text-gray-300 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all"
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500/80" size={20} />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/30 border border-gold-500/20 rounded-lg text-gray-300 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-all"
                />
              </div>
            </motion.div>

            {/* Remember Me & Forgot Password */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between"
            >
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-gold-500 bg-slate-700/30 border border-gold-500/20 rounded focus:ring-gold-500/50"
                />
                <span className="text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-gold-500 hover:text-gold-400 text-sm">
                Forgot Password?
              </a>
            </motion.div>

            {/* Login Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[--lux-gold-500] to-[--lux-gold-600] text-black py-3 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-gold-500/20 transition-all"
            >
              Sign In
            </motion.button>
          </form>

          {/* Social Login Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gold-500/20" />
            <span className="px-4 text-gray-300 text-sm">Or continue with</span>
            <div className="flex-1 border-t border-gold-500/20" />
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Github, color: "text-gray-300" },
              { icon: Facebook, color: "text-blue-500" },
              { icon: Twitter, color: "text-sky-500" },
            ].map((social, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-700/30 border border-gold-500/20 rounded-lg flex items-center justify-center hover:bg-slate-700/50 transition-all"
              >
                <social.icon className={`${social.color}`} size={20} />
              </motion.button>
            ))}
          </div>

          {/* Sign Up Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <span className="text-gray-300">Don't have an account? </span>
            <Link href="/register" className="text-gold-500 hover:text-gold-400 font-semibold">
              Create Account
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default LoginPage