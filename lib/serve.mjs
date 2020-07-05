import pogo from 'https://deno.land/x/pogo/main.ts'

import app from '../out/app.mjs'

const server = pogo.server({ port : 3000 })

// Serve /js/app.mjs as out/app-dom.mjs to hydrate the ssr render.
server.router.get('/js/app.mjs', (_, h) => h.file('out/app-dom.mjs'))

server.router.get('/', request => {
  const path = request.url.pathname
  const { html: body, head: header } = app.render({ path })

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <title></title>
      ${ header }
    </head>
    <body>
      <main id='main'>${ body }</main>
      <script type='module'>
        import App from '/js/app.mjs'
        const target = document.getElementById('main')
        new App( { target, hydrate: true, props: {} } )
      </script>
    </body>
    </html>
  `
})

server.start()
