<script>
  import { flip } from 'svelte/animate'
  import { onMount } from 'svelte'

  let next = 0, items = [], options = {}, intervalId = undefined

  onMount(() => {
    intervalId = setInterval(() => {
      if (next > 8) { clearInterval(intervalId) }
      items = [next++, ...items]
    }, 250)

    items = [next++, ...items]
  })
</script>

{ #each items as item (item) }
  <div animate:flip={options}>
    <button>
      {item}
    </button>
  </div>
{ /each }
