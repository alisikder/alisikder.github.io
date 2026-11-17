import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStatus } from '../../../core/models/project.model';

@Component({
  selector: 'app-status-pill',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border transition-colors"
      [ngClass]="getClasses()"
      [attr.aria-label]="'Feature status: ' + getLabel()"
    >
      <span class="w-1.5 h-1.5 rounded-full" [ngClass]="getDotClass()"></span>
      {{ getLabel() }}
    </span>
  `
})
export class StatusPillComponent {
  readonly status = input.required<ProjectStatus>();

  getLabel(): string {
    switch (this.status()) {
      case 'implemented':
        return 'Implemented';
      case 'partially-implemented':
        return 'Partially Implemented';
      case 'prototype':
        return 'Prototype';
      case 'planned':
        return 'Planned';
    }
  }

  getClasses(): string {
    switch (this.status()) {
      case 'implemented':
        return 'bg-[#00F5A0]/15 text-[#00F5A0] border-[#00F5A0]/40 shadow-xs';
      case 'partially-implemented':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'prototype':
        return 'bg-[#00D9F5]/15 text-[#00D9F5] border-[#00D9F5]/30';
      case 'planned':
        return 'bg-base-800 text-text-muted border-white/10';
    }
  }

  getDotClass(): string {
    switch (this.status()) {
      case 'implemented':
        return 'bg-[#00F5A0] animate-pulse';
      case 'partially-implemented':
        return 'bg-amber-400';
      case 'prototype':
        return 'bg-[#00D9F5]';
      case 'planned':
        return 'bg-slate-400';
    }
  }
}
