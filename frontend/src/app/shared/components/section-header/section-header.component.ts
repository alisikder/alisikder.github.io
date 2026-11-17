import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-2 mb-12 md:mb-16">
      <div class="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-gradient-em-cyan">
        <span class="text-[#00F5A0]">▶</span>
        <span>{{ tag() }}</span>
        @if (number()) {
          <span class="text-text-dim text-[11px] font-normal tracking-normal ml-1">[{{ number() }}]</span>
        }
      </div>
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-display tracking-wide text-text-main uppercase">
        {{ title() }}
      </h2>
      <div class="w-12 h-1 gradient-em-cyan rounded-full mt-2"></div>
      @if (description()) {
        <p class="text-text-muted max-w-2xl text-sm sm:text-base pt-2 font-sans leading-relaxed">
          {{ description() }}
        </p>
      }
    </div>
  `
})
export class SectionHeaderComponent {
  readonly number = input<string>();         // e.g. "01"
  readonly tag = input.required<string>();    // e.g. "PROJECTS"
  readonly title = input.required<string>();  // e.g. "Featured Work"
  readonly description = input<string>();     // Subtitle
}
