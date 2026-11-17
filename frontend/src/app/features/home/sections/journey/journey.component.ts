import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { JOURNEY_TIMELINE } from '../../../../core/data/journey.data';
import { TimelineItem } from '../../../../core/models/profile.model';

@Component({
  selector: 'app-journey-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="journey" class="py-20 border-t border-white/10" aria-labelledby="journey-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header
          number="04"
          tag="BACKGROUND"
          title="EDUCATION &amp; EXPERIENCE"
          description="Tracing academic science education, intensive enterprise scholarship training, and software architecture milestones."
        />

        <!-- Glowing Timeline with side Year Badge -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Timeline Items (8 cols) -->
          <div class="lg:col-span-8 relative pl-6 border-l-2 border-base-750 space-y-8">
            @for (item of timeline; track item.title; let i = $index) {
              <div class="relative group">
                <!-- Glowing Node Pin -->
                <div
                  class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-base-900 transition-transform group-hover:scale-125"
                  [ngClass]="{
                    'bg-[#00F5A0] shadow-[0_0_12px_#00F5A0]': i === 0,
                    'bg-[#00D9F5] shadow-[0_0_12px_#00D9F5]': i === 1,
                    'bg-purple-400 shadow-[0_0_12px_#A855F7]': i === 2,
                    'bg-blue-400 shadow-[0_0_12px_#3B82F6]': i === 3
                  }"
                ></div>

                <!-- Milestone Card -->
                <div class="p-6 rounded-2xl bg-base-850 border border-white/10 hover:border-[#00F5A0]/40 transition-all">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      class="text-xs font-mono font-bold tracking-wider uppercase"
                      [ngClass]="{
                        'text-gradient-em-cyan': i === 0,
                        'text-cyan-400': i === 1,
                        'text-purple-400': i === 2,
                        'text-blue-400': i === 3
                      }"
                    >
                      {{ item.year }} • {{ item.period }}
                    </span>
                    <span
                      class="text-[11px] font-mono px-2 py-0.5 rounded border font-semibold"
                      [ngClass]="{
                        'bg-[#00F5A0]/15 text-[#00F5A0] border-[#00F5A0]/30': i === 0,
                        'bg-cyan-400/15 text-cyan-400 border-cyan-400/30': i === 1,
                        'bg-purple-400/15 text-purple-400 border-purple-400/30': i === 2,
                        'bg-blue-400/15 text-blue-400 border-blue-400/30': i === 3
                      }"
                    >
                      {{ item.badge }}
                    </span>
                  </div>

                  <h3 class="text-lg font-bold text-text-main mb-1">
                    {{ item.title }}
                  </h3>
                  <p class="text-xs font-mono text-text-muted mb-2">
                    {{ item.institution }}
                  </p>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    {{ item.description }}
                  </p>

                  <div class="flex flex-wrap gap-1.5">
                    @for (tag of item.tags; track tag) {
                      <span class="text-[10px] font-mono px-2 py-0.5 bg-base-900 text-slate-300 rounded border border-white/10">
                        {{ tag }}
                      </span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Right Year / Persona Badge (4 cols) -->
          <div class="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-base-850 border border-white/10 text-center sticky top-28">
            <span class="font-display text-7xl sm:text-8xl text-base-750 leading-none select-none">
              2025
            </span>
            <h4 class="font-display text-2xl text-gradient-em-cyan tracking-wide uppercase mt-[-10px]">
              MOHAMMAD ALI
            </h4>
            <p class="text-xs font-mono text-text-muted">Enterprise Engineer Ready</p>

            <div class="mt-6 pt-6 border-t border-white/10 w-full space-y-2.5 text-xs font-mono text-left">
              <div class="flex justify-between text-text-muted">
                <span>Specialization:</span>
                <span class="text-text-main font-semibold">Java / Angular</span>
              </div>
              <div class="flex justify-between text-text-muted">
                <span>Training:</span>
                <span class="text-[#00F5A0] font-semibold">IsDB-BISEW</span>
              </div>
              <div class="flex justify-between text-text-muted">
                <span>University:</span>
                <span class="text-text-main font-semibold">Dhaka University</span>
              </div>
              <div class="flex justify-between text-text-muted">
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
export class JourneySectionComponent {
  readonly timeline: TimelineItem[] = JOURNEY_TIMELINE;
}
