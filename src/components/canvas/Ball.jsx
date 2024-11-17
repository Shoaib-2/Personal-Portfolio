import React, { Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = React.memo(({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  // Use useFrame for animations instead of Float
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.y = a; // Rotate the ball
  });

  const mesh = useRef();
  
  return (
    <mesh ref={mesh} castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#80d4ff"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}
      />
    </mesh>
  );
});

const BallCanvas = ({ icon }) => {
  const isMobile = window.innerWidth <= 768; // Adjust based on your mobile breakpoint

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: isMobile ? 45 : 75 }} // Adjust camera for mobile
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;