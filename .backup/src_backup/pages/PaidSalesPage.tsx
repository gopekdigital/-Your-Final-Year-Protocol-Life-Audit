import React, { useState } from 'react';
import { ThemeToggle } from '../context/ThemeContext.tsx';
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
  X
} from 'lucide-react';

interface PaidSalesPageProps {
  onNavigate: (path: RoutePath) => void;
}

const GUMROAD_PAID_URL = 'https://gopekk.gumroad.com/l/yfyp';

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FBF8F3] dark:bg-[#0C0D11] text-[#111215] dark:text-[#F8F9FA] transition-colors duration-200">
      
      {/* =========================================================================
          TOP OF PAGE: EXACT HIERARCHY
          1. Header/Navigation (mounted in App layout)
          2. Social Proof / Rating Line: ⭐⭐⭐⭐⭐ 5 | 385 REVIEWS
          3. Theme Toggle immediately beneath rating line & above hero
          4. Hero Section
      ========================================================================= */}
      <div className="pt-8 pb-4 text-center border-b border-[#E6DFD3] dark:border-[#222634] bg-gradient-to-b from-[#F6F1E6] to-[#FAF6EE] dark:from-[#111319] dark:to-[#0D0E13]">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Exact Rating Line: ⭐⭐⭐⭐⭐ 5 | 385 REVIEWS */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#181B24]/90 border border-[#E4DDD0] dark:border-[#2A2E3D] shadow-xs text-xs sm:text-sm font-semibold tracking-wide text-neutral-800 dark:text-neutral-200">
            <div className="flex items-center text-amber-500 gap-0.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-extrabold ml-1 text-neutral-950 dark:text-white">5</span>
            <span className="text-neutral-400 dark:text-neutral-600 font-normal">|</span>
            <span className="text-amber-900 dark:text-amber-300 uppercase tracking-wider text-xs font-mono font-bold">
              385 REVIEWS
            </span>
          </div>

          {/* Theme Toggle immediately below rating line and above hero */}
          <ThemeToggle />

        </div>
      </div>

      {/* =========================================================================
          PAID PAGE — SECTION 1: THE HOOK
      ========================================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-gradient-to-b from-[#FAF6EE] via-[#F3ECE0] to-[#FAF6EE] dark:from-[#0C0D11] dark:via-[#141620] dark:to-[#0C0D11]">
        
        {/* Subtle warm gold ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* PROMINENT HOOK (Sized large & authoritative per correction 2) */}
          <div className="inline-block mb-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-950 dark:text-white uppercase leading-tight">
              🚀 What if one download could change your LIFE?
            </h2>
          </div>

          {/* Supporting Subhead */}
          <p className="text-base sm:text-xl font-bold text-red-600 dark:text-red-400 uppercase tracking-wide max-w-2xl mx-auto mb-10">
            92% of People Are Silently Deleting Their Own Future. Are You Next?
          </p>

          {/* Product Title & Exact Subtitle — High-contrast architectural hero banner */}
          <div className="mb-14 p-8 sm:p-12 rounded-3xl bg-white/95 dark:bg-[#14161E] border-2 border-amber-500/30 dark:border-amber-400/30 shadow-[0_20px_50px_-15px_rgba(217,119,6,0.12)] max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 dark:text-white uppercase mb-4">
              YOUR FINAL YEAR PROTOCOL
            </h1>
            <p className="font-serif-title italic text-xl sm:text-3xl text-neutral-800 dark:text-neutral-200">
              The execution system for the person you still have time to become.
            </p>
          </div>

          {/* Exact Hook Body Copy (Warm ivory & rich contrast) */}
          <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#FFFFFF] dark:bg-[#151720] border border-[#E6DFD3] dark:border-[#262A38] shadow-md text-base sm:text-lg text-neutral-800 dark:text-neutral-200 space-y-6 leading-relaxed text-left sm:text-center font-normal mb-16">
            <p className="font-semibold text-neutral-950 dark:text-white text-lg sm:text-xl">
              Stop waiting to “feel like it.” You don't lack potential. You lack a system that keeps you moving when motivation disappears.
            </p>
            <p className="font-bold text-neutral-950 dark:text-white text-xl sm:text-2xl font-serif-title italic">
              Let’s be entirely honest: Motivation is a scam.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              You've tried the speeches. The podcasts. The viral quotes. The Monday resets.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              And for a little while, you believe this time will be different. Then the feeling fades. The plan slips. The promises get postponed. And somehow, you're back in the same place, making the same promises to yourself that you made months or years ago.
            </p>
            <p className="font-semibold text-neutral-950 dark:text-white text-lg">
              How many times are you going to promise yourself a different life and then repeat the same patterns that keep you where you are?
            </p>
            <p className="text-amber-800 dark:text-amber-400 font-extrabold text-xl sm:text-2xl font-display pt-2">
              You do not need another fresh start. You need to face the brutal truth.
            </p>
          </div>

          {/* HERO COMPOSITION: Intentional pairing of Software Box & Laptop (Mockup 1 & Mockup 3) */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl p-6 sm:p-12 bg-gradient-to-b from-white via-[#FAF7F0] to-[#F5EFE3] dark:from-[#151720] dark:via-[#12141A] dark:to-[#0D0E13] border border-[#E4DDD0] dark:border-[#262A38] shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
                {/* 3D Software Box */}
                <div className="relative group shrink-0">
                  <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/25 to-neutral-700/25 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500" />
                  <img 
                    src="/assets/aistudio/Your_Final_Year_Protocol_Mockup_1_4f9d4b7b.png" 
                    alt="Your Final Year Protocol Software Box Mockup"
                    className="relative w-64 sm:w-80 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="text-center mt-4">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-800 dark:text-neutral-300 bg-white/90 dark:bg-neutral-800/90 border border-neutral-300 dark:border-neutral-700 px-3.5 py-1 rounded-full font-bold shadow-xs">
                      Complete Digital Packaging
                    </span>
                  </div>
                </div>

                {/* Laptop Workspace Pairing */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/40 mb-3">
                    System Architecture
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white mb-2">
                    Engineered for Relentless Daily Execution
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-5 leading-relaxed">
                    Designed to work seamlessly across your computer, tablet, and handwriting stylus apps. No fluff, no inspirational speeches.
                  </p>
                  
                  {/* Laptop Mockup */}
                  <div className="w-full relative group p-3 rounded-2xl bg-white dark:bg-neutral-900/90 border border-[#E4DDD0] dark:border-[#262A38] shadow-lg">
                    <img 
                      src="/assets/aistudio/Your_Final_Year_Protocol_Mockup_3_3386d224.png" 
                      alt="Your Final Year Protocol Laptop Workspace Mockup"
                      className="w-full object-contain max-h-[220px] drop-shadow-md"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              {/* Verified Value Badges */}
              <div className="mt-10 pt-8 border-t border-[#E6DFD3] dark:border-[#262A38] flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                <span className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Standard Printable PDF
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Interactive Fillable Format
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 11 Master Frameworks
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Instant Gumroad Access
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PAID PAGE — SECTION 2: THE AUTHOR PROFILER: RECONSTRUCTION FROM ZERO
          (Preserved successful side-by-side composition)
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4EDE0]/80 dark:bg-[#111319]/80 border-b border-[#E6DFD3] dark:border-[#222634]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-800 dark:text-amber-400 font-bold">
              The Reality Behind The Architecture
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-neutral-950 dark:text-white mt-2">
              THE AUTHOR PROFILER: RECONSTRUCTION FROM ZERO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-[#151720] p-6 sm:p-10 rounded-3xl border border-[#E4DDD0] dark:border-[#262A38] shadow-xl">
            {/* Author Portrait with cinematic, mostly monochrome treatment & subtle vignette */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-amber-500/25 to-neutral-700/25 blur-sm" />
                <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl max-w-[280px]">
                  <img 
                    src="/assets/aistudio/My_Picture_dd81aaa8.jfif" 
                    alt="GoPek Digital Founder Portrait"
                    className="w-full h-auto object-cover grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Subtle editorial vignette */}
                  <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/40 pointer-events-none" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3.5 text-white text-center">
                    <p className="font-display text-xs tracking-wider uppercase font-semibold">GoPek Digital</p>
                    <p className="text-[10px] text-neutral-300 font-mono">Global Mentor & Founder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Story Text (Word-for-Word Approved Copy) */}
            <div className="md:col-span-7 space-y-4 text-neutral-800 dark:text-neutral-200 leading-relaxed">
              <h3 className="font-serif-title italic text-2xl sm:text-3xl text-neutral-950 dark:text-white font-medium">
                "I Had to Rebuild a Life I Never Planned to Lose.
              </h3>
              <p className="text-sm sm:text-base">
                I know exactly what it feels like to have your entire life and every single one of your plans changed without your permission.
              </p>
              <p className="text-sm sm:text-base">
                My life vanished when I had an accident during COVID. I lost my legs. The same year, I lost millions-of-yuan business — all while navigating life from a wheelchair. I didn't rebuild my life and become a global mentor through motivation. I rebuilt everything because I engineered an execution structure that completely ignored how I felt. If a woman navigating life from a wheelchair can dismantle every excuse and build global stability, so can you. But you cannot change what you refuse to confront."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PAID PAGE — SECTION 3: WHO THIS IS FOR
          (Preserved successful elements with enriched warm ivory styling)
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-[#FAF6EE] dark:bg-[#0C0D11]">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-red-500/15 text-red-700 dark:text-red-400 border border-red-500/30 mb-3">
              <Lock className="w-3.5 h-3.5" />
              <span>Closed-Door Entry Protocol</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-neutral-950 dark:text-white">
              WHO THIS IS FOR
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              This is a closed-door protocol. Read carefully before entering. YOUR FINAL YEAR PROTOCOL is for you if:
            </p>
          </div>

          {/* 8 Criterion Cards (Verbatim copy preserved) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0 font-mono font-bold text-xs">
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

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0 font-mono font-bold text-xs">
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

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0 font-mono font-bold text-xs">
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

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0 font-mono font-bold text-xs">
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

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0 font-mono font-bold text-xs">
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

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0 font-mono font-bold text-xs">
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

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0 font-mono font-bold text-xs">
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

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0 font-mono font-bold text-xs">
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
          PAID PAGE — SECTION 4: WHAT THE SYSTEM IS (Preserved Black Panel)
          + INTEGRATED IMAC MOCKUP (Mockup 2) + FIRST TEXT-ONLY CTA
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0E12] text-white border-b border-neutral-800 relative">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-400 font-bold">
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
                  <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200">
                    It is a framework you work through, not a book you read. It is packed with interactive workspaces, operational calculators, binding contracts, and automated reset systems.
                  </span>
                </li>

                <li className="flex items-start gap-3 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200">
                    It is built to permanently rewrite the way you operate, bringing you the long-term, high-leverage achievements you promised yourself before you began settling.
                  </span>
                </li>

                <li className="flex items-start gap-3 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200">
                    It is a life system for the person you are actively running out of time to become. An execution solution for the person you keep promising yourself you will become.
                  </span>
                </li>
              </ul>
            </div>

            {/* Desktop Display Mockup (Mockup 2 positioned beside relevant copy) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative group p-3 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                <img 
                  src="/assets/aistudio/Your_Final_Year_Protocol_Mockup_2_afd82428.png" 
                  alt="Your Final Year Protocol Desktop Monitor Mockup"
                  className="w-full max-h-[300px] object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="text-center mt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Mechanical Execution Interface
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* FIRST TEXT-ONLY CTA — STRICTLY NO PRICE AND NO BUTTON PER PRODUCTION INSTRUCTION */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-[#181A22] to-neutral-900 border border-amber-500/40 text-center shadow-2xl relative overflow-hidden">
            <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold block mb-2">
              Action Directive
            </span>
            <p className="font-display font-bold text-lg sm:text-2xl text-white tracking-wide max-w-2xl mx-auto leading-snug">
              Want YOUR FINAL YEAR PROTOCOL? Zero excuses. Non-negotiable rules. No compromise. Permanent realignment. Scroll down to download.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PAID PAGE — SECTION 5: TESTIMONIAL INTRODUCTION & 6 SCREENSHOTS
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-[#FAF6EE] dark:bg-[#0C0D11]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-800 dark:text-amber-400 font-bold">
              Unfiltered Reality
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-neutral-950 dark:text-white mt-2">
              DATA DOESN'T LIE
            </h2>
            {/* Exact introductory copy */}
            <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Data Doesn't Lie. Here is what happens when you stop waiting for motivation and downloads an unshakeable execution structure. Unfiltered results from individuals who chose to stop drifting and finally faced their reality.
            </p>
          </div>

          {/* 6 Testimonial Screenshots Grid with zoom support */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIAL_IMAGES.map((item, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="p-3 border-b border-[#E6DFD3] dark:border-[#262A38] bg-[#F4EDE0]/60 dark:bg-neutral-900/80 flex items-center justify-between">
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
                <div className="p-3 text-[11px] text-neutral-600 dark:text-neutral-400 border-t border-[#E6DFD3] dark:border-[#262A38] flex items-center justify-between">
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
          PAID PAGE — SECTION 6: THE 3-PHASE ARCHITECTURE — WHAT’S INSIDE
          + TABLET IPAD MOCKUP (Mockup 4) FOR PRODUCT FORMATS
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-[#F5EFE3]/60 dark:bg-[#111319]/60">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-800 dark:text-amber-400 font-bold">
              The Blueprint Breakdown
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-neutral-950 dark:text-white mt-2">
              THE 3-PHASE ARCHITECTURE — WHAT’S INSIDE
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              The system is completely stripped of theoretical nonsense and broken down into three striking, high-impact operational layers:
            </p>
          </div>

          {/* 3 Phases Detailed Cards */}
          <div className="space-y-8 mb-16">
            
            {/* Phase 1 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-900 dark:text-amber-300 font-mono font-bold text-xs uppercase tracking-wider">
                  Phase 01
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white">
                  Phase 1: The Life Alignment Diagnosis
                </h3>
              </div>
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
            <div className="p-6 sm:p-8 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-900 dark:text-amber-300 font-mono font-bold text-xs uppercase tracking-wider">
                  Phase 02
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white">
                  Phase 2: The Urgency Catalyst (Memento Mori)
                </h3>
              </div>
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
            <div className="p-6 sm:p-8 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-md bg-amber-500/20 text-amber-900 dark:text-amber-300 font-mono font-bold text-xs uppercase tracking-wider">
                  Phase 03
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-950 dark:text-white">
                  Phase 3: The Fearless Formula (The Execution Code)
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  This is the engineered solution to completely rebuild your daily operation from scratch. You will receive a practical, strategic execution system built on The 11 Master Frameworks: Procrastination, Urgency, Life Alignment, Focus, Mornings, Energy, Boundaries, Legacy, Money, Relationships, and the Perpetual Reset.
                </p>
              </div>

              {/* Visible Subheading: THE CORE ENGINES OF EXECUTION */}
              <div className="mt-8 pt-6 border-t border-[#E6DFD3] dark:border-[#262A38]">
                <h4 className="font-display font-bold text-lg sm:text-xl text-neutral-950 dark:text-white mb-2 uppercase">
                  THE CORE ENGINES OF EXECUTION
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                  Inside Phase 3, you unlock the operational assets that turn chaos into absolute automated execution:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#FAF6EE] dark:bg-neutral-800/60 border border-[#E4DDD0] dark:border-neutral-700">
                    <h5 className="font-bold text-neutral-950 dark:text-white text-sm mb-1.5 text-amber-800 dark:text-amber-400">
                      • The Dominant Impact Identifier (The 80/20 Dominoes)
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      A legendary focusing strategy that helps you instantly isolate the few vital actions that create a massive ripple effect. You will learn how to focus exclusively on just 2 core areas of your life that will automatically trigger success across the remaining 8, saving you massive amounts of time and eliminating execution stress. Don't try to repair everything. Find the domino.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#FAF6EE] dark:bg-neutral-800/60 border border-[#E4DDD0] dark:border-neutral-700">
                    <h5 className="font-bold text-neutral-950 dark:text-white text-sm mb-1.5 text-amber-800 dark:text-amber-400">
                      • Execution Over Motivation
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      The raw, mechanical blueprint designed to stop your dependency on temporary emotional intensity and fleeting inspiration.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#FAF6EE] dark:bg-neutral-800/60 border border-[#E4DDD0] dark:border-neutral-700">
                    <h5 className="font-bold text-neutral-950 dark:text-white text-sm mb-1.5 text-amber-800 dark:text-amber-400">
                      • The Accountability Mirror
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      The unshakeable self-grading protocol that keeps you executing at peak performance when absolutely no one is watching.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#FAF6EE] dark:bg-neutral-800/60 border border-[#E4DDD0] dark:border-neutral-700">
                    <h5 className="font-bold text-neutral-950 dark:text-white text-sm mb-1.5 text-amber-800 dark:text-amber-400">
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

          {/* PRODUCT VERSIONS — DISPLAY EXACTLY + IPAD TABLET MOCKUP PAIRING (Mockup 4) */}
          <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#151720] border border-[#E4DDD0] dark:border-[#262A38] mb-14">
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase text-neutral-950 dark:text-white mb-2">
                PRODUCT VERSIONS — DISPLAY EXACTLY
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                Your Final Year Protocol is delivered in two digital formats containing the exact same unshakeable execution system. Choose your version below:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto mb-8">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-xl bg-[#FAF6EE] dark:bg-[#0E1014] border border-[#E4DDD0] dark:border-[#262A38] shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                      📱 Standard Version:
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      Perfect if you want to print it out to write by hand, or import it into handwriting apps like Goodnotes, Notability, or Xodo to work with a stylus.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#FAF6EE] dark:bg-[#0E1014] border border-[#E4DDD0] dark:border-[#262A38] shadow-xs flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-500/20 text-amber-900 dark:text-amber-300 shrink-0">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-950 dark:text-white text-base mb-1">
                      💻 Fillable Version:
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      Perfect if you prefer typing directly into the document using any laptop, phone, or tablet without printing.
                    </p>
                  </div>
                </div>
              </div>

              {/* iPad Tablet Mockup representing handwriting / stylus use */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="p-3 rounded-2xl bg-[#FAF6EE] dark:bg-[#0E1014] border border-[#E4DDD0] dark:border-[#262A38] flex flex-col items-center">
                  <img 
                    src="/assets/aistudio/Your_Final_Year_Protocol_Mockup_4_6cf98aee.png" 
                    alt="Your Final Year Protocol Tablet Stylus Mockup"
                    className="max-h-[260px] object-contain drop-shadow-xl"
                    loading="lazy"
                  />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mt-2 font-bold">
                    Standard & Fillable Formats
                  </span>
                </div>
              </div>

            </div>

            <p className="font-display font-bold text-sm sm:text-base tracking-wider text-amber-800 dark:text-amber-400 uppercase text-center">
              Choose your format. Install your system. Execute your reality.
            </p>
          </div>

          {/* FIRST PAID OFFER — PRICE AND PURCHASE BUTTON */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#14151B] to-[#0A0B0E] text-white border-2 border-amber-500/60 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Complete Execution System
            </div>

            {/* Exact Offer Copy */}
            <p className="font-display text-base sm:text-xl font-bold text-neutral-200 max-w-2xl mx-auto mb-6 leading-relaxed">
              YOUR FINAL YEAR PROTOCOL l The Alignment Diagnostic | The Identity Discomfort Catalyst | The Fearless Formula | No Motivational Highs | Not Self-Help Junk.
            </p>

            {/* Price Presentation: $67 crossed out, $27 current */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-2xl sm:text-3xl font-bold line-through text-neutral-500">
                $67
              </span>
              <span className="text-4xl sm:text-6xl font-extrabold text-amber-400 tracking-tight">
                $27
              </span>
              <span className="text-xs font-mono uppercase px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-md font-bold">
                Lifetime Access
              </span>
            </div>

            {/* Purchase Button with Hover Reaction */}
            <a
              href={GUMROAD_PAID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg font-extrabold bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-neutral-950 shadow-xl hover:shadow-amber-500/40 transform hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-neutral-950" />
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
          PAID PAGE — SECTION 7: CHARITY AND FINAL CONFRONTATION
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] dark:bg-[#0C0D11] border-b border-[#E6DFD3] dark:border-[#222634]">
        <div className="max-w-4xl mx-auto">
          
          {/* Charity Statement */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F6EFE2] dark:bg-[#161820] border-2 border-amber-300/80 dark:border-amber-900/50 text-neutral-800 dark:text-neutral-200 mb-14 flex items-start gap-4 shadow-sm">
            <div className="p-3 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-400 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-900 dark:text-amber-400 block mb-1">
                Beyond The Transaction
              </span>
              <p className="text-sm sm:text-base leading-relaxed">
                As you invest in yourself and take steps toward becoming the person you want to be, you're also contributing to something bigger. 5% of the proceeds from this page goes toward supporting the less privileged. Your progress can create an impact beyond your own life.
              </p>
            </div>
          </div>

          {/* Final Confrontation Copy */}
          <div className="text-center mb-10 space-y-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-neutral-950 dark:text-white uppercase tracking-tight">
              FINAL CONFRONTATION
            </h2>

            <div className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-800 dark:text-neutral-200 space-y-4 leading-relaxed">
              <p className="font-semibold text-neutral-950 dark:text-white">
                Everything in this system is built on a single, unshakable conviction: You don't need to feel like doing it. You need a system that works whether you feel like it or not.
              </p>
              <p>
                There is already enough unfinished business in your life. Do not purchase this system if you want comfortable inspiration to file away and forget. Acquire this protocol only when you are done lying to yourself — and ready to prove it with what you do next.
              </p>
              <p className="font-display font-extrabold text-xl sm:text-2xl text-amber-800 dark:text-amber-400 pt-2 tracking-wide">
                The Clock is Ticking. Secure Your Operating System.
              </p>
            </div>
          </div>

          {/* FINAL PAID PURCHASE BUTTON with hover reaction */}
          <div className="text-center">
            <a
              href={GUMROAD_PAID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-full text-base sm:text-lg font-black bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-amber-500 hover:text-neutral-950 dark:hover:bg-amber-400 dark:hover:text-neutral-950 shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Zap className="w-5 h-5 text-amber-400 dark:text-amber-600 fill-current" />
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
          <div className="mt-16 pt-10 border-t border-[#E6DFD3] dark:border-[#222634] text-center">
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
