import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalSnippetComponent } from '../../../../shared/components/terminal-snippet/terminal-snippet.component';
import { PROFILE_DATA } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TerminalSnippetComponent],
  template: `
    <section class="pt-8 sm:pt-16 pb-16 sm:pb-24 relative overflow-hidden" id="hero" aria-labelledby="hero-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <!-- Left Column (7 cols) -->
          <div class="lg:col-span-7 space-y-6">
            <!-- Badges Row -->
            <div class="flex flex-wrap items-center gap-3">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-850 border border-white/10 text-xs font-mono text-[#00F5A0] shadow-sm">
                <span class="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse"></span>
                Assalamu Alaikum
              </div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-850 border border-white/10 text-xs font-mono text-text-muted">
                {{ profile.availability }}
              </div>
            </div>

            <!-- Headline & Tagline -->
            <div class="space-y-2">
              <h1
                id="hero-title"
                class="text-5xl sm:text-7xl lg:text-8xl font-display tracking-tight text-text-main leading-none uppercase"
              >
                I AM MOHAMMAD ALI SIKDER RAMIM
              </h1>
              <p class="text-base sm:text-xl font-mono text-gradient-em-cyan font-bold tracking-tight uppercase">
                BUILDING RESILIENT SYSTEMS WITH JAVA, SPRING BOOT &amp; ANGULAR
              </p>
            </div>

            <!-- Narrative Description -->
            <p class="text-text-muted text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Hi, I'm <strong class="text-text-main font-semibold">Ali</strong> (Mohammad Ali Sikder Ramim).
              Early-career Full-Stack Engineer bridging an academic science foundation from the University of Dhaka with intensive enterprise scholarship training at IsDB-BISEW.
              I architect type-safe, multi-client systems with Spring Boot, Angular, PostgreSQL, and context-grounded AI.
            </p>

            <!-- Action CTAs -->
            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                class="px-6 py-3 rounded-full gradient-em-cyan text-base-950 font-mono font-bold text-xs tracking-wider uppercase transition-all btn-gradient-glow hover:scale-105 flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>EXPLORE WORK</span>
                <svg class="w-3.5 h-3.5 text-base-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                </svg>
              </a>

              <a
                [href]="profile.cvUrl"
                download="Mohammad_Ali_Sikder_Ramim_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 rounded-full bg-base-800 hover:bg-base-750 text-text-main font-mono font-bold text-xs tracking-wider uppercase border border-white/10 hover:border-[#00D9F5] transition-all flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg class="w-3.5 h-3.5 text-[#00F5A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                <span>DOWNLOAD CV</span>
              </a>

              <a
                [href]="profile.github"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-3 rounded-full bg-base-800 hover:bg-base-750 text-text-muted hover:text-text-main font-mono text-xs border border-white/10 transition-colors flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub ↗</span>
              </a>

              <a
                [href]="profile.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-3 rounded-full bg-base-800 hover:bg-base-750 text-text-muted hover:text-text-main font-mono text-xs border border-white/10 transition-colors flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg class="w-3.5 h-3.5 fill-current text-[#00F5A0]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn ↗</span>
              </a>
            </div>

            <!-- Tech Focus Strip -->
            <div class="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span class="text-text-dim uppercase tracking-wider mr-1">CORE FOCUS:</span>
              <span class="px-2.5 py-1 rounded-md bg-base-850 text-[#00F5A0] border border-[#00F5A0]/20 font-bold">Java 21</span>
              <span class="px-2.5 py-1 rounded-md bg-base-850 text-[#00D9F5] border border-[#00D9F5]/20 font-bold">Spring Boot 3.3</span>
              <span class="px-2.5 py-1 rounded-md bg-base-850 text-cyan-300 border border-cyan-400/20 font-bold">Angular 18</span>
              <span class="px-2.5 py-1 rounded-md bg-base-850 text-purple-300 border border-purple-400/20 font-bold">TypeScript</span>
              <span class="px-2.5 py-1 rounded-md bg-base-850 text-blue-300 border border-blue-400/20 font-bold">PostgreSQL</span>
              <span class="px-2.5 py-1 rounded-md bg-base-850 text-amber-300 border border-amber-400/20 font-bold">Gemini AI</span>
            </div>
          </div>

          <!-- Right Column: Terminal Snippet (5 cols) -->
          <div class="lg:col-span-5">
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
