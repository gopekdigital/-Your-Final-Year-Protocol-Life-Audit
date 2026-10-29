import React from 'react';
import { ThemeToggle } from '../context/ThemeContext.tsx';
import { RoutePath } from '../types.ts';
import {
  Star,
  ArrowRight,
  Download,
  Zap,
  Smartphone,
  Laptop
} from 'lucide-react';

interface FreebieLandingPageProps {
  onNavigate: (path: RoutePath) => void;
}

const GUMROAD_FREEBIE_URL = 'https://gopekk.gumroad.com/l/bye';

const HERO_STANDING_MOCKUP_SRC =
  '/assets/aistudio/Create_a_premium_ultra-realistic_product_202605170411_11zon_f00299bf.jpeg';
const SHOWCASE_ANGLED_MOCKUP_SRC =
  '/assets/aistudio/Take_the_uploaded_BOX_MOCKUP_202605170350__1__11zon_9a9e7ab2.jpeg';
const SHOWCASE_TWILIGHT_MOCKUP_SRC =
  '/assets/aistudio/MAKE_THE_SURROUNDINGS_OOF_THE_202605170420_11zon_678bff64.jpeg';

const DEEP_PURPLE_BG_CLASS = 'bg-[#3D1073]';

const FULL_DARK_PURPLE_SECTION_CLASS =
  'relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-violet-500/35 bg-gradient-to-b from-[#13122B] via-[#101328] to-[#0B0D1C] text-white';

const SECTION_TITLE_CARD_CLASS =
  'relative overflow-hidden rounded-3xl px-6 py-7 sm:px-10 sm:py-9 text-center max-w-3xl mx-auto ' +
  `${DEEP_PURPLE_BG_CLASS} ` +
  'border border-purple-300/35 ' +
  'shadow-[0_14px_38px_-10px_rgba(46,16,101,0.55)]';

const SECTION_TITLE_ACCENT_BAR_CLASS =
  'absolute inset-x-0 top-0 h-[2px] bg-white/25';

const SECTION_TITLE_EYEBROW_CLASS =
  'text-xs uppercase tracking-widest font-mono text-[#F3E8FF] font-bold';

const FREEBIE_TESTIMONIALS = [
  {
    name: "Jessica Morgan",
    quote: "Not me downloading a FREE PDF and ending up questioning half the decisions I've made this year 😭😂 I thought it was just another free PDF… I thought I'd skim through it in 5 minutes. Turns out the materia is a self accountabilly enforcer. This was was more than what I needed!"
  },
  {
    name: "Brittany Coleman",
    quote: "At this point, my excuses deserve a certificate 😂 Every broken promise had a reasonable explanation at the time. Looking at them together? Different story entirely. This freebie came with an unexpected reality check!"
  },
  {
    name: "Ashley Bennett",
    quote: "Whew! The broken promises part got me. New routine, new goals, new plans… same old excuses. Seeing it all laid out made it harder to pretend I didn't notice the pattern. I needed this more than I thought. Thanks GoPek team"
  },
  {
    name: "Ryan Mitchell",
    quote: "OMG, why did calculating the cost of delay hit harder than all the motivational videos I've watched? 😩 You keep saying ‘I'll do it later’ like time is waiting for you. This made me stop and think about what I'm actually doing with mine."
  },
  {
    name: "Christopher Hayes",
    quote: "What I liked is that this isn't just for someone whose life is falling apart. You can be working, earning, achieving things and STILL know you're neglecting something important. The questions made me look beyond the things I can easily call achievements."
  },
  {
    name: "Megan Parker",
    quote: "Woah. I downloaded this expecting a few nice reminders, not questions I'd still be thinking about hours later. Sometimes you don't need another person to motivate you. You need to sit down and be honest with yourself."
  },
  {
    name: "Tyler Anderson",
    quote: "New month, new me. Monday, new plan. Birthday, fresh start. 😭😂 Somehow, the same things kept following me around. This audit made me look at why I kept restarting without really changing the pattern. That part was uncomfortable, but useful.”"
  },
  {
    name: "Lauren Mitchell",
    quote: "I appreciate that it doesn't make you read pages and pages of advice before getting to the point. You actually have to write things down, examine your promises and face your answers. Simple format, serious questions. Definitely makes you participate.”"
  },
  {
    name: "Brandon Foster",
    quote: "The part about recognizing your patterns? Yeah… I wasn't ready 😂 It's easy to blame circumstances for everything, but sometimes you have to look at what you've repeatedly done or avoided. This free download made me question a few things I'd been telling myself."
  },
  {
    name: "Samantha Brooks",
    quote: "Okay, if this is what GoPek Digital is giving away for free, I'm curious about the full system. 👀 This isn't one of those downloads you collect and forget about. The questions and workspaces on each pages alone make you pause and think. I'm glad I actually sat down and worked through it."
  }
];

export const FreebieLandingPage: React.FC<FreebieLandingPageProps> = () => {
  return (
    <div className="min-h-screen bg-[#F4F2FB] dark:bg-[#080913] text-[#0F1024] dark:text-[#F8FAFC] transition-colors duration-200">
      
      {/* =========================================================================
          TOP OF PAGE: EXACT HIERARCHY
          1. Header/Navigation (mounted in App layout)
          2. Social Proof / Download Count Line: ⭐⭐⭐⭐⭐ 5 | 1,574 DOWNLOADS
          3. Theme Toggle immediately beneath rating line & above hero
          4. Hero Section
      ========================================================================= */}
      <div className={`pt-8 pb-4 text-center border-b border-purple-300/30 dark:border-purple-400/25 ${DEEP_PURPLE_BG_CLASS} shadow-[0_10px_28px_-10px_rgba(46,16,101,0.55)]`}>
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Approved Freebie Rating & Download Count Line */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#16072C]/65 dark:bg-[#0D081C]/75 backdrop-blur-md border border-white/25 shadow-[0_6px_18px_-4px_rgba(8,9,19,0.45)] text-xs sm:text-sm font-semibold tracking-wide text-white">
            <div className="flex items-center text-amber-300 gap-0.5">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            </div>
            <span className="font-extrabold ml-1 text-white">5</span>
            <span className="text-white/40 font-normal">|</span>
            <span className="text-white uppercase tracking-wider text-xs font-mono font-bold">
              1,574 DOWNLOADS
            </span>
          </div>

          {/* Theme Toggle immediately below rating line and above hero */}
          <ThemeToggle
            accent="purple"
            className="[&>[role=group]]:bg-white/95 dark:[&>[role=group]]:bg-[#0C0E1D]/85 [&>[role=group]]:border-white/45 dark:[&>[role=group]]:border-white/25 [&>[role=group]]:shadow-[0_6px_18px_rgba(8,9,19,0.3)] dark:[&_button[aria-pressed=false]]:text-slate-200"
          />

        </div>
      </div>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 1: THE HOOK
      ========================================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#DFDCF0] dark:border-[#1E223B] bg-gradient-to-b from-[#F7F6FC] via-[#EEEAF9] to-[#F7F6FC] dark:from-[#080913] dark:via-[#101228] dark:to-[#080913]">
        
        {/* Atmospheric violet, warm-amber & cyan ambient light derived from the cover artwork */}
        <div
          aria-hidden="true"
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[780px] h-[420px] bg-gradient-to-r from-amber-500/10 via-violet-600/15 to-cyan-500/10 dark:from-amber-500/12 dark:via-violet-600/22 dark:to-cyan-500/14 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="text-center mb-12">
            {/* Prominent Freebie Banner Header */}
            <div className="mb-4">
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0F1024] dark:text-white uppercase">
                BEFORE THE YEAR ENDS
              </h1>
            </div>

            {/* Exact Subtitle */}
            <p className="font-serif-title italic text-xl sm:text-2xl lg:text-3xl text-[#B45309] dark:text-[#FB923C] max-w-2xl mx-auto">
              A Life Audit for the Person You Still Have Time to Become.
            </p>
          </div>

          {/* Side-by-side Hero Card: Upright Standing 3D Product Mockup Left + Approved Copy Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-white dark:bg-[#111428] p-6 sm:p-10 lg:p-12 rounded-3xl border border-violet-500/30 dark:border-violet-400/30 shadow-[0_22px_55px_-16px_rgba(109,40,217,0.18)] dark:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.65)]">
            
            {/* Left Column on Desktop: Upright Standing 3D Product Mockup */}
            <div className="lg:col-span-5 min-w-0 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2.5 bg-gradient-to-tr from-amber-500/20 via-violet-600/25 to-cyan-500/20 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500 pointer-events-none"
                />
                <div className="relative rounded-2xl overflow-hidden border border-violet-500/30 dark:border-violet-400/35 bg-[#121024] shadow-[0_20px_45px_-12px_rgba(15,16,36,0.45)]">
                  <img
                    src={HERO_STANDING_MOCKUP_SRC}
                    alt="Before The Year Ends — Upright 3D Edition"
                    className="w-full h-auto object-contain block select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Right Column on Desktop: Preserved Body Copy */}
            <div className="lg:col-span-7 min-w-0 space-y-6 text-base sm:text-lg text-[#262940] dark:text-slate-200 leading-relaxed font-normal">
              <p>
                Before you set another goal, make another promise, or plan another year, take an honest look at the life you're actually living. You don't need another fresh start. You need to face the truth. One honest life audit could reveal what years of motivation never did.
              </p>

              <div className="p-6 rounded-2xl bg-[#F6F4FD] dark:bg-[#0A0C19] border border-[#DFDCF0] dark:border-[#232846] shadow-xs space-y-4">
                <p className="text-[#121428] dark:text-slate-100 font-medium leading-relaxed">
                  BEFORE THE YEAR ENDS is a confrontational life-audit that exposes where your life is silently collapsing before another year disappears. It Confront your reality. Expose the pattern. Calculate the cost of delay. Decide what changes next. and it is{' '}
                  {/* Prominent First FREE Mention using mockup-derived warm amber-gold accent */}
                  <span className="font-extrabold text-2xl tracking-wider text-[#B45309] dark:text-[#FBBF24] bg-amber-500/15 dark:bg-amber-400/15 px-3.5 py-1 rounded-lg border-2 border-amber-500/45 dark:border-amber-400/45 inline-block shadow-sm">
                    100% FREE
                  </span>
                </p>

                <p className="font-serif-title italic text-lg sm:text-xl text-[#0F1024] dark:text-white">
                  Its A Life Audit for the Person You Still Have Time to Become’
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 2: THIS IS NOT A MOTIVATION MATERIAL
      ========================================================================= */}
      <section
        id="not-motivation-material"
        className={`${FULL_DARK_PURPLE_SECTION_CLASS} scroll-mt-20`}
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/12 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          
          {/* Framed Section Title Card */}
          <div className={`${SECTION_TITLE_CARD_CLASS} mb-10`}>
            <div aria-hidden="true" className={SECTION_TITLE_ACCENT_BAR_CLASS} />
            <span className={SECTION_TITLE_EYEBROW_CLASS}>
              The Reality Enforcer
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white mt-2">
              This Is Not a Motivation Material. It Is a Life Reset System.
            </h2>
          </div>

          <div className="bg-[#181636]/75 backdrop-blur-xs p-6 sm:p-10 rounded-3xl border border-violet-400/25 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.55)] space-y-6 text-[#F3F1FC] leading-relaxed text-base sm:text-lg">
            
            <p className="font-mono font-bold text-sm uppercase tracking-wider text-white border-l-2 border-[#C4B5FD] pl-3">
              Be honest. Nobody's watching.
            </p>

            <p className="font-serif-title italic text-xl sm:text-2xl text-white font-medium">
              Are you living the life you wanted, or have you spent the last few years convincing yourself to be satisfied with a life you merely settled for?
            </p>

            <p className="text-[#F3F1FC]">
              You may be working hard. You may be earning well. You may have achieved things other people admire. But are you making progress in the areas that genuinely matter to you?
            </p>

            <p className="font-semibold text-white">
              Because being successful in one area doesn't mean every other area of your life is where it should be.
            </p>

            <p className="text-[#E6E2F8]">
              And being busy doesn't mean you're moving in the right direction.
            </p>

            <p className="p-5 rounded-2xl bg-[#221F48]/75 border border-violet-300/25 text-white text-sm sm:text-base">
              BEFORE THE YEAR ENDS helps you confront the gap between what you intended to do and what your life actually reflects. Identify the patterns keeping you stuck, examine the cost of continuing as you are, and decide what deserves to change.
            </p>

            <p className="font-bold text-white">
              You don't need another temporary shot of motivation. You need an honest assessment of your reality.
            </p>

            <p className="text-[#EDE4FF] font-bold text-lg font-display">
              The question isn't whether you have potential. It's what your life can actually prove.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 3: WHAT'S INSIDE BEFORE THE YEAR ENDS?
          + CLEAN PRODUCT MOCKUP SHOWCASE
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DFDCF0] dark:border-[#1E223B] bg-[#F4F2FB] dark:bg-[#080913]">
        <div className="max-w-6xl mx-auto">
          
          {/* Framed Section Title Card */}
          <div className={`${SECTION_TITLE_CARD_CLASS} mb-6`}>
            <div aria-hidden="true" className={SECTION_TITLE_ACCENT_BAR_CLASS} />
            <span className={SECTION_TITLE_EYEBROW_CLASS}>
              The Diagnostic Terminal
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white mt-2">
              WHAT'S INSIDE BEFORE THE YEAR ENDS?
            </h2>
          </div>

          <div className="text-center mb-12">
            <p className="text-base sm:text-lg text-[#2E324B] dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
              This is a raw, 20-page terminal architecture packing 9 deeply confrontational diagnostic workspaces that strip away every layer of self-delusion to reveal the exact reality of your current existence. ,
            </p>
            <span className="text-xs uppercase font-mono tracking-widest text-violet-700 dark:text-cyan-300 font-bold mt-3 inline-block">
              INSIDE:
            </span>
          </div>

          {/* Diagnostic Workspaces Cards (Verbatim copy preserved) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            <div className="p-6 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] shadow-sm hover:border-violet-500/45 dark:hover:border-violet-400/45 transition-all">
              <h3 className="font-display font-bold text-lg text-[#0F1024] dark:text-white mb-2 flex items-center gap-2">
                <span>📖</span> THE CORE VISION LEDGER
              </h3>
              <p className="text-xs sm:text-sm text-[#323650] dark:text-slate-300 leading-relaxed mb-3">
                Put the life you intend to build on record. List the promises, commitments, ambitions, changes, and unfinished pieces of your life that still matter to you. Then mark what became reality — and what didn't.
              </p>
              <p className="text-xs font-serif-title italic text-[#525775] dark:text-slate-400">
                This is where you stop looking at your life through intention and start looking at it through evidence.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] shadow-sm hover:border-violet-500/45 dark:hover:border-violet-400/45 transition-all">
              <h3 className="font-display font-bold text-lg text-[#0F1024] dark:text-white mb-2 flex items-center gap-2">
                <span>📊</span> THE EXECUTION SCORECARD
              </h3>
              <p className="text-xs sm:text-sm text-[#323650] dark:text-slate-300 leading-relaxed mb-3">
                Measure the gap between what you said you would do and what your life actually reflects. The calculation is simple. The result is difficult to argue with.
              </p>
              <p className="text-xs font-serif-title italic text-[#525775] dark:text-slate-400">
                This is not a score of your worth. It is a snapshot of your current execution pattern.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] shadow-sm hover:border-violet-500/45 dark:hover:border-violet-400/45 transition-all">
              <h3 className="font-display font-bold text-lg text-[#0F1024] dark:text-white mb-2 flex items-center gap-2">
                <span>🔍</span> THE PATTERN DETECTOR
              </h3>
              <p className="text-xs sm:text-sm text-[#323650] dark:text-slate-300 leading-relaxed mb-3">
                Identify the structural leaks in your execution, whether they involve fading motivation, postponement, inconsistency, distraction, avoidance, constant restarting, or lack of structure.
              </p>
              <p className="text-xs font-serif-title italic text-[#525775] dark:text-slate-400">
                The goal is not to label yourself. It is to identify what keeps pulling you away from the person you want to become.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] shadow-sm hover:border-violet-500/45 dark:hover:border-violet-400/45 transition-all">
              <h3 className="font-display font-bold text-lg text-[#0F1024] dark:text-white mb-2 flex items-center gap-2">
                <span>🧾</span> THE REALITY RECEIPT
              </h3>
              <p className="text-xs sm:text-sm text-[#323650] dark:text-slate-300 leading-relaxed">
                Choose the area of your life you can no longer comfortably explain away. Put the record in front of yourself: what you said would happen, what actually happened, how often you restarted, what you keep telling yourself, and what an honest observer would conclude.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] shadow-sm hover:border-violet-500/45 dark:hover:border-violet-400/45 transition-all">
              <h3 className="font-display font-bold text-lg text-[#0F1024] dark:text-white mb-2 flex items-center gap-2">
                <span>⏳</span> THE DELAY COST CALCULATOR
              </h3>
              <p className="text-xs sm:text-sm text-[#323650] dark:text-slate-300 leading-relaxed">
                Put a price on staying stagnant. Examine what another 12 months or five years of repeating the same patterns could cost you in wealth, opportunities, relationships, personal growth, and peace of mind.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] shadow-sm hover:border-violet-500/45 dark:hover:border-violet-400/45 transition-all">
              <h3 className="font-display font-bold text-lg text-[#0F1024] dark:text-white mb-2 flex items-center gap-2">
                <span>⚖️</span> THE REALITY VERDICT PROTOCOL
              </h3>
              <p className="text-xs sm:text-sm text-[#323650] dark:text-slate-300 leading-relaxed mb-3">
                Turn awareness into a non-negotiable decision. Confront what must change, define what you are no longer willing to repeat, and decide what deserves your attention next.
              </p>
              <p className="text-xs font-serif-title italic text-[#525775] dark:text-slate-400">
                Because awareness without a decision eventually becomes another forgotten realization.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] shadow-sm hover:border-violet-500/45 dark:hover:border-violet-400/45 transition-all">
              <h3 className="font-display font-bold text-lg text-[#0F1024] dark:text-white mb-2 flex items-center gap-2">
                <span>⚡</span> THE 3 ALPHA CONFRONTATIONAL TEST
              </h3>
              <p className="text-xs sm:text-sm text-[#323650] dark:text-slate-300 leading-relaxed">
                The personal reckoning that ended my dependence on motivation, confronted me with the time I actually have, and forced me to take responsibility for what happens next.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] shadow-sm md:col-span-2 lg:col-span-2 hover:border-violet-500/45 dark:hover:border-violet-400/45 transition-all">
              <h3 className="font-display font-bold text-lg text-[#0F1024] dark:text-white mb-2 flex items-center gap-2">
                <span>✨</span> AND MORE…
              </h3>
              <p className="text-xs sm:text-sm text-[#323650] dark:text-slate-300 leading-relaxed">
                This goes beyond identifying what went wrong. It's an opportunity to examine where your life stands, what has been holding it back, what matters most now, and what must happen next.
              </p>
            </div>

          </div>

          {/* =====================================================================
              PRODUCT SHOWCASE — REPLACING REMOVED WORKSHEET PREVIEW GALLERY
              Uses 2 distinct supplied Before The Year Ends mockups + concise copy
          ===================================================================== */}
          <div className="pt-12 border-t border-[#DFDCF0] dark:border-[#1E223B]">
            <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-[#111428] border border-violet-500/30 dark:border-violet-400/30 shadow-[0_18px_48px_-14px_rgba(109,40,217,0.14)] dark:shadow-[0_24px_55px_-15px_rgba(0,0,0,0.6)] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-24 right-10 w-80 h-80 bg-gradient-to-br from-violet-600/12 via-fuchsia-500/8 to-cyan-500/12 rounded-full blur-3xl pointer-events-none"
              />

              <div className="relative z-10 mb-8 sm:mb-10">
                <div className={`${SECTION_TITLE_CARD_CLASS} mb-5`}>
                  <div aria-hidden="true" className={SECTION_TITLE_ACCENT_BAR_CLASS} />
                  <span className={SECTION_TITLE_EYEBROW_CLASS}>
                    Before Another Year Disappears
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mt-2">
                    Pause the Drift. Face the Record.
                  </h3>
                </div>
                <p className="max-w-2xl mx-auto text-center text-sm sm:text-base text-[#323650] dark:text-slate-300 leading-relaxed">
                  An honest reckoning between the past you keep repeating and the future you still have time to build—designed for quiet, uninterrupted honesty with yourself.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                {/* Distinct Supplied Mockup 1: Isometric Luxury Box in Magenta & Cyan Rim Light */}
                <div className="md:col-span-5 rounded-2xl overflow-hidden border border-violet-500/25 dark:border-violet-400/30 bg-[#0D0E1C] shadow-lg group">
                  <img
                    src={SHOWCASE_ANGLED_MOCKUP_SRC}
                    alt="Before The Year Ends — Angled Edition Showcase"
                    className="w-full h-full md:h-[290px] lg:h-[330px] object-cover object-center block select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Distinct Supplied Mockup 2: Upright Edition at Twilight Dusk */}
                <div className="md:col-span-7 rounded-2xl overflow-hidden border border-violet-500/25 dark:border-violet-400/30 bg-[#0D0E1C] shadow-lg group">
                  <img
                    src={SHOWCASE_TWILIGHT_MOCKUP_SRC}
                    alt="Before The Year Ends — Twilight Horizon Showcase"
                    className="w-full h-full md:h-[290px] lg:h-[330px] object-cover object-center block select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 4: TESTIMONIAL INTRODUCTION & 10 TEXT TESTIMONIALS
          (Strictly Text-Based Cards; No Testimonial Pictures)
      ========================================================================= */}
      <section className={FULL_DARK_PURPLE_SECTION_CLASS}>
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/12 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* Framed Section Title Card */}
          <div className={`${SECTION_TITLE_CARD_CLASS} mb-6`}>
            <div aria-hidden="true" className={SECTION_TITLE_ACCENT_BAR_CLASS} />
            <span className={SECTION_TITLE_EYEBROW_CLASS}>
              Real User Evidence
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white mt-2">
              UNDENIABLE EVIDENCE
            </h2>
          </div>

          <div className="text-center mb-12">
            {/* Exact introductory copy */}
            <p className="text-base sm:text-lg text-[#F3F1FC] max-w-3xl mx-auto font-medium leading-relaxed">
              The evidence is undeniable. Unfiltered, real-world operational breakthrough testimonials from individuals who have downloaded and used the system…
            </p>
          </div>

          {/* 10 Text-Based Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FREEBIE_TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-violet-400/25 bg-[#181636]/80 shadow-[0_14px_34px_-12px_rgba(0,0,0,0.45)] flex flex-col justify-between hover:border-violet-300/45 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-violet-300/15 pb-2">
                    <span className="font-bold text-white text-sm">
                      {t.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#DDD6FE] uppercase tracking-widest font-bold">
                      Audit #{idx + 1}
                    </span>
                  </div>
                  <p className="text-sm text-[#F1EFFA] leading-relaxed font-normal">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-slate-300 border-t border-violet-300/15 font-mono">
                  <span>Verified Freebie Download</span>
                  <div className="flex text-amber-300">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TEXT-ONLY CTA AFTER THE TESTIMONIALS (Exact text, not a button) */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#1A173B]/85 text-white border border-violet-400/35 text-center shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5)]">
            <p className="text-sm sm:text-base font-semibold text-[#F3F1FC] mb-2">
              Stop running out of time for the person you keep promising to become.
            </p>
            <p className="font-display font-extrabold text-lg sm:text-2xl text-[#FBBF24] uppercase tracking-wider">
              SCROLL DOWN TO GET YOUR FREE DOWNLOAD
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 5: WHAT WILL YOU WALK AWAY WITH?
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DFDCF0] dark:border-[#1E223B] bg-[#F4F2FB] dark:bg-[#080913]">
        <div className="max-w-4xl mx-auto">
          
          {/* Framed Section Title Card */}
          <div className={`${SECTION_TITLE_CARD_CLASS} mb-6`}>
            <div aria-hidden="true" className={SECTION_TITLE_ACCENT_BAR_CLASS} />
            <span className={SECTION_TITLE_EYEBROW_CLASS}>
              Concrete Outcomes
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white mt-2">
              WHAT WILL YOU WALK AWAY WITH?
            </h2>
          </div>

          <div className="text-center mb-12">
            <p className="text-base sm:text-lg text-[#2E324B] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              This isn't another collection of feel-good essays or motivational quotes you'll forget tomorrow. It's a practical, confrontational life-audit experience designed to...
            </p>
          </div>

          {/* 7 Outcomes List (Verbatim copy preserved) */}
          <div className="space-y-4">
            
            <div className="p-5 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] flex items-start gap-4 shadow-sm hover:border-violet-500/40 dark:hover:border-violet-400/40 transition-colors">
              <span className="text-xl shrink-0 mt-0.5">🔍</span>
              <p className="text-sm sm:text-base text-[#22253A] dark:text-slate-200 leading-relaxed font-medium">
                Expose the gap between the life you have and the life you actually want.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] flex items-start gap-4 shadow-sm hover:border-violet-500/40 dark:hover:border-violet-400/40 transition-colors">
              <span className="text-xl shrink-0 mt-0.5">📊</span>
              <p className="text-sm sm:text-base text-[#22253A] dark:text-slate-200 leading-relaxed font-medium">
                Measure how much of your ambition has become reality — and how much remains talk.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] flex items-start gap-4 shadow-sm hover:border-violet-500/40 dark:hover:border-violet-400/40 transition-colors">
              <span className="text-xl shrink-0 mt-0.5">🧠</span>
              <p className="text-sm sm:text-base text-[#22253A] dark:text-slate-200 leading-relaxed font-medium">
                Identify the patterns, excuses, and habits quietly influencing your decisions.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] flex items-start gap-4 shadow-sm hover:border-violet-500/40 dark:hover:border-violet-400/40 transition-colors">
              <span className="text-xl shrink-0 mt-0.5">⏳</span>
              <p className="text-sm sm:text-base text-[#22253A] dark:text-slate-200 leading-relaxed font-medium">
                Examine the potential cost of another year spent repeating the same routines without meaningful progress.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] flex items-start gap-4 shadow-sm hover:border-violet-500/40 dark:hover:border-violet-400/40 transition-colors">
              <span className="text-xl shrink-0 mt-0.5">🎯</span>
              <p className="text-sm sm:text-base text-[#22253A] dark:text-slate-200 leading-relaxed font-medium">
                Discover which areas of your life need urgent attention and which deserve greater ambition.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] flex items-start gap-4 shadow-sm hover:border-violet-500/40 dark:hover:border-violet-400/40 transition-colors">
              <span className="text-xl shrink-0 mt-0.5">⚖️</span>
              <p className="text-sm sm:text-base text-[#22253A] dark:text-slate-200 leading-relaxed font-medium">
                Confront the truth about your progress without hiding behind intentions or past achievements.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#DFDCF0] dark:border-[#242947] bg-white dark:bg-[#121528] flex items-start gap-4 shadow-sm hover:border-violet-500/40 dark:hover:border-violet-400/40 transition-colors">
              <span className="text-xl shrink-0 mt-0.5">🚀</span>
              <p className="text-sm sm:text-base text-[#22253A] dark:text-slate-200 leading-relaxed font-medium">
                Turn your findings into a clear decision about what must change, what deserves your focus, and what happens next.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center p-5 rounded-2xl bg-[#F3EFFE] dark:bg-[#11152B] border border-violet-500/30 dark:border-violet-400/30">
            <p className="text-sm sm:text-base font-semibold text-violet-900 dark:text-violet-200">
              Whether you're trying to get your life back on track or already doing well and want to identify your next level, this this is what you need an it’s free
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 6: WHY I CREATED THIS
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DFDCF0] dark:border-[#1E223B] bg-[#EBE7F8] dark:bg-[#0C0E1D]">
        <div className="max-w-4xl mx-auto">
          
          {/* Framed Section Title Card */}
          <div className={`${SECTION_TITLE_CARD_CLASS} mb-10`}>
            <div aria-hidden="true" className={SECTION_TITLE_ACCENT_BAR_CLASS} />
            <span className={SECTION_TITLE_EYEBROW_CLASS}>
              The Origin Story
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white mt-2">
              WHY I CREATED THIS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-[#121528] p-6 sm:p-10 rounded-3xl border border-[#DFDCF0] dark:border-[#242947] shadow-xl">
            {/* Creator Portrait with cinematic monochrome editorial style */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                <div
                  aria-hidden="true"
                  className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-amber-500/25 via-violet-600/25 to-cyan-500/25 blur-sm pointer-events-none"
                />
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#DFDCF0] dark:border-[#2A3052] shadow-2xl max-w-[280px]">
                  <img 
                    src="/assets/freebie/My Picture.jfif" 
                    alt="GoPek Founder"
                    className="w-full h-auto object-cover grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/40 pointer-events-none" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3.5 text-white text-center">
                    <p className="font-display text-xs tracking-wider uppercase font-semibold">GoPek Digital</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Creator Story Text */}
            <div className="md:col-span-7 space-y-4 text-[#262940] dark:text-slate-200 leading-relaxed text-sm sm:text-base">
              <p>
                I know exactly what it feels like to have your life and plans changed without your permission. I had a devastating accident. I had to learn how to navigate the world from a wheelchair. And right in the middle of that physical crisis, I still watched my life savings—a global business worth millions of yuan—vanish entirely.
              </p>
              <p>
                I didn't rebuild my life and become a global mentor because I was motivated. Motivation is a dangerous lie. I rebuilt it because I engineered a structure that didn't care how I felt. If a woman navigating life from a wheelchair can dismantle excuses and build global stability, so can you. But it starts by facing your reality..
              </p>
              <p className="font-serif-title italic text-lg sm:text-xl text-[#0F1024] dark:text-white font-medium pt-1">
                You cannot change what you refuse to confront.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — STANDALONE SECTION: PRODUCT VERSIONS
      ========================================================================= */}
      <section
        id="product-versions-section"
        className={FULL_DARK_PURPLE_SECTION_CLASS}
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/12 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* PRODUCT VERSIONS — Framed Title Card */}
          <div className={`${SECTION_TITLE_CARD_CLASS} mb-8`}>
            <div aria-hidden="true" className={SECTION_TITLE_ACCENT_BAR_CLASS} />
            <h2 className="font-display font-bold text-xl sm:text-2xl uppercase text-white">
              PRODUCT VERSIONS — DISPLAY EXACTLY
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#F3F1FC] mb-8 max-w-2xl mx-auto leading-relaxed">
            Before The Year Ends is delivered in two digital formats (PDF) containing the exact same life-reset experience. Choose your version below:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-8">
            <div className="p-6 rounded-2xl bg-[#181636]/85 border border-violet-400/30 shadow-[0_14px_34px_-12px_rgba(0,0,0,0.45)] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-violet-500/20 text-[#DDD6FE] border border-violet-400/25 shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1.5">
                  📱 Standard PDF Version:
                </h3>
                <p className="text-xs sm:text-sm text-[#EAE6FA] leading-relaxed">
                  Perfect if you want to print it out to write by hand, or import it into handwriting apps like Goodnotes, Notability, or Xodo to work with a stylus.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#181636]/85 border border-violet-400/30 shadow-[0_14px_34px_-12px_rgba(0,0,0,0.45)] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/20 text-cyan-200 border border-cyan-400/25 shrink-0">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1.5">
                  💻 Fillable PDF Version:
                </h3>
                <p className="text-xs sm:text-sm text-[#EAE6FA] leading-relaxed">
                  Perfect if you prefer typing directly into the document using any laptop, phone, or tablet without printing.
                </p>
              </div>
            </div>
          </div>

          <p className="font-display font-bold text-sm sm:text-base tracking-wider text-[#EDE4FF] uppercase">
            Choose your format. Complete your audit. Face your reality.
          </p>
          <p className="mt-3 text-xs sm:text-[13px] text-[#D8D3EE] max-w-2xl mx-auto leading-relaxed">
            NOTE: This is a digital PDF download. No physical product will be shipped. Follow the download link to access your free PDF through Gumroad.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — FIRST DOWNLOAD CTA SECTION
      ========================================================================= */}
      <section id="freebie-download-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DFDCF0] dark:border-[#1E223B] bg-[#EBE7F8] dark:bg-[#0C0E1D]">
        <div className="max-w-4xl mx-auto">

          {/* DOWNLOAD CTA COPY & DOWNLOAD BUTTON */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#13122B] via-[#101328] to-[#0B0D1C] text-white border-2 border-violet-500/50 shadow-[0_24px_60px_-15px_rgba(109,40,217,0.35)] text-center relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-1/4 w-72 h-72 bg-violet-500/15 rounded-full blur-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            />

            {/* DOWNLOAD CTA COPY */}
            <p className="relative z-10 font-display text-base sm:text-xl font-bold text-slate-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              You have spent enough years masterfully convincing yourself to be satisfied with a life you merely settled for. Your life isn't standing still; you are actively trading your highest purpose for a comfortable trap.
            </p>

            {/* DOWNLOAD BUTTON */}
            <a
              href={GUMROAD_FREEBIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-full text-base sm:text-lg font-black bg-gradient-to-r from-[#F59E0B] via-[#FB923C] to-[#F97316] hover:from-[#FBBF24] hover:via-[#FB923C] hover:to-[#EA580C] text-[#0B0C18] shadow-[0_12px_35px_-6px_rgba(249,115,22,0.5)] hover:shadow-[0_16px_42px_-6px_rgba(249,115,22,0.65)] transform hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-[#0B0C18]" />
              <span>⚡ RECLAIM YOUR REALITY: FREE DOWNLOAD</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* NOTE BELOW THE DOWNLOAD BUTTON IN ITALICS */}
            <p className="relative z-10 mt-4 text-xs text-slate-300/90 italic max-w-lg mx-auto leading-normal">
              Note: Clicking the Download button will securely redirect you to Gumroad, our verified hosting and delivery portal, where you can complete your instant free download.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 7: FINAL CONFRONTATION AND CTA
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DFDCF0] dark:border-[#1E223B] bg-[#F4F2FB] dark:bg-[#080913]">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Framed Section Title Card */}
          <div className={`${SECTION_TITLE_CARD_CLASS} mb-10`}>
            <div aria-hidden="true" className={SECTION_TITLE_ACCENT_BAR_CLASS} />
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
              FINAL CONFRONTATION
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-base sm:text-lg text-[#262940] dark:text-slate-200 space-y-5 leading-relaxed mb-10 text-left sm:text-center">
            <p>
              Remember, Every promise you made to yourself, whether it was a childhood dream or a calculated goal from last year, was originally connected to a vision of a better life. Over time, promises get forgotten, postponed, renegotiated, or quietly replaced. BEFORE THE YEAR ENDS is your private life auditor, patterns, priorities detector, and the cost of continuing exactly as you are calculator.
            </p>
            <p className="font-semibold text-[#0F1024] dark:text-white">
              Don't download it because it's FREE Download it only when you're ready to tell yourself the truth
            </p>
            <p className="font-bold text-[#C2410C] dark:text-[#FB923C]">
              There is already enough unfinished business in your life.
            </p>
            <p className="font-serif-title italic text-lg sm:text-xl text-[#0F1024] dark:text-white">
              A Life Audit for the Person You Still Have Time to Become.
            </p>
            <p className="font-mono font-extrabold text-2xl text-violet-700 dark:text-[#FBBF24]">
              100% FREE.
            </p>
          </div>

          {/* FINAL FREEBIE BUTTON */}
          <div className="text-center">
            <a
              href={GUMROAD_FREEBIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-full text-base sm:text-lg font-black bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#4F46E5] hover:from-[#5B21B6] hover:via-[#6D28D9] hover:to-[#4338CA] text-white shadow-[0_14px_38px_-6px_rgba(124,58,237,0.5)] hover:shadow-[0_18px_44px_-6px_rgba(124,58,237,0.65)] transform hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Download className="w-5 h-5 text-amber-300" />
              <span>GET YOUR FREE LIFE AUDIT NOW</span>
            </a>

            {/* NOTE BELOW THE FINAL DOWNLOAD BUTTON IN ITALICS */}
            <p className="mt-4 text-xs text-[#525775] dark:text-slate-400 italic max-w-lg mx-auto">
              Note: Clicking the Download button will securely redirect you to Gumroad, our verified hosting and delivery portal, where you can complete your instant free download.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
