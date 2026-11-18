import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal-snippet',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-xl border shadow-xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-[400px] xl:max-w-[420px] mx-auto neon-border-glow transition-all duration-300" id="code-box">
      <!-- Window Title Bar -->
      <div class="px-3.5 py-2 flex items-center justify-between border-b" id="code-box-header">
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block"></span>
          <span class="ml-2 text-xs font-mono font-medium" id="code-box-title">AliEngineer.java</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            type="button"
            (click)="copyCode()"
            class="text-[11px] font-mono px-2 py-0.5 rounded transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent"
            id="code-box-copy"
            [attr.aria-label]="copied() ? 'Copied code snippet' : 'Copy code snippet'"
          >
            @if (copied()) {
              <span class="code-class font-semibold">✓ Copied</span>
            } @else {
              <span>Copy</span>
            }
          </button>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded font-semibold" id="code-box-badge">
            Record Type
          </span>
        </div>
      </div>

      <!-- Code Body -->
      <div class="p-3.5 sm:p-4 font-code text-[11px] sm:text-xs leading-relaxed overflow-x-auto space-y-0.5 select-text" id="code-box-body">
        <p class="code-comment">// Enterprise Full-Stack Specification</p>
        <p>
          <span class="code-keyword">public record</span> <span class="code-class">FullStackEngineer</span><span class="code-bracket">(</span>
        </p>
        <p class="pl-3.5">
          <span class="code-type">String</span> <span class="code-var">name</span><span class="code-bracket">,</span> <span class="code-string">"Mohammad Ali Sikder Ramim"</span><span class="code-bracket">,</span>
        </p>
        <p class="pl-3.5">
          <span class="code-type">String</span> <span class="code-var">primaryFocus</span><span class="code-bracket">,</span> <span class="code-string">"Java 25, Spring Boot &amp; Angular"</span><span class="code-bracket">,</span>
        </p>
        <p class="pl-3.5">
          <span class="code-type">List&lt;String&gt;</span> <span class="code-var">coreStack</span><span class="code-bracket">,</span> <span class="code-class">List.of</span><span class="code-bracket">(</span>
        </p>
        <p class="pl-7 code-list">
          "Java 25", "Spring Boot", "Angular", "TypeScript", "Dart", "PostgreSQL"
        </p>
        <p class="pl-3.5"><span class="code-bracket">),</span></p>
        <p class="pl-3.5">
          <span class="code-type">String</span> <span class="code-var">flagshipProject</span><span class="code-bracket">,</span> <span class="code-string">"Horizon (Travel Booking)"</span><span class="code-bracket">,</span>
        </p>
        <p class="pl-3.5">
          <span class="code-keyword">boolean</span> <span class="code-var">availableForHire</span> <span class="code-bracket">=&gt;</span> <span class="code-keyword">true</span>
        </p>
        <p><span class="code-bracket">) &#123;</span></p>
        <p class="pl-3.5">
          <span class="code-keyword">&#64;Contract</span><span class="code-bracket">(</span><span class="code-var">pure</span> <span class="code-bracket">=</span> <span class="code-keyword">true</span><span class="code-bracket">)</span>
        </p>
        <p class="pl-3.5">
          <span class="code-keyword">public void</span> <span class="code-method">buildReliableSoftware</span><span class="code-bracket">() &#123;</span>
        </p>
        <p class="pl-7 code-call">verifyRequirements();</p>
        <p class="pl-7 code-call">enforceTypeSafety();</p>
        <p class="pl-7 code-class font-semibold">deliverDefensibleSolutions();</p>
        <p class="pl-3.5"><span class="code-bracket">&#125;</span></p>
        <p><span class="code-bracket">&#125;</span></p>
      </div>

      <!-- Footer Bar -->
      <div class="px-3.5 py-1.5 flex items-center justify-between text-[10px] font-mono border-t" id="code-box-footer">
        <span class="flex items-center gap-1.5 code-footer-verified">
          <span class="w-1.5 h-1.5 rounded-full inline-block" id="code-box-status-dot"></span> OpenJDK 25 Verified
        </span>
        <span id="code-box-target">Target: Spring Boot 4.1.x</span>
      </div>
    </div>
  `
})
export class TerminalSnippetComponent {
  readonly copied = signal<boolean>(false);

  private readonly snippet = `public record FullStackEngineer(
    String name, // "Mohammad Ali Sikder Ramim"
    String primaryFocus, // "Java 25, Spring Boot & Angular"
    List<String> coreStack, List.of("Java 25", "Spring Boot", "Angular", "TypeScript", "Dart", "PostgreSQL"),
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
