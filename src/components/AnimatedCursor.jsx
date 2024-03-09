import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimatedCursor = () => {
  return (
    <AnimatedCursor 
    
    color="#000"
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={1.7}
    outerAlpha={0}
    outerStyle={{
      mixBlendMode: 'exclusion'
    }}
  />

  )
}

export default AnimatedCursor