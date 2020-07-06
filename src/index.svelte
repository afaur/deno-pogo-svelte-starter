<script>
  import { flip } from 'svelte/animate'

  import { onMount } from 'svelte'

  let next = 0, items = [], options = {}

  onMount(() => { setInterval(() => { items = [next++, ...items] }, 1000) })
</script>

{ #each items as item (item) }
  <div animate:flip={options}>
    <button>
      {item}
    </button>
  </div>
{ /each }
