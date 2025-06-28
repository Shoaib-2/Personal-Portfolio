import React, { useRef, useEffect } from "react";

// Animated floating star-like particles using canvas
const ParticleBG = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const numParticles = 24;
  const mouse = useRef({ x: 60, y: 60, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 120 * dpr;
    canvas.height = 120 * dpr;
    ctx.scale(dpr, dpr);

    // Initialize star-like particles
    if (particles.current.length === 0) {
      for (let i = 0; i < numParticles; i++) {
        particles.current.push({
          x: Math.random() * 120,
          y: Math.random() * 120,
          r: 0.7 + Math.random() * 1.2,
          dx: (Math.random() - 0.5) * 0.12,
          dy: (Math.random() - 0.5) * 0.12,
          baseSpeed: (Math.random() - 0.5) * 0.12,
          color: `#fff`
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, 120, 120);
      for (let p of particles.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.8;
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        // Move slowly
        if (mouse.current.active) {
          // Move in flow with cursor
          const dx = (mouse.current.x - p.x) * 0.008;
          const dy = (mouse.current.y - p.y) * 0.008;
          p.x += p.dx + dx;
          p.y += p.dy + dy;
        } else {
          p.x += p.dx;
          p.y += p.dy;
        }
        // Bounce off edges
        if (p.x < 0 || p.x > 120) p.dx *= -1;
        if (p.y < 0 || p.y > 120) p.dy *= -1;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Mouse interaction for hover effect
  useEffect(() => {
    const canvas = canvasRef.current;
    function handleMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = ((e.touches ? e.touches[0].clientX : e.clientX) - rect.left) / rect.width * 120;
      mouse.current.y = ((e.touches ? e.touches[0].clientY : e.clientY) - rect.top) / rect.height * 120;
      mouse.current.active = true;
    }
    function handleLeave() {
      mouse.current.active = false;
    }
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('touchmove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);
    canvas.addEventListener('touchend', handleLeave);
    return () => {
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('touchmove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      canvas.removeEventListener('touchend', handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={120}
      height={120}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, borderRadius: 20, pointerEvents: "auto" }}
    />
  );
};

export default ParticleBG;
