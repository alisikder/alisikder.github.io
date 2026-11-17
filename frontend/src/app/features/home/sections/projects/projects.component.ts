import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { StatusPillComponent } from '../../../../shared/components/status-pill/status-pill.component';
import { TechBadgeComponent } from '../../../../shared/components/tech-badge/tech-badge.component';
import { ProjectService } from '../../../../core/services/project.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectionHeaderComponent,
    StatusPillComponent,
    TechBadgeComponent
  ],
  template: `
    <section id="projects" class="py-20 border-t border-white/10" aria-labelledby="projects-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header
          number="02"
          tag="PROJECTS"
          title="FEATURED WORK"
          description="Real-world full-stack systems verified in source code, automated tests, and live demos."
        />

        <!-- 1. Flagship Project Card (Horizon) -->
        @if (horizonProject) {
          <article
            class="rounded-2xl bg-base-850 border border-[#00D9F5]/40 shadow-2xl p-6 sm:p-8 lg:p-10 mb-10 relative overflow-hidden neon-border-glow transition-all duration-300 group"
          >
            <!-- Glowing top gradient bar -->
            <div class="absolute top-0 left-0 right-0 h-1 gradient-em-cyan shadow-[0_0_12px_#00D9F5]"></div>

            <!-- Top Row: Primary Flagship Badge + Status -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div class="flex items-center gap-3">
                <span class="px-3 py-1 rounded-full bg-[#00F5A0]/15 text-[#00F5A0] border border-[#00F5A0]/40 text-xs font-mono font-bold uppercase tracking-wider">
                  {{ horizonProject.badgeLabel }}
                </span>
                <span class="text-xs font-mono text-text-muted">
                  {{ horizonProject.category }}
                </span>
              </div>
              <app-status-pill [status]="horizonProject.status" />
            </div>

            <!-- Title & Tagline -->
            <div class="space-y-2 mb-6">
              <h3 class="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight group-hover:text-[#00F5A0] transition-colors">
                <a [routerLink]="['/projects', horizonProject.slug]" class="focus:outline-hidden focus-visible:underline">
                  {{ horizonProject.title }}
                </a>
              </h3>
              <p class="text-gradient-em-cyan font-mono text-sm font-semibold">
                {{ horizonProject.tagline }}
              </p>
            </div>

            <!-- Summary -->
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-4xl font-sans">
              {{ horizonProject.summary }}
            </p>

            <!-- Key Capabilities Metric Grid (Checklist) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-300 mb-8 font-sans">
              @for (highlight of horizonProject.keyHighlights.slice(0, 4); track highlight; let i = $index) {
                <div class="flex items-start gap-2.5 p-3.5 rounded-xl bg-base-900 border border-white/5">
                  <span
                    class="font-bold text-base mt-[-2px]"
                    [ngClass]="i % 2 === 0 ? 'text-[#00F5A0]' : 'text-[#00D9F5]'"
                  >✓</span>
                  <span>{{ highlight }}</span>
                </div>
              }
            </div>

            <!-- Tech Stack Badges -->
            <div class="flex flex-wrap gap-2 mb-8">
              @for (tech of horizonProject.technologies; track tech) {
                <app-tech-badge
                  [name]="tech"
                  [highlight]="tech.includes('Java') || tech.includes('Spring') || tech.includes('Angular')"
                />
              }
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
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2.5 rounded-full bg-base-800 hover:bg-base-750 text-text-main font-mono text-xs border border-white/10 transition-colors flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub Repo</span>
                </a>
              </div>

              <div class="text-xs font-mono text-text-muted">
                Port: <span class="text-[#00F5A0] font-bold">54200 (Angular)</span> | Port: <span class="text-[#00D9F5] font-bold">58080 (Spring Boot)</span>
              </div>
            </div>
          </article>
        }

        <!-- 2. Companion Projects Grid (Prioritizing Android & Flutter, then Bangla Akinator) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Horizon Tourist (Native Android) -->
          @if (touristProject) {
            <article class="rounded-2xl bg-base-850 p-6 border border-white/10 hover:border-[#00F5A0]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#00F5A0] bg-base-800 px-2.5 py-1 rounded-full border border-[#00F5A0]/30 font-semibold">
                    {{ touristProject.badgeLabel }}
                  </span>
                  <app-status-pill [status]="touristProject.status" />
                </div>
                <h4 class="text-xl font-bold text-text-main mb-1 group-hover:text-[#00F5A0] transition-colors">
                  <a [routerLink]="['/projects', touristProject.slug]" class="focus:outline-hidden focus-visible:underline">
                    {{ touristProject.title }}
                  </a>
                </h4>
                <p class="text-xs font-mono text-text-muted mb-3">{{ touristProject.tagline }}</p>
                <p class="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  {{ touristProject.summary }}
                </p>
              </div>

              <div>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  @for (tech of touristProject.technologies; track tech) {
                    <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">
                      {{ tech }}
                    </span>
                  }
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
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-text-muted hover:text-white transition-colors"
                    aria-label="Horizon Tourist GitHub Repository"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          }

          <!-- Horizon Mobile (Flutter) -->
          @if (flutterProject) {
            <article class="rounded-2xl bg-base-850 p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-base-800 px-2.5 py-1 rounded-full border border-cyan-400/30 font-semibold">
                    {{ flutterProject.badgeLabel }}
                  </span>
                  <app-status-pill [status]="flutterProject.status" />
                </div>
                <h4 class="text-xl font-bold text-text-main mb-1 group-hover:text-cyan-400 transition-colors">
                  <a [routerLink]="['/projects', flutterProject.slug]" class="focus:outline-hidden focus-visible:underline">
                    {{ flutterProject.title }}
                  </a>
                </h4>
                <p class="text-xs font-mono text-text-muted mb-3">{{ flutterProject.tagline }}</p>
                <p class="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  {{ flutterProject.summary }}
                </p>
              </div>

              <div>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  @for (tech of flutterProject.technologies; track tech) {
                    <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">
                      {{ tech }}
                    </span>
                  }
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
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-text-muted hover:text-white transition-colors"
                    aria-label="Horizon Mobile GitHub Repository"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          }

          <!-- Bangla Akinator -->
          @if (akinatorProject) {
            <article class="rounded-2xl bg-base-850 p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-purple-400 bg-base-800 px-2.5 py-1 rounded-full border border-purple-400/30 font-semibold">
                    {{ akinatorProject.badgeLabel }}
                  </span>
                  <app-status-pill [status]="akinatorProject.status" />
                </div>
                <h4 class="text-xl font-bold text-text-main mb-1 group-hover:text-purple-400 transition-colors">
                  <a [routerLink]="['/projects', akinatorProject.slug]" class="focus:outline-hidden focus-visible:underline">
                    {{ akinatorProject.title }}
                  </a>
                </h4>
                <p class="text-xs font-mono text-text-muted mb-3">{{ akinatorProject.tagline }}</p>
                <p class="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  {{ akinatorProject.summary }}
                </p>
              </div>

              <div>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  @for (tech of akinatorProject.technologies; track tech) {
                    <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">
                      {{ tech }}
                    </span>
                  }
                </div>
                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <a
                    [routerLink]="['/projects', akinatorProject.slug]"
                    class="text-purple-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>VIEW PROJECT</span>
                    <span>→</span>
                  </a>
                  <a
                    [href]="akinatorProject.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-text-muted hover:text-white transition-colors"
                    aria-label="Bangla Akinator GitHub Repository"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
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
  readonly flutterProject = this.projectService.getProjectBySlug('horizon-mobile');
  readonly akinatorProject = this.projectService.getProjectBySlug('bangla-akinator');
}
