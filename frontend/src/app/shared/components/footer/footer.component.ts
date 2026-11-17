import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROFILE_DATA } from '../../../core/data/profile.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="mt-20 border-t border-white/10 bg-base-950 py-12 text-text-muted text-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="text-center sm:text-left">
          <span class="text-text-main font-bold block text-sm tracking-wide">
            {{ profile.name }}
          </span>
          <span class="text-text-dim text-xs font-mono">
            {{ profile.subtitle }}
          </span>
        </div>

        <nav class="flex flex-wrap items-center justify-center gap-6 font-mono text-xs uppercase tracking-wider" aria-label="Footer navigation">
          <a class="hover:text-[#00F5A0] transition-colors" href="#hero">Home</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#about">About</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#projects">Projects</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#skills">Skills</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#journey">Journey</a>
          <a class="hover:text-[#00F5A0] transition-colors" href="#contact">Contact</a>
        </nav>

        <p class="text-text-dim font-mono text-center sm:text-right text-xs">
          Mohammad Ali Sikder © 2025<br>
          <span class="text-text-dim/80 text-[11px]">Learn, Build, and Strive.</span>
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly profile = PROFILE_DATA;
}
