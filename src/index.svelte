<script>
  const lazy = file => import(file).then(module => module.default)
    .catch(e => { const err = (e ?? 'throw'); console.log(err); throw err })

  export let path = undefined

  let started = false

  let effect = { name: 'fly', conf: { duration: 250, x: 200 } }

  const changeEffect = () => {
    if (effect.name === 'fly') {
      effect = { name: 'slide', conf: { duration: 250 } }
    } else if (effect.name === 'slide') {
      effect = { name: 'fly', conf: { duration: 250, x: 200 } }
    }
  }

  $: loadOrResetText = started && 'Rest Component' || 'Load Component'
</script>

<div>Current Path: { path }</div>

<button on:click={ () => started = !started }>{ loadOrResetText }</button>
<button on:click={ changeEffect }>Toggle Effect</button>

{ #if started }
  { #await lazy( './listAnimator.svelte' ) then ListAnimator }
    <ListAnimator effect={ effect } />
  { /await }
{ /if }
