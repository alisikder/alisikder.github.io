import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 border-t border-white/10" id="contact" aria-labelledby="contact-header">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-2 mb-12">
          <div class="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-gradient-em-cyan">
            <span class="text-[#00F5A0]">▶</span> <span>GET IN TOUCH</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-display tracking-wide text-text-main">SEND A MESSAGE</h2>
          <div class="w-12 h-1 gradient-em-cyan rounded-full mt-2"></div>
          <p class="text-slate-400 max-w-2xl text-sm pt-2 font-sans">Whether you have an open Junior Full-Stack / Java / Angular role, a technical inquiry, or want to explore my code.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Left side: contact prompt (7 cols) -->
          <div class="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-base-850 border border-white/10 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/15 text-[#00F5A0] border border-[#00F5A0]/30 text-xs font-mono font-semibold">
              <span class="w-1.5 h-1.5 rounded-full bg-[#00F5A0]"></span> Currently considering Junior Full-Stack opportunities
            </div>

            <h3 class="text-3xl font-extrabold text-text-main leading-tight font-sans">
              Let's build something together.
            </h3>

            <p class="text-sm text-slate-300 leading-relaxed font-sans">
              I am based in Dhaka, Bangladesh and open to on-site, hybrid, and remote engineering positions worldwide.
            </p>

            <!-- Quick Email Copy Widget -->
            <div class="p-3.5 rounded-xl bg-base-900 border border-white/10 flex items-center justify-between gap-2">
              <span class="font-mono text-xs sm:text-sm text-[#00F5A0] truncate font-semibold">
                {{ profile.email }}
              </span>
              <button
                type="button"
                (click)="copyEmail()"
                class="px-3 py-1.5 rounded-lg bg-base-800 hover:bg-base-750 text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 flex-shrink-0 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent"
                [attr.aria-label]="emailCopied() ? 'Email copied' : 'Copy email to clipboard'"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                <span>{{ emailCopied() ? 'Copied!' : 'Copy' }}</span>
              </button>
            </div>

            <!-- Dual Action Buttons -->
            <div class="flex flex-wrap gap-4 pt-2">
              <a
                class="px-6 py-3 rounded-full gradient-em-cyan text-base-950 font-mono font-bold text-xs tracking-wider uppercase transition-all btn-gradient-glow hover:scale-105 flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                [href]="'mailto:' + profile.email"
              >
                <svg class="w-4 h-4 text-base-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                <span>MAIL ME</span>
              </a>

              <a
                class="px-6 py-3 rounded-full bg-base-800 hover:bg-base-750 text-text-main font-mono font-bold text-xs tracking-wider uppercase border border-white/10 hover:border-[#00D9F5] transition-all flex items-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                [href]="profile.linkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg class="w-4 h-4 text-[#00F5A0] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          <!-- Right side: contact channels list (5 cols) -->
          <div class="lg:col-span-5 space-y-4">
            <div class="p-4 rounded-xl bg-base-850 border border-white/10 flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-base-800 flex items-center justify-center text-[#00F5A0]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </div>
              <div class="min-w-0">
                <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">EMAIL</span>
                <a class="text-xs sm:text-sm font-semibold text-text-main hover:text-[#00F5A0] transition-colors truncate block" [href]="'mailto:' + profile.email">
                  {{ profile.email }}
                </a>
              </div>
            </div>

            <a
              class="p-4 rounded-xl bg-base-850 border border-white/10 hover:border-[#00D9F5]/40 transition-all flex items-center justify-between group"
              [href]="profile.linkedin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-base-800 flex items-center justify-center text-blue-400">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">LINKEDIN</span>
                  <span class="text-sm font-semibold text-text-main group-hover:text-[#00D9F5] transition-colors">
                    Mohammad Ali Sikder
                  </span>
                </div>
              </div>
              <span class="text-slate-500 group-hover:text-[#00D9F5] transition-colors">↗</span>
            </a>

            <a
              class="p-4 rounded-xl bg-base-850 border border-white/10 hover:border-[#00F5A0]/40 transition-all flex items-center justify-between group"
              [href]="profile.github"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-base-800 flex items-center justify-center text-text-main">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">GITHUB</span>
                  <span class="text-sm font-semibold text-text-main group-hover:text-[#00F5A0] transition-colors">
                    Inspect Repositories
                  </span>
                </div>
              </div>
              <span class="text-slate-500 group-hover:text-[#00F5A0] transition-colors">↗</span>
            </a>

            <div class="p-4 rounded-xl bg-base-850 border border-white/10 flex items-center gap-4">
              <div class="w-10 h-10 rounded-lg bg-base-800 flex items-center justify-center text-[#00D9F5]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </div>
              <div>
                <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">LOCATION</span>
                <span class="text-sm font-semibold text-text-main">Dhaka, Bangladesh (Remote • On-Site)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactSectionComponent {
  readonly profile = PROFILE_DATA;
  readonly emailCopied = signal<boolean>(false);

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.profile.email).then(() => {
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2000);
      });
    }
  }
}
