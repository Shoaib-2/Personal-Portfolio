import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple noise function for organic movement
const noise = (x, y, z, t) => {
  return Math.sin(x * 2 + t) * Math.cos(y * 2 + t * 0.7) * Math.sin(z * 2 + t * 0.5) * 0.5;
};

const MorphingMesh = () => {
  const meshRef = useRef();
  const materialRef = useRef();
  
  // Create base geometry with enough vertices for smooth morphing
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1, 4);
    // Store original positions
    geo.userData.originalPositions = geo.attributes.position.array.slice();
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime * 0.5;
    const positions = meshRef.current.geometry.attributes.position.array;
    const original = meshRef.current.geometry.userData.originalPositions;
    
    // Morph cycle: 0-1 sphere, 1-2 cube-ish, 2-3 spiky
    const cycle = (time % 9) / 3;
    const phase = Math.floor(cycle);
    const blend = (cycle % 1);
    
    for (let i = 0; i < positions.length; i += 3) {
      const ox = original[i];
      const oy = original[i + 1];
      const oz = original[i + 2];
      
      // Normalize to get direction
      const length = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const nx = ox / length;
      const ny = oy / length;
      const nz = oz / length;
      
      // Add noise-based displacement
      const noiseVal = noise(nx, ny, nz, time) * 0.15;
      
      // Different shape targets
      let targetLength = length;
      
      if (phase === 0) {
        // Sphere to rounded cube transition
        const cubeInfluence = blend;
        const maxCoord = Math.max(Math.abs(nx), Math.abs(ny), Math.abs(nz));
        targetLength = length * (1 - cubeInfluence) + (length / maxCoord) * 0.7 * cubeInfluence;
      } else if (phase === 1) {
        // Rounded cube to spiky sphere
        const spikeInfluence = blend;
        const maxCoord = Math.max(Math.abs(nx), Math.abs(ny), Math.abs(nz));
        const cubeLength = (length / maxCoord) * 0.7;
        const spikeLength = length * (1 + Math.abs(noise(nx * 3, ny * 3, nz * 3, time * 2)) * 0.4);
        targetLength = cubeLength * (1 - spikeInfluence) + spikeLength * spikeInfluence;
      } else {
        // Spiky to smooth sphere
        const smoothInfluence = blend;
        const spikeLength = length * (1 + Math.abs(noise(nx * 3, ny * 3, nz * 3, time * 2)) * 0.4);
        targetLength = spikeLength * (1 - smoothInfluence) + length * smoothInfluence;
      }
      
      positions[i] = nx * (targetLength + noiseVal);
      positions[i + 1] = ny * (targetLength + noiseVal);
      positions[i + 2] = nz * (targetLength + noiseVal);
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
    
    // Gentle rotation
    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x += 0.001;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        ref={materialRef}
        color="#3B82F6"
        emissive="#3B82F6"
        emissiveIntensity={0.2}
        metalness={0.3}
        roughness={0.4}
        wireframe={false}
        flatShading
      />
    </mesh>
  );
};

// Wireframe overlay for tech aesthetic
const WireframeOverlay = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.3}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#8B5CF6"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
};

const MorphingGeometry = ({ className = "" }) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#3B82F6" />
        <pointLight position={[-10, -5, -10]} intensity={0.4} color="#8B5CF6" />
        <pointLight position={[0, -10, 5]} intensity={0.3} color="#10B981" />
        
        <MorphingMesh />
        <WireframeOverlay />
      </Canvas>
    </div>
  );
};

export default MorphingGeometry;
