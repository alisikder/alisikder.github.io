import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { PROFILE_DATA } from '../../../core/data/profile.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  template: `
    <header class="sticky top-0 z-50 w-full backdrop-blur-xl bg-base-900/90 border-b border-white/10 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <!-- Brand stylized logo badge with emerald-cyan border/glow -->
        <a
          routerLink="/"
          (click)="closeMobileMenu()"
          class="flex items-center gap-3 group flex-shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded-xl p-1"
          aria-label="Ali portfolio homepage"
        >
          <div
            class="w-10 h-10 rounded-xl overflow-hidden border border-[#00F5A0]/40 shadow-[0_0_12px_rgba(0,245,160,0.25)] group-hover:border-[#00D9F5] group-hover:shadow-[0_0_16px_rgba(0,217,245,0.4)] transition-all duration-300 flex-shrink-0 bg-base-950"
          >
            <img
              src="logo.png"
              alt="Ali Sikder Logo"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              width="40"
              height="40"
            />
          </div>
          <div>
            <span class="text-sm font-bold tracking-tight text-text-main group-hover:text-[#00D9F5] transition-colors block">
              Ali
            </span>
            <span class="hidden sm:block text-[11px] font-mono text-slate-400">
              Enterprise Full-Stack
            </span>
          </div>
        </a>

        <!-- Upper Navigation Links -->
        <nav class="hidden lg:flex items-center gap-7 text-xs font-mono tracking-widest uppercase font-semibold" aria-label="Main Navigation">
          <button
            type="button"
            (click)="scrollToSection('hero')"
            class="text-slate-400 hover:text-[#00F5A0] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent py-1"
          >
            Home
          </button>
          <button
            type="button"
            (click)="scrollToSection('about')"
            class="text-slate-400 hover:text-[#00F5A0] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent py-1"
          >
            About
          </button>
          <button
            type="button"
            (click)="scrollToSection('projects')"
            class="text-slate-400 hover:text-[#00F5A0] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent py-1"
          >
            Projects
          </button>
          <button
            type="button"
            (click)="scrollToSection('skills')"
            class="text-slate-400 hover:text-[#00F5A0] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent py-1"
          >
            Skills
          </button>
          <button
            type="button"
            (click)="scrollToSection('journey')"
            class="text-slate-400 hover:text-[#00F5A0] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent py-1"
          >
            Education
          </button>
          <button
            type="button"
            (click)="scrollToSection('contact')"
            class="text-slate-400 hover:text-[#00F5A0] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent py-1"
          >
            Message
          </button>
        </nav>

        <!-- Theme Switcher & Actions -->
        <div class="flex items-center gap-2 sm:gap-3.5 flex-shrink-0">
          <!-- Light / Dark / System Segmented Control -->
          <app-theme-toggle />

          <!-- Available Status Pill with Emerald-to-Cyan Pulse -->
          <div class="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00F5A0]/35 text-xs font-mono bg-[#00F5A0]/15 text-[#00F5A0]">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#00F5A0]"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00F5A0]"></span>
            </span>
            <span class="font-semibold tracking-wide text-gradient-em-cyan">Available for Hire</span>
          </div>

          <!-- CV Download Button (Option B: Compact Icon on mobile, Icon+Text on sm+) -->
          <a
            [href]="profile.cvUrl"
            download="Mohammad_Ali_Sikder_Ramim_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 sm:px-4 sm:py-2 rounded-xl bg-base-800 hover:bg-base-750 text-text-main text-xs font-mono font-semibold border border-white/10 hover:border-[#00D9F5]/50 transition-all flex items-center gap-1.5 shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent flex-shrink-0"
            title="Download CV (PDF)"
            aria-label="Download CV PDF"
          >
            <svg class="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#00F5A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
            <span class="hidden sm:inline">CV (PDF)</span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button
            type="button"
            (click)="toggleMobileMenu()"
            class="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-base-800 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent flex-shrink-0"
            [attr.aria-expanded]="mobileMenuOpen()"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            @if (mobileMenuOpen()) {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            } @else {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      @if (mobileMenuOpen()) {
        <div
          id="mobile-menu"
          class="lg:hidden border-t border-white/10 bg-base-900/95 backdrop-blur-xl px-4 py-4 space-y-2 transition-all"
        >
          <button
            type="button"
            (click)="scrollToSection('hero')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-slate-400 hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            Home
          </button>
          <button
            type="button"
            (click)="scrollToSection('about')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-slate-400 hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            About
          </button>
          <button
            type="button"
            (click)="scrollToSection('projects')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-slate-400 hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            Projects
          </button>
          <button
            type="button"
            (click)="scrollToSection('skills')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-slate-400 hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            Skills
          </button>
          <button
            type="button"
            (click)="scrollToSection('journey')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-slate-400 hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            Education
          </button>
          <button
            type="button"
            (click)="scrollToSection('contact')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-slate-400 hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            Message
          </button>

          <div class="pt-3 border-t border-white/10 flex justify-center">
            <a
              [href]="profile.cvUrl"
              download="Mohammad_Ali_Sikder_Ramim_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-base-800 hover:bg-base-750 text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/10"
            >
              <svg class="w-4 h-4 text-[#00F5A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  readonly profile = PROFILE_DATA;
  readonly mobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  scrollToSection(sectionId: string): void {
    this.closeMobileMenu();
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = sectionId;
      }
    }
  }
}
