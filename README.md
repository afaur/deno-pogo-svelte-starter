## Notes
 - This is a very basic boilerplate for working with svelte in Deno.
 - It does just enough to get you started, and lets you experiment from there.
 - It might be good to add large changes as a different branch or fork.

## Using Make / Just
  - Project uses `Make` or `Just` as task runner.
    - This is partly because Deno doesn't seem to need `npm` or a `package.json`.
  - If using `just`, replace all commands starting with `make` to `just`

## Installing Make / Just
  - Having either one on your machine will work and setup is easy
    - OSX / Linux
      - By default you should already have `make` on your machine
      - If you want to install `just` you can get it here
        - [Just Github Repository](https://github.com/casey/just)
      - On OSX you can run `brew install just`
    - Windows
      - Make doesn't come by default 
        - [Using Make On Windows](https://stackoverflow.com/questions/12881854/how-to-use-gnu-make-on-windows)
      - If you want to install `just` you can get it here
        - [Just Github Repository](https://github.com/casey/just)

## Compiling svelte files
  - Typing `make compile` causes the `index.svelte` to build to `out/app.mjs`.
    - See `lib/util/compile.mjs` to adjust/extend this behavior.

## Running http server
  - Typing `make serve` starts an http server that renders `out/app.mjs`.
    - See `lib/util/serve.mjs` to adjust/extend this behavior. 
    - Currently uses Pogo:
      - https://github.com/sholladay/pogo
