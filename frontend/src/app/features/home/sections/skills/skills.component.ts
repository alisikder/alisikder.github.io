import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { SKILL_GROUPS } from '../../../../core/data/skills.data';
import { SkillGroup } from '../../../../core/models/skill.model';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section id="skills" class="py-20 border-t border-white/10" aria-labelledby="skills-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header
          number="03"
          tag="WHAT I WORK WITH"
          title="SKILLS &amp; TOOLS"
          description="A transparent breakdown of technologies backed by concrete implementation in repository code."
        />

        <!-- Grid of 12 Tech Icon Tiles -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mb-10">
          <!-- Java -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-[#00F5A0]/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-[#00F5A0] mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.7 18.5c0 .3 2.1.6 4.3.6s4.3-.3 4.3-.6-2.1-.6-4.3-.6-4.3.3-4.3.6zm-1.8 2.4c0 .4 2.8.8 6.1.8s6.1-.4 6.1-.8-2.8-.8-6.1-.8-6.1.4-6.1.8zm6.1-4.8c-2.8 0-5.1.3-5.1.7s2.3.7 5.1.7 5.1-.3 5.1-.7-2.3-.7-5.1-.7zm1.8-6.9c.7 1.2-.5 2.3-1.6 3.1-1 .7-1.7 1.4-1.2 2.5 0 0 .5-1.1 1.7-1.8 1.4-.8 2.1-1.7 1.8-2.8-.3-1-1.3-1.9-.7-1zm-3.3-3.6c.4 1-.3 1.9-1.2 2.6-.8.6-1.5 1.2-1 2.2 0 0 .4-1 1.4-1.6 1.1-.7 1.7-1.5 1.4-2.4-.2-.8-.9-1.5-.6-.8z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-[#00F5A0] transition-colors">JAVA 21</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">Core Language</span>
          </div>

          <!-- Spring Boot -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-[#00D9F5]/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-[#00D9F5] mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.2 8.4c-1.3-4.1-5.3-6.9-9.8-6.4C6 2.6 1.7 7.3 2 12.8c.2 4.4 3.2 8.2 7.5 9.2 4.8 1.2 9.6-1.3 11.5-5.8.4-.9.2-1.8-.4-2.4-.6-.6-1.5-.8-2.4-.4-1.3.6-2.8.8-4.2.5 1.6-.7 3.1-1.8 4.2-3.1 1-1.2 2.3-1.9 3-2.4zm-9.2 9.6c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.6 0 3.1.6 4.2 1.8-2.6 1.3-4.7 3.6-5.8 6.4-.3.9-.1 1.9.4 2.6.4.8 1.2 1.2 2.2 1.2h.3c-.4 0-.9 0-1.3 0z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-[#00D9F5] transition-colors">SPRING BOOT</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">Framework</span>
          </div>

          <!-- Angular -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.5L3.5 5.5l1.3 11.4L12 21.5l7.2-4.6 1.3-11.4L12 2.5zm0 2.8l5.4 12.1h-2.1l-1.1-2.8H9.8l-1.1 2.8H6.6L12 5.3zm1.5 7.6L12 8.6l-1.5 4.3h3z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-cyan-400 transition-colors">ANGULAR 18</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">Frontend SPA</span>
          </div>

          <!-- TypeScript -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm8.3 12.9v-6h-2.1V8.5h5.8v1.4h-2.1v6h-1.6zm4.7-.2c.7.4 1.4.6 2.2.6 1.1 0 1.8-.5 1.8-1.3 0-.8-.6-1.1-1.6-1.5l-.6-.2c-1.3-.5-2.1-1.3-2.1-2.4 0-1.5 1.2-2.7 3.1-2.7.9 0 1.7.2 2.3.6l-.5 1.3c-.5-.3-1.1-.5-1.8-.5-1.1 0-1.6.5-1.6 1.1 0 .7.6 1 1.5 1.4l.6.2c1.4.5 2.2 1.3 2.2 2.5 0 1.7-1.3 2.7-3.4 2.7-1 0-2-.3-2.7-.8l.5-1.4z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-cyan-400 transition-colors">TYPESCRIPT</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">Strict Types</span>
          </div>

          <!-- PostgreSQL -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-blue-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-blue-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.3 2 11.5c0 3.2 1.7 6.1 4.3 7.8v-2.3C4.9 15.6 4 13.7 4 11.5 4 7.4 7.6 4 12 4s8 3.4 8 7.5c0 2.2-.9 4.1-2.3 5.5v2.3c2.6-1.7 4.3-4.6 4.3-7.8C22 6.3 17.5 2 12 2zm-1 5c-1.7 0-3 1.3-3 3v5c0 .6.4 1 1 1s1-.4 1-1v-4h2v4c0 .6.4 1 1 1s1-.4 1-1v-5c0-1.7-1.3-3-3-3zm0 2c.6 0 1 .4 1 1v1h-2v-1c0-.6.4-1 1-1z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-blue-400 transition-colors">POSTGRESQL</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">Database</span>
          </div>

          <!-- Spring Security -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-purple-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-purple-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 5.5v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12v-6L12 2zm0 4.2c1.9 0 3.5 1.6 3.5 3.5 0 1.2-.6 2.3-1.6 2.9v2.4h-3.8v-2.4c-1-.6-1.6-1.7-1.6-2.9 0-1.9 1.6-3.5 3.5-3.5z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-purple-400 transition-colors">SECURITY 7</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">HMAC / JWT</span>
          </div>

          <!-- Tailwind CSS -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-sky-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-sky-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-sky-400 transition-colors">TAILWIND</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">Styling</span>
          </div>

          <!-- Android / Java -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-[#00F5A0]/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-[#00F5A0] mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 15.3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m-11 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m11.4-6l2-3.5c.1-.2 0-.5-.2-.6-.2-.1-.5 0-.6.2l-2 3.5C15.6 8.4 13.9 8 12 8s-3.6.4-5.1.9l-2-3.5c-.1-.2-.4-.3-.6-.2-.2.1-.3.4-.2.6l2 3.5C2.7 11.2.3 14.7 0 18.8h24c-.3-4.1-2.7-7.6-6.1-9.5"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-[#00F5A0] transition-colors">ANDROID</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">Native Client</span>
          </div>

          <!-- Flutter / Dart -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.3 0L2.3 12 6 15.7 21.7 0h-7.4zm0 11.5L8.7 17.1l3.7 3.7 3.6-3.6 5.7 5.7h7.4l-9.4-9.4-5.4-2z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-cyan-400 transition-colors">FLUTTER</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">Mobile App</span>
          </div>

          <!-- Google Gemini AI -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-amber-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-amber-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-amber-400 transition-colors">GEMINI 1.5</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">AI Grounding</span>
          </div>

          <!-- Git / GitHub -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-red-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-red-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.6 10.59L8.38 4.8a1.37 1.37 0 0 1 1.94 0l1.32 1.32c-.08.18-.14.37-.14.58a1.7 1.7 0 0 0 1.7 1.7c.21 0 .4-.06.58-.14l2.84 2.84a1.7 1.7 0 0 0 2.28 2.28l3.1 3.1a1.37 1.37 0 0 1 0 1.94l-5.79 5.79a1.37 1.37 0 0 1-1.94 0L2.6 12.53a1.37 1.37 0 0 1 0-1.94z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-red-400 transition-colors">GIT</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">VCS</span>
          </div>

          <!-- REST / Linux -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-[#00D9F5]/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-[#00D9F5] mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-[#00D9F5] transition-colors">REST / LINUX</span>
            <span class="text-[10px] font-mono text-text-dim uppercase tracking-wider mt-0.5">Architecture</span>
          </div>
        </div>

        <!-- Deep Breakdown 2-Column Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Backend Engineering Card -->
          <div class="rounded-2xl bg-base-850 p-6 sm:p-7 border border-white/10 space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 class="text-base font-bold text-text-main flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#00F5A0]"></span>
                Enterprise Backend Engineering
              </h3>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-[#00F5A0]/15 text-[#00F5A0] border border-[#00F5A0]/30 font-bold">
                PRIMARY
              </span>
            </div>
            <div class="space-y-3.5 text-xs font-sans">
              <div>
                <span class="text-text-main font-semibold block text-sm">Java (JDK 17 / 21 / 25)</span>
                <span class="text-text-muted">Object-oriented domain modeling, concurrency, virtual threads, streams, and modern language features.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">Spring Boot 4.x / 3.x</span>
                <span class="text-text-muted">Layered RESTful architecture, dependency injection, JPA transactions, and centralized exception handling.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">Spring Security 7</span>
                <span class="text-text-muted">Stateless JWT filters, per-user HMAC token signing, and role-based authorization guards.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">PostgreSQL &amp; SQL</span>
                <span class="text-text-muted">Relational schema design, foreign keys, indexing, constraints, and ACID transactions.</span>
              </div>
            </div>
          </div>

          <!-- Frontend Engineering Card -->
          <div class="rounded-2xl bg-base-850 p-6 sm:p-7 border border-white/10 space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 class="text-base font-bold text-text-main flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                Modern Reactive Frontend
              </h3>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 font-bold">
                PRIMARY
              </span>
            </div>
            <div class="space-y-3.5 text-xs font-sans">
              <div>
                <span class="text-text-main font-semibold block text-sm">Angular 22 / 18</span>
                <span class="text-text-muted">Standalone component architecture, reactive forms, lazy-loaded routing, and strict TypeScript.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">TypeScript 6 / 5</span>
                <span class="text-text-muted">Strict type-checking, generic interfaces, and comprehensive type safety across services.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">Tailwind CSS v4</span>
                <span class="text-text-muted">Design tokens, mobile-first responsive grids, CSS variables, and seamless theme switching.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">Angular Signals &amp; RxJS</span>
                <span class="text-text-muted">Fine-grained reactive primitives, computed dependencies, effect tracking, and asynchronous streams.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsSectionComponent {
  readonly skillGroups: SkillGroup[] = SKILL_GROUPS;
}
