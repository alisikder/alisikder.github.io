import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../../core/data/profile.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="mt-20 border-t border-white/10 bg-base-950 py-12 text-slate-400 text-xs">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="text-center sm:text-left">
          <span class="text-white font-bold block text-sm tracking-wide">
            Mohammad Ali Sikder Ramim
          </span>
          <span class="text-slate-500 text-xs font-mono">
            Java 21 • Spring Boot 3.3 • Angular 18 • PostgreSQL
          </span>
        </div>

        <div class="flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
          <a class="hover:text-[#00F5A0] transition-colors" href="#hero">Home</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#about">About</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#projects">Projects</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#skills">Skills</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#journey">Journey</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#contact">Contact</a>
        </div>

        <p class="text-slate-500 font-mono text-center sm:text-right">
          Mohammad Ali Sikder © 2025<br>
          <span class="text-slate-600 text-[11px]">Learn, Build, and Strive.</span>
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly profile = PROFILE_DATA;
}
