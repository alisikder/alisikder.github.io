import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { PROFILE_DATA } from '../../../core/data/profile.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  template: `
    <header class="sticky top-0 z-50 w-full backdrop-blur-xl bg-base-900/90 border-b border-white/10 transition-colors duration-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <!-- Logo / Identity -->
        <a
          routerLink="/"
          (click)="closeMobileMenu()"
          class="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded-xl p-1"
          aria-label="Mohammad Ali Sikder Ramim portfolio homepage"
        >
          <div class="w-9 h-9 rounded-xl gradient-em-cyan p-[1px] shadow-[0_0_15px_rgba(0,245,160,0.3)]">
            <div class="w-full h-full bg-base-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-xs text-[#00F5A0] group-hover:bg-transparent group-hover:text-base-950 transition-all">
              MASR
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm tracking-wide text-text-main group-hover:text-[#00F5A0] transition-colors leading-tight">
              Ali
            </span>
            <span class="text-[10px] font-mono tracking-wider text-text-muted uppercase">
              Enterprise Full-Stack
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-6 font-mono text-xs text-text-muted" aria-label="Main Navigation">
          <button
            type="button"
            (click)="scrollToSection('about')"
            class="hover:text-[#00F5A0] transition-colors py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded uppercase tracking-wider"
          >
            About
          </button>
          <button
            type="button"
            (click)="scrollToSection('projects')"
            class="hover:text-[#00F5A0] transition-colors py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded uppercase tracking-wider"
          >
            Projects
          </button>
          <button
            type="button"
            (click)="scrollToSection('skills')"
            class="hover:text-[#00F5A0] transition-colors py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded uppercase tracking-wider"
          >
            Skills
          </button>
          <button
            type="button"
            (click)="scrollToSection('journey')"
            class="hover:text-[#00F5A0] transition-colors py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded uppercase tracking-wider"
          >
            Journey
          </button>
          <button
            type="button"
            (click)="scrollToSection('contact')"
            class="hover:text-[#00F5A0] transition-colors py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded uppercase tracking-wider"
          >
            Contact
          </button>
        </nav>

        <!-- Right Side Controls (Theme + CV Action + Mobile Toggle) -->
        <div class="flex items-center gap-3">
          <app-theme-toggle />

          <!-- CV Download Button (Desktop) -->
          <a
            [href]="profile.cvUrl"
            download="Mohammad_Ali_Sikder_Ramim_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-em-cyan text-base-950 font-mono font-bold text-xs tracking-wider uppercase transition-all btn-gradient-glow hover:scale-105 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg class="w-3.5 h-3.5 text-base-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
            <span>CV.PDF</span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button
            type="button"
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-xl text-text-muted hover:text-text-main hover:bg-base-800 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
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
          class="md:hidden border-t border-white/10 bg-base-900/95 backdrop-blur-xl px-4 py-4 space-y-2 transition-all"
        >
          <button
            type="button"
            (click)="scrollToSection('about')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-text-muted hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            01. About
          </button>
          <button
            type="button"
            (click)="scrollToSection('projects')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-text-muted hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            02. Projects
          </button>
          <button
            type="button"
            (click)="scrollToSection('skills')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-text-muted hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            03. Skills
          </button>
          <button
            type="button"
            (click)="scrollToSection('journey')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-text-muted hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            04. Journey
          </button>
          <button
            type="button"
            (click)="scrollToSection('contact')"
            class="w-full text-left px-3 py-2 rounded-lg text-sm font-mono text-text-muted hover:text-white hover:bg-base-800 uppercase tracking-wider"
          >
            05. Contact
          </button>

          <div class="pt-3 border-t border-white/10 flex justify-center">
            <a
              [href]="profile.cvUrl"
              download="Mohammad_Ali_Sikder_Ramim_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full gradient-em-cyan text-base-950 font-mono font-bold text-xs uppercase tracking-wider"
            >
              <svg class="w-4 h-4 text-base-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
