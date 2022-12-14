import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { isInApp, getVersions, ping } from 'hybrid-sdk'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

if (isInApp()) {
  document.querySelector('#app .read-the-docs').innerHTML = `<pre>${JSON.stringify(getVersions())}\n${window.navigator.userAgent}</pre>`

  document.querySelector('#app .read-the-docs').addEventListener('click', e => {
    ping('你好世界! hello world').then(res => alert(res.query.msg))
  })
}
