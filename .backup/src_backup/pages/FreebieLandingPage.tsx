import React from 'react';
import { ThemeToggle } from '../context/ThemeContext.tsx';
import { RoutePath } from '../types.ts';
import { 
  Star, 
  ArrowRight, 
  Download, 
  Lock, 
  Zap, 
  Smartphone, 
  Laptop
} from 'lucide-react';

interface FreebieLandingPageProps {
  onNavigate: (path: RoutePath) => void;
}

const GUMROAD_FREEBIE_URL = 'https://gopekk.gumroad.com/l/bye';

const FREEBIE_TESTIMONIALS = [
  {
    name: "Jessica Morgan",
    quote: "Not me downloading a FREE PDF and ending up questioning half the decisions I've made this year 😭😂 I thought it was just another free PDF… I thought I'd skim through it in 5 minutes. Turns out the materia is a self accountabilly enforcer. This was not what I needed!"
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

const WORKSHEET_PAGES = [
  { id: 1, title: "Cover & Yearly Record Ledger" },
  { id: 2, title: "The Graveyard Audit" },
  { id: 3, title: "The Score & Pattern Detector" },
  { id: 4, title: "The Receipt & Evidence Record" },
  { id: 5, title: "The Cost of Delay Calculator" },
  { id: 6, title: "The Verdict & Reality Contract" },
  { id: 7, title: "Trust: Why I Built This" },
  { id: 8, title: "The Next Step & Framework Road" }
];

export const FreebieLandingPage: React.FC<FreebieLandingPageProps> = () => {
  return (
    <div className="min-h-screen bg-[#FBF8F3] dark:bg-[#0C0D11] text-[#111215] dark:text-[#F8F9FA] transition-colors duration-200">
      
      {/* =========================================================================
          TOP OF PAGE: EXACT HIERARCHY
          1. Header/Navigation (mounted in App layout)
          2. Social Proof / Download Count Line: ⭐⭐⭐⭐⭐ 5 | 1,574 DOWNLOADS
          3. Theme Toggle immediately beneath rating line & above hero
          4. Hero Section
      ========================================================================= */}
      <div className="pt-8 pb-4 text-center border-b border-[#E6DFD3] dark:border-[#222634] bg-gradient-to-b from-[#F6F1E6] to-[#FAF6EE] dark:from-[#111319] dark:to-[#0D0E13]">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Approved Freebie Rating & Download Count Line */}
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
            <span className="text-emerald-800 dark:text-emerald-300 uppercase tracking-wider text-xs font-mono font-bold">
              1,574 DOWNLOADS
            </span>
          </div>

          {/* Theme Toggle immediately below rating line and above hero */}
          <ThemeToggle />

        </div>
      </div>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 1: THE HOOK
      ========================================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-gradient-to-b from-[#FAF6EE] via-[#F3ECE0] to-[#FAF6EE] dark:from-[#0C0D11] dark:via-[#141520] dark:to-[#0C0D11]">
        
        {/* Restrained purple/magenta ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="text-center mb-12">
            {/* Prominent Freebie Banner Header */}
            <div className="mb-4">
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 dark:text-white uppercase">
                BEFORE THE YEAR ENDS
              </h1>
            </div>

            {/* Exact Subtitle */}
            <p className="font-serif-title italic text-xl sm:text-2xl lg:text-3xl text-neutral-800 dark:text-neutral-200 max-w-2xl mx-auto mb-8">
              A Life Audit for the Person You Still Have Time to Become.
            </p>

            {/* Exact Hook Headline */}
            <h2 className="text-xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white mb-6 tracking-tight max-w-3xl mx-auto leading-snug">
              What if your life isn't going wrong… it's just going unexamined?
            </h2>
          </div>

          {/* Side-by-side Hero Banner with Product Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/95 dark:bg-[#151720] p-6 sm:p-12 rounded-3xl border-2 border-purple-500/30 dark:border-purple-400/30 shadow-[0_20px_50px_-15px_rgba(147,51,234,0.12)] mb-14">
            
            {/* Mockup Presentation: Software box upright */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/25 to-emerald-500/25 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500" />
                <img 
                  src="/assets/freebie/before_the_year_ends_product_mockup_2.svg" 
                  alt="Before The Year Ends Software Box Mockup"
                  className="relative w-64 sm:w-76 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="text-center mt-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-white/90 dark:bg-neutral-800/90 border border-emerald-500/30 px-3.5 py-1 rounded-full font-bold shadow-xs">
                    Full Life Audit System
                  </span>
                </div>
              </div>
            </div>

            {/* Exact Body Copy with SPECIAL STYLING FOR FIRST FREE MENTION */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
              <p>
                Before you set another goal, make another promise, or plan another year, take an honest look at the life you're actually living. You don't need another fresh start. You need to face the truth. One honest life audit could reveal what years of motivation never did.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF6EE] dark:bg-[#0E1014] border border-[#E4DDD0] dark:border-[#262A38] shadow-xs space-y-4">
                <p className="text-neutral-900 dark:text-neutral-100 font-medium leading-relaxed">
                  BEFORE THE YEAR ENDS is a confrontational life-audit that exposes where your life is silently collapsing before another year disappears. It Confront your reality. Expose the pattern. Calculate the cost of delay. Decide what changes next. and it is{' '}
                  {/* SPECIAL TREATMENT FOR FIRST FREE MENTION: Bold, larger, visually prominent brighter accent color */}
                  <span className="font-extrabold text-2xl tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/20 dark:bg-emerald-500/15 px-3.5 py-1 rounded-lg border-2 border-emerald-500/40 inline-block shadow-sm">
                    100% FREE
                  </span>
                </p>

                <p className="font-serif-title italic text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
                  Its A Life Audit for the Person You Still Have Time to Become’
                </p>
              </div>

              <div>
                <a
                  href={GUMROAD_FREEBIE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-base bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-neutral-950 shadow-lg hover:scale-105 active:scale-100 transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-5 h-5 text-emerald-400 dark:text-emerald-600" />
                  <span>Download The Free Audit on Gumroad</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 2: THIS IS NOT A MOTIVATION MATERIAL
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-[#F5EFE3]/70 dark:bg-[#111319]/70">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-mono text-purple-800 dark:text-purple-400 font-bold">
              The Reality Enforcer
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-neutral-950 dark:text-white mt-2">
              This Is Not a Motivation Material. It Is a Life Reset System.
            </h2>
          </div>

          <div className="bg-white dark:bg-[#151720] p-6 sm:p-10 rounded-3xl border border-[#E4DDD0] dark:border-[#262A38] shadow-lg space-y-6 text-neutral-800 dark:text-neutral-200 leading-relaxed text-base sm:text-lg">
            
            <p className="font-mono font-bold text-sm uppercase tracking-wider text-red-600 dark:text-red-400 border-l-2 border-red-500 pl-3">
              Be honest. Nobody's watching.
            </p>

            <p className="font-serif-title italic text-xl sm:text-2xl text-neutral-950 dark:text-white font-medium">
              Are you living the life you wanted, or have you spent the last few years convincing yourself to be satisfied with a life you merely settled for?
            </p>

            <p>
              You may be working hard. You may be earning well. You may have achieved things other people admire. But are you making progress in the areas that genuinely matter to you?
            </p>

            <p className="font-semibold text-neutral-950 dark:text-white">
              Because being successful in one area doesn't mean every other area of your life is where it should be.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300">
              And being busy doesn't mean you're moving in the right direction.
            </p>

            <p className="p-5 rounded-2xl bg-purple-50/80 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/50 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base">
              BEFORE THE YEAR ENDS helps you confront the gap between what you intended to do and what your life actually reflects. Identify the patterns keeping you stuck, examine the cost of continuing as you are, and decide what deserves to change.
            </p>

            <p className="font-bold text-neutral-950 dark:text-white">
              You don't need another temporary shot of motivation. You need an honest assessment of your reality.
            </p>

            <p className="text-emerald-800 dark:text-emerald-400 font-bold text-lg font-display">
              The question isn't whether you have potential. It's what your life can actually prove.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 3: WHAT'S INSIDE BEFORE THE YEAR ENDS?
          (Using Actual Original Worksheet Display Images with Teaser Masking)
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-[#FAF6EE] dark:bg-[#0C0D11]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-mono text-purple-800 dark:text-purple-400 font-bold">
              The Diagnostic Terminal
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-neutral-950 dark:text-white mt-2">
              WHAT'S INSIDE BEFORE THE YEAR ENDS?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto font-medium">
              This is a raw, 20-page terminal architecture packing 9 deeply confrontational diagnostic workspaces that strip away every layer of self-delusion to reveal the exact reality of your current existence. ,
            </p>
            <span className="text-xs uppercase font-mono tracking-widest text-neutral-500 font-bold mt-2 inline-block">
              INSIDE:
            </span>
          </div>

          {/* 9 Diagnostic Workspaces Cards (Verbatim text preserved) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-purple-500/40 transition-all">
              <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
                <span>📖</span> THE CORE VISION LEDGER
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                Put the life you intend to build on record. List the promises, commitments, ambitions, changes, and unfinished pieces of your life that still matter to you. Then mark what became reality — and what didn't.
              </p>
              <p className="text-xs font-serif-title italic text-neutral-600 dark:text-neutral-400">
                This is where you stop looking at your life through intention and start looking at it through evidence.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-purple-500/40 transition-all">
              <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
                <span>📊</span> THE EXECUTION SCORECARD
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                Measure the gap between what you said you would do and what your life actually reflects. The calculation is simple. The result is difficult to argue with.
              </p>
              <p className="text-xs font-serif-title italic text-neutral-600 dark:text-neutral-400">
                This is not a score of your worth. It is a snapshot of your current execution pattern.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-purple-500/40 transition-all">
              <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
                <span>🔍</span> THE PATTERN DETECTOR
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                Identify the structural leaks in your execution, whether they involve fading motivation, postponement, inconsistency, distraction, avoidance, constant restarting, or lack of structure.
              </p>
              <p className="text-xs font-serif-title italic text-neutral-600 dark:text-neutral-400">
                The goal is not to label yourself. It is to identify what keeps pulling you away from the person you want to become.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-purple-500/40 transition-all">
              <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
                <span>🧾</span> THE REALITY RECEIPT
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Choose the area of your life you can no longer comfortably explain away. Put the record in front of yourself: what you said would happen, what actually happened, how often you restarted, what you keep telling yourself, and what an honest observer would conclude.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-purple-500/40 transition-all">
              <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
                <span>⏳</span> THE DELAY COST CALCULATOR
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Put a price on staying stagnant. Examine what another 12 months or five years of repeating the same patterns could cost you in wealth, opportunities, relationships, personal growth, and peace of mind.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-purple-500/40 transition-all">
              <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
                <span>⚖️</span> THE REALITY VERDICT PROTOCOL
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                Turn awareness into a non-negotiable decision. Confront what must change, define what you are no longer willing to repeat, and decide what deserves your attention next.
              </p>
              <p className="text-xs font-serif-title italic text-neutral-600 dark:text-neutral-400">
                Because awareness without a decision eventually becomes another forgotten realization.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm hover:border-purple-500/40 transition-all">
              <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
                <span>⚡</span> THE 3 ALPHA CONFRONTATIONAL TEST
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                The personal reckoning that ended my dependence on motivation, confronted me with the time I actually have, and forced me to take responsibility for what happens next.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm md:col-span-2 lg:col-span-2 hover:border-purple-500/40 transition-all">
              <h3 className="font-display font-bold text-lg text-neutral-950 dark:text-white mb-2 flex items-center gap-2">
                <span>✨</span> AND MORE…
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                This goes beyond identifying what went wrong. It's an opportunity to examine where your life stands, what has been holding it back, what matters most now, and what must happen next.
              </p>
            </div>

          </div>

          {/* PROTECTED WORKSHEET PREVIEW IMAGES (Using authentic image assets with strict teaser crop/fade) */}
          <div className="mt-14 pt-10 border-t border-[#E6DFD3] dark:border-[#262A38]">
            <div className="text-center mb-10">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-800 dark:text-emerald-400 font-bold block mb-1">
                Visual Proof & Teaser Previews
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl text-neutral-950 dark:text-white">
                Worksheet Previews (Pages 1–8)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mt-2">
                Content is intentionally masked below the title and opening lines to protect the full diagnostic audit worksheets.
              </p>
            </div>

            {/* 8 Worksheet Images Grid with requested masking/cropping/fade treatment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKSHEET_PAGES.map((page) => (
                <div 
                  key={page.id}
                  className="rounded-2xl overflow-hidden border border-[#E4DDD0] dark:border-[#262A38] bg-[#FAF8F2] dark:bg-[#14161C] shadow-md flex flex-col group hover:shadow-xl hover:border-emerald-500/30 transition-all"
                >
                  {/* Top Header Label */}
                  <div className="p-3 border-b border-[#E6DFD3] dark:border-[#262A38] bg-[#F4EDE0]/80 dark:bg-neutral-900/80 flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-neutral-900 dark:text-neutral-100 truncate pr-2">
                      {page.title}
                    </span>
                    <span className="text-neutral-500 font-bold shrink-0">
                      Page 0{page.id}
                    </span>
                  </div>

                  {/* Worksheet Image with strict teaser fade mask */}
                  <div className="relative h-64 overflow-hidden bg-[#FAF8F2] p-2 flex items-start justify-center">
                    <img 
                      src={`/assets/freebie/display_${page.id}.svg`}
                      alt={`Before The Year Ends Page ${page.id}: ${page.title}`}
                      className="w-full h-auto object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Gradient Fade Mask protecting the bottom worksheet content */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF6EE] via-[#FAF6EE]/95 to-transparent dark:from-[#14161C] dark:via-[#14161C]/95 pointer-events-none flex flex-col items-center justify-end pb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-neutral-950/90 text-white dark:bg-white/95 dark:text-neutral-950 shadow-lg">
                        <Lock className="w-3 h-3 text-amber-400" />
                        <span>Protected · Teaser Preview Only</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={GUMROAD_FREEBIE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 hover:underline"
              >
                <span>Download full unedited 20-page life-audit terminal on Gumroad</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 4: TESTIMONIAL INTRODUCTION & 10 TEXT TESTIMONIALS
          (Strictly Text-Based Cards; No Testimonial Pictures)
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-[#F5EFE3]/60 dark:bg-[#111319]/60">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-mono text-emerald-800 dark:text-emerald-400 font-bold">
              Real User Evidence
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-neutral-950 dark:text-white mt-2">
              UNDENIABLE EVIDENCE
            </h2>
            {/* Exact introductory copy */}
            <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto font-medium leading-relaxed">
              The evidence is undeniable. Unfiltered, real-world operational breakthrough testimonials from individuals who have downloaded and used the system…
            </p>
          </div>

          {/* 10 Text-Based Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FREEBIE_TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] shadow-sm flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-2">
                    <span className="font-bold text-neutral-950 dark:text-white text-sm">
                      {t.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                      Audit #{idx + 1}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800/80 font-mono">
                  <span>Verified Freebie Download</span>
                  <div className="flex text-amber-400">
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
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-950 text-white dark:bg-[#151720] border border-emerald-500/40 text-center shadow-xl">
            <p className="text-sm sm:text-base font-semibold text-neutral-300 mb-2">
              Stop running out of time for the person you keep promising to become.
            </p>
            <p className="font-display font-extrabold text-lg sm:text-2xl text-emerald-400 uppercase tracking-wider">
              SCROLL DOWN TO GET YOUR FREE DOWNLOAD
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 5: WHAT WILL YOU WALK AWAY WITH?
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-[#FAF6EE] dark:bg-[#0C0D11]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-mono text-purple-800 dark:text-purple-400 font-bold">
              Concrete Outcomes
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-neutral-950 dark:text-white mt-2">
              WHAT WILL YOU WALK AWAY WITH?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              This isn't another collection of feel-good essays or motivational quotes you'll forget tomorrow. It's a practical, confrontational life-audit experience designed to...
            </p>
          </div>

          {/* 7 Outcomes List (Verbatim copy preserved) */}
          <div className="space-y-4">
            
            <div className="p-5 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] flex items-start gap-4 shadow-sm">
              <span className="text-xl shrink-0 mt-0.5">🔍</span>
              <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                Expose the gap between the life you have and the life you actually want.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] flex items-start gap-4 shadow-sm">
              <span className="text-xl shrink-0 mt-0.5">📊</span>
              <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                Measure how much of your ambition has become reality — and how much remains talk.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] flex items-start gap-4 shadow-sm">
              <span className="text-xl shrink-0 mt-0.5">🧠</span>
              <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                Identify the patterns, excuses, and habits quietly influencing your decisions.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] flex items-start gap-4 shadow-sm">
              <span className="text-xl shrink-0 mt-0.5">⏳</span>
              <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                Examine the potential cost of another year spent repeating the same routines without meaningful progress.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] flex items-start gap-4 shadow-sm">
              <span className="text-xl shrink-0 mt-0.5">🎯</span>
              <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                Discover which areas of your life need urgent attention and which deserve greater ambition.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] flex items-start gap-4 shadow-sm">
              <span className="text-xl shrink-0 mt-0.5">⚖️</span>
              <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                Confront the truth about your progress without hiding behind intentions or past achievements.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#E4DDD0] dark:border-[#262A38] bg-white dark:bg-[#151720] flex items-start gap-4 shadow-sm">
              <span className="text-xl shrink-0 mt-0.5">🚀</span>
              <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                Turn your findings into a clear decision about what must change, what deserves your focus, and what happens next.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50">
            <p className="text-sm sm:text-base font-semibold text-emerald-800 dark:text-emerald-300">
              Whether you're trying to get your life back on track or already doing well and want to identify your next level, this this is what you need an it’s free
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 6: WHY I CREATED THIS & FIRST DOWNLOAD BUTTON
      ========================================================================= */}
      <section id="freebie-download-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-[#F5EFE3]/60 dark:bg-[#111319]/60">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-mono text-emerald-800 dark:text-emerald-400 font-bold">
              The Origin Story
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-neutral-950 dark:text-white mt-2">
              WHY I CREATED THIS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-[#151720] p-6 sm:p-10 rounded-3xl border border-[#E4DDD0] dark:border-[#262A38] shadow-xl mb-14">
            {/* Creator Portrait with cinematic monochrome editorial style */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl max-w-[280px]">
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
            <div className="md:col-span-7 space-y-4 text-neutral-800 dark:text-neutral-200 leading-relaxed text-sm sm:text-base">
              <p>
                I know exactly what it feels like to have your life and plans changed without your permission. I had a devastating accident. I had to learn how to navigate the world from a wheelchair. And right in the middle of that physical crisis, I still watched my life savings—a global business worth millions of yuan—vanish entirely.
              </p>
              <p>
                I didn't rebuild my life and become a global mentor because I was motivated. Motivation is a dangerous lie. I rebuilt it because I engineered a structure that didn't care how I felt. If a woman navigating life from a wheelchair can dismantle excuses and build global stability, so can you. But it starts by facing your reality..
              </p>
              <p className="font-serif-title italic text-lg sm:text-xl text-neutral-950 dark:text-white font-medium pt-1">
                You cannot change what you refuse to confront.
              </p>
            </div>
          </div>

          {/* PRODUCT VERSIONS — DISPLAY EXACTLY */}
          <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#151720] border border-[#E4DDD0] dark:border-[#262A38] mb-14 text-center">
            <h3 className="font-display font-bold text-xl sm:text-2xl uppercase text-neutral-950 dark:text-white mb-2">
              PRODUCT VERSIONS — DISPLAY EXACTLY
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Before The Year Ends is delivered in two digital formats containing the exact same life-reset experience. Choose your version below:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-8">
              <div className="p-5 rounded-xl bg-[#FAF6EE] dark:bg-[#0E1014] border border-[#E4DDD0] dark:border-[#262A38] shadow-xs flex items-start gap-4">
                <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 shrink-0">
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
                <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 shrink-0">
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

            <p className="font-display font-bold text-sm sm:text-base tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
              Choose your format. Complete your audit. Face your reality.
            </p>
          </div>

          {/* DOWNLOAD CTA COPY & DOWNLOAD BUTTON */}
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white dark:bg-[#151720] border-2 border-emerald-500/60 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* DOWNLOAD CTA COPY */}
            <p className="font-display text-base sm:text-xl font-bold text-neutral-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              You have spent enough years masterfully convincing yourself to be satisfied with a life you merely settled for. Your life isn't standing still; you are actively trading your highest purpose for a comfortable trap.
            </p>

            {/* DOWNLOAD BUTTON */}
            <a
              href={GUMROAD_FREEBIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-full text-base sm:text-lg font-black bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-neutral-950 shadow-xl hover:shadow-emerald-500/40 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-neutral-950" />
              <span>⚡ RECLAIM YOUR REALITY: FREE DOWNLOAD</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* NOTE BELOW THE DOWNLOAD BUTTON IN ITALICS */}
            <p className="mt-4 text-xs text-neutral-400 italic max-w-lg mx-auto leading-normal">
              Note: Clicking the Download button will securely redirect you to Gumroad, our verified hosting and delivery portal, where you can complete your instant free download.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FREEBIE PAGE — SECTION 7: FINAL CONFRONTATION AND CTA
      ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD3] dark:border-[#222634] bg-[#FAF6EE] dark:bg-[#0C0D11]">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-neutral-950 dark:text-white uppercase tracking-tight mb-8">
            FINAL CONFRONTATION
          </h2>

          <div className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-800 dark:text-neutral-200 space-y-5 leading-relaxed mb-10 text-left sm:text-center">
            <p>
              Remember, Every promise you made to yourself, whether it was a childhood dream or a calculated goal from last year, was originally connected to a vision of a better life. Over time, promises get forgotten, postponed, renegotiated, or quietly replaced. BEFORE THE YEAR ENDS is your private life auditor, patterns, priorities detector, and the cost of continuing exactly as you are calculator.
            </p>
            <p className="font-semibold text-neutral-950 dark:text-white">
              Don't download it because it's FREE Download it only when you're ready to tell yourself the truth
            </p>
            <p className="font-bold text-red-600 dark:text-red-400">
              There is already enough unfinished business in your life.
            </p>
            <p className="font-serif-title italic text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
              A Life Audit for the Person You Still Have Time to Become.
            </p>
            <p className="font-mono font-extrabold text-2xl text-emerald-700 dark:text-emerald-400">
              100% FREE.
            </p>
          </div>

          {/* FINAL FREEBIE BUTTON */}
          <div className="text-center">
            <a
              href={GUMROAD_FREEBIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-full text-base sm:text-lg font-black bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-neutral-950 shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Download className="w-5 h-5 text-emerald-400 dark:text-emerald-600" />
              <span>GET YOUR FREE LIFE AUDIT NOW</span>
            </a>

            {/* NOTE BELOW THE FINAL DOWNLOAD BUTTON IN ITALICS */}
            <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 italic max-w-lg mx-auto">
              Note: Clicking the Download button will securely redirect you to Gumroad, our verified hosting and delivery portal, where you can complete your instant free download.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
