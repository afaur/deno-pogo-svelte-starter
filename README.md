## Notes
  - See `Getting Started` for instructions.
  - See `Vendor submodule sveltejs-svelte-deno` for testing v3.23.2 vs latest.
  - This is a very basic boilerplate for working with svelte in Deno.
  - It does just enough to get you started, and lets you experiment from there.
  - It might be good to add large changes as a different branch or fork.
  - One concern that will need to get addressed is here:
    - https://github.com/afaur/deno-pogo-svelte-starter/blob/master/lib/compile.mjs#L5-L19
    - This may need to become a more all encompassing regex to fix paths during compilation.

## Vendor submodule sveltejs-svelte-deno
  - Project installs a fork of `https://github.com/sveltejs/svelte` in `ven` that:
    - Builds a self contained esm rollup bundle of the svelte compiler.
    - Makes ssr and dom versions of the runtime that are compatible with Deno.
  - Currently this uses the `v3.23.2` of the compiler and runtime.
    - If you want to use a more recent build from `master` branch there is one.
    - Currently there is a build from this sha available:
      - https://github.com/sveltejs/svelte/tree/b56829c7b8c42f2243025886078493dc366bb752
    - If you want to use that version of the runtime and compiler then:
      - Change directory to `ven/sveltejs-svelte-deno`.
      - Git checkout that version by:
        - `git checkout dev-b56829-build`
          - If this doesn't work you may need to `git fetch origin`
      - Now when you return to the root directory and run:
        - `make compile` and `make serve` it will be using that version.

## Getting Started
  - Deno setup instructions: https://deno.land/manual/getting_started/installation
  - You do not need to use npm/yarn for package manangement.
    - Deno installs things remotely from secure endpoints, and caches them after first run.
  - Get started by cloning this repository:
    - Notes:
      - `--recursive` opt fetches submodules, these live in `ven` (vendor dir).
      - Project uses a fork of `sveltejs/svelte` to have deno compatible files.
    - Commands:
      - `git clone --recursive git@github.com:afaur/deno-pogo-svelte-starter.git new-project`
      - `cd new-project`
      - Try running `make compile`
        - If this works then continue, otherwise look at the `Using Make / Just` section.
      - Now run `make serve`
      - View project at: (unless something else is using that port)
        - http://localhost:3000

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
    - You may also want to use:
      - `make compile-log` runs server with debug logging.
      - `make compile-break` runs server with breakpoint debugging
        - Open `chrome://inspect` in chrome to attach.
    - See `lib/compile.mjs` to adjust/extend this behavior.

## Running http server
  - Typing `make serve` starts an http server that renders `out/app.mjs`.
    - You may also want to use:
      - `make serve-log` runs server with debug logging.
      - `make serve-break` runs server with breakpoint debugging
        - Open `chrome://inspect` in chrome to attach.
    - See `lib/serve.mjs` to adjust/extend this behavior. 
    - Currently uses Pogo:
      - https://github.com/sholladay/pogo

## Running tests
  - Server
    - `make test-serve` tests `lib/serve.mjs`.
  - Svelte SSR
    - `make test-svelte` tests `out/app.mjs`.
