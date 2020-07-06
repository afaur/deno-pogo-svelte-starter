<script>
  import { flip } from 'svelte/animate'

  import { onMount } from 'svelte'

  let next = 0, items = [], options = {}

  onMount(() => { setInterval(() => { items = [next++, ...items] }, 1000) })
</script>

<div>This is here to provide something for a svelte ssr test render to locate</div>

{ #each items as item (item) }
  <div animate:flip={options}>
    <button>
      {item}
    </button>
  </div>
{ /each }
