import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      {/* Hero Video Container  */}
      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75'>
        <div className='mask-clip-path'></div>
      </div>
    </div>
  )
}

export default Hero
