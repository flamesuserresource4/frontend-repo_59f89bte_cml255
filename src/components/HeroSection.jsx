import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gray-950 text-white flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Crafting modern web experiences
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            I build delightful, performant applications with React, TypeScript, and great developer ergonomics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-white text-gray-900 px-5 py-2.5 font-medium hover:bg-gray-100">View Projects</a>
            <a href="#contact" className="rounded-md bg-transparent border border-white/30 px-5 py-2.5 font-medium text-white hover:bg-white/10">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
