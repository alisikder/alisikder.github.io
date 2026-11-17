import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemePreference } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex items-center bg-base-900/90 border border-white/10 rounded-xl p-1 gap-1 shadow-sm"
      role="group"
      aria-label="Theme selection"
    >
      <!-- Light Button -->
      <button
        type="button"
        (click)="setTheme('light')"
        class="theme-btn px-2 sm:px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
        [ngClass]="{
          'text-base-950 gradient-em-cyan border border-[#00F5A0] shadow-sm font-bold': themeService.preference() === 'light',
          'text-text-muted hover:text-text-main hover:bg-base-800': themeService.preference() !== 'light'
        }"
        title="Light Mode"
        aria-label="Light mode"
      >
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41"/>
        </svg>
        <span class="hidden sm:inline">Light</span>
      </button>

      <!-- Dark Button -->
      <button
        type="button"
        (click)="setTheme('dark')"
        class="theme-btn px-2 sm:px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
        [ngClass]="{
          'text-base-950 gradient-em-cyan border border-[#00F5A0] shadow-sm font-bold': themeService.preference() === 'dark',
          'text-text-muted hover:text-text-main hover:bg-base-800': themeService.preference() !== 'dark'
        }"
        title="Dark Mode"
        aria-label="Dark mode"
      >
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <span class="hidden sm:inline">Dark</span>
      </button>

      <!-- Auto / System Button -->
      <button
        type="button"
        (click)="setTheme('system')"
        class="theme-btn px-2 sm:px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
        [ngClass]="{
          'text-base-950 gradient-em-cyan border border-[#00F5A0] shadow-sm font-bold': themeService.preference() === 'system',
          'text-text-muted hover:text-text-main hover:bg-base-800': themeService.preference() !== 'system'
        }"
        title="Follow System OS Preference"
        aria-label="System theme"
      >
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
        <span class="hidden sm:inline">Auto</span>
      </button>
    </div>
  `
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);

  setTheme(pref: ThemePreference): void {
    this.themeService.setPreference(pref);
  }
}
