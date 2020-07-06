import server from '../../lib/serve.mjs'
import { assert, assertEquals, assertStrictEq } from 'https://deno.land/std@v0.56.0/testing/asserts.ts'
const { test } = Deno

test('Import statement for the svelte app in body of `/` request response.', async () => {
  const response = await server.inject({ method : 'GET', url    : '/' })

  // Make sure that the import statement for the svelte app was added to the body.
  const actual = RegExp('import App from \'/js/app.mjs\'').test(response.body)

  // If import statement was found.
  assertStrictEq(actual, true)
})
