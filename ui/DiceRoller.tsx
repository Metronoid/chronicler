"use client"; // This is required!

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, useBox, useRaycastAll } from '@react-three/cannon'

function Box(props: any) {
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [ref, api] = useBox(() => ({ mass: 1 }))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


export const DiceRoller = () => {

  return (<Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Physics>
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
    </Physics>
  </Canvas>)
}
