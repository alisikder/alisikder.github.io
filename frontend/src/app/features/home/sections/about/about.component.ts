import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 border-t border-white/10" id="about" aria-labelledby="about-header">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-2 mb-12">
          <div class="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-gradient-em-cyan">
            <span class="text-[#00F5A0]">▶</span> <span>ABOUT ME</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-display tracking-wide text-text-main">ENGINEERING DISCIPLINE &amp; BACKGROUND</h2>
          <div class="w-12 h-1 gradient-em-cyan rounded-full mt-2"></div>
          <p class="text-slate-400 max-w-2xl text-sm pt-2 font-sans">How scientific rigor and intensive enterprise training translate into a disciplined, architecture-first approach to software engineering.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Left side (6 cols) -->
          <div class="lg:col-span-6 space-y-6">
            <div class="bg-base-850 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4">
              <p class="text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
                I build type-safe, production-ready full-stack applications using modern Java, Spring Boot, Angular, TypeScript, and SQL. My architecture emphasizes decoupled layers, strict REST contracts, and defensible engineering choices.
              </p>
              <p class="text-slate-400 leading-relaxed text-sm font-sans">
                Bridging an academic science foundation with rigorous enterprise software training gives me a disciplined approach to complex systems—from multi-tenant role isolation to real-time GIS telemetry and cross-platform mobile companions.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div class="p-4 rounded-xl bg-base-850 border border-white/10">
                <span class="text-slate-500 block mb-1">Academic Degree</span>
                <p class="font-semibold text-text-main">BS (Honours)</p>
                <p class="text-[#00F5A0] text-[11px]">University of Dhaka</p>
              </div>

              <div class="p-4 rounded-xl bg-base-850 border border-white/10">
                <span class="text-slate-500 block mb-1">Enterprise Training</span>
                <p class="font-semibold text-text-main">Full-Stack Enterprise</p>
                <p class="text-[#00D9F5] text-[11px]">IsDB-BISEW Scholar</p>
              </div>

              <div class="p-4 rounded-xl bg-base-850 border border-white/10">
                <span class="text-slate-500 block mb-1">Location &amp; Hub</span>
                <p class="font-semibold text-text-main">Dhaka, Bangladesh</p>
                <p class="text-slate-400 text-[11px]">UTC+6 Timezone</p>
              </div>
            </div>
          </div>

          <!-- Right side: Core Engineering Principles (6 cols) -->
          <div class="lg:col-span-6 space-y-3.5">
            <p class="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2">Core Engineering Principles</p>

            <div class="p-4 rounded-xl bg-base-850 border border-white/10 hover:border-[#00F5A0]/40 transition-all">
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-base-800 text-[#00F5A0] flex items-center justify-center font-mono text-xs font-bold mt-0.5 border border-[#00F5A0]/30">01</div>
                <div>
                  <h3 class="text-sm font-semibold text-text-main">Type Safety &amp; Strict Contracts</h3>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed font-sans">End-to-end typing across domain DTOs, reactive forms, and API interfaces prevents runtime regressions.</p>
                </div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-base-850 border border-white/10 hover:border-cyan-400/40 transition-all">
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-base-800 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold mt-0.5 border border-cyan-400/30">02</div>
                <div>
                  <h3 class="text-sm font-semibold text-text-main">Multi-Client Architecture</h3>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed font-sans">Unified Spring Boot backend securely powering Web (Angular), Native Android, and Flutter mobile clients.</p>
                </div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-base-850 border border-white/10 hover:border-purple-400/40 transition-all">
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-base-800 text-purple-400 flex items-center justify-center font-mono text-xs font-bold mt-0.5 border border-purple-400/30">03</div>
                <div>
                  <h3 class="text-sm font-semibold text-text-main">Zero-Blacklist Security</h3>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed font-sans">Stateless JWT tokens bound cryptographically to user password hashes for instant revocation on credential change.</p>
                </div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-base-850 border border-white/10 hover:border-[#00D9F5]/40 transition-all">
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-base-800 text-[#00D9F5] flex items-center justify-center font-mono text-xs font-bold mt-0.5 border border-[#00D9F5]/30">04</div>
                <div>
                  <h3 class="text-sm font-semibold text-text-main">Accessible &amp; Responsive Design</h3>
                  <p class="text-xs text-slate-400 mt-1 leading-relaxed font-sans">Semantic HTML5, high-contrast typography, and fluid layouts optimized across mobile and desktop.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutSectionComponent {
  readonly profile = PROFILE_DATA;
}
