import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { PROFILE_DATA } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="about" class="py-20 border-t border-white/10" aria-labelledby="about-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header
          number="01"
          tag="ABOUT ME"
          title="ENGINEERING DISCIPLINE &amp; BACKGROUND"
          description="How scientific rigor and intensive enterprise training translate into a disciplined, architecture-first approach to software engineering."
        />

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Left Column (6 cols) -->
          <div class="lg:col-span-6 space-y-6">
            <div class="bg-base-850 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4">
              @for (paragraph of profile.bioParagraphs; track paragraph) {
                <p class="text-slate-300 leading-relaxed text-sm sm:text-base font-sans">
                  {{ paragraph }}
                </p>
              }
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div class="p-4 rounded-xl bg-base-850 border border-white/10">
                <span class="text-text-dim block mb-1">Academic Degree</span>
                <p class="font-semibold text-text-main">BS (Honours)</p>
                <p class="text-[#00F5A0] text-[11px]">University of Dhaka</p>
              </div>

              <div class="p-4 rounded-xl bg-base-850 border border-white/10">
                <span class="text-text-dim block mb-1">Enterprise Training</span>
                <p class="font-semibold text-text-main">Full-Stack Enterprise</p>
                <p class="text-[#00D9F5] text-[11px]">IsDB-BISEW Scholar</p>
              </div>

              <div class="p-4 rounded-xl bg-base-850 border border-white/10">
                <span class="text-text-dim block mb-1">Location &amp; Hub</span>
                <p class="font-semibold text-text-main">Dhaka, Bangladesh</p>
                <p class="text-text-muted text-[11px]">UTC+6 Timezone</p>
              </div>
            </div>
          </div>

          <!-- Right Column: Core Principles (6 cols) -->
          <div class="lg:col-span-6 space-y-3.5">
            <p class="font-mono text-xs uppercase text-text-muted tracking-wider mb-2">
              Core Engineering Principles
            </p>

            @for (principle of profile.principles; track principle.title; let i = $index) {
              <div class="p-4 rounded-xl bg-base-850 border border-white/10 hover:border-[#00F5A0]/40 transition-all">
                <div class="flex items-start gap-3.5">
                  <div
                    class="w-8 h-8 rounded-lg bg-base-800 flex items-center justify-center font-mono text-xs font-bold mt-0.5 border"
                    [ngClass]="{
                      'text-[#00F5A0] border-[#00F5A0]/30': i === 0,
                      'text-cyan-400 border-cyan-400/30': i === 1,
                      'text-purple-400 border-purple-400/30': i === 2,
                      'text-[#00D9F5] border-[#00D9F5]/30': i === 3
                    }"
                  >
                    0{{ i + 1 }}
                  </div>
                  <div>
                    <h3 class="text-sm font-semibold text-text-main">
                      {{ principle.title }}
                    </h3>
                    <p class="text-xs text-text-muted mt-1 leading-relaxed font-sans">
                      {{ principle.desc }}
                    </p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutSectionComponent {
  readonly profile = PROFILE_DATA;
}
