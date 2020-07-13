<script context='module'>
  import { fly as _fly, slide as _slide } from 'svelte/transition'

  //https://svelte.dev/tutorial/custom-css-transitions
  export const scaleOutVertical = (node, { delay = 0, duration = 400 }) => {
    return { delay, duration, css: (t, u) => `transform: scale(1, ${t})` }
  }

  export const fly = _fly
  export const slide = _slide
</script>
