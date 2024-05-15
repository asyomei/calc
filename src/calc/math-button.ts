import { IMathQuill, MathFieldMethods } from "mathquill-typescript";

type Handler = (field: MathFieldMethods) => void;

export function injectMathButtons(
  MQ: IMathQuill,
  mathField: MathFieldMethods,
  buttons: [string, Handler[]][],
) {
  const handlers = Object.fromEntries(buttons);

  for (const elem of document.getElementsByClassName("math-button")) {
    const span = document.createElement("span");
    elem.replaceChildren(span);

    const tex = (elem as HTMLElement).dataset.tex!;
    const expr = MQ.StaticMath(span);
    expr.latex(tex);

    const handler = handlers[tex]!;
    const btn = elem as HTMLButtonElement;
    btn.onclick = () => {
      handler.forEach((h) => h(mathField));
      mathField.focus();
    };
  }
}

export const btn = (id: string, ...handlers: Handler[]): [string, Handler[]] => [id, handlers];

export const type =
  (tex: string): Handler =>
  (field) =>
    field.typedText(tex);

export const cmd =
  (cmd: string): Handler =>
  (field) =>
    field.cmd(cmd);

export const key =
  (key: string): Handler =>
  (field) =>
    field.keystroke(key);
