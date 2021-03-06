/* generated by Svelte v3.23.2 */
import {
  SvelteComponent,
  append,
  check_outros,
  children,
  claim_component,
  claim_element,
  claim_space,
  claim_text,
  create_component,
  destroy_component,
  detach,
  element,
  empty,
  group_outros,
  handle_promise,
  init,
  insert,
  listen,
  mount_component,
  noop,
  run_all,
  safe_not_equal,
  set_data,
  space,
  text,
  transition_in,
  transition_out,
} from "/js/svelte/internal/index.mjs";

function create_if_block(ctx) {
  let await_block_anchor;
  let promise;
  let current;

  let info = {
    ctx,
    current: null,
    token: null,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 7,
    blocks: [, , ],
  };

  handle_promise(promise = /*lazy*/ ctx[4]("/js/transitionList.mjs"), info);

  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;

      {
        const child_ctx = ctx.slice();
        child_ctx[7] = info.resolved;
        info.block.p(child_ctx, dirty);
      }
    },
    i(local) {
      if (current) return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }

      current = false;
    },
    d(detaching) {
      if (detaching) detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    },
  };
}

// (1:0) <script>   const lazy = file => import(file).then(module => module.default)     .catch(e => { const err = (e ?? 'throw'); console.log(err); throw err }
function create_catch_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop,
  };
}

// (31:66)      <TransitionList transition={ transition }
function create_then_block(ctx) {
  let transitionlist;
  let current;

  transitionlist = new /*TransitionList*/ ctx[7]({
    props: { transition: /*transition*/ ctx[2] },
  });

  return {
    c() {
      create_component(transitionlist.$$.fragment);
    },
    l(nodes) {
      claim_component(transitionlist.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(transitionlist, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const transitionlist_changes = {};
      if (dirty & /*transition*/ 4) {
        transitionlist_changes.transition = /*transition*/ ctx[2];
      }
      transitionlist.$set(transitionlist_changes);
    },
    i(local) {
      if (current) return;
      transition_in(transitionlist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(transitionlist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(transitionlist, detaching);
    },
  };
}

// (1:0) <script>   const lazy = file => import(file).then(module => module.default)     .catch(e => { const err = (e ?? 'throw'); console.log(err); throw err }
function create_pending_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop,
  };
}

function create_fragment(ctx) {
  let div;
  let t0;
  let t1;
  let t2;
  let button0;
  let t3;
  let t4;
  let button1;
  let t5;
  let t6;
  let span;
  let t7;
  let t8_value = /*transition*/ ctx[2].name + "";
  let t8;
  let t9;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = /*started*/ ctx[1] && create_if_block(ctx);

  return {
    c() {
      div = element("div");
      t0 = text("Current Path: ");
      t1 = text(/*path*/ ctx[0]);
      t2 = space();
      button0 = element("button");
      t3 = text(/*loadOrResetText*/ ctx[3]);
      t4 = space();
      button1 = element("button");
      t5 = text("Change Transition");
      t6 = space();
      span = element("span");
      t7 = text("Current Transition: ");
      t8 = text(t8_value);
      t9 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "Current Path: ");
      t1 = claim_text(div_nodes, /*path*/ ctx[0]);
      div_nodes.forEach(detach);
      t2 = claim_space(nodes);
      button0 = claim_element(nodes, "BUTTON", {});
      var button0_nodes = children(button0);
      t3 = claim_text(button0_nodes, /*loadOrResetText*/ ctx[3]);
      button0_nodes.forEach(detach);
      t4 = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", {});
      var button1_nodes = children(button1);
      t5 = claim_text(button1_nodes, "Change Transition");
      button1_nodes.forEach(detach);
      t6 = claim_space(nodes);
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t7 = claim_text(span_nodes, "Current Transition: ");
      t8 = claim_text(span_nodes, t8_value);
      span_nodes.forEach(detach);
      t9 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t0);
      append(div, t1);
      insert(target, t2, anchor);
      insert(target, button0, anchor);
      append(button0, t3);
      insert(target, t4, anchor);
      insert(target, button1, anchor);
      append(button1, t5);
      insert(target, t6, anchor);
      insert(target, span, anchor);
      append(span, t7);
      append(span, t8);
      insert(target, t9, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;

      if (!mounted) {
        dispose = [
          listen(button0, "click", /*click_handler*/ ctx[6]),
          listen(button1, "click", /*changeTransition*/ ctx[5]),
        ];

        mounted = true;
      }
    },
    p(ctx, [dirty]) {
      if (!current || dirty & /*path*/ 1) set_data(t1, /*path*/ ctx[0]);
      if (!current || dirty & /*loadOrResetText*/ 8) {
        set_data(t3, /*loadOrResetText*/ ctx[3]);
      }
      if (
        (!current || dirty & /*transition*/ 4) &&
        t8_value !== (t8_value = /*transition*/ ctx[2].name + "")
      ) {
        set_data(t8, t8_value);
      }

      if (/*started*/ ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty & /*started*/ 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();

        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });

        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(div);
      if (detaching) detach(t2);
      if (detaching) detach(button0);
      if (detaching) detach(t4);
      if (detaching) detach(button1);
      if (detaching) detach(t6);
      if (detaching) detach(span);
      if (detaching) detach(t9);
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
      mounted = false;
      run_all(dispose);
    },
  };
}

function instance($$self, $$props, $$invalidate) {
  const lazy = (file) =>
    import(file).then((module) => module.default).catch((e) => {
      const err = e ?? "throw";
      console.log(err);
      throw err;
    });

  let { path = undefined } = $$props;
  let started = false;

  let transition = {
    name: "fly",
    conf: { duration: 250, x: 200 },
  };

  const changeTransition = () => {
    if (transition.name === "fly") {
      $$invalidate(2, transition = { name: "slide", conf: { duration: 250 } });
    } else if (transition.name === "slide") {
      $$invalidate(
        2,
        transition = {
          name: "scaleOutVertical",
          conf: { duration: 250 },
        },
      );
    } else if (transition.name === "scaleOutVertical") {
      $$invalidate(
        2,
        transition = {
          name: "fly",
          conf: { duration: 250, x: 200 },
        },
      );
    }
  };

  const click_handler = () => $$invalidate(1, started = !started);

  $$self.$set = ($$props) => {
    if ("path" in $$props) $$invalidate(0, path = $$props.path);
  };

  let loadOrResetText;

  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*started*/ 2) {
      $:
      $$invalidate(
        3,
        loadOrResetText = started && "Rest Component" || "Load Component",
      );
    }
  };

  return [
    path,
    started,
    transition,
    loadOrResetText,
    lazy,
    changeTransition,
    click_handler,
  ];
}

class App extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { path: 0 });
  }
}

export default App;
