'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion';

const HeroSection = () => {

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemFromLeft: Variants = {
    hidden: { opacity: 0, x: -350 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const itemFromRight: Variants = {
    hidden: { opacity: 0, x: 350 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const progressBar: Variants = {
    hidden: { width: '0%' },
    show: {
      width: '100%',
      transition: {
        duration: 0.7,
        repeat: Infinity,
        repeatType: 'loop' as const,
        repeatDelay: 10,
        ease: 'linear'
      }
    }
  };

  return (
    <div 
      className="relative bg-contain lg:bg-fill bg-center bg-no-repeat py-2 md:py-10  lg:py-12"
      style={{ backgroundImage: "url('/goal-bg.jpg')" }}
    > 
    <div className="absolute inset-0 bg-black/30 z-0" />
      <div className='relative z-10 lg:max-w-6xl mx-auto'>
        <motion.div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-6 md:py-8 p-4" initial="hidden" animate="show" variants={container}>
          <motion.div className="space-y-3" variants={itemFromLeft}>
            <h3 className='text-[#FF1452] font-bold'>Welcome to Tracker</h3>
            <hr className='w-6 border-t-3 border-[#FF1452]'/>
            <div className="pt-4">
              <h2 className='text-4xl lg:text-[3.6rem] leading-16'>Simple Way to</h2>
              <h2 className='text-4xl lg:text-[3.4rem] leading-16 text-[var(--primary)]'>Find Your Goal</h2>
              <motion.hr 
                className='w-full max-w-sm border-t-4 border-[#FF1452] rounded-full' 
                variants={progressBar}
                initial="hidden"
                animate="show"
              />
            </div>
            <p className='text-gray-500 text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </motion.div>
          <motion.div className="lg:col-span-1 py-12" variants={itemFromRight}>
            <img src="/hero/hero-img.png" className='max-w-80 md:max-w-sm lg:max-w-xl mx-auto object-cover' alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection