import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 border-t border-white/10" id="skills" aria-labelledby="skills-header">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-2 mb-12">
          <div class="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-gradient-em-cyan">
            <span class="text-[#00F5A0]">▶</span> <span>WHAT I WORK WITH</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-display tracking-wide text-text-main">SKILLS &amp; TOOLS</h2>
          <div class="w-12 h-1 gradient-em-cyan rounded-full mt-2"></div>
          <p class="text-slate-400 max-w-2xl text-sm pt-2 font-sans">A transparent breakdown of technologies backed by concrete implementation in repository code.</p>
        </div>

        <!-- Grid of 12 Tech Icon Tiles with Official SVGs -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mb-10">
          <!-- Java -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-[#00F5A0]/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-[#00F5A0] mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Java</title><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-[#00F5A0] transition-colors">JAVA 21</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Core Language</span>
          </div>

          <!-- Spring Boot -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-[#00D9F5]/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-[#00D9F5] mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Spring Boot</title><path d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-[#00D9F5] transition-colors">SPRING BOOT</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Framework</span>
          </div>

          <!-- Angular -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Angular</title><path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-cyan-400 transition-colors">ANGULAR 18</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Frontend SPA</span>
          </div>

          <!-- TypeScript -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>TypeScript</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-cyan-400 transition-colors">TYPESCRIPT</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Strict Types</span>
          </div>

          <!-- PostgreSQL -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-blue-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-blue-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>PostgreSQL</title><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-blue-400 transition-colors">POSTGRESQL</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Database</span>
          </div>

          <!-- Spring Security -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-purple-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-purple-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Spring Security</title><path d="M20.59 2.066 11.993 0 3.41 2.066v6.612h4.557a3.804 3.804 0 0 0 0 .954H3.41v3.106C3.41 19.867 11.994 24 11.994 24s8.582-4.133 8.582-11.258V9.635h-4.545a3.616 3.616 0 0 0 0-.954h4.558zM12 12.262h-.006a3.109 3.109 0 1 1 .006 0zm-.006-4.579a.804.804 0 0 0-.37 1.52v.208l.238.237v.159l.159.159v.159l-.14.14.15.246v.159l-.16.189.223.222.246-.246V9.218a.804.804 0 0 0-.346-1.535zm0 .836a.299.299 0 1 1 .298-.299.299.299 0 0 1-.298.3z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-purple-400 transition-colors">SECURITY 7</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">HMAC / JWT</span>
          </div>

          <!-- Tailwind CSS -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-sky-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-sky-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Tailwind CSS</title><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-sky-400 transition-colors">TAILWIND</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Styling</span>
          </div>

          <!-- Android / Java -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-[#00F5A0]/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-[#00F5A0] mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Android</title><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-[#00F5A0] transition-colors">ANDROID</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Native Client</span>
          </div>

          <!-- Flutter / Dart -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-cyan-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Flutter</title><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-cyan-400 transition-colors">FLUTTER</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Mobile App</span>
          </div>

          <!-- Google Gemini AI -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-amber-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-amber-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Google Gemini</title><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-amber-400 transition-colors">GEMINI 1.5</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">AI Grounding</span>
          </div>

          <!-- Git / GitHub -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-red-400/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-red-400 mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Git</title><path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-red-400 transition-colors">GIT</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">VCS</span>
          </div>

          <!-- REST / Linux -->
          <div class="skill-tile rounded-xl bg-base-850 p-4 border border-white/10 hover:border-[#00D9F5]/50 transition-all flex flex-col items-center justify-center text-center group">
            <div class="w-11 h-11 rounded-lg bg-base-800 flex items-center justify-center text-[#00D9F5] mb-2.5 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Linux</title><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z"/></svg>
            </div>
            <span class="text-xs font-mono font-bold text-text-main group-hover:text-[#00D9F5] transition-colors">REST / LINUX</span>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Architecture</span>
          </div>
        </div>

        <!-- Deep Breakdown 2-Column Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="rounded-2xl bg-base-850 p-6 border border-white/10 space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 class="text-base font-bold text-text-main flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#00F5A0]"></span> Enterprise Backend Engineering
              </h3>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-[#00F5A0]/15 text-[#00F5A0] border border-[#00F5A0]/30 font-bold">PRIMARY</span>
            </div>
            <div class="space-y-3 text-xs font-sans">
              <div>
                <span class="text-text-main font-semibold block text-sm">Java (JDK 17 / 21 / 23)</span>
                <span class="text-slate-400">Object-oriented domain modeling, concurrency, streams, and modern language features.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">Spring Boot 4.x / 3.x</span>
                <span class="text-slate-400">Layered RESTful architecture, dependency injection, and centralized exception handling.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">Spring Security</span>
                <span class="text-slate-400">Stateless JWT filters, per-user HMAC token signing, and role-based authorization.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">PostgreSQL &amp; SQL</span>
                <span class="text-slate-400">Relational schema design, foreign keys, indexing, constraints, and ACID transactions.</span>
              </div>
            </div>
          </div>

          <div class="rounded-2xl bg-base-850 p-6 border border-white/10 space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 class="text-base font-bold text-text-main flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-cyan-400"></span> Modern Reactive Frontend
              </h3>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-400/15 text-cyan-400 border border-cyan-400/30 font-bold">PRIMARY</span>
            </div>
            <div class="space-y-3 text-xs font-sans">
              <div>
                <span class="text-text-main font-semibold block text-sm">Angular 18 / 17</span>
                <span class="text-slate-400">Standalone component architecture, reactive forms, and lazy-loaded routing.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">TypeScript 5 / 6</span>
                <span class="text-slate-400">Strict type-checking, generic interfaces, and type safety across services.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">Tailwind CSS</span>
                <span class="text-slate-400">Design tokens, mobile-first responsive grids, and theme switching.</span>
              </div>
              <div>
                <span class="text-text-main font-semibold block text-sm">Angular Signals &amp; RxJS</span>
                <span class="text-slate-400">Fine-grained reactive primitives, computed dependencies, and asynchronous streams.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsSectionComponent {}
