import React, { useEffect, useRef, useState } from 'react';
import { ThemeToggle, useTheme } from '../context/ThemeContext.tsx';
import { RoutePath } from '../types.ts';
import { 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  HeartHandshake, 
  Sparkles, 
  Smartphone, 
  Laptop, 
  ShieldCheck, 
  Zap, 
  Clock, 
  ZoomIn,
  ChevronDown,
  X
} from 'lucide-react';

interface PaidSalesPageProps {
  onNavigate: (path: RoutePath) => void;
}

const GUMROAD_PAID_URL = 'https://gopekk.gumroad.com/l/yfyp';
const HERO_VIDEO_SRC = '/assets/aistudio/lv_0_20261023204831_cb2fe07e.mp4';
const HERO_POSTER_SRC = '/assets/aistudio/Contemplation_Beneath_the_Golden_Clock_0c9eca28.png';
const COMPANION_BOOK_MOCKUP_SRC = '/assets/aistudio/Picsart_26-10-27_20-33-51-385_2a55ae2b.png';
const SCROLL_POP_VISIBILITY_RATIO = 0.4;
const SCROLL_POP_DELAY_MS = 1500;

const TESTIMONIAL_IMAGES = [
  {
    src: '/assets/aistudio/testimonial_1_fd4406a5.jpeg',
    alt: 'Customer feedback on interactive fillable version and structured workspaces by Amanda Foster and Brianna Williams',
    title: 'Fillable & Standard Version Practicality'
  },
  {
    src: '/assets/aistudio/testimonial_2_e7232933.jpeg',
    alt: 'YouTube comment review praising Memento Mori, 80/20 Dominoes, and Accountability Mirror',
    title: 'Memento Mori & 80/20 Dominoes Impact'
  },
  {
    src: '/assets/aistudio/testimonial_3_1e02ef21.jpeg',
    alt: 'User discussion on the 10-Area Life Alignment Diagnosis',
    title: '10-Area Life Alignment Diagnosis'
  },
  {
    src: '/assets/aistudio/testimonial_4_a0134ac6.jpeg',
    alt: 'Social review comparing the Protocol to generic motivation and planners',
    title: 'Confronting Reality vs. Motivation Scam'
  },
  {
    src: '/assets/aistudio/testimonial_5_62518520.jpeg',
    alt: 'User feedback highlighting the immense value and 80/20 domino effect',
    title: 'Execution Over Endless Planning'
  },
  {
    src: '/assets/aistudio/testimonial_6_7d574a97.jpeg',
    alt: 'Email from Kristi Willz commending the fillable design and the 5% charity commitment',
    title: 'Proceeds to Charity & Interactive Experience'
  }
];

export const PaidSalesPage: React.FC<PaidSalesPageProps> = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoFallback, setVideoFallback] = useState(false);
  const [companionStage, setCompanionStage] = useState<'collapsed' | 'opening' | 'expanded'>('collapsed');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );
  const pageRootRef = useRef<HTMLDivElement | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const companionHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const companionRevealTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (companionRevealTimerRef.current !== null) {
        window.clearTimeout(companionRevealTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || videoFallback) return;
    const video = heroVideoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err: unknown) => {
        const errorName = err instanceof Error ? err.name : '';
        if (errorName !== 'AbortError') {
          setVideoFallback(true);
        }
      });
    }
  }, [prefersReducedMotion, videoFallback]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const rootEl = pageRootRef.current;
    if (!rootEl || typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const holders = Array.from(rootEl.querySelectorAll<HTMLElement>('[data-scroll-pop="true"]'));
    if (holders.length === 0) return;

    const pendingTimers = new Map<HTMLElement, number>();
    const triggeredHolders = new WeakSet<HTMLElement>();

    const clearPendingTimer = (target: HTMLElement) => {
      const existingTimer = pendingTimers.get(target);
      if (existingTimer !== undefined) {
        window.clearTimeout(existingTimer);
        pendingTimers.delete(target);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (triggeredHolders.has(target) || target.classList.contains('scroll-pop-active')) {
            clearPendingTimer(target);
            observer.unobserve(target);
            return;
          }

          const elementHeight = entry.boundingClientRect.height;
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
          const effectiveThreshold =
            elementHeight > 0 && viewportHeight > 0 && viewportHeight / elementHeight < 0.45
              ? Math.min(SCROLL_POP_VISIBILITY_RATIO, (viewportHeight / elementHeight) * 0.75)
              : SCROLL_POP_VISIBILITY_RATIO;

          const isMeaningfullyVisible =
            entry.isIntersecting && entry.intersectionRatio >= effectiveThreshold;

          if (isMeaningfullyVisible) {
            if (!pendingTimers.has(target)) {
              const timerId = window.setTimeout(() => {
                pendingTimers.delete(target);
                triggeredHolders.add(target);
                target.classList.add('scroll-pop-active');
                observer.unobserve(target);
              }, SCROLL_POP_DELAY_MS);
              pendingTimers.set(target, timerId);
            }
          } else {
            clearPendingTimer(target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.35, SCROLL_POP_VISIBILITY_RATIO, 0.45],
      }
    );

    holders.forEach((holder) => {
      if (!holder.classList.contains('scroll-pop-active')) {
        observer.observe(holder);
      }
    });

    return () => {
      observer.disconnect();
      pendingTimers.forEach((timerId) => window.clearTimeout(timerId));
      pendingTimers.clear();
    };
  }, [prefersReducedMotion]);

  const handleRevealCompanion = () => {
    if (companionStage !== 'collapsed') return;
    if (prefersReducedMotion) {
      setCompanionStage('expanded');
      requestAnimationFrame(() => {
        companionHeadingRef.current?.focus({ preventScroll: true });
      });
      return;
    }
    setCompanionStage('opening');
    companionRevealTimerRef.current = window.setTimeout(() => {
      setCompanionStage('expanded');
      requestAnimationFrame(() => {
        companionHeadingRef.current?.focus({ preventScroll: true });
      });
    }, 180);
  };

  const scrollToHook = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('what-if-one-download');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const showStaticHero = prefersReducedMotion || videoFallback;

  return (
    <div ref={pageRootRef} className="min-h-screen overflow-x-clip bg-[#F4F4F4] dark:bg-[#0C0D11] text-[#111215] dark:text-[#F8F9FA] transition-colors duration-200">
      
      {/* =========================================================================
          HERO BANNER — SEAMLESS LOOPING CINEMATIC BACKGROUND VIDEO WITH STATIC FALLBACK
      ========================================================================= */}
      <section className="relative overflow-hidden bg-black text-white min-h-[430px] sm:min-h-[460px] lg:min-h-[490px] flex flex-col border-b border-[#E2E2E2] dark:border-neutral-800">
        
        {/* Hero Media Layer: Looping Video (or Static Image for reduced-motion / fallback) + Cinematic Gradient Scrims */}
        <div className="absolute inset-0 z-0 w-full h-full">
          {showStaticHero ? (
            <img
              src={HERO_POSTER_SRC}
              alt="Contemplation Beneath the Golden Clock"
              className="w-full h-full object-cover object-[70%_center] select-none pointer-events-none"
              loading="eager"
            />
          ) : (
            <video
              ref={heroVideoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={HERO_POSTER_SRC}
              disablePictureInPicture
              aria-hidden="true"
              onError={() => setVideoFallback(true)}
              className="w-full h-full object-cover object-[70%_center] select-none pointer-events-none"
            >
              <source
                src={HERO_VIDEO_SRC}
                type="video/mp4"
                onError={() => setVideoFallback(true)}
              />
            </video>
          )}
          {/* Balanced left-to-right readability & right-side/watch/figure atmospheric darkening */}
          <div aria-hidden="true" className="absolute inset-0 z-[1] hero-cinematic-scrim pointer-events-none" />
          <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-black/5 to-black/55 pointer-events-none" />
        </div>

        {/* Full-Banner Centered Review Rating & Theme Toggle */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center gap-2 px-4 pt-4 sm:pt-5 lg:pt-5">
          {/* Exact Rating: ⭐⭐⭐⭐⭐ 5.0 | 385 REVIEWS */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#090A0F]/88 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold tracking-wide text-white shadow-[0_4px_20px_rgba(0,0,0,0.65)]">
            <div className="flex items-center text-[#FACC15] gap-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              <Star className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
              <Star className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
              <Star className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
              <Star className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
              <Star className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
            </div>
            <span className="font-extrabold text-white ml-1">5.0</span>
            <span className="text-white/55 font-normal mx-0.5">|</span>
            <span className="text-white uppercase tracking-wider text-xs font-mono font-bold">
              385 REVIEWS
            </span>
          </div>

          {/* Theme Toggle — centered horizontally across the full hero banner, directly below rating */}
          <ThemeToggle variant="hero" />
        </div>

        <div className="flex-1 flex items-start max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-12 pb-8 sm:pt-[3.75rem] sm:pb-10 lg:pt-[3.75rem] lg:pb-11 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-3xl text-left pl-1 sm:pl-4 lg:pl-8">

            {/* Exact Headline: Solid WHITE across exactly two lines */}
            <h1 className="font-display font-black text-[clamp(1.45rem,6.8vw,1.875rem)] sm:text-5xl lg:text-[3.35rem] xl:text-[3.65rem] tracking-tight uppercase leading-[1.04] mb-3 sm:mb-3.5 text-white">
              <span className="whitespace-nowrap">RESET &amp; RECLAIM</span>
              <br />
              <span className="whitespace-nowrap">YOUR LIFE</span>
            </h1>

            {/* Exact Subtitle (3 specified lines on desktop/laptop; natural wrap on tablet & mobile) */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-100 font-medium leading-snug lg:leading-[1.45] mb-5 sm:mb-6 max-w-md sm:max-w-lg lg:max-w-none">
              <span className="lg:block lg:whitespace-nowrap">A non-negotiable system to end self-deception, force</span>{' '}
              <span className="lg:block lg:whitespace-nowrap">alignment, and weaponize your remaining days before</span>{' '}
              <span className="lg:block lg:whitespace-nowrap">another year disappears.</span>
            </p>

            {/* Exact Hero Button: GET YOURS NOW — Smooth scroll only, NO Gumroad redirect */}
            <div>
              <button
                onClick={scrollToHook}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-[11px] rounded-full text-[15px] sm:text-base leading-tight font-black whitespace-nowrap bg-[#FF3D00] hover:bg-[#ff5722] text-white shadow-[0_10px_35px_rgba(255,61,0,0.45)] hover:shadow-[0_12px_45px_rgba(255,61,0,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>GET YOURS NOW</span>{' '}
                <span aria-hidden="true">↓</span>
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: WHAT IF ONE DOWNLOAD COULD CHANGE YOUR LIFE?
          (Preserved exact heading above ONE theme-aware card with Part 1,
           Part 2, box & apple mockups, and the 4 core execution principles)
      ========================================================================= */}
      <section id="what-if-one-download" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2E2E2] dark:border-neutral-800 bg-[#F4F4F4] dark:bg-[#0C0D11] scroll-mt-16 overflow-x-clip">
        <div className="max-w-5xl mx-auto">
          
          <div className="max-w-4xl mx-auto text-center mb-10">
            {/* Exact Section Heading — Preserved Outside & Above the Content Card */}
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-950 dark:text-white uppercase leading-tight">
              WHAT IF ONE DOWNLOAD COULD CHANGE YOUR LIFE?
            </h2>
          </div>

          {/* ONE Theme-Aware Card (White in Light Mode, Deep Dark/Black in Dark Mode) */}
          <div className="rounded-3xl bg-white dark:bg-[#0D0E12] text-[#111215] dark:text-[#F8F9FA] border border-[#E2E2E2] dark:border-[#262A38] shadow-[0_14px_45px_rgba(0,0,0,0.07)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.6)] p-6 sm:p-10 lg:p-14 transition-colors duration-200">
            
            {/* PART A: Introductory Copy (Left on Desktop, First on Mobile) + Box Mockup (Right on Desktop, Second on Mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5 text-left text-base sm:text-[17px] text-[#22252D] dark:text-neutral-200 leading-relaxed font-normal">
                <p>
                  Meet{' '}
                  <span className="font-bold text-[#FF3D00]">
                    Your Final Year Protocol
                  </span>
                  ; a non-negotiable system designed to confront unfulfilled potential, expose wasted time, and help you reclaim the person you still have time to become. A system to end self-deception, force alignment, and weaponize your remaining days before another year disappears.
                </p>

                <p className="font-extrabold text-[17px] sm:text-[19px] tracking-tight leading-snug text-[#111215] dark:text-white">
                  Let&apos;s be entirely honest: MOTIVATION IS A SCAM.
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/[0.035] dark:bg-white/[0.04] border border-neutral-200/90 dark:border-white/10 transition-colors duration-200">
                  <p className="text-[#22252D] dark:text-neutral-200 leading-relaxed">
                    You don&apos;t lack potential; you lack a system that works when motivation fails. You&apos;ve tried motivational speeches &amp; podcasts, viral quotes, Monday resets but all failed. How many times have you promised yourself a breakthrough, only to return to the exact same unfulfilled routines, repeating the same patterns.
                  </p>
                </div>

                <p className="font-extrabold text-lg sm:text-xl text-[#FF3D00] leading-snug pt-1">
                  Stop waiting for a fresh start. You need a SYSTEM that doesn&apos;t care how you feel.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="product-mockup-frame relative p-3 rounded-2xl bg-neutral-200/55 dark:bg-neutral-900/60 border border-neutral-300/80 dark:border-neutral-800 w-full max-w-[380px] transition-colors duration-200">
                  <div className="rounded-xl bg-white p-3 overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none">
                    <img
                      src="/assets/aistudio/box_mockup_2ac2d540.png"
                      alt="Your Final Year Protocol Box Mockup"
                      className="product-mockup-frame-img w-full max-h-[280px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div aria-hidden="true" className="mt-2.5 h-4" />
                </div>
              </div>
            </div>

            {/* Subtle Internal Visual Separation Inside the Same Card */}
            <div className="my-10 sm:my-14 border-t border-neutral-200 dark:border-[#262A38]" />

            {/* PART B: Apple Mockup (Left on Desktop, Second on Mobile) + Positioning Copy (Right on Desktop, First on Mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="order-1 lg:order-2 lg:col-span-7 text-left text-base sm:text-[17px] text-[#22252D] dark:text-neutral-200 leading-relaxed font-normal">
                <h3 className="font-display font-extrabold text-[17px] sm:text-[19px] uppercase tracking-tight text-[#111215] dark:text-white leading-snug mb-2.5 sm:mb-3">
                  THIS IS NOT A PRODUCTIVITY MANUAL
                </h3>

                <ul className="mt-0 mb-5 space-y-1 leading-snug list-none font-semibold text-[#181A20] dark:text-neutral-100">
                  <li className="flex items-start gap-2.5">
                    <X aria-hidden="true" className="w-4 h-4 text-[#FF3D00] stroke-[2.75] shrink-0 mt-[3px] sm:mt-1" />
                    <span>It&apos;s not a feel-good motivational hype</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X aria-hidden="true" className="w-4 h-4 text-[#FF3D00] stroke-[2.75] shrink-0 mt-[3px] sm:mt-1" />
                    <span>It&apos;s definitely not a self-help checklist</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X aria-hidden="true" className="w-4 h-4 text-[#FF3D00] stroke-[2.75] shrink-0 mt-[3px] sm:mt-1" />
                    <span>It will not coddle you. It will not motivate you.</span>
                  </li>
                </ul>

                <p className="mb-5 font-bold text-emerald-700 dark:text-emerald-400">
                  It will confront you, expose you, and heelp you to build a new reality.
                </p>

                <div className="mb-5 p-4 sm:p-5 rounded-2xl bg-neutral-900/[0.035] dark:bg-white/[0.04] border border-neutral-200/90 dark:border-white/10 transition-colors duration-200">
                  <p className="font-semibold text-[#111215] dark:text-white leading-relaxed">
                    YOUR FINAL YEAR PROTOCOL is an interactive life-alignment and execution system designed to be worked through, not simply read and forgotten.
                  </p>
                </div>

                <p>
                  Inside, you&apos;ll confront your current reality, examine the areas of your life that need attention, challenge the habits that undermine your intentions, and build a structured approach to focus, discipline, and consistent action.
                </p>
              </div>

              <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col items-center justify-center">
                <div className="product-mockup-frame relative p-3 rounded-2xl bg-neutral-200/55 dark:bg-neutral-900/60 border border-neutral-300/80 dark:border-neutral-800 w-full max-w-[380px] transition-colors duration-200">
                  <div className="rounded-xl bg-white p-3 overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none">
                    <img
                      src="/assets/aistudio/apple_mockup_ab3ed599.png"
                      alt="Your Final Year Protocol Apple Desktop Mockup"
                      className="product-mockup-frame-img w-full max-h-[280px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div aria-hidden="true" className="mt-2.5 h-4" />
                </div>
              </div>
            </div>

            {/* 4 Core Execution Principles — Relocated to the Bottom of the Card */}
            <div className="mt-10 sm:mt-14 pt-8 border-t border-neutral-200 dark:border-[#262A38] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-sm">
              <span className="flex items-center gap-2.5 font-bold text-[#111215] dark:text-neutral-100">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF3D00] shrink-0" />
                <span>Build your system</span>
              </span>
              <span className="flex items-center gap-2.5 font-bold text-[#111215] dark:text-neutral-100">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF3D00] shrink-0" />
                <span>Confront the reality</span>
              </span>
              <span className="flex items-center gap-2.5 font-bold text-[#111215] dark:text-neutral-100">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF3D00] shrink-0" />
                <span>Execute with intent</span>
              </span>
              <span className="flex items-center gap-2.5 font-bold text-[#111215] dark:text-neutral-100">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF3D00] shrink-0" />
                <span>Break the pattern</span>
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: THE AUTHOR PROFILER: RECONSTRUCTION FROM ZERO
          (Full-width pure black #000000 background; orange-glow title card preserved;
           portrait + verbatim story styled with crisp contrast against black)
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#000000] text-white border-b border-neutral-900">
        <div className="max-w-4xl mx-auto">
          
          {/* Introductory Heading Card in ONE black card with restrained orange glow */}
          <div
            data-scroll-pop="true"
            className="scroll-pop-holder bg-[#0D0E12] border border-[#FF3D00]/40 shadow-[0_0_30px_rgba(255,61,0,0.25)] rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-10"
          >
            <span className="text-xs uppercase tracking-widest font-mono text-[#FF3D00] font-bold">
              THE REALITY BEHIND THE ARCHITECTURE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white mt-2">
              THE AUTHOR PROFILER: RECONSTRUCTION FROM ZERO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0B0C10] p-6 sm:p-10 rounded-3xl border border-neutral-800/90 shadow-[0_12px_40px_rgba(0,0,0,0.65)]">
            
            {/* Author Portrait */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#FF3D00]/25 to-neutral-700/25 blur-sm" />
                <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-800 shadow-xl max-w-[280px]">
                  <img 
                    src="/assets/aistudio/My_Picture_dd81aaa8.jfif" 
                    alt="GoPek Digital Founder Portrait"
                    className="w-full h-auto object-cover grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Subtle editorial vignette */}
                  <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/40 pointer-events-none" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3.5 text-white text-center">
                    <p className="font-display text-xs tracking-wider uppercase font-semibold">GoPek Digital</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Story Text (Word-for-Word Approved Copy) */}
            <div className="md:col-span-7 space-y-4 text-neutral-200 leading-relaxed">
              <h3 className="font-serif-title italic text-2xl sm:text-3xl text-white font-medium">
                "I Had to Rebuild a Life I Never Planned to Lose.
              </h3>
              <p className="text-sm sm:text-base text-neutral-200">
                I know exactly what it feels like to have your entire life and every single one of your plans changed without your permission.
              </p>
              <p className="text-sm sm:text-base text-neutral-200">
                My life vanished when I had an accident during COVID. I lost my legs. The same year, I lost millions-of-yuan business — all while navigating life from a wheelchair. I didn't rebuild my life and become a global mentor through motivation. I rebuilt everything because I engineered an execution structure that completely ignored how I felt. If a woman navigating life from a wheelchair can dismantle every excuse and build global stability, so can you. But you cannot change what you refuse to confront."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: WHO THIS IS FOR
          (8 Numbered Criteria Cards Preserved Word-for-Word)
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2E2E2] dark:border-neutral-800 bg-[#EFEFEF] dark:bg-[#101217]">
        <div className="max-w-5xl mx-auto">
          
          {/* Introductory Header in ONE black card with restrained orange glow */}
          <div
            data-scroll-pop="true"
            className="scroll-pop-holder bg-[#0D0E12] border border-[#FF3D00]/40 shadow-[0_0_30px_rgba(255,61,0,0.25)] rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-10"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FF3D00]/15 text-[#FF3D00] border border-[#FF3D00]/30 mb-3">
              <Lock className="w-3.5 h-3.5 text-[#FF3D00]" />
              <span>Closed-Door Entry Protocol</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white">
              WHO IS THIS FOR?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-200 max-w-2xl mx-auto leading-relaxed">
              This is a closed-door protocol. Read carefully before entering. YOUR FINAL YEAR PROTOCOL is for you if:
            </p>
          </div>

          {/* 8 Criterion Cards (Verbatim copy preserved) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            <div className="p-6 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-[#FF3D00]/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-[#FF3D00]/15 text-[#FF3D00] shrink-0 font-mono font-bold text-xs">
                  01
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                    You've Done the Audit -Before The Year Ends:
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    You've examined your reality, identified your patterns, measured the gap, and you're ready to confront what must change.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-[#FF3D00]/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-[#FF3D00]/15 text-[#FF3D00] shrink-0 font-mono font-bold text-xs">
                  02
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                    You’re Done With Motivation:
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    You've tried the speeches, podcasts, quotes, and Monday resets. Now You are ready for a hard system that doesn't care how you feel.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-[#FF3D00]/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-[#FF3D00]/15 text-[#FF3D00] shrink-0 font-mono font-bold text-xs">
                  03
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                    You Keep Starting Over:
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    New year, new plan, same results. You're ready to build the structure that makes lasting change possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-[#FF3D00]/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-[#FF3D00]/15 text-[#FF3D00] shrink-0 font-mono font-bold text-xs">
                  04
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                    You’re Successful But Want More:
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    You're doing well, but you know there's another level you're ready to reach.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-[#FF3D00]/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-[#FF3D00]/15 text-[#FF3D00] shrink-0 font-mono font-bold text-xs">
                  05
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                    You Feel the Clock:
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Time is moving, and you know you can't afford another year of postponing what matters.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-[#FF3D00]/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-[#FF3D00]/15 text-[#FF3D00] shrink-0 font-mono font-bold text-xs">
                  06
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                    You Want to Build Something That Lasts:
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    You're done with temporary fixes. You want a lasting system for how you live, work, focus, and execute.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-[#FF3D00]/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-[#FF3D00]/15 text-[#FF3D00] shrink-0 font-mono font-bold text-xs">
                  07
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                    You Know You're Capable of More and Finally Ready to Prove It:
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    You're ready to prove it to yourself through what you actually do, not what you promise.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-[#FF3D00]/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-[#FF3D00]/15 text-[#FF3D00] shrink-0 font-mono font-bold text-xs">
                  08
                </span>
                <div>
                  <h3 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                    You’re Seeking Direction and Alignment:
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    You want your health, finances, career, relationships, growth, and daily choices working together, not pulling you apart.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: WHAT THE SYSTEM IS (PRESERVED BLACK PANEL)
          + INTEGRATED IMAC MOCKUP (Mockup 2) + FIRST TEXT-ONLY CTA
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0E12] text-white border-b border-neutral-800 relative">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-mono text-[#FF3D00] font-bold">
              The Architecture Explained
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight mt-2">
              WHAT THE SYSTEM IS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            
            {/* System Description Bullets */}
            <div className="lg:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p className="font-bold text-xl text-white">
                YOUR FINAL YEAR PROTOCOL is not an inspirational book. It is a digital, mechanical execution engine.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                This is not a productivity manual with recycled advice, and it is definitely not a collection of feel-good essays telling you to wake up at 5 AM. It will not coddle you. It will not motivate you. It will confront you, expose you...
              </p>

              <ul className="space-y-4 pt-1">
                <li className="flex items-start gap-3 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800">
                  <Zap className="w-5 h-5 text-[#FF3D00] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200">
                    It is a framework you work through, not a book you read. It is packed with interactive workspaces, operational calculators, binding contracts, and automated reset systems.
                  </span>
                </li>

                <li className="flex items-start gap-3 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800">
                  <ShieldCheck className="w-5 h-5 text-[#FF3D00] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200">
                    It is built to permanently rewrite the way you operate, bringing you the long-term, high-leverage achievements you promised yourself before you began settling.
                  </span>
                </li>

                <li className="flex items-start gap-3 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800">
                  <Clock className="w-5 h-5 text-[#FF3D00] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200">
                    It is a life system for the person you are actively running out of time to become. An execution solution for the person you keep promising yourself you will become.
                  </span>
                </li>
              </ul>
            </div>

            {/* Laptop Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="product-mockup-frame relative p-3 rounded-2xl bg-neutral-900/60 border border-neutral-800 w-full max-w-[380px]">
                <div className="rounded-xl bg-white p-3 overflow-hidden">
                  <img 
                    src="/assets/aistudio/laptop_mockup_cc9ab697.png" 
                    alt="Your Final Year Protocol Laptop Mockup"
                    className="product-mockup-frame-img w-full max-h-[280px] object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    STRUCTURE BEATS MOTIVATION
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* FIRST TEXT-ONLY CTA — STRICTLY NO PRICE AND NO BUTTON PER PRODUCTION INSTRUCTION */}
          <div
            data-scroll-pop="true"
            className="scroll-pop-holder p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-[#181A22] to-neutral-900 border border-[#FF3D00]/40 text-center shadow-2xl relative overflow-hidden"
          >
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF3D00] font-bold block mb-2">
              Action Directive
            </span>
            <p className="font-display font-bold text-lg sm:text-2xl text-white tracking-wide max-w-2xl mx-auto leading-snug">
              Want YOUR FINAL YEAR PROTOCOL? Zero excuses. Non-negotiable rules. No compromise. Permanent realignment. Scroll down to download.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: TESTIMONIAL INTRODUCTION & 6 SCREENSHOTS
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2E2E2] dark:border-neutral-800 bg-[#F4F4F4] dark:bg-[#0C0D11]">
        <div className="max-w-6xl mx-auto">
          
          {/* Introductory Header in ONE black card with restrained orange glow */}
          <div
            data-scroll-pop="true"
            className="scroll-pop-holder bg-[#0D0E12] border border-[#FF3D00]/40 shadow-[0_0_30px_rgba(255,61,0,0.25)] rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-xs uppercase tracking-widest font-mono text-[#FF3D00] font-bold">
              UNFILTERED REALITY
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white mt-2">
              DATA DOESN'T LIE
            </h2>
            {/* Exact introductory copy with repeated opening phrase removed */}
            <p className="mt-4 text-base sm:text-lg text-white max-w-2xl mx-auto font-medium leading-relaxed">
              Here is what happens when you stop waiting for motivation and downloads an unshakeable execution structure. Unfiltered results from individuals who chose to stop drifting and finally faced their reality.
            </p>
          </div>

          {/* 6 Testimonial Screenshots Grid with zoom lightbox */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIAL_IMAGES.map((item, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="p-3 border-b border-[#E2E2E2] dark:border-[#262A38] bg-neutral-100 dark:bg-neutral-900/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200">
                    Verified Feedback #{idx + 1}
                  </span>
                  <button 
                    onClick={() => setSelectedImage(item.src)}
                    className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
                    aria-label="Enlarge testimonial"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Enlarge</span>
                  </button>
                </div>
                <div 
                  className="cursor-pointer overflow-hidden p-2 flex items-center justify-center min-h-[260px] bg-neutral-100/50 dark:bg-[#0E1014]"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-auto max-h-[380px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-[11px] text-neutral-600 dark:text-neutral-400 border-t border-[#E2E2E2] dark:border-[#262A38] flex items-center justify-between">
                  <span className="font-medium truncate pr-2">{item.title}</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3" /> Authentic Record
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            * All screenshot testimonials above are preserved directly from real community threads and client emails.
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: THE 3-PHASE ARCHITECTURE — WHAT’S INSIDE
          + TABLET IPAD MOCKUP (Mockup 4) FOR PRODUCT FORMATS
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2E2E2] dark:border-neutral-800 bg-[#EFEFEF] dark:bg-[#101217]">
        <div className="max-w-5xl mx-auto">
          
          {/* Introductory Header in ONE black card with restrained orange glow */}
          <div
            data-scroll-pop="true"
            className="scroll-pop-holder bg-[#0D0E12] border border-[#FF3D00]/40 shadow-[0_0_30px_rgba(255,61,0,0.2)] rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto mb-10"
          >
            <span className="text-xs uppercase tracking-widest font-mono text-[#FF3D00] font-bold">
              The Blueprint Breakdown
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white mt-2">
              THE 3-PHASE ARCHITECTURE — WHAT’S INSIDE
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
              The system is completely stripped of theoretical nonsense and broken down into three striking, high-impact operational layers:
            </p>
          </div>

          {/* 3 Phases Detailed Cards (Outside on the section background) */}
          <div className="space-y-8 mb-16">
            
            {/* Phase 1 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-md">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white mb-4">
                <span className="text-[#FF3D00]">Phase 1:</span> The Life Alignment Diagnosis
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  This section forces a brutal, deep-dive examination of the 10 core areas of your life: health, money, career, growth, family/friends, partner/love, fun, environment, spirituality, and community.
                </p>
                <p className="font-medium text-neutral-950 dark:text-neutral-100">
                  You aren't lazy; you are fundamentally misaligned. This phase uncovers the exact structural leaks causing you to break promises to yourself. It maps out the unfiltered, raw condition of your life right now so you can stop fixing the wrong problems.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-md">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white mb-4">
                <span className="text-[#FF3D00]">Phase 2:</span> The Urgency Catalyst (Memento Mori)
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  This phase frantically confronts you with the absolute reality that your time is finite. It is time to stop acting like you have 500 years left on earth.
                </p>
                <p className="font-medium text-neutral-950 dark:text-neutral-100">
                  This Phase injects an healthy urgency and accountability into your daily routine. By revealing exactly how fast your clock is moving, it triggers an intense identity discomfort—proving that you are capable of exponentially more than where you are currently settling.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#E2E2E2] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-md">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white mb-4">
                <span className="text-[#FF3D00]">Phase 3:</span> The Fearless Formula (The Execution Code)
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  This is the engineered solution to completely rebuild your daily operation from scratch. You will receive a practical, strategic execution system built on The 11 Master Frameworks: Procrastination, Urgency, Life Alignment, Focus, Mornings, Energy, Boundaries, Legacy, Money, Relationships, and the Perpetual Reset.
                </p>
              </div>

              {/* Visible Subheading: THE CORE ENGINES OF EXECUTION in #FF3D00 */}
              <div className="mt-8 pt-6 border-t border-[#E2E2E2] dark:border-[#262A38]">
                <h4 className="font-display font-bold text-lg sm:text-xl text-[#FF3D00] mb-2 uppercase">
                  THE CORE ENGINES OF EXECUTION
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                  Inside Phase 3, you unlock the operational assets that turn chaos into absolute automated execution:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-[#E2E2E2] dark:border-neutral-700">
                    <h5 className="font-bold text-neutral-950 dark:text-white text-sm mb-1.5 text-[#FF3D00]">
                      • The Dominant Impact Identifier (The 80/20 Dominoes)
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      A legendary focusing strategy that helps you instantly isolate the few vital actions that create a massive ripple effect. You will learn how to focus exclusively on just 2 core areas of your life that will automatically trigger success across the remaining 8, saving you massive amounts of time and eliminating execution stress. Don't try to repair everything. Find the domino.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-[#E2E2E2] dark:border-neutral-700">
                    <h5 className="font-bold text-neutral-950 dark:text-white text-sm mb-1.5 text-[#FF3D00]">
                      • Execution Over Motivation
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      The raw, mechanical blueprint designed to stop your dependency on temporary emotional intensity and fleeting inspiration.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-[#E2E2E2] dark:border-neutral-700">
                    <h5 className="font-bold text-neutral-950 dark:text-white text-sm mb-1.5 text-[#FF3D00]">
                      • The Accountability Mirror
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      The unshakeable self-grading protocol that keeps you executing at peak performance when absolutely no one is watching.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-[#E2E2E2] dark:border-neutral-700">
                    <h5 className="font-bold text-neutral-950 dark:text-white text-sm mb-1.5 text-[#FF3D00]">
                      • The Execution Code
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      A daily ritual and commitment matrix that transforms high-level philosophy into an automated, daily reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* PRODUCT VERSIONS — Introductory Black Rectangular Card */}
          <div
            data-scroll-pop="true"
            className="scroll-pop-holder bg-[#0D0E12] border border-neutral-800 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto mb-8 shadow-md"
          >
            <h3 className="font-display font-bold text-xl sm:text-2xl uppercase text-white mb-2">
              PRODUCT VERSIONS — DISPLAY EXACTLY
            </h3>
            <p className="text-sm sm:text-base text-neutral-200 max-w-2xl mx-auto leading-relaxed">
              Your Final Year Protocol is delivered in two digital formats (PDF) containing the exact same unshakeable execution system. Choose your version below:
            </p>
          </div>

          {/* Digital Sign Mockup (Left, No Caption) + Standard & Fillable Options (Right) */}
          <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#151720] border border-[#E2E2E2] dark:border-[#262A38] mb-14 shadow-sm">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto mb-8">
              
              {/* Left Side: Digital Sign Mockup — Standing on Its Own With Zero Captions or Labels */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="product-mockup-hover rounded-2xl bg-white p-2 sm:p-3 flex items-center justify-center">
                  <img 
                    src="/assets/aistudio/digital_sign_mockup_01501221.png" 
                    alt="Your Final Year Protocol Digital Sign Mockup"
                    className="w-full max-w-[300px] sm:max-w-[320px] max-h-[320px] object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Side: Standard & Fillable Format Options */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-xl bg-neutral-50 dark:bg-[#0E1014] border border-[#E2E2E2] dark:border-[#262A38] shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#FF3D00]/15 text-[#FF3D00] shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                      📱 Standard PDF Version:
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      Perfect if you want to print it out to write by hand, or import it into handwriting apps like Goodnotes, Notability, or Xodo to work with a stylus.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-neutral-50 dark:bg-[#0E1014] border border-[#E2E2E2] dark:border-[#262A38] shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#FF3D00]/15 text-[#FF3D00] shrink-0">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                      💻 Fillable PDF Version:
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      Perfect if you prefer typing directly into the document using any laptop, phone, or tablet without printing.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <p className="font-display font-bold text-sm sm:text-base tracking-wider text-[#FF3D00] uppercase text-center">
              Choose your format. Put the system into action. Execute your reality.
            </p>
            <p className="mt-3 text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto leading-relaxed">
              NOTE: This is a digital PDF download. No physical product will be shipped. Checkout and instant download are handled securely through Gumroad.
            </p>
          </div>

          {/* FIRST PAID OFFER — PRICE AND PURCHASE BUTTON */}
          <div
            data-scroll-pop="true"
            className="scroll-pop-holder p-8 sm:p-12 rounded-3xl bg-[#000000] text-white border-2 border-[#FF3D00]/60 shadow-2xl text-center relative overflow-hidden"
          >

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#FF3D00]/20 text-[#FF3D00] border border-[#FF3D00]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Complete Execution System
            </div>

            {/* Exact Offer Copy */}
            <p className="font-display text-base sm:text-xl font-bold text-neutral-200 max-w-2xl mx-auto mb-6 leading-relaxed">
              YOUR FINAL YEAR PROTOCOL <span className="text-[#FF3D00]">|</span> The Alignment Diagnostic <span className="text-[#FF3D00]">|</span> The Identity Discomfort Catalyst <span className="text-[#FF3D00]">|</span> The Fearless Formula <span className="text-[#FF3D00]">|</span> No Motivational Highs <span className="text-[#FF3D00]">|</span> Not Self-Help Junk.
            </p>

            {/* Price Presentation: $67 crossed out, $27 current */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-2xl sm:text-3xl font-bold line-through text-neutral-500">
                $67
              </span>
              <span className="text-4xl sm:text-6xl font-extrabold text-[#FF3D00] tracking-tight">
                $27
              </span>
              <span className="text-xs font-mono uppercase px-2.5 py-1 bg-[#FF3D00]/20 text-[#FF3D00] rounded-md font-bold">
                Lifetime Access
              </span>
            </div>

            {/* Purchase Button with Hover Reaction */}
            <a
              href={GUMROAD_PAID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg font-extrabold bg-[#FF3D00] hover:bg-[#ff5722] text-white shadow-xl hover:shadow-[#FF3D00]/40 transform hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-white" />
              <span>GET YOUR FINAL YEAR PROTOCOL ($27)</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* CHECKOUT NOTE — IMMEDIATELY BELOW THE BUY BUTTON IN ITALICS */}
            <p className="mt-4 text-xs text-neutral-400 italic max-w-lg mx-auto leading-normal">
              100% Secure Checkout. Clicking BUY BUTTON will redirect you to Gumroad (our verified hosting and delivery portal) for encrypted payment processing and immediate product file delivery.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: STANDALONE COMPANION-GIFT SECTION (THE MINDSHIFT MANTRA)
      ========================================================================= */}
      <section
        id="companion-gift-section"
        aria-label="Companion Gift — The Mind Shift Mantra"
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-200 ${
          isDarkTheme
            ? 'bg-[#0E1016] text-[#F8F9FA] border-neutral-800'
            : 'bg-[#FFFFFF] text-[#111215] border-[#E2E2E2]'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          {companionStage !== 'expanded' ? (
            <button
              type="button"
              onClick={handleRevealCompanion}
              aria-expanded={false}
              aria-controls="companion-gift-expanded"
              className={`group w-full max-w-3xl mx-auto block rounded-3xl p-7 sm:p-10 text-center bg-gradient-to-br from-[#4A158B] via-[#3D1073] to-[#27094B] text-white border border-purple-300/35 hover:border-purple-200/70 shadow-[0_14px_38px_-10px_rgba(61,16,115,0.55)] hover:shadow-[0_18px_46px_-10px_rgba(88,28,165,0.72)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 cursor-pointer transition-all duration-200 ${
                companionStage === 'opening'
                  ? 'opacity-0 scale-[0.98] pointer-events-none'
                  : 'opacity-100 scale-100 hover:-translate-y-0.5'
              }`}
            >
              <span className="block font-display font-bold text-lg sm:text-2xl lg:text-[26px] tracking-tight text-white leading-snug text-balance">
                🎁 Congratulations. You&apos;ve Unlocked a Weapon.
              </span>
              <span className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm sm:text-base font-medium text-purple-100/75 group-hover:text-white transition-colors duration-200">
                <span>click to view your gift</span>
                <ChevronDown
                  aria-hidden="true"
                  className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </span>
            </button>
          ) : (
            <div
              id="companion-gift-expanded"
              className="companion-gift-enter"
            >
              {/* Unlocked Companion Title inside Matching Purple Holder */}
              <div className="max-w-3xl mx-auto mb-8 sm:mb-10 px-6 py-4 sm:px-8 sm:py-5 rounded-2xl bg-gradient-to-br from-[#4A158B] via-[#3D1073] to-[#27094B] text-white border border-purple-300/35 shadow-[0_14px_38px_-10px_rgba(61,16,115,0.55)] text-center">
                <h2
                  ref={companionHeadingRef}
                  tabIndex={-1}
                  className="font-display font-bold text-base sm:text-xl lg:text-[22px] tracking-tight leading-tight text-white text-balance outline-none"
                >
                  Weapon Unlocked; your gift is activated...
                </h2>
              </div>

              {/* Introductory Hook — Placed at the top before the two-column layout */}
              <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
                <p
                  className={`text-base sm:text-[17px] lg:text-lg leading-relaxed text-left sm:text-center ${
                    isDarkTheme ? 'text-neutral-200' : 'text-[#22252D]'
                  }`}
                >
                  <strong className={`font-bold ${isDarkTheme ? 'text-white' : 'text-[#111215]'}`}>
                    Your mind is your ultimate asset
                  </strong>
                  , the most powerful asset everyone owns; but give a broken mindset a life-changing opportunity, and{' '}
                  <strong className={`font-bold ${isDarkTheme ? 'text-white' : 'text-[#111215]'}`}>
                    their own mind will force them to forfeit the win.
                  </strong>{' '}
                  If your internal dialogue is &quot;I can&apos;t, I&apos;m not fit for this...&quot; then not an alpha system or even an ultimate execution protocol can save such.
                </p>
              </div>

              {/* Two-Column Content Layout on Desktop; Natural Stacked Order (Mockup -> Card -> Pillars -> Steps) on Mobile & Tablet */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* LEFT COLUMN: Companion Book Mockup inside Matching Product Mockup Frame */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div
                    className={`product-mockup-frame relative p-3 rounded-2xl border w-full max-w-[380px] transition-colors duration-200 ${
                      isDarkTheme
                        ? 'bg-neutral-900/60 border-neutral-800'
                        : 'bg-neutral-200/55 border-neutral-300/80'
                    }`}
                  >
                    <div
                      className={`rounded-xl bg-white p-3 overflow-hidden ${
                        isDarkTheme ? 'shadow-none' : 'shadow-[0_1px_2px_rgba(0,0,0,0.04)]'
                      }`}
                    >
                      <img
                        src={COMPANION_BOOK_MOCKUP_SRC}
                        alt="THE MINDSHIFT MANTRA Companion Book Mockup"
                        className="product-mockup-frame-img w-full h-auto max-h-[320px] object-contain mx-auto block"
                      />
                    </div>
                    <div aria-hidden="true" className="mt-2.5 h-4" />
                  </div>
                </div>

                {/* RIGHT COLUMN: Theme-Aware Transparent Description Card, Three Pillars, and Three Execution Steps */}
                <div className="lg:col-span-7 space-y-7">
                  {/* Transparent-Looking Description Card (Adapts cleanly to Light & Dark modes) */}
                  <div
                    className={`p-5 sm:p-6 rounded-2xl backdrop-blur-sm border transition-colors duration-200 ${
                      isDarkTheme
                        ? 'bg-white/[0.04] border-white/14'
                        : 'bg-neutral-950/[0.025] border-neutral-300/85'
                    }`}
                  >
                    <p
                      className={`text-base sm:text-[17px] leading-relaxed font-normal ${
                        isDarkTheme ? 'text-neutral-200' : 'text-[#22252D]'
                      }`}
                    >
                      <strong className="font-extrabold text-[#FF3D00]">
                        THE MIND SHIFT MANTRA
                      </strong>{' '}
                      is a mindset-reprogramming arsenal that ensures this system you just bought or any transformational material you will later acquire doesn&apos;t get diluted by a broken internal operating system. It&apos;s a weapon, forged from real wins, losses, and survival seasons.
                    </p>
                  </div>

                  {/* Two Visually Distinct Groups: Stacks Pillars then Steps on Mobile & Tablet; Side-by-Side on Desktop */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Group 1: Three Pillars */}
                    <div
                      className={`pt-4 border-t ${
                        isDarkTheme ? 'border-[#262A38]' : 'border-neutral-300/90'
                      }`}
                    >
                      <h3 className="font-display font-bold text-base sm:text-[17px] text-[#FF3D00] tracking-tight mb-3">
                        {'Architectured  on 3 Pillars'}
                      </h3>
                      <ul
                        className={`space-y-2.5 text-sm sm:text-[15px] font-medium ${
                          isDarkTheme ? 'text-neutral-100' : 'text-[#181A20]'
                        }`}
                      >
                        <li className="leading-snug">🧠 The Mindset Protocol</li>
                        <li className="leading-snug">🔄 The Mind Recode</li>
                        <li className="leading-snug">🎯 Mental Master</li>
                      </ul>
                    </div>

                    {/* Group 2: Three Execution Steps */}
                    <div
                      className={`pt-4 border-t ${
                        isDarkTheme ? 'border-[#262A38]' : 'border-neutral-300/90'
                      }`}
                    >
                      <h3 className="font-display font-bold text-base sm:text-[17px] text-[#FF3D00] tracking-tight mb-3">
                        Executed in 3 Steps
                      </h3>
                      <ul
                        className={`space-y-2.5 text-sm sm:text-[15px] font-medium ${
                          isDarkTheme ? 'text-neutral-100' : 'text-[#181A20]'
                        }`}
                      >
                        <li className="leading-snug">🛠️ Mental Setup</li>
                        <li className="leading-snug">🗣️ Affirmation Ritual</li>
                        <li className="leading-snug">🚀 Power Integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION: CHARITY AND FINAL CONFRONTATION
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F4F4] dark:bg-[#0C0D11] border-b border-[#E2E2E2] dark:border-neutral-800">
        <div className="max-w-4xl mx-auto">
          
          {/* Charity Statement — Pure Black Card with Outer Orange Edge Glow + Delayed Scroll Animation */}
          <div
            data-scroll-pop="true"
            className="scroll-pop-holder p-6 sm:p-8 rounded-2xl bg-[#000000] border border-[#FF3D00]/65 shadow-[0_0_32px_rgba(255,61,0,0.34)] text-white mb-14 flex items-start gap-4"
          >
            <div className="p-3 rounded-full border border-[#FF3D00]/35 bg-neutral-950 text-[#FF3D00] shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm uppercase font-mono font-bold tracking-widest text-[#FF3D00] mb-1.5">
                Beyond The Transaction
              </h3>
              <p className="text-sm sm:text-base text-neutral-100 leading-relaxed">
                As you invest in yourself and take steps toward becoming the person you want to be, you&apos;re also contributing to something bigger. 5% of the proceeds from this page goes toward supporting the less privileged. Your progress can create an impact beyond your own life.
              </p>
            </div>
          </div>

          {/* Closing Section — YOUR FINAL YEAR PROTOCOL */}
          <div className="text-center mb-10 space-y-6">
            <h2 className="font-display font-extrabold text-xl sm:text-3xl lg:text-[32px] text-neutral-950 dark:text-white uppercase tracking-tight">
              YOUR FINAL YEAR PROTOCOL
            </h2>

            <div
              className={`max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl backdrop-blur-sm border transition-colors duration-200 ${
                isDarkTheme
                  ? 'bg-white/[0.04] border-white/14'
                  : 'bg-neutral-950/[0.03] border-neutral-300/90'
              }`}
            >
              <p
                className={`text-base sm:text-lg font-semibold leading-relaxed ${
                  isDarkTheme ? 'text-white' : 'text-[#111215]'
                }`}
              >
                Everything in this system is built on a single, unshakable conviction: You don&apos;t need to feel like doing it. You need a system that works whether you feel like it or not
              </p>
            </div>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#22252D] dark:text-neutral-200 leading-relaxed font-medium">
              There’s enough unfinished business in your life. Don’t buy this protocol for comfortable inspiration. Get it when you’re ready to stop lying to yourself and commit to real transformation.
            </p>

            <p className="max-w-2xl mx-auto text-base sm:text-lg font-bold text-[#FF3D00] leading-snug">
              The clock is ticking. Secure your operating system.
            </p>
          </div>

          {/* FINAL PAID PURCHASE BUTTON with hover reaction */}
          <div className="text-center">
            <a
              href={GUMROAD_PAID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-full text-base sm:text-lg font-black bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-[#FF3D00] hover:text-white dark:hover:bg-[#FF3D00] dark:hover:text-white shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Zap className="w-5 h-5 text-[#FF3D00] fill-current" />
              <span>
                ⚡ ACTIVATE YOUR PROTOCOL INSTANTLY (<span className="line-through opacity-70">$67</span>) $27
              </span>
            </a>

            {/* CHECKOUT NOTE — IMMEDIATELY BELOW THE FINAL BUTTON IN ITALICS */}
            <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 italic max-w-lg mx-auto">
              100% Secure Checkout. Clicking BUY BUTTON will redirect you to Gumroad (our verified hosting and delivery portal) for encrypted payment processing and immediate product file delivery.
            </p>
          </div>

          {/* PAID PAGE CLOSING IDENTITY */}
          <div className="mt-16 pt-10 border-t border-[#E2E2E2] dark:border-neutral-800 text-center">
            <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-widest text-neutral-950 dark:text-white">
              YOUR FINAL YEAR PROTOCOL
            </h3>
            <p className="font-serif-title italic text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1">
              The execution system for the person you still have time to become.
            </p>
          </div>

        </div>
      </section>

      {/* Lightbox Modal for Testimonial Screenshots */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto bg-neutral-900 rounded-2xl p-2 border border-neutral-700">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged testimonial screenshot" 
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};
