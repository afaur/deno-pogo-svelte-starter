<script>
  const lazy = file => import(file).then(module => module.default)
    .catch(e => { const err = (e ?? 'throw'); console.log(err); throw err })

  export let path = undefined

  let started = false

  let transition = { name: 'fly', conf: { duration: 250, x: 200 } }

  const changeTransition = () => {
    if (transition.name === 'fly') {
      transition = { name: 'slide', conf: { duration: 250 } }
    } else if (transition.name === 'slide') {
      transition = { name: 'scaleOutVertical', conf: { duration: 250 } }
    } else if (transition.name === 'scaleOutVertical') {
      transition = { name: 'fly', conf: { duration: 250, x: 200 } }
    }
  }

  $: loadOrResetText = started && 'Reset Component' || 'Load Component'
</script>

<div>Current Path: { path }</div>

<button on:click={ () => started = !started }>{ loadOrResetText }</button>
<button on:click={ changeTransition }>Change Transition</button>
<span>Current Transition: { transition.name }</span>

{ #if started }
  { #await lazy( './transitionList.svelte' ) then TransitionList }
    <TransitionList transition={ transition } />
  { /await }
{ /if }
