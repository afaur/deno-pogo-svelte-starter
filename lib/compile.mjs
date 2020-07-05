// svelte-compiler is a esm rollup build of the compiler from svelte v3.23.2
import { compile, preprocess } from './svelte-compiler.mjs'

// Where to fetch our svelte runtime from, and version to get.
const svelteRuntimeSource = 'https://unpkg.com/svelte@3.23.2'

const fixImports = src => {
  src = src.replace(/svelte\/internal/g, `${svelteRuntimeSource}/internal/index.mjs`)
  src = src.replace(/['"]svelte['"]/g, `'${svelteRuntimeSource}/internal/index.mjs'`)
  return src
}

// Should support custom element (default: true)
// SSR or DOM generation (default: ssr)
// Array of preprocessors to apply (default: [])
const customElement = false, generate = 'ssr', preprocessors = []

// Compiles a svelte file (svlFile) and saves output to outFileWithPath.
const compileFile = async (svlFile, srcName, outFileWithPath) => {
  svlFile = await Deno.readFile(svlFile, 'utf8')
  svlFile = new TextDecoder('utf-8').decode(svlFile)

  const srcNameCap = srcName[0].toUpperCase() + srcName.substr(1)

  let opts = { name: srcNameCap, hydratable: true, generate, customElement }

  const genEsm = async (code, dom=false) => {
    code = (await preprocess(code, preprocessors)).toString()
    code = compile(code, dom ? Object.assign(opts, { generate: 'dom' }) : opts)
    code = code.js.code
    return fixImports(code)
  }

  try {
    let esmCodeSsr = await genEsm(svlFile)
    let esmCodeDom = await genEsm(svlFile, true)
    const [outSsr, outDom] = [`out/${srcName}.mjs`, `out/${srcName}-dom.mjs`]
    await Deno.writeTextFile(outSsr, esmCodeSsr)
    await Deno.writeTextFile(outDom, esmCodeDom)
  } catch(e) { console.log(e) }
}

compileFile('src/index.svelte', 'app').then(() => { console.log('Compilation completed') })
