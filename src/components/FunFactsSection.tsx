import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return count;
}

export default function FunFactsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const intensityTargetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projectCount = useCountUp(2, 2000, isVisible);
  const worldCount = useCountUp(5, 2000, isVisible);

  const heading = 'Consistently delivering impactful results through a perfect blend of design and functionality.';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current.x = (e.clientX - rect.left) / rect.width;
    mouseRef.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
    intensityTargetRef.current = 1;
  };

  const handleMouseLeave = () => {
    intensityTargetRef.current = 0;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = canvas.offsetWidth || 420;
    const H = canvas.offsetHeight || 480;
    canvas.width = W;
    canvas.height = H;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false });
    renderer.setSize(W, H, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    // @ts-ignore – three.js lacks bundled types in this build
    loader.load(
      'https://images.weserv.nl/?url=floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6.webp',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (texture: any) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        const mat = new THREE.ShaderMaterial({
          uniforms: {
            uTexture: { value: texture },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uTime: { value: 0 },
            uIntensity: { value: 0 },
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = vec4(position.xy, 0.0, 1.0);
            }
          `,
          fragmentShader: `
            uniform sampler2D uTexture;
            uniform vec2 uMouse;
            uniform float uTime;
            uniform float uIntensity;
            varying vec2 vUv;
            void main() {
              vec2 uv = vUv;
              vec2 dir = uv - uMouse;
              float dist = length(dir);
              float wave = sin(dist * 28.0 - uTime * 6.0);
              wave *= uIntensity * 0.038;
              wave *= 1.0 - smoothstep(0.0, 0.45, dist);
              if (dist > 0.001) uv += (dir / dist) * wave;
              gl_FragColor = texture2D(uTexture, clamp(uv, 0.001, 0.999));
            }
          `,
        });
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
        scene.add(mesh);
        let currentIntensity = 0;
        const tick = (time: number) => {
          currentIntensity += (intensityTargetRef.current - currentIntensity) * 0.06;
          mat.uniforms.uTime.value = time * 0.001;
          mat.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
          mat.uniforms.uIntensity.value = currentIntensity;
          renderer.render(scene, camera);
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      }
    );
    return () => {
      cancelAnimationFrame(rafRef.current);
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT: Sticky image with Three.js ripple distortion */}
          <div className="lg:sticky lg:top-24 flex justify-center">
            <div
              className="rounded-3xl overflow-hidden w-full max-w-[420px] h-[320px] sm:h-[400px] md:h-[480px] transition-all duration-[1.2s] ease-out"
              style={{ clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
          </div>

          {/* RIGHT: Heading + all scrolling cards */}
          <div className="flex flex-col gap-6">

            {/* FUN FACTS label */}
            <p
              className="text-xs uppercase tracking-[0.2em] text-gray-400 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '0.2s',
              }}
            >
              FUN FACTS
            </p>

            {/* Heading with per-character reveal */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] leading-[1.2] text-black mb-4"
              style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300 }}
            >
              {heading.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-500 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                    transitionDelay: `${0.3 + i * 0.006}s`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h2>

            {/* Row 1: "2k+" card + "4.9/5" card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Successful projects card */}
              <div
                className="bg-white rounded-2xl p-6 flex items-center justify-between transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: '0.5s',
                }}
              >
                <div>
                  <p className="text-gray-500 text-sm leading-snug">Successful projects<br />completed</p>
                </div>
                <h3
                  className="text-5xl text-gray-300"
                  style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300 }}
                >
                  {projectCount}k<span className="text-3xl align-top">+</span>
                </h3>
              </div>

              {/* 4.9/5 rating card */}
              <div
                className="bg-white rounded-2xl p-6 flex flex-col transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: '0.65s',
                }}
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3
                  className="text-6xl md:text-7xl text-black"
                  style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 700 }}
                >
                  4.9/5
                </h3>
              </div>
            </div>

            {/* Row 2: Dark image card + Rating description + Hire Us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Dark card with tilted images */}
              <div
                className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] relative overflow-hidden transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: '0.8s',
                }}
              >
                {/* Tilted images */}
                <div className="relative h-[160px] mb-4">
                  <img
                    src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8.webp"
                    alt=""
                    className="absolute left-4 top-2 w-[140px] h-[130px] rounded-xl object-cover shadow-xl transition-transform duration-700"
                    style={{
                      transform: isVisible ? 'rotate(-8deg) translateY(0)' : 'rotate(-8deg) translateY(40px)',
                      transitionDelay: '1s',
                    }}
                  />
                  <img
                    src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img9.webp"
                    alt=""
                    className="absolute right-4 top-0 w-[140px] h-[130px] rounded-xl object-cover shadow-xl transition-transform duration-700"
                    style={{
                      transform: isVisible ? 'rotate(6deg) translateY(0)' : 'rotate(6deg) translateY(40px)',
                      transitionDelay: '1.15s',
                    }}
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
                </p>
              </div>

              {/* Right sub-column: description + hire us */}
              <div className="flex flex-col gap-5">
                <div
                  className="bg-white rounded-2xl p-6 flex-1 flex flex-col justify-between transition-all duration-700 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: '0.95s',
                  }}
                >
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                    We offer end-to-end creative solutions that make brands unforgettable.
                  </p>
                  <a href="#" className="inline-flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform">+</span>
                    <span className="text-black text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Hire Us Now
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Row 3: Worldwide base card */}
            <div
              className="relative rounded-2xl overflow-hidden min-h-[140px] flex items-center transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '1.1s',
              }}
            >
              <img
                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6.webp"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex items-center justify-between w-full px-8 py-6">
                <p className="text-white font-semibold text-base leading-snug">
                  Worldwide base<br />around the world
                </p>
                <h3
                  className="text-5xl text-white"
                  style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300 }}
                >
                  {worldCount}<span className="text-3xl align-top">+</span>
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
