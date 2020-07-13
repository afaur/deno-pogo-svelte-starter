<script>
  const lazy = file => import(file).then(module => module.default)
    .catch(e => { const err = (e ?? 'throw'); console.log(err); throw err })

  export let path = undefined

  let clicked = false
</script>

<div>Current Path: { path }</div>

<button on:click={() => (clicked = true)}>Click Here</button>

{ #if clicked }
  { #await lazy('./component.svelte') then Component }
    <Component />
  { /await }
{ /if }
