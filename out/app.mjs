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
  let clicked = false;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0) {
    $$bindings.path(path);
  }

  return `<div>Current Path: ${escape(path)}</div>

<button>Click Here</button>

${
    clicked
      ? `${
        (function (__value) {
          if (is_promise(__value)) return ``;

          return (function (Component) {
            return `
    ${validate_component(Component, "Component").$$render($$result, {}, {}, {})}
  `;
          })(__value);
        })(lazy("./component.mjs"))
      }`
      : ``
  }`;
});

export default App;
