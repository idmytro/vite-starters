import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import unocssLogo from '/unocss.svg'
import { setupCounter } from './counter.ts'
import 'virtual:uno.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
        <a href="https://unocss.dev/" target="_blank">
      <img src="${unocssLogo}" class="logo uno" alt="Unocss logo" />
    </a>
    <h1>Vite + TypeScript + Unocss</h1>
    <div class="p-2em">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite, TypeScript and Unocss logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
