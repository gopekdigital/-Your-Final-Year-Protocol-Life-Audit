import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/freebie');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 8 Worksheets as pristine vector SVG document images matching the exact photographed layout
const worksheets = [
  {
    id: 1,
    tag: "A PRIVATE AUDIT  ·  FILED UNDER: PERSONAL RECORD",
    title: "BEFORE THE YEAR ENDS",
    sub: "A Life Audit for the Person You Still Have Time to Become",
    rule: "TWELVE MONTHS. TWELVE CHANCES TO KEEP YOUR WORD.",
    body: [
      "01  02  03  04  05  06  07  08  09  10  11  [12]",
      "This is not a motivational document. It is an audit. Be honest, or do not begin.",
      "ONE DOWNLOAD. ONE WAKE-UP CALL.",
      "PREPARED FOR: _______________________    DATE OF AUDIT: ____________"
    ]
  },
  {
    id: 2,
    tag: "02  /  CONFRONT",
    title: "THE GRAVEYARD",
    sub: "You made promises to yourself years ago. How many did you actually keep?",
    rule: "Think of the promises you made to yourself and genuinely meant to keep. Not wishes and not vague dreams...",
    body: [
      "#  | THE PROMISE                 | WHEN I MADE IT | KEPT / BROKEN | WHAT HAPPENED?",
      "01 | ___________________________ | ______________ | [ ] Kept [ ]  | ___________________",
      "02 | ___________________________ | ______________ | [ ] Kept [ ]  | ___________________",
      "03 | ___________________________ | ______________ | [ ] Kept [ ]  | ___________________",
      "Count only what you truly intended. Honesty is the only thing this page measures."
    ]
  },
  {
    id: 3,
    tag: "03  /  MEASURE",
    title: "THE SCORE",
    sub: "Go back to your graveyard and count. The calculation is deliberately simple.",
    rule: "PROMISES MADE | PROMISES KEPT | PROMISES BROKEN | PROMISE-KEEPING RATE %",
    body: [
      "Rate = promises kept ÷ promises made × 100",
      "This number is not a judgment of your worth. It is evidence of your current execution pattern.",
      "PATTERN DETECTOR: Why did you break them? Tick every reason that applies.",
      "[ ] I kept postponing it   [ ] I started but couldn't stay consistent   [ ] I relied on motivation"
    ]
  },
  {
    id: 4,
    tag: "04  /  EXPOSE",
    title: "THE RECEIPT",
    sub: "Pick the promise that hurts the most to admit you broke.",
    rule: "EVIDENCE RECORD  ·  DATE: ___ / ___ / ______",
    body: [
      "THE PROMISE: ____________________________________________________________________",
      "WHAT I SAID I WOULD DO: ________________________________________________________",
      "WHAT I ACTUALLY DID: ___________________________________________________________",
      "THE EXCUSE I KEEP USING vs. WHAT IS PROBABLY TRUE INSTEAD"
    ]
  },
  {
    id: 5,
    tag: "05  /  URGENCY",
    title: "THE COST OF DELAY",
    sub: "How long have you already delayed this?",
    rule: "MONTHS  |  OR YEARS  |  DAYS LEFT UNTIL THE END OF THIS YEAR",
    body: [
      "IF NOTHING CHANGES FOR ANOTHER YEAR... Where will this promise be? What could it cost?",
      "IF NOTHING CHANGES FOR FIVE YEARS... What will this become? What might you wish?",
      "ONE QUESTION: If you could finally keep ONE promise, which one improves the most?",
      "Health · Money · Work/Career · Relationships · Energy · Confidence"
    ]
  },
  {
    id: 6,
    tag: "06  /  ACCOUNTABILITY",
    title: "THE VERDICT",
    sub: "You have counted them, named the pattern, priced the delay and chosen the one that matters.",
    rule: "A CONTRACT WITH REALITY",
    body: [
      "I, _________________________, have reviewed my own record.",
      "I can no longer blame _________________________ for why I keep breaking this promise.",
      "The pattern is mine, and so is the decision to end it.",
      "SIGNATURE: __________________________________   DATE: _______________________"
    ]
  },
  {
    id: 7,
    tag: "07  /  TRUST",
    title: "WHY I BUILT THIS",
    sub: "I did not arrive at this philosophy from a comfortable place.",
    rule: "01 THE ACCIDENT | 02 THE COLLAPSE | 03 THE AUDIT | 04 THE REBUILD",
    body: [
      "An accident took the use of my legs during COVID.",
      "Lost a global business worth over ¥28 million in crisis.",
      "Stopped relying on motivation. Looked at the facts.",
      "Chose what mattered. Executed. Repeated."
    ]
  },
  {
    id: 8,
    tag: "08  /  THE NEXT STEP",
    title: "YOU KNOW THE PATTERN. NOW WHAT?",
    sub: "You have just audited the promises you made. You have seen the pattern.",
    rule: "YOUR FINAL YEAR PROTOCOL — A Productivity System for Focus, Discipline & Execution",
    body: [
      "01 MEMENTO MORI · 02 THE WHEEL OF LIFE · 03 THE 80/20 DOMINOS",
      "04 EXECUTION OVER MOTIVATION · 05 THE 11 FRAMEWORKS",
      "06 THE ACCOUNTABILITY MIRROR · 07 THE EXECUTION CODE",
      "You don't need another promise. You need a system that helps you keep the one you just wrote down."
    ]
  }
];

worksheets.forEach((ws) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 950" width="700" height="950" style="background:#FAF8F2; font-family:'Georgia', serif;">
    <!-- Document Card Background & Border -->
    <rect width="700" height="950" fill="#FCFAF5" stroke="#E2DCD0" stroke-width="2"/>
    
    <!-- Top Meta Tag -->
    <text x="60" y="70" font-family="'Space Grotesk', monospace, sans-serif" font-size="11" letter-spacing="3" fill="#8C7A58">${ws.tag}</text>
    <line x1="60" y1="85" x2="640" y2="85" stroke="#A68D5D" stroke-width="1.5" />
    
    <!-- Large Heading -->
    <text x="60" y="145" font-family="'Cinzel', 'Times New Roman', serif" font-weight="bold" font-size="34" letter-spacing="1" fill="#1A1815">${ws.title}</text>
    
    <!-- Subtitle -->
    <text x="60" y="180" font-style="italic" font-size="16" fill="#595245">${ws.sub}</text>
    
    <!-- Rule bar / Table Header -->
    <rect x="60" y="215" width="580" height="34" fill="#EFE8D8" rx="2" stroke="#DFD4BE"/>
    <text x="75" y="238" font-family="'Space Grotesk', monospace, sans-serif" font-size="11" font-weight="bold" letter-spacing="1.5" fill="#544834">${ws.rule}</text>
    
    <!-- Teaser Line 1 -->
    <text x="60" y="285" font-size="14" fill="#2E2A24">${ws.body[0] || ''}</text>
    <line x1="60" y1="300" x2="640" y2="300" stroke="#EFE9DC" stroke-width="1"/>
    
    <!-- Teaser Line 2 -->
    <text x="60" y="335" font-size="14" fill="#3D372E">${ws.body[1] || ''}</text>
    <line x1="60" y1="350" x2="640" y2="350" stroke="#EFE9DC" stroke-width="1"/>
    
    <!-- Teaser Line 3 -->
    <text x="60" y="385" font-size="13" fill="#524A3E">${ws.body[2] || ''}</text>
    <line x1="60" y1="400" x2="640" y2="400" stroke="#EFE9DC" stroke-width="1"/>

    <!-- Teaser Line 4 -->
    <text x="60" y="435" font-size="13" fill="#524A3E">${ws.body[3] || ''}</text>
    <line x1="60" y1="450" x2="640" y2="450" stroke="#EFE9DC" stroke-width="1"/>
    
    <!-- Document Footer -->
    <text x="60" y="910" font-family="'Space Grotesk', monospace" font-size="10" letter-spacing="2" fill="#A89B84">BEFORE THE YEAR ENDS  ·  THE BROKEN PROMISES AUDIT</text>
    <text x="610" y="910" font-family="'Space Grotesk', monospace" font-size="11" font-weight="bold" fill="#8C7A58">${ws.id} / 8</text>
  </svg>`;

  fs.writeFileSync(path.join(outDir, `display_${ws.id}.svg`), svg, 'utf8');
  // Also save using original exact filename for direct fallback
  fs.writeFileSync(path.join(outDir, `before_the_years_ends_page_for_visual_mckup_display_${ws.id}.svg`), svg, 'utf8');
});

// 4 Mockup SVG graphics matching the uploaded software-box designs
const mockups = [
  { id: 2, name: 'mockup_2', title: 'Studio Upright Packaging', bg: '#1E122B', border: '#8A3FFC' },
  { id: 3, name: 'mockup_3', title: 'Sunset Horizon Edition', bg: '#291428', border: '#FF5C8A' },
  { id: 4, name: 'mockup_4', title: 'Slate Texture Dynamic Angle', bg: '#11131A', border: '#00D1FF' },
  { id: 5, name: 'mockup_5', title: 'Overhead Ambient Showcase', bg: '#181124', border: '#A855F7' }
];

mockups.forEach((m) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="600" height="750" style="background:${m.bg};">
    <defs>
      <radialGradient id="g_${m.id}" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="${m.border}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${m.bg}" stop-opacity="0"/>
      </radialGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#000" flood-opacity="0.6"/>
      </filter>
    </defs>
    <rect width="600" height="750" fill="${m.bg}"/>
    <circle cx="300" cy="300" r="250" fill="url(#g_${m.id})"/>
    
    <!-- 3D Box Illustration -->
    <g transform="translate(100, 80)" filter="url(#shadow)">
      <!-- Main Front Box -->
      <rect x="50" y="40" width="300" height="480" rx="12" fill="#0C0D12" stroke="${m.border}" stroke-width="2.5"/>
      <!-- Side Spine -->
      <polygon points="50,40 10,75 10,545 50,520" fill="#060709" stroke="#333" stroke-width="1"/>
      <!-- Disintegrating Clock / Orbit -->
      <circle cx="200" cy="240" r="48" fill="none" stroke="#FF5C8A" stroke-width="2.5" stroke-dasharray="8 4"/>
      <circle cx="200" cy="240" r="32" fill="none" stroke="#00D1FF" stroke-width="2"/>
      <line x1="200" y1="240" x2="200" y2="215" stroke="#FFF" stroke-width="2"/>
      <line x1="200" y1="240" x2="225" y2="240" stroke="#FFF" stroke-width="2"/>
      
      <!-- Crossroads (Past / Future) -->
      <polygon points="120,440 200,320 280,440" fill="none" stroke="#7A5AF8" stroke-width="2"/>
      <text x="130" y="420" font-family="'Space Grotesk', monospace" font-size="11" fill="#FF5C8A" font-weight="bold">PAST</text>
      <text x="235" y="420" font-family="'Space Grotesk', monospace" font-size="11" fill="#00D1FF" font-weight="bold">FUTURE</text>
      
      <!-- Typography -->
      <text x="200" y="110" font-family="'Space Grotesk', monospace" font-size="13" font-weight="bold" letter-spacing="3" fill="#FFF" text-anchor="middle">BEFORE THE</text>
      <text x="200" y="145" font-family="'Cinzel', serif" font-size="28" font-weight="bold" fill="#FFF" text-anchor="middle">YEAR ENDS</text>
      <text x="200" y="172" font-family="'Instrument Serif', serif" font-style="italic" font-size="13" fill="#A3A3A3" text-anchor="middle">A Life Audit for the Person You Still Have Time to Become</text>
      
      <!-- Bottom Value Tag -->
      <rect x="80" y="470" width="240" height="26" rx="6" fill="#161822" stroke="#2B2F42"/>
      <text x="200" y="487" font-family="'Space Grotesk', monospace" font-size="10" fill="#00E599" font-weight="bold" text-anchor="middle" letter-spacing="1">100% FREE DIGITAL AUDIT</text>
    </g>
    
    <text x="300" y="690" font-family="'Space Grotesk', monospace" font-size="12" fill="#A1A1AA" letter-spacing="2" text-anchor="middle" uppercase>${m.title}</text>
  </svg>`;

  fs.writeFileSync(path.join(outDir, `${m.name}.svg`), svg, 'utf8');
  fs.writeFileSync(path.join(outDir, `before_the_year_ends_product_mockup_${m.id}.svg`), svg, 'utf8');
});

console.log('Successfully generated freebie assets in public/assets/freebie');
