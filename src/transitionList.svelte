<script>
  import { onMount } from 'svelte'
  import { fly, slide, scaleOutVertical } from './libTransitions.svelte'

  export let transition = { name: 'fly', conf: { duration: 250, x: 200 } }

  let next = 0, items = [], intervalId = undefined

  const transitions = { fly, slide, scaleOutVertical }

  const intro = node => transitions[transition.name](node, transition.conf)

  const incrementItems = () => {
    if (next > 80) { clearInterval(intervalId) }
    items = [next++, ...items]
  }

  onMount(() => {
    intervalId = setInterval(incrementItems, 250)

    window.addEventListener('focus', () => {
      if (!intervalId) { intervalId = setInterval(incrementItems, 250) }
    })

    window.addEventListener('blur', () => {
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = undefined
      }
    })

    items = [next++, ...items]
  })
</script>

{ #each items as item (item) }
  <div in:intro>
    <button>{ item }</button>
  </div>
{ /each }
