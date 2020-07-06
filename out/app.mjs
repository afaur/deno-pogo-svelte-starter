/* generated by Svelte v3.23.2 */
import { create_ssr_component, each, escape } from "../ven/sveltejs-svelte-deno/internal/index-ssr.mjs";

import { flip } from "../ven/sveltejs-svelte-deno/animate/index-ssr.mjs";
import { onMount } from '../ven/sveltejs-svelte-deno/internal/index-ssr.mjs';

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let next = 0, items = [], options = {};

	onMount(() => {
		setInterval(
			() => {
				items = [next++, ...items];
			},
			1000
		);
	});

	return `${each(items, item => `<div><button>${escape(item)}</button>
  </div>`)}`;
});

export default App;