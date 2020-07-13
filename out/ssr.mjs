import app from "./app.mjs";

export default (props) => {
  const { html: body, head: header, css } = app.render(props);

  let head = header + "\n";
  head = (css && css.code) && (head + `<style>${css.code}</style>`) || head;

  return { body, head };
};
