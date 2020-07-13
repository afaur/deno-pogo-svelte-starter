/* generated by Svelte v3.23.2 */
import {
  create_ssr_component,
  escape,
  is_promise,
  validate_component,
} from "../ven/sveltejs-svelte-deno/internal/index-ssr.mjs";

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
  const lazy = (file) =>
    import(file).then((module) => module.default).catch((e) => {
      const err = e ?? "throw";
      console.log(err);
      throw err;
    });

  let { path = undefined } = $$props;
  let started = false;

  let effect = {
    name: "fly",
    conf: { duration: 250, x: 200 },
  };

  const changeEffect = () => {
    if (effect.name === "fly") {
      effect = { name: "fade", conf: { duration: 250 } };
    } else if (effect.name === "fade") {
      effect = {
        name: "fly",
        conf: { duration: 250, x: 200 },
      };
    }
  };

  if ($$props.path === void 0 && $$bindings.path && path !== void 0) {
    $$bindings.path(path);
  }
  let loadOrResetText = started && "Rest Component" || "Load Component";

  return `<div>Current Path: ${escape(path)}</div>

<button>${escape(loadOrResetText)}</button>
<button>Toggle Effect</button>

${
    started
      ? `${
        (function (__value) {
          if (is_promise(__value)) return ``;

          return (function (ListAnimator) {
            return `
    ${
              validate_component(ListAnimator, "ListAnimator").$$render(
                $$result,
                { effect },
                {},
                {},
              )
            }
  `;
          })(__value);
        })(lazy("./listAnimator.mjs"))
      }`
      : ``
  }`;
});

export default App;
