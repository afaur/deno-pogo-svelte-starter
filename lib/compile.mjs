// svelte-compiler is a esm rollup build of the compiler
import { compile, preprocess } from '../ven/sveltejs-svelte-deno/compiler.mjs'

// When making ssr version read svelte from the vendor directory server side.
const fixImportsSsr = src => {
  src = src.replace(/svelte\/internal/g, `../ven/sveltejs-svelte-deno/internal/index-ssr.mjs`)
  src = src.replace(/svelte\/animate/g, `../ven/sveltejs-svelte-deno/animate/index-ssr.mjs`)
  src = src.replace(/['"]svelte['"]/g, `'../ven/sveltejs-svelte-deno/internal/index-ssr.mjs'`)
  return src
}

// When making dom version serve svelte from a pogo static route.
const fixImportsDom = src => {
  src = src.replace(/svelte\/internal/g, `/js/svelte/internal/index.mjs`)
  src = src.replace(/svelte\/animate/g, `/js/svelte/animate/index.mjs`)
  src = src.replace(/['"]svelte['"]/g, `'/js/svelte/internal/index.mjs'`)
  return src
}

// Should support custom element (default: false)
// Array of preprocessors to apply (default: [])
const customElement = false, generate = 'ssr', preprocessors = []

// Compiles a svelte file (svlFile) and saves output.
const compileFile = async (svlFile, srcName) => {
  svlFile = await Deno.readFile(svlFile, 'utf8')
  svlFile = new TextDecoder('utf-8').decode(svlFile)

  const srcNameCap = srcName[0].toUpperCase() + srcName.substr(1)

  let opts = { name: srcNameCap, hydratable: true, generate, customElement }

  const genEsm = async (code, dom=false) => {
    const fixImports = dom ? fixImportsDom : fixImportsSsr
    opts = dom ? Object.assign(opts, { generate: 'dom' }) : opts

    code = (await preprocess(code, preprocessors)).toString()
    code = compile(code, opts)
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
