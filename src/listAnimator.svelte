<script>
  import { onMount } from 'svelte'

  import { fly, fade } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  export let effect = { name: 'fade', conf: { duration: 250 } }

  let next = 0, items = [], intervalId = undefined

  const effects = { fly, fade }

  const intro = node => effects[effect.name](node, effect.conf)

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
  <div animate:flip in:intro>
    <button>{ item }</button>
  </div>
{ /each }
