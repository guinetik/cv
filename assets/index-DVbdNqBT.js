(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=[{title:"Asteroid Mining Game",url:"https://codepen.io/guinetik/full/jEOdKXR",type:"codepen",link:"https://codepen.io/guinetik/pen/jEOdKXR"},{title:"Dino Game",url:"https://codepen.io/guinetik/full/yyLZKKa",type:"codepen",link:"https://codepen.io/guinetik/pen/yyLZKKa"},{title:"WebGL Lava Lamp",url:"https://codepen.io/guinetik/full/wBvNryx",type:"codepen",link:"https://codepen.io/guinetik/pen/wBvNryx"},{title:"Particle Flow Simulation",url:"https://codepen.io/guinetik/full/qEBgPRb",type:"codepen",link:"https://codepen.io/guinetik/pen/qEBgPRb"},{title:"Solar System",url:"https://codepen.io/guinetik/full/YPzBQRB",type:"codepen",link:"https://codepen.io/guinetik/pen/YPzBQRB"},{title:"Graph Network Communities Simulation",url:"https://codepen.io/guinetik/full/qEBgjJK",type:"codepen",link:"https://codepen.io/guinetik/pen/qEBgjJK"},{title:"Matrix Rain",url:"https://codepen.io/guinetik/full/JojxJvL",type:"codepen",link:"https://codepen.io/guinetik/pen/JojxJvL"},{title:"Cymatics Simulation",url:"https://codepen.io/guinetik/full/OPJdgMd",type:"codepen",link:"https://codepen.io/guinetik/pen/OPJdgMd"},{title:"Macrodata Refinment",url:"https://codepen.io/guinetik/full/mydvwXv",type:"codepen",link:"https://codepen.io/guinetik/pen/mydvwXv"},{title:"Graph Network Simulation",url:"https://codepen.io/guinetik/full/mydvwEz",type:"codepen",link:"https://codepen.io/guinetik/pen/mydvwEz"},{title:"Game Of Life",url:"https://codepen.io/guinetik/full/MYWLoby",type:"codepen",link:"https://codepen.io/guinetik/pen/MYWLoby"}];function a(){return s[Math.floor(Math.random()*s.length)]}function u(){const i=(navigator.language||navigator.languages[0]).startsWith("pt"),n="https://github.com/guinetik/cv/releases/latest/download";return i?`${n}/CV_Joao_Guilherme_Portugues.pdf`:`${n}/CV_Joao_Guilherme_English.pdf`}function c(){return(navigator.language||navigator.languages[0]).startsWith("pt")?"CV_Joao_Guilherme_Portugues.pdf":"CV_Joao_Guilherme_English.pdf"}function p(){const o=a(),i=u(),n=c();return`
    <div class="min-h-screen flex flex-col items-center justify-center p-8">
      <!-- Logo -->
      <div class="mb-12 animate-fade-in">
        <img src="./logo.svg" alt="João Guilherme" class="h-24 w-auto mx-auto" />
      </div>

      <h1>João Guilherme Sousa - Software Engineer</h1>
      
      <!-- Download CV Button -->
      <div class="mb-16 mt-10 animate-slide-up">
        <a 
          href="${i}" 
          download="${n}"
          class="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Download CV
        </a>
        <p class="text-sm text-gray-400 mt-2 text-center">
          ${navigator.language.startsWith("pt")?"Português":"English"} version
        </p>
      </div>

      <h1>Check out a random experiment</h1>
      
      <!-- Random Experiment Container -->
      <div class="w-full max-w-4xl animate-slide-up">
        <div class="codepen-container">
          <iframe 
            src="${o.url}" 
            class="w-full h-96 border-0"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
            title="${o.title}"
          ></iframe>
        </div>
        
        <!-- Refresh Button -->
        <div class="mt-4 text-center">
          <button 
            onclick="location.reload()" 
            class="btn-secondary text-sm px-4 py-2"
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Show Another Experiment
          </button>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="mt-16 text-center text-gray-500 text-sm animate-fade-in">
        <p>Senior Software Engineer • Banking Systems • Creative Coding</p>
        <div class="mt-2 flex justify-center gap-4">
          <a href="https://github.com/guinetik" class="hover:text-blue-400 transition-colors duration-200">
            GitHub
          </a>
          <a href="https://linkedin.com/in/guinetik" class="hover:text-blue-400 transition-colors duration-200">
            LinkedIn
          </a>
          <a href="https://codepen.io/guinetik" class="hover:text-blue-400 transition-colors duration-200">
            CodePen
          </a>
        </div>
        <div class="mt-4">
          <a 
            href="https://github.com/guinetik/cv" 
            class="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View source on GitHub
          </a>
        </div>
      </div>
    </div>
  `}const d=document.getElementById("app");d.innerHTML=p();
