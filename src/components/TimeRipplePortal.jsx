import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Portal ring with ripple effect
const PortalRing = () => {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColor1: { value: new THREE.Color('#3B82F6') },
        uColor2: { value: new THREE.Color('#8B5CF6') },
        uColor3: { value: new THREE.Color('#10B981') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float uTime;
        uniform vec2 uMouse;
        
        void main() {
          vUv = uv;
          vPosition = position;
          
          vec3 pos = position;
          float dist = length(pos.xy);
          
          // Ripple waves
          float ripple = sin(dist * 8.0 - uTime * 3.0) * 0.03;
          ripple += sin(dist * 12.0 - uTime * 4.0) * 0.02;
          
          // Mouse influence
          float mouseInfluence = (uMouse.x * pos.x + uMouse.y * pos.y) * 0.1;
          
          pos.z += ripple + mouseInfluence;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          float dist = length(vPosition.xy);
          
          // Create portal hole in center
          if (dist < 0.6) {
            // Inner portal void with gradient
            float voidGradient = smoothstep(0.3, 0.6, dist);
            vec3 voidColor = mix(vec3(0.02, 0.02, 0.05), uColor1 * 0.3, voidGradient);
            
            // Swirling pattern inside
            float angle = atan(vPosition.y, vPosition.x);
            float swirl = sin(angle * 5.0 + uTime * 2.0 + dist * 10.0) * 0.5 + 0.5;
            voidColor += swirl * uColor2 * 0.15 * (1.0 - voidGradient);
            
            gl_FragColor = vec4(voidColor, 0.95);
            return;
          }
          
          // Ring gradient
          float ringDist = (dist - 0.6) / 0.5;
          
          // Energy waves
          float wave1 = sin(dist * 15.0 - uTime * 4.0) * 0.5 + 0.5;
          float wave2 = sin(dist * 20.0 - uTime * 5.0) * 0.5 + 0.5;
          float wave3 = cos(dist * 10.0 - uTime * 3.0) * 0.5 + 0.5;
          
          // Angle-based color variation
          float angle = atan(vPosition.y, vPosition.x);
          float angleVar = sin(angle * 3.0 + uTime) * 0.5 + 0.5;
          
          // Mix colors
          vec3 color = mix(uColor1, uColor2, wave1 * angleVar);
          color = mix(color, uColor3, wave2 * 0.3);
          
          // Glow intensity
          float glow = wave1 * 0.4 + wave2 * 0.3 + wave3 * 0.3;
          glow *= (1.0 - ringDist); // Fade toward edges
          
          // Edge glow
          float edgeGlow = smoothstep(0.6, 0.65, dist) * smoothstep(1.1, 0.9, dist);
          
          color += uColor1 * edgeGlow * 0.5;
          
          float alpha = glow * 0.8 + edgeGlow * 0.5;
          alpha *= smoothstep(1.1, 0.8, dist);
          
          gl_FragColor = vec4(color * (1.0 + glow * 0.5), alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  const { mouse } = useThree();

  useFrame((state) => {
    mouseRef.current.x += (mouse.x - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (mouse.y - mouseRef.current.y) * 0.05;
    
    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
  });

  return (
    <mesh ref={meshRef} material={material}>
      <circleGeometry args={[1.1, 64]} />
    </mesh>
  );
};

// Portal edge sparks
const PortalSparks = () => {
  const particlesRef = useRef();
  const count = 80;
  
  const { positions, velocities, lifetimes, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = [];
    const lifetimes = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    
    const palette = [
      new THREE.Color('#3B82F6'),
      new THREE.Color('#8B5CF6'),
      new THREE.Color('#10B981'),
      new THREE.Color('#06B6D4'),
    ];
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 0.65 + Math.random() * 0.1;
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
      
      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: Math.random() * 0.01,
        baseAngle: angle,
        orbitSpeed: 0.5 + Math.random() * 0.5,
      });
      
      lifetimes[i] = Math.random();
      
      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, velocities, lifetimes, colors };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    
    const time = state.clock.elapsedTime;
    const positionArray = particlesRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      const v = velocities[i];
      
      // Orbit around portal edge
      const angle = v.baseAngle + time * v.orbitSpeed;
      const radius = 0.62 + Math.sin(time * 2 + i) * 0.08;
      
      positionArray[i * 3] = Math.cos(angle) * radius + Math.sin(time * 3 + i) * 0.03;
      positionArray[i * 3 + 1] = Math.sin(angle) * radius + Math.cos(time * 2.5 + i) * 0.03;
      positionArray[i * 3 + 2] = Math.sin(time * 4 + i * 0.5) * 0.1;
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Skills data - keeping for potential future use
// const skills = [...]

// Text label using canvas texture
const SkillLabel = ({ text, color }) => {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, 512, 128);
    
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;
    
    ctx.font = 'bold 56px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.strokeText(text, 256, 64);
    
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, 256, 64);
    
    ctx.shadowBlur = 30;
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.8;
    ctx.fillText(text, 256, 64);
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, [text, color]);

  return (
    <sprite scale={[1.2, 0.3, 1]}>
      <spriteMaterial 
        map={texture} 
        transparent 
        opacity={1}
        depthTest={false}
      />
    </sprite>
  );
};

// Message that emerges from portal
const PortalMessage = ({ triggered }) => {
  const groupRef = useRef();
  const progressRef = useRef(0);
  const startTime = useRef(null);
  const lastTriggered = useRef(false);
  const isAnimatingOut = useRef(false);

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, 1024, 200);
    
    // Glow
    ctx.shadowColor = '#8B5CF6';
    ctx.shadowBlur = 20;
    
    ctx.font = 'bold 32px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Outline
    ctx.strokeStyle = '#251f1fff';
    ctx.lineWidth = 4;
    ctx.strokeText('If this is what I can make,', 512, 70);
    ctx.strokeText('Imagine if you hire me!', 512, 120);
    
    // Fill
    ctx.fillStyle = '#13b6d3ff';
    ctx.fillText('If this is what I can make,', 512, 70);
    ctx.fillText('Imagine if you hire me!', 512, 120);
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    
    // Detect state change
    if (triggered !== lastTriggered.current) {
      lastTriggered.current = triggered;
      startTime.current = time;
      isAnimatingOut.current = !triggered;
    }
    
    if (startTime.current === null) {
      startTime.current = time;
    }
    
    const elapsed = time - startTime.current;
    
    if (triggered && !isAnimatingOut.current) {
      // Animate IN
      progressRef.current = Math.min(elapsed / 1.2, 1);
      const p = progressRef.current;
      
      // Ease out cubic
      const ease = 1 - Math.pow(1 - p, 3);
      
      groupRef.current.position.z = -1.5 + 2.5 * ease;
      groupRef.current.position.y = 0.1;
      
      const scale = ease * 1.2;
      groupRef.current.scale.setScalar(scale);
      
      // Gentle float after fully emerged
      if (p >= 1) {
        groupRef.current.position.y += Math.sin(time * 0.8) * 0.03;
      }
    } else if (isAnimatingOut.current) {
      // Animate OUT - reverse animation back into portal
      progressRef.current = Math.min(elapsed / 1.0, 1);
      const p = progressRef.current;
      
      // Ease in cubic (reverse of ease out)
      const ease = Math.pow(p, 2);
      
      // Go from current position back to portal center
      groupRef.current.position.z = 1 - 2.5 * ease;
      groupRef.current.position.y = 0.1 * (1 - ease);
      
      const scale = 1.2 * (1 - ease);
      groupRef.current.scale.setScalar(scale);
      
      // Reset after animation completes
      if (p >= 1) {
        groupRef.current.position.z = -3;
        groupRef.current.scale.setScalar(0);
        isAnimatingOut.current = false;
      }
    } else {
      // Hidden state
      groupRef.current.position.z = -3;
      groupRef.current.scale.setScalar(0);
    }
  });

  return (
    <group ref={groupRef}>
      <sprite scale={[2, 0.4, 1]}>
        <spriteMaterial 
          map={texture} 
          transparent 
          opacity={1}
          depthTest={false}
        />
      </sprite>
    </group>
  );
};

// Inner scene with message
const InnerScene = ({ triggered }) => {
  return (
    <group>
      <PortalMessage triggered={triggered} />
      <InnerParticles />
    </group>
  );
};

// Particles inside portal
const InnerParticles = () => {
  const ref = useRef();
  
  const particles = useMemo(() => {
    const arr = new Float32Array(30 * 3);
    for (let i = 0; i < 30; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 2;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={30} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#8B5CF6"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Outer glow ring
const GlowRing = () => {
  const ringRef = useRef();
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -0.05]}>
      <ringGeometry args={[0.95, 1.2, 64]} />
      <meshBasicMaterial
        color="#3B82F6"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Ambient background particles
const BackgroundParticles = () => {
  const ref = useRef();
  
  const particles = useMemo(() => {
    const arr = new Float32Array(40 * 3);
    for (let i = 0; i < 40; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={40} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#6366F1" transparent opacity={0.4} />
    </points>
  );
};

// Main component
const TimeRipplePortal = ({ className = '' }) => {
  const [triggered, setTriggered] = useState(false);

  const handleClick = () => {
    setTriggered(!triggered);
  };

  return (
    <div className={`${className} relative`}>
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', cursor: 'pointer' }}
        onClick={handleClick}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 2]} intensity={1} color="#3B82F6" />
        <pointLight position={[-2, 1, 1]} intensity={0.5} color="#8B5CF6" />
        <pointLight position={[2, -1, 1]} intensity={0.4} color="#10B981" />
        
        {/* Background glow */}
        <GlowRing />
        
        {/* Inner scene visible through portal */}
        <InnerScene triggered={triggered} />
        
        {/* Main portal with ripples */}
        <PortalRing />
        
        {/* Sparks around edge */}
        <PortalSparks />
        
        {/* Background particles */}
        <BackgroundParticles />
      </Canvas>
      
      {/* Click hint - completely outside on right with animated arrow */}
      {!triggered && (
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full pointer-events-none">
          <div className="flex items-center">
            {/* Animated robotic arrow */}
            <svg 
              width="90" 
              height="40" 
              viewBox="0 0 90 40" 
              className="text-accent-primary"
              style={{ marginLeft: '-35px' }}
            >
              {/* Glow filter */}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <linearGradient id="arrowGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#8B5CF6"/>
                  <stop offset="100%" stopColor="#3B82F6"/>
                </linearGradient>
              </defs>
              
              {/* Main line with gradient */}
              <line 
                x1="88" 
                y1="20" 
                x2="15" 
                y2="20" 
                stroke="url(#arrowGradient)" 
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#glow)"
              />
              
              {/* Animated pulse traveling along the line */}
              <circle r="3" fill="#8B5CF6" filter="url(#glow)">
                <animateMotion 
                  dur="1.5s" 
                  repeatCount="indefinite"
                  path="M88,20 L15,20"
                />
              </circle>
              
              {/* Arrow head - sleek design */}
              <path 
                d="M20 12 L8 20 L20 28" 
                stroke="#3B82F6" 
                strokeWidth="2.5" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              >
                <animate 
                  attributeName="stroke" 
                  values="#3B82F6;#8B5CF6;#3B82F6" 
                  dur="2s" 
                  repeatCount="indefinite"
                />
              </path>
              
              {/* Second arrow head for depth */}
              <path 
                d="M28 14 L18 20 L28 26" 
                stroke="#8B5CF6" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
                filter="url(#glow)"
              >
                <animate 
                  attributeName="opacity" 
                  values="0.3;0.7;0.3" 
                  dur="1.5s" 
                  repeatCount="indefinite"
                />
              </path>
              
              {/* Circuit node dots */}
              <circle cx="50" cy="20" r="3" fill="#8B5CF6" filter="url(#glow)">
                <animate 
                  attributeName="r" 
                  values="2;4;2" 
                  dur="2s" 
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="70" cy="20" r="2" fill="#3B82F6" filter="url(#glow)">
                <animate 
                  attributeName="opacity" 
                  values="0.5;1;0.5" 
                  dur="1.5s" 
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Small decorative lines */}
              <line x1="50" y1="16" x2="50" y2="12" stroke="#8B5CF6" strokeWidth="1" opacity="0.6"/>
              <line x1="50" y1="24" x2="50" y2="28" stroke="#8B5CF6" strokeWidth="1" opacity="0.6"/>
            </svg>
            
            {/* Text */}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold text-sm whitespace-nowrap">
              Click the portal
            </span>
          </div>
        </div>
      )}
      
      {/* Click again hint - shows when message is out */}
      {triggered && (
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full pointer-events-none">
          <div className="flex items-center animate-fade-in">
            {/* Animated robotic arrow pointing back */}
            <svg 
              width="90" 
              height="40" 
              viewBox="0 0 90 40" 
              className="text-accent-primary"
              style={{ marginLeft: '-35px' }}
            >
              {/* Glow filter */}
              <defs>
                <filter id="glowBack" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <linearGradient id="arrowGradientBack" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#3B82F6"/>
                  <stop offset="100%" stopColor="#8B5CF6"/>
                </linearGradient>
              </defs>
              
              {/* Main line with gradient */}
              <line 
                x1="88" 
                y1="20" 
                x2="15" 
                y2="20" 
                stroke="url(#arrowGradientBack)" 
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#glowBack)"
              />
              
              {/* Animated pulse traveling along the line */}
              <circle r="3" fill="#3B82F6" filter="url(#glowBack)">
                <animateMotion 
                  dur="1.5s" 
                  repeatCount="indefinite"
                  path="M88,20 L15,20"
                />
              </circle>
              
              {/* Arrow head */}
              <path 
                d="M20 12 L8 20 L20 28" 
                stroke="#8B5CF6" 
                strokeWidth="2.5" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glowBack)"
              >
                <animate 
                  attributeName="stroke" 
                  values="#8B5CF6;#3B82F6;#8B5CF6" 
                  dur="2s" 
                  repeatCount="indefinite"
                />
              </path>
              
              {/* Circuit node dots */}
              <circle cx="50" cy="20" r="3" fill="#3B82F6" filter="url(#glowBack)">
                <animate 
                  attributeName="r" 
                  values="2;4;2" 
                  dur="2s" 
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            
            {/* Text */}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold text-sm whitespace-nowrap">
              Click to send it back
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeRipplePortal;
