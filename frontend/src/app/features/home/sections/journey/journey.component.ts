import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journey-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 border-t border-white/10" id="journey" aria-labelledby="journey-header">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-2 mb-12">
          <div class="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-gradient-em-cyan">
            <span class="text-[#00F5A0]">▶</span> <span>BACKGROUND</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-display tracking-wide text-text-main">EDUCATION &amp; EXPERIENCE</h2>
          <div class="w-12 h-1 gradient-em-cyan rounded-full mt-2"></div>
          <p class="text-slate-400 max-w-2xl text-sm pt-2">Tracing academic science education, intensive enterprise scholarship training, and software architecture milestones.</p>
        </div>

        <!-- Glowing Timeline with side Year Badge -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Timeline Items -->
          <div class="lg:col-span-8 relative pl-6 border-l-2 border-base-750 space-y-8">
            <!-- Milestone 1 -->
            <div class="relative group">
              <div class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#00F5A0] shadow-[0_0_12px_#00F5A0] border-2 border-base-900"></div>
              <div class="p-6 rounded-2xl bg-base-850 border border-white/10 hover:border-[#00F5A0]/40 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span class="text-xs font-mono text-gradient-em-cyan font-bold tracking-wider">2025 – PRESENT • FLAGSHIP MILESTONE</span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-[#00F5A0]/15 text-[#00F5A0] border border-[#00F5A0]/30 font-semibold">Full-Stack Ecosystem</span>
                </div>
                <h3 class="text-lg font-bold text-text-main mb-2">Enterprise Full-Stack Ecosystem (Horizon Platform)</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Architected Horizon: a full-stack platform with Spring Boot 4.1 / Java 25 backend, Angular 22 web SPA, and dedicated Android (Retrofit) and Flutter mobile clients. Implemented dynamic HMAC token invalidation, Leaflet GIS tracking, and Gemini AI catalog grounding.
                </p>
              </div>
            </div>

            <!-- Milestone 2 -->
            <div class="relative group">
              <div class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#00D9F5] shadow-[0_0_12px_#00D9F5] border-2 border-base-900"></div>
              <div class="p-6 rounded-2xl bg-base-850 border border-white/10 hover:border-[#00D9F5]/40 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span class="text-xs font-mono text-cyan-400 font-bold tracking-wider">2025 – 2026 • PROFESSIONAL SCHOLARSHIP</span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 font-semibold">Professional Enterprise Training</span>
                </div>
                <h3 class="text-lg font-bold text-text-main mb-2">Full-Stack Web Development Scholar — IsDB-BISEW IT Scholarship</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Completed an intensive, full-time enterprise curriculum covering Java SE/EE, Spring Boot, Hibernate/JPA, Angular, TypeScript, Android, and Flutter, along with relational database modeling, and software engineering methodologies.
                </p>
              </div>
            </div>

            <!-- Milestone 3 -->
            <div class="relative group">
              <div class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-400 shadow-[0_0_12px_#3B82F6] border-2 border-base-900"></div>
              <div class="p-6 rounded-2xl bg-base-850 border border-white/10 hover:border-blue-400/40 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span class="text-xs font-mono text-blue-400 font-bold tracking-wider">DEGREE COMPLETED • ACADEMIC SCIENCE</span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-400/15 text-blue-400 border border-blue-400/30 font-semibold">Academic Science</span>
                </div>
                <h3 class="text-lg font-bold text-text-main mb-2">BS (Honours) — University of Dhaka</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Cultivated analytical rigor, scientific research methodology, hypothesis validation, and systemic problem decomposition at Bangladesh's premier institution, shaping a disciplined approach to software architecture.
                </p>
              </div>
            </div>
          </div>

          <!-- Right Year / Persona Badge -->
          <div class="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-base-850 border border-white/10 text-center sticky top-28">
            <span class="font-display text-7xl sm:text-8xl text-base-750 leading-none select-none">2026</span>
            <h4 class="font-display text-2xl text-gradient-em-cyan tracking-wide uppercase mt-[-10px]">MOHAMMAD ALI</h4>
            <p class="text-xs font-mono text-slate-400">Enterprise Engineer Ready</p>
            <div class="mt-6 pt-6 border-t border-white/10 w-full space-y-2 text-xs font-mono text-left">
              <div class="flex justify-between text-slate-400">
                <span>Specialization:</span>
                <span class="text-text-main font-semibold">Java / Angular / Android / Flutter</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>Training:</span>
                <span class="text-[#00F5A0] font-semibold">IsDB-BISEW</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>University:</span>
                <span class="text-text-main font-semibold">Dhaka University</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>Status:</span>
                <span class="text-[#00D9F5] font-semibold">Immediate Joiner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class JourneySectionComponent {}
