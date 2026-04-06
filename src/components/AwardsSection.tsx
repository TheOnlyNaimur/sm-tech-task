import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const awards = [
  { title: 'BEST DESIGNER AWARDS', org: 'AWWWARDS', year: '2025' },
  { title: 'PEAKY UI DESIGNER', org: 'GOOGLE', year: '2024' },
  { title: 'GREAT IN UX', org: 'APPLE', year: '2023' },
  { title: 'BEST WEBSITE PICK', org: 'MICROSOFT', year: '2022' },
  { title: 'NELSON UI & UX DESIGNER', org: 'SAMSUNG', year: '2021' },
];

export default function AwardsSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const hoverRef = useRef(0);
  const hoverTargetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = canvas.offsetWidth || 360;
    const H = canvas.offsetHeight || 320;
    canvas.width = W * Math.min(window.devicePixelRatio, 2);
    canvas.height = H * Math.min(window.devicePixelRatio, 2);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    // @ts-ignore – three.js lacks bundled types in this build
    loader.load(
      'https://images.weserv.nl/?url=floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img12.jpg',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (texture: any) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const mat = new THREE.ShaderMaterial({
          uniforms: {
            uTexture: { value: texture },
            uMouse:   { value: new THREE.Vector2(0.5, 0.5) },
            uHover:   { value: 0.0 },
            uAspect:  { value: W / H },
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
            uniform vec2  uMouse;
            uniform float uHover;
            uniform float uAspect;
            varying vec2  vUv;

            // per-cell hash — deterministic random angle
            float hash(vec2 p) {
              return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
            }

            void main() {
              vec2 uv = vUv;

              // --- diamond grid ---
              // rotate UV 45 deg so square cells become diamonds in screen space
              float CELLS = 13.0;
              vec2 rotUv = vec2(uv.x + uv.y, uv.x - uv.y) * (CELLS * 0.5);
              vec2 cellId  = floor(rotUv);
              vec2 cellUv  = fract(rotUv); // [0,1] inside each cell

              // reconstruct cell-centre in original UV space
              vec2 cRot = (cellId + 0.5) / (CELLS * 0.5);
              vec2 cellCenter = vec2(
                (cRot.x + cRot.y) * 0.5,
                (cRot.x - cRot.y) * 0.5
              );

              // mouse influence — strongest near cursor, zero at 0.55 radius
              vec2 toMouse  = (cellCenter - uMouse) * vec2(uAspect, 1.0);
              float mDist   = length(toMouse);
              float influence = uHover * (1.0 - smoothstep(0.0, 0.55, mDist));

              // random displacement direction per cell, scaled by influence
              float angle  = hash(cellId) * 6.2832;
              float spread = influence * 0.11;
              vec2 offset  = vec2(cos(angle), sin(angle)) * spread;

              // diamond border: in rotated space a square border = diamond in screen
              vec2 b = abs(cellUv - 0.5);
              float borderMask = step(0.455, max(b.x, b.y));

              // sample displaced UV
              vec2 displaced = clamp(uv + offset, 0.001, 0.999);
              vec4 col = texture2D(uTexture, displaced);

              // darken the grid lines relative to hover strength
              col.rgb *= 1.0 - borderMask * influence * 2.2;

              gl_FragColor = col;
            }
          `,
        });

        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
        scene.add(mesh);

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const tick = () => {
          mouseRef.current.x = lerp(mouseRef.current.x, targetRef.current.x, 0.08);
          mouseRef.current.y = lerp(mouseRef.current.y, targetRef.current.y, 0.08);
          hoverRef.current   = lerp(hoverRef.current,   hoverTargetRef.current, 0.07);
          mat.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
          mat.uniforms.uHover.value = hoverRef.current;
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

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('anim-visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto">

        {/* Top: Image left + Heading right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          {/* Left: Image + GET REWARDS */}
          <div>
            <div
              className="rounded-2xl overflow-hidden w-full max-w-[360px] h-[260px] sm:h-[320px] cursor-pointer"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                targetRef.current.x = (e.clientX - rect.left) / rect.width;
                targetRef.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
                hoverTargetRef.current = 1;
              }}
              onMouseLeave={() => { hoverTargetRef.current = 0; }}
            >
              <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
            <p
              className="text-xs uppercase tracking-[0.25em] text-gray-400 mt-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              GET REWARDS
            </p>
          </div>

          {/* Right: Heading */}
          <h2
            ref={headingRef}
            className="slide-from-right text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] text-black leading-[1.15]"
            style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 300 }}
          >
            Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation.
          </h2>
        </div>

        {/* Awards list — right half only */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div /> {/* empty left */}
          <div className="flex flex-col">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group cursor-pointer border-t border-gray-200 last:border-b"
              >
                  <div className="flex items-center justify-between py-4 sm:py-6 transition-all duration-300 ease-out group-hover:mx-4 group-hover:scale-[0.97] origin-center">
                  <span
                    className="text-black font-semibold text-xs sm:text-sm md:text-[15px] tracking-wide"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {award.title}
                  </span>
                    <div className="flex items-center gap-4 sm:gap-10">
                    <span className="text-gray-400 text-sm">{award.org}</span>
                    <span className="text-gray-400 text-sm">{award.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
