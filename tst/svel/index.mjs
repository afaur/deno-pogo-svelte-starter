import app from '../../out/app.mjs'
import { assert, assertEquals, assertStrictEq } from 'https://deno.land/std@v0.56.0/testing/asserts.ts'
const { test } = Deno

test('Render of out/app.mjs should contain a div.', async () => {
  const { html: body, head: header } = app.render({})

  // Make sure that there is a div in the html content.
  const actual = RegExp('div').test(body)

  // If div was found.
  assertStrictEq(actual, true)
})
