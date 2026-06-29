"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ParticlesBg() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let animationFrameId;
    let lastScrollY = window.scrollY;
    let mouse = { x: -1000, y: -1000, active: false, vx: 0, vy: 0 };
    let lastMouse = { x: -1000, y: -1000 };
    let isEnabled = localStorage.getItem("particles-enabled") !== "false";

    let hwCores = 4;
    let hwRam = 4;
    if (typeof navigator !== "undefined") {
      hwCores = navigator.hardwareConcurrency || 4;
      hwRam = navigator.deviceMemory || 4;
    }
    const isLowEnd = hwCores <= 3 || hwRam <= 2;
    const isMidEnd = hwCores <= 4 && hwRam <= 4 && !isLowEnd;
    const pMultiplier = isLowEnd ? 0.3 : (isMidEnd ? 0.6 : 1);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.vx = mouse.x - lastMouse.x;
      mouse.vy = mouse.y - lastMouse.y;
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.active = true;
    };
    
    const handleMouseLeave = () => {
      mouse.active = false;
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    const isDark = theme === "dark";
    const isMobile = window.innerWidth < 768;
    const PI2 = Math.PI * 2;

    const colorsDark = ["rgba(59, 130, 246,", "rgba(168, 85, 247,", "rgba(236, 72, 153,", "rgba(16, 185, 129,"];
    const colorsLight = ["rgba(14, 165, 233,", "rgba(139, 92, 246,", "rgba(245, 158, 11,", "rgba(16, 185, 129,"];
    
    const getRandColor = () => {
      const palette = isDark ? colorsDark : colorsLight;
      return palette[Math.floor(Math.random() * palette.length)];
    };

    const particleCount = Math.floor((isMobile ? 80 : 160) * pMultiplier);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const depth = Math.random() * 2 + 0.5;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: ((Math.random() - 0.5) * 0.3) / depth,
        vy: ((Math.random() - 0.5) * 0.3) / depth,
        radius: (Math.random() * 1.5 + 0.5) * (3 / depth),
        mass: Math.random() * 1.2 + 0.5,
        color: getRandColor(),
        depth: depth
      });
    }

    const vThreadCount = Math.floor((isMobile ? 25 : 50) * pMultiplier);
    const vThreads = [];
    for (let i = 0; i < vThreadCount; i++) {
      const depth = Math.random() * 2 + 0.5;
      vThreads.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: (Math.random() * 150 + 50) * (2 / depth),
        speed: (Math.random() * 1.2 + 0.4) * (2 / depth),
        width: (Math.random() * 1.5 + 0.5) * (1.5 / depth),
        color: getRandColor(),
        alpha: (Math.random() * 0.3 + 0.1) / depth,
        depth: depth
      });
    }

    const hStreamCount = Math.floor((isMobile ? 15 : 30) * pMultiplier);
    const hStreams = [];
    for (let i = 0; i < hStreamCount; i++) {
      const depth = Math.random() * 2 + 0.5;
      hStreams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: (Math.random() * 200 + 100) * (2 / depth),
        speed: ((Math.random() * 1.5 + 0.8) * (Math.random() > 0.5 ? 1 : -1)) * (2 / depth),
        width: (Math.random() * 2 + 0.5) * (1.5 / depth),
        color: getRandColor(),
        alpha: (Math.random() * 0.4 + 0.1) / depth,
        depth: depth
      });
    }

    const flares = [];
    const createFlare = () => {
      flares.push({
        x: Math.random() > 0.5 ? -100 : canvas.width + 100,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() * 6 + 4) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() - 0.5) * 2,
        length: Math.random() * 300 + 150,
        color: getRandColor(),
        alpha: 1,
        width: Math.random() * 2 + 1
      });
    };

    let holeAngle = 0;
    let ringAngle1 = 0;
    let ringAngle2 = Math.PI;

    const animate = () => {
      if (!isEnabled) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let currentScrollY = window.scrollY;
      let deltaY = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      const flareChance = (isMobile ? 0.002 : 0.004) * pMultiplier;
      if (Math.random() < flareChance && !isLowEnd) {
        createFlare();
      }

      for (let i = flares.length - 1; i >= 0; i--) {
        let f = flares[i];
        f.x += f.vx;
        f.y += f.vy - deltaY;
        f.alpha -= 0.004;

        const grad = ctx.createLinearGradient(f.x, f.y, f.x - f.vx * 10, f.y - f.vy * 10);
        grad.addColorStop(0, `${f.color} ${f.alpha})`);
        grad.addColorStop(1, `${f.color} 0)`);

        ctx.beginPath();
        ctx.moveTo(f.x, f.y);
        ctx.lineTo(f.x - (f.vx / Math.abs(f.vx || 1)) * f.length, f.y - (f.vy / Math.abs(f.vy || 1)) * f.length);
        ctx.strokeStyle = grad;
        ctx.lineWidth = f.width;
        ctx.stroke();

        if (f.alpha <= 0 || f.x < -500 || f.x > canvas.width + 500 || f.y < -500 || f.y > canvas.height + 500) {
          flares.splice(i, 1);
        }
      }

      if (mouse.active) {
        ctx.beginPath();
        const mouseGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 120);
        if (isDark) {
          mouseGlow.addColorStop(0, "rgba(59, 130, 246, 0.15)");
          mouseGlow.addColorStop(1, "rgba(59, 130, 246, 0)");
        } else {
          mouseGlow.addColorStop(0, "rgba(245, 158, 11, 0.15)");
          mouseGlow.addColorStop(1, "rgba(245, 158, 11, 0)");
        }
        ctx.fillStyle = mouseGlow;
        ctx.arc(mouse.x, mouse.y, 120, 0, PI2);
        ctx.fill();
      }

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = docHeight > 0 ? Math.min(currentScrollY / docHeight, 1) : 0;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const gravityStrength = scrollRatio * 800;

      if (scrollRatio > 0.01) {
        holeAngle += 0.005;
        ringAngle1 += 0.01;
        ringAngle2 -= 0.008;
        const dynamicHoleRadius = scrollRatio * 65;

        ctx.save();
        ctx.translate(centerX, centerY);

        ctx.save();
        ctx.rotate(holeAngle);
        const rInner = Math.max(0.1, dynamicHoleRadius);
        const rOuter = Math.max(0.2, dynamicHoleRadius * 6);
        const outerGlow = ctx.createRadialGradient(0, 0, rInner, 0, 0, rOuter);
        
        if (isDark) {
          outerGlow.addColorStop(0, `rgba(15, 23, 42, ${scrollRatio})`);
          outerGlow.addColorStop(0.2, `rgba(168, 85, 247, ${scrollRatio * 0.4})`);
          outerGlow.addColorStop(0.5, `rgba(59, 130, 246, ${scrollRatio * 0.15})`);
          outerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        } else {
          outerGlow.addColorStop(0, `rgba(255, 255, 255, ${scrollRatio * 0.9})`);
          outerGlow.addColorStop(0.2, `rgba(14, 165, 233, ${scrollRatio * 0.4})`);
          outerGlow.addColorStop(0.5, `rgba(139, 92, 246, ${scrollRatio * 0.15})`);
          outerGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
        }
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(0, 0, rOuter, 0, PI2);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.rotate(ringAngle1);
        ctx.beginPath();
        ctx.ellipse(0, 0, dynamicHoleRadius * 2.5, dynamicHoleRadius * 0.8, 0, 0, PI2);
        ctx.strokeStyle = isDark ? `rgba(236, 72, 153, ${scrollRatio * 0.5})` : `rgba(14, 165, 233, ${scrollRatio * 0.7})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.rotate(ringAngle2);
        ctx.beginPath();
        ctx.ellipse(0, 0, dynamicHoleRadius * 3.5, dynamicHoleRadius * 0.5, 0, 0, PI2);
        ctx.strokeStyle = isDark ? `rgba(59, 130, 246, ${scrollRatio * 0.6})` : `rgba(139, 92, 246, ${scrollRatio * 0.7})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        ctx.fillStyle = isDark ? "#000000" : "#ffffff";
        if (!isDark) {
          ctx.shadowColor = "rgba(14, 165, 233, 0.5)";
          ctx.shadowBlur = 20;
        }
        ctx.beginPath();
        ctx.arc(0, 0, dynamicHoleRadius, 0, PI2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.restore();
      }

      vThreads.forEach(t => {
        t.y += t.speed - deltaY;
        if (t.y < -t.length - 150) {
          t.y = canvas.height + Math.random() * 200;
          t.x = Math.random() * canvas.width;
        } else if (t.y > canvas.height + 150) {
          t.y = -t.length - Math.random() * 200;
          t.x = Math.random() * canvas.width;
        }

        let midX = t.x;
        let midY = t.y + t.length / 2;
        let cpX = midX;
        let cpY = midY;

        if (scrollRatio > 0.01) {
          let dx = centerX - midX;
          let dy = centerY - midY;
          let distSq = dx * dx + dy * dy;
          let horizon = scrollRatio * 65;
          if (distSq > horizon * horizon) {
            let dist = Math.sqrt(distSq);
            let pull = (gravityStrength / (dist + 50)) * 2 * (1 / t.depth);
            cpX += (dx / dist) * pull;
            cpY += (dy / dist) * pull;
          }
        }

        if (mouse.active) {
          let mdx = mouse.x - midX;
          let mdy = mouse.y - midY;
          let mDistSq = mdx * mdx + mdy * mdy;
          if (mDistSq < 22500) {
            let mDist = Math.sqrt(mDistSq);
            let mForce = (150 - mDist) * 0.5;
            cpX -= (mdx / mDist) * mForce;
            cpY -= (mdy / mDist) * mForce;
          }
        }

        ctx.beginPath();
        ctx.moveTo(t.x, t.y);
        ctx.quadraticCurveTo(cpX, cpY, t.x, t.y + t.length);
        ctx.strokeStyle = `${t.color} ${t.alpha})`;
        ctx.lineWidth = t.width;
        ctx.stroke();
      });

      hStreams.forEach(s => {
        s.x += s.speed;
        s.y -= deltaY;
        if (s.y < -150) {
          s.y = canvas.height + Math.random() * 200;
          s.x = Math.random() * canvas.width;
        } else if (s.y > canvas.height + 150) {
          s.y = -Math.random() * 200;
          s.x = Math.random() * canvas.width;
        }

        if (s.speed > 0 && s.x > canvas.width) {
          s.x = -s.length;
        } else if (s.speed < 0 && s.x < -s.length) {
          s.x = canvas.width;
        }

        let midX = s.x + s.length / 2;
        let midY = s.y;
        let cpX = midX;
        let cpY = midY;

        if (scrollRatio > 0.01) {
          let dx = centerX - midX;
          let dy = centerY - midY;
          let distSq = dx * dx + dy * dy;
          let horizon = scrollRatio * 65;
          if (distSq > horizon * horizon) {
            let dist = Math.sqrt(distSq);
            let pull = (gravityStrength / (dist + 50)) * 2.5 * (1 / s.depth);
            cpX += (dx / dist) * pull;
            cpY += (dy / dist) * pull;
          }
        }

        if (mouse.active) {
          let mdx = mouse.x - midX;
          let mdy = mouse.y - midY;
          let mDistSq = mdx * mdx + mdy * mdy;
          if (mDistSq < 22500) {
            let mDist = Math.sqrt(mDistSq);
            let mForce = (150 - mDist) * 0.5;
            cpX -= (mdx / mDist) * mForce;
            cpY -= (mdy / mDist) * mForce;
          }
        }

        let grad = ctx.createLinearGradient(s.x, s.y, s.x + s.length, s.y);
        grad.addColorStop(0, `${s.color} 0)`);
        grad.addColorStop(0.5, `${s.color} ${s.alpha})`);
        grad.addColorStop(1, `${s.color} 0)`);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.quadraticCurveTo(cpX, cpY, s.x + s.length, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.stroke();
      });

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        if (scrollRatio > 0.01) {
          const dx = centerX - p.x;
          const dy = centerY - p.y;
          const distSq = dx * dx + dy * dy;
          const horizon = scrollRatio * 65;

          if (distSq > (horizon + 5) * (horizon + 5)) {
            const dist = Math.sqrt(distSq);
            const pull = (3 / dist) * scrollRatio * (2 / p.mass) * (1 / p.depth);
            p.vx += dx * pull;
            p.vy += dy * pull;

            const orbit = (4 / dist) * scrollRatio * (1 / p.depth);
            const rx = p.x - centerX;
            const ry = p.y - centerY;
            p.x = centerX + rx * Math.cos(orbit) - ry * Math.sin(orbit);
            p.y = centerY + rx * Math.sin(orbit) + ry * Math.cos(orbit);

            p.vx *= 0.95;
            p.vy *= 0.95;
          } else {
            p.x = Math.random() * canvas.width;
            p.y = Math.random() > 0.5 ? -20 : canvas.height + 20;
            p.vx = ((Math.random() - 0.5) * 0.3) / p.depth;
            p.vy = ((Math.random() - 0.5) * 0.3) / p.depth;
          }
        } else {
          if (mouse.active) {
            const mdx = mouse.x - p.x;
            const mdy = mouse.y - p.y;
            const mDistSq = mdx * mdx + mdy * mdy;
            if (mDistSq < 32400) {
              const mDist = Math.sqrt(mDistSq);
              const mForce = (1 - mDist / 180) * 0.03 * (1 / p.depth);
              p.vx -= mdx * mForce;
              p.vy -= mdy * mForce;
              p.x += mouse.vx * 0.01 * (1 / p.depth);
              p.y += mouse.vy * 0.01 * (1 / p.depth);
            }
          }

          p.vx += ((Math.random() - 0.5) * 0.01) / p.depth;
          p.vy += ((Math.random() - 0.5) * 0.01) / p.depth;

          const limitSq = (0.7 / p.depth) * (0.7 / p.depth);
          const speedSq = p.vx * p.vx + p.vy * p.vy;
          if (speedSq > limitSq) {
            const speed = Math.sqrt(speedSq);
            const limit = 0.7 / p.depth;
            p.vx = (p.vx / speed) * limit;
            p.vy = (p.vy / speed) * limit;
          }
        }

        p.x += p.vx;
        p.y += p.vy - deltaY;

        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        
        if (p.y < -150) {
          p.y = canvas.height + Math.random() * 200;
          p.x = Math.random() * canvas.width;
        } else if (p.y > canvas.height + 150) {
          p.y = -Math.random() * 200;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, PI2);
        ctx.fillStyle = `${p.color} ${isDark ? 0.8 / p.depth : 0.9 / p.depth})`;
        ctx.fill();

        if (!isLowEnd) {
          for (let j = i + 1; j < particles.length; j++) {
            let p2 = particles[j];
            let ddx = p.x - p2.x;
            let ddy = p.y - p2.y;
            let distSq = ddx * ddx + ddy * ddy;

            if (distSq < (isMobile ? 4900 : 8100)) {
              let distance = Math.sqrt(distSq);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              let opacity = (1 - distance / (isMobile ? 70 : 90)) * (1 / Math.max(p.depth, p2.depth));
              ctx.strokeStyle = isDark 
                ? `rgba(147, 197, 253, ${opacity * 0.25})` 
                : `rgba(71, 85, 105, ${opacity * 0.4})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleToggleEvent = (e) => {
      isEnabled = e.detail;
      if (isEnabled) {
        lastScrollY = window.scrollY;
        cancelAnimationFrame(animationFrameId);
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    
    window.addEventListener("particles-toggle", handleToggleEvent);

    if (isEnabled) {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("particles-toggle", handleToggleEvent);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1
      }} 
    />
  );
}