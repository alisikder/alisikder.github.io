import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal-snippet',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-xl bg-[#0D1117] border border-[#30363D] shadow-2xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-[400px] xl:max-w-[420px] mx-auto" id="code-box">
      <!-- Window Title Bar -->
      <div class="px-3.5 py-2 bg-[#161B22] border-b border-[#30363D] flex items-center justify-between">
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block"></span>
          <span class="ml-2 text-xs font-mono text-slate-300 font-medium">AliEngineer.java</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            type="button"
            (click)="copyCode()"
            class="text-[11px] font-mono px-2 py-0.5 rounded bg-[#21262D] border border-[#30363D] text-slate-300 hover:text-white hover:bg-[#30363D] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent"
            [attr.aria-label]="copied() ? 'Copied code snippet' : 'Copy code snippet'"
          >
            @if (copied()) {
              <span class="text-[#00F5A0] font-semibold">✓ Copied</span>
            } @else {
              <span>Copy</span>
            }
          </button>
          <span class="text-[10px] font-mono text-[#00F5A0] bg-[#00F5A0]/10 px-2 py-0.5 rounded border border-[#00F5A0]/20 font-semibold">
            Record Type
          </span>
        </div>
      </div>

      <!-- Code Body -->
      <div class="p-3.5 sm:p-4 font-code text-[11px] sm:text-xs text-slate-200 leading-relaxed bg-[#0D1117] overflow-x-auto space-y-0.5 select-text">
        <p class="text-slate-400">// Enterprise Full-Stack Specification</p>
        <p><span class="text-purple-400 font-semibold">public record</span> <span class="text-[#00F5A0] font-bold">FullStackEngineer</span>(</p>
        <p class="pl-3.5"><span class="text-cyan-400">String</span> <span class="text-slate-200">name</span>, <span class="text-[#00D9F5]">"Mohammad Ali Sikder Ramim"</span>,</p>
        <p class="pl-3.5"><span class="text-cyan-400">String</span> <span class="text-slate-200">primaryFocus</span>, <span class="text-[#00D9F5]">"Java 21, Spring Boot &amp; Angular"</span>,</p>
        <p class="pl-3.5"><span class="text-cyan-400">List&lt;String&gt;</span> <span class="text-slate-200">coreStack</span>, <span class="text-[#00F5A0]">List.of(</span></p>
        <p class="pl-7 text-cyan-300">"Java 21", "Spring Boot", "Angular", "TypeScript", "PostgreSQL"</p>
        <p class="pl-3.5"><span class="text-[#00F5A0]">)</span>,</p>
        <p class="pl-3.5"><span class="text-cyan-400">String</span> <span class="text-slate-200">flagshipProject</span>, <span class="text-[#00D9F5]">"Horizon (Travel Booking)"</span>,</p>
        <p class="pl-3.5"><span class="text-purple-400">boolean</span> <span class="text-slate-200">availableForHire</span> <span class="text-purple-400">=&gt; true</span></p>
        <p>) &#123;</p>
        <p class="pl-3.5"><span class="text-purple-400 font-semibold">&#64;Contract</span>(pure = <span class="text-purple-400 font-semibold">true</span>)</p>
        <p class="pl-3.5"><span class="text-purple-400 font-semibold">public void</span> <span class="text-cyan-300 font-semibold">buildReliableSoftware</span>() &#123;</p>
        <p class="pl-7 text-slate-300">verifyRequirements();</p>
        <p class="pl-7 text-slate-300">enforceTypeSafety();</p>
        <p class="pl-7 text-[#00F5A0] font-semibold">deliverDefensibleSolutions();</p>
        <p class="pl-3.5">&#125;</p>
        <p>&#125;</p>
      </div>

      <!-- Footer Bar -->
      <div class="px-3.5 py-1.5 bg-[#161B22] border-t border-[#30363D] flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span class="flex items-center gap-1.5 text-[#00D9F5]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#00D9F5]"></span> OpenJDK 21 Verified
        </span>
        <span>Target: Spring Boot 3.3.x</span>
      </div>
    </div>
  `
})
export class TerminalSnippetComponent {
  readonly copied = signal<boolean>(false);

  private readonly snippet = `public record FullStackEngineer(
    String name, // "Mohammad Ali Sikder Ramim"
    String primaryFocus, // "Java 21, Spring Boot & Angular"
    List<String> coreStack, List.of("Java 21", "Spring Boot", "Angular", "TypeScript", "PostgreSQL"),
    String flagshipProject, "Horizon (Travel Booking)",
    boolean availableForHire => true
) {
    @Contract(pure = true)
    public void buildReliableSoftware() {
        verifyRequirements();
        enforceTypeSafety();
        deliverDefensibleSolutions();
    }
}`;

  copyCode(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.snippet).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
      });
    }
  }
}
