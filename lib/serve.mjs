import pogo from 'https://deno.land/x/pogo/main.ts'

import ssr from '../out/ssr.mjs'

const server = pogo.server({ port : 3000 })

// Serve animate and internal modules from vendor directory
server.router.get('/js/svelte/animate/index.mjs', (_, h) => h.file('ven/sveltejs-svelte-deno/animate/index.mjs'))
server.router.get('/js/svelte/easing/index.mjs', (_, h) => h.file('ven/sveltejs-svelte-deno/easing/index.mjs'))
server.router.get('/js/svelte/internal/index.mjs', (_, h) => h.file('ven/sveltejs-svelte-deno/internal/index.mjs'))

// Provide mjs files for browser requests
for await (let file of Deno.readDir('out')) {
  if (['.gitkeep', 'ssr.mjs'].includes(file.name)) { continue }
  if (file.name.slice(-8) === '-dom.mjs') {
    const from = `/js/${file.name.slice(0, -8)}.mjs`
    const to = `out/${file.name.slice(0, -8)}-dom.mjs`
    server.router.get(from, (_, h) => h.file(to))
  }
}

server.router.get('/', request => {
  const path = request.url.pathname
  const { body, head } = ssr({ path })
  const props = JSON.stringify({ path })

  return `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <title></title>
      ${ head }
    </head>
    <body>
      <main id='main'>${ body }</main>
      <script type='module'>
        import App from '/js/app.mjs'
        const target = document.getElementById('main')
        new App( { target, hydrate: true, props: ${ props } } )
      </script>
    </body>
    </html>
  `
})

if (!Deno.env.get('TEST')) { server.start() }

export default server
