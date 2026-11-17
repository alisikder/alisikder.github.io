import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../../../core/services/project.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="py-20 border-t border-white/10" id="projects" aria-labelledby="projects-header">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-2 mb-12">
          <div class="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-gradient-em-cyan">
            <span class="text-[#00F5A0]">▶</span> <span>PROJECTS</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-display tracking-wide text-text-main">FEATURED WORK</h2>
          <div class="w-12 h-1 gradient-em-cyan rounded-full mt-2"></div>
          <p class="text-slate-400 max-w-2xl text-sm pt-2">Real-world full-stack systems verified in source code, automated tests, and live demos.</p>
        </div>

        <!-- Flagship Project Card (Horizon) -->
        @if (horizonProject) {
          <div
            class="rounded-2xl bg-base-850 border border-[#00D9F5]/40 shadow-2xl p-6 sm:p-8 lg:p-10 mb-10 relative overflow-hidden neon-border-glow transition-all"
          >
            <div class="absolute top-0 left-0 right-0 h-1 gradient-em-cyan shadow-[0_0_12px_#00D9F5]"></div>

            <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div class="flex items-center gap-3">
                <span class="px-3 py-1 rounded-full bg-[#00F5A0]/15 text-[#00F5A0] border border-[#00F5A0]/40 text-xs font-mono font-bold uppercase tracking-wider">
                  PRIMARY FLAGSHIP
                </span>
                <span class="text-xs font-mono text-slate-400">
                  Full-Stack Enterprise Web Application
                </span>
              </div>
              <span class="inline-flex items-center gap-1.5 text-xs font-mono text-[#00D9F5] bg-base-800 px-3 py-1 rounded-full border border-[#00D9F5]/30">
                <span class="w-1.5 h-1.5 rounded-full bg-[#00D9F5]"></span> Implemented &amp; Tested
              </span>
            </div>

            <div class="space-y-2 mb-6">
              <h3 class="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
                {{ horizonProject.title }}
              </h3>
              <p class="text-gradient-em-cyan font-mono text-sm font-semibold">
                {{ horizonProject.tagline }}
              </p>
            </div>

            <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-4xl font-sans">
              {{ horizonProject.summary }}
            </p>

            <!-- Key Capabilities Metric Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-300 mb-8 font-sans">
              <div class="flex items-start gap-2.5 p-3.5 rounded-xl bg-base-900 border border-white/5">
                <span class="text-[#00F5A0] font-bold text-base mt-[-2px]">✓</span>
                <span><strong>4 distinct user personas:</strong> Tourist, Service Provider, Tour Guide, Administrator with isolated dashboards.</span>
              </div>
              <div class="flex items-start gap-2.5 p-3.5 rounded-xl bg-base-900 border border-white/5">
                <span class="text-[#00D9F5] font-bold text-base mt-[-2px]">✓</span>
                <span><strong>Per-User HMAC-SHA token signing:</strong> using BCrypt password hashes for zero-blacklist instant revocation.</span>
              </div>
              <div class="flex items-start gap-2.5 p-3.5 rounded-xl bg-base-900 border border-white/5">
                <span class="text-[#00F5A0] font-bold text-base mt-[-2px]">✓</span>
                <span><strong>Context-grounded Gemini 1.5 Flash:</strong> integration enforcing server-side inventory verification against DB slots.</span>
              </div>
              <div class="flex items-start gap-2.5 p-3.5 rounded-xl bg-base-900 border border-white/5">
                <span class="text-[#00D9F5] font-bold text-base mt-[-2px]">✓</span>
                <span><strong>Interactive Leaflet GIS map:</strong> displaying live GPS beacons from Tour Guide broadcasters.</span>
              </div>
            </div>

            <!-- Tech Stack Badges -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-900 text-[#00F5A0] border border-[#00F5A0]/30 font-semibold">Java 21</span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-900 text-[#00D9F5] border border-[#00D9F5]/30 font-semibold">Spring Boot 3.3</span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-900 text-purple-300 border border-purple-500/30">Spring Security 7</span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-900 text-cyan-300 border border-cyan-500/30 font-semibold">Angular 18</span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-900 text-cyan-300 border border-cyan-500/30">TypeScript 5</span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-900 text-blue-300 border border-blue-500/30">PostgreSQL 16</span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-900 text-amber-300 border border-amber-500/30">Google Gemini 1.5 Flash</span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-base-900 text-emerald-300 border border-emerald-500/30">Leaflet GIS</span>
            </div>

            <!-- Card Footer CTA -->
            <div class="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div class="flex items-center gap-3">
                <a
                  [routerLink]="['/projects', horizonProject.slug]"
                  class="px-5 py-2.5 rounded-full gradient-em-cyan text-base-950 font-mono font-bold text-xs tracking-wider uppercase transition-all btn-gradient-glow flex items-center gap-1.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>VIEW CASE STUDY</span>
                  <svg class="w-3.5 h-3.5 text-base-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                  </svg>
                </a>
                <a
                  [href]="horizonProject.githubUrl"
                  class="px-4 py-2.5 rounded-full bg-base-800 hover:bg-base-750 text-text-main font-mono text-xs border border-white/10 transition-colors flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub Repo</span>
                </a>
              </div>
              <div class="text-xs font-mono text-slate-400">
                Port: <span class="text-[#00F5A0] font-bold">54200 (Angular)</span> | Port: <span class="text-[#00D9F5] font-bold">58080 (Spring Boot)</span>
              </div>
            </div>
          </div>
        }

        <!-- 3 Companion Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Horizon Tourist (Android) -->
          @if (touristProject) {
            <div class="rounded-2xl bg-base-850 p-6 border border-white/10 hover:border-[#00F5A0]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#00F5A0] bg-base-800 px-2.5 py-1 rounded-full border border-[#00F5A0]/30 font-semibold">
                    Android Showcase
                  </span>
                  <span class="text-[11px] font-mono text-[#00F5A0] bg-[#00F5A0]/10 px-2 py-0.5 rounded border border-[#00F5A0]/20 font-semibold">
                    Implemented
                  </span>
                </div>
                <h4 class="text-xl font-bold text-text-main mb-1 group-hover:text-[#00F5A0] transition-colors">
                  <a [routerLink]="['/projects', touristProject.slug]" class="focus:outline-hidden focus-visible:underline">
                    Horizon Tourist (Android)
                  </a>
                </h4>
                <p class="text-xs font-mono text-slate-400 mb-3">Native Android Companion with Live GPS Telemetry</p>
                <p class="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  Native Android mobile application built with Java and XML Layouts communicating with the Horizon Spring Boot backend to deliver mobile bookings, live GPS tracking, and AI concierge access.
                </p>
              </div>

              <div>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">Java (Android)</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">XML Layouts</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">Retrofit 2</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-[#00D9F5] rounded border border-[#00D9F5]/30">Spring REST</span>
                </div>
                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <a
                    [routerLink]="['/projects', touristProject.slug]"
                    class="text-[#00F5A0] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>VIEW PROJECT</span>
                    <span>→</span>
                  </a>
                  <a
                    [href]="touristProject.githubUrl"
                    class="text-slate-400 group-hover:text-white transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Horizon Tourist GitHub Repo"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          }

          <!-- Horizon Mobile (Flutter) -->
          @if (flutterProject) {
            <div class="rounded-2xl bg-base-850 p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-base-800 px-2.5 py-1 rounded-full border border-cyan-400/30 font-semibold">
                    Flutter Showcase
                  </span>
                  <span class="text-[11px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 font-semibold">
                    Prototype
                  </span>
                </div>
                <h4 class="text-xl font-bold text-text-main mb-1 group-hover:text-cyan-400 transition-colors">
                  <a [routerLink]="['/projects', flutterProject.slug]" class="focus:outline-hidden focus-visible:underline">
                    Horizon Mobile (Flutter)
                  </a>
                </h4>
                <p class="text-xs font-mono text-slate-400 mb-3">Cross-Platform Mobile Tourist Client</p>
                <p class="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  Cross-platform mobile application built with Flutter 3.x and Dart communicating with the Horizon Spring Boot backend. Features responsive mobile booking flows and state management via Riverpod.
                </p>
              </div>

              <div>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">Flutter 3.x</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">Dart</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">Riverpod</span>
                </div>
                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <a
                    [routerLink]="['/projects', flutterProject.slug]"
                    class="text-cyan-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>VIEW PROJECT</span>
                    <span>→</span>
                  </a>
                  <a
                    [href]="flutterProject.githubUrl"
                    class="text-slate-400 group-hover:text-white transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Horizon Mobile GitHub Repo"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          }

          <!-- Bangla Akinator -->
          @if (akinatorProject) {
            <div class="rounded-2xl bg-base-850 p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-purple-400 bg-base-800 px-2.5 py-1 rounded-full border border-purple-400/30 font-semibold">
                    Algorithmic Showcase
                  </span>
                  <span class="text-[11px] font-mono text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded border border-purple-400/20 font-semibold">
                    Prototype
                  </span>
                </div>
                <h4 class="text-xl font-bold text-text-main mb-1 group-hover:text-purple-400 transition-colors">
                  <a [routerLink]="['/projects', akinatorProject.slug]" class="focus:outline-hidden focus-visible:underline">
                    বাংলা ধাঁধা (Bangla Akinator)
                  </a>
                </h4>
                <p class="text-xs font-mono text-slate-400 mb-3">Probabilistic 20-Questions Guessing Game</p>
                <p class="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  A probabilistic guessing game for Bangladeshi cultural personalities powered by Shannon Entropy Expected Information Gain and Bayesian log-sum-exp normalization.
                </p>
              </div>

              <div>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">Python 3.11</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">FastAPI</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">MongoDB</span>
                </div>
                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <a
                    [routerLink]="['/projects', akinatorProject.slug]"
                    class="text-purple-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>VIEW SOURCE</span>
                    <span>→</span>
                  </a>
                  <a
                    [href]="akinatorProject.githubUrl"
                    class="text-slate-400 group-hover:text-white transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Bangla Akinator GitHub Repo"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsSectionComponent {
  private readonly projectService = inject(ProjectService);

  readonly horizonProject = this.projectService.getProjectBySlug('horizon');
  readonly touristProject = this.projectService.getProjectBySlug('horizon-tourist');
  readonly flutterProject = this.projectService.getProjectBySlug('horizon-flutter') ?? this.projectService.getProjectBySlug('horizon-mobile');
  readonly akinatorProject = this.projectService.getProjectBySlug('bangla-akinator');
}
