import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono transition-colors duration-200 border"
      [ngClass]="getStyleClasses()"
    >
      {{ name() }}
    </span>
  `
})
export class TechBadgeComponent {
  readonly name = input.required<string>();
  readonly highlight = input<boolean>(false);

  getStyleClasses(): string {
    if (this.highlight()) {
      return 'bg-base-900 text-[#00F5A0] border-[#00F5A0]/40 font-semibold shadow-xs';
    }
    return 'bg-base-900 text-slate-300 border-white/10 hover:border-white/25';
  }
}
