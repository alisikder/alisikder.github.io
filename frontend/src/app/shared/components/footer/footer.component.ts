import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../../core/data/profile.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="mt-20 border-t border-white/10 bg-base-950 py-12 text-slate-400 text-xs overflow-hidden">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div class="space-y-1">
          <span class="text-white font-bold block text-sm tracking-wide">
            Mohammad Ali Sikder Ramim
          </span>
          <span class="text-slate-500 text-xs font-mono block">
            Java 25 • Spring Boot 4.1 • Angular 22 • PostgreSQL • Android • Flutter
          </span>
        </div>

        <nav class="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider max-w-full" aria-label="Footer Navigation">
          <a class="hover:text-[#00F5A0] transition-colors py-1" href="#hero">Home</a>
          <a class="hover:text-[#00F5A0] transition-colors py-1" href="#about">About</a>
          <a class="hover:text-[#00F5A0] transition-colors py-1" href="#projects">Projects</a>
          <a class="hover:text-[#00F5A0] transition-colors py-1" href="#skills">Skills</a>
          <a class="hover:text-[#00F5A0] transition-colors py-1" href="#journey">Journey</a>
          <a class="hover:text-[#00F5A0] transition-colors py-1" href="#contact">Contact</a>
        </nav>

        <p class="text-slate-500 font-mono text-center md:text-right">
          Mohammad Ali Sikder © 2026<br>
          <span class="text-slate-600 text-[11px]">Learn, Build, and Strive.</span>
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly profile = PROFILE_DATA;
}
