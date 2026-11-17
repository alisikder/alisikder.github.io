import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalSnippetComponent } from '../../../../shared/components/terminal-snippet/terminal-snippet.component';
import { PROFILE_DATA } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TerminalSnippetComponent],
  template: `
    <section class="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28" id="hero" aria-labelledby="hero-title">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div class="lg:col-span-7 space-y-6">
            <!-- Greeting / Kicker Tag -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-base-800 border border-white/10 text-xs font-mono">
              <span class="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]"></span>
              <span class="text-gradient-em-cyan font-bold tracking-wider">FULL-STACK DEVELOPER</span>
              <span class="text-slate-600">•</span>
              <span class="text-slate-400">Dhaka, Bangladesh</span>
            </div>

            <!-- Massive Headline with Emerald-to-Cyan Gradient -->
            <div class="space-y-2">
              <p class="text-slate-400 font-mono text-sm tracking-wider uppercase">" Assalamu Alaikum "</p>
              <h1
                id="hero-title"
                class="text-5xl sm:text-6xl lg:text-7xl font-display tracking-wide text-text-main leading-none"
              >
                I AM <br>
                <span class="text-gradient-em-cyan">MOHAMMAD ALI</span> SIKDER RAMIM
              </h1>
              <p class="text-xl sm:text-2xl font-bold tracking-tight text-text-main pt-2">
                BUILDING RESILIENT SYSTEMS WITH <span class="text-gradient-em-cyan underline decoration-[#00D9F5]/60 underline-offset-4 font-extrabold">JAVA, SPRING BOOT</span> &amp; <span class="text-cyan-400">ANGULAR</span>.
              </p>
            </div>

            <!-- Bio / Description -->
            <p class="text-base text-slate-300 font-normal leading-relaxed max-w-xl font-sans">
              Hi, I'm <strong class="text-text-main font-semibold">Ali</strong>. I build type-safe, production-ready full-stack applications with modern Spring Boot backends, reactive Angular web interfaces, and native mobile clients. Grounded in scientific rigor with intensive enterprise full-stack training.
            </p>

            <!-- High-Impact CTA Buttons with Emerald-Cyan Gradient -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a
                class="px-7 py-3 rounded-full gradient-em-cyan text-base-950 font-mono font-bold text-xs tracking-wider uppercase transition-all duration-300 btn-gradient-glow hover:scale-105 flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                href="#projects"
              >
                <span>EXPLORE WORK</span>
                <svg class="w-4 h-4 text-base-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                </svg>
              </a>

              <a
                class="px-7 py-3 rounded-full bg-base-800 hover:bg-base-750 text-text-main font-mono font-bold text-xs tracking-wider uppercase border border-white/10 hover:border-[#00D9F5] transition-all flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                [href]="profile.cvUrl"
                download="Mohammad_Ali_Sikder_Ramim_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="w-4 h-4 text-[#00F5A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                <span>DOWNLOAD CV</span>
              </a>

              <!-- Social Icon Buttons -->
              <div class="flex items-center gap-2 pl-2">
                <a
                  class="p-3 rounded-full bg-base-800 hover:bg-base-750 text-slate-300 hover:text-[#00F5A0] border border-white/10 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                  [href]="profile.github"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="GitHub Profile"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"/>
                  </svg>
                </a>

                <a
                  class="p-3 rounded-full bg-base-800 hover:bg-base-750 text-slate-300 hover:text-[#00D9F5] border border-white/10 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                  [href]="profile.linkedin"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="LinkedIn Profile"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a
                  class="p-3 rounded-full bg-base-800 hover:bg-base-750 text-slate-300 hover:text-amber-400 border border-white/10 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                  [href]="'mailto:' + profile.email"
                  title="Direct Email"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Primary Core Focus Strip -->
            <div class="pt-4 border-t border-white/10">
              <span class="text-[11px] font-mono uppercase text-slate-400 tracking-wider block mb-2.5">
                Primary Core Focus
              </span>
              <div class="flex flex-wrap items-center gap-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-850 text-[#00F5A0] border border-[#00F5A0]/30 font-semibold">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#00F5A0]"></span> Java 21
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-850 text-[#00D9F5] border border-[#00D9F5]/30 font-semibold">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#00D9F5]"></span> Spring Boot 3.3
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-850 text-cyan-300 border border-cyan-400/30 font-semibold">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Angular 18
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-850 text-purple-300 border border-purple-400/30 font-semibold">
                  <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span> TypeScript 5
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-850 text-blue-300 border border-blue-400/30 font-semibold">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> PostgreSQL 16
                </span>
              </div>
            </div>
          </div>

          <!-- Terminal Code Snippet (Right Col) -->
          <div class="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <app-terminal-snippet />
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroSectionComponent {
  readonly profile = PROFILE_DATA;
}
