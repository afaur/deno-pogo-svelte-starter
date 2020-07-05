<script>
  let info = 'Loading Component'

  import { onMount } from 'svelte'

  onMount(() => { info = 'Component Mounted.' })
</script>

<div>{ info }</div>
