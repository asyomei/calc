import { injectHeader } from "../header/header";
import "../global.css";
import "./styles.css";
import { MathQuillConfig, MathQuillLoader } from "mathquill-typescript";
import { btn, cmd, injectMathButtons, type } from "./math-button";
import evaluatex from "evaluatex/dist/evaluatex";

injectHeader({
  title: "Калькулятор",
  other: {
    title: "Конвертер систем счисления",
    path: "/conv",
  },
});

MathQuillLoader.loadMathQuill({ mode: "prod" }, (MQ) => {
  MQ = MQ.getInterface(2);

  const exprInput = MQ.MathField(document.getElementById("expr-input")!);
  const resultElem = MQ.StaticMath(document.getElementById("result")!);

  injectMathButtons(MQ, exprInput, [
    ...Array.from("0123456789.()+-").map((n) => btn(n, type(n))),
    ...["\\sin", "\\cos", "\\tan", "\\pi"].map((f) => btn(f, cmd(f), type("("))),
    btn("\\times", type("\\cdot")),
    btn("\\div", type("/")),
    btn("a^2", type("^2")),
    btn("a^n", type("^")),
    btn("\\sqrt{a}", cmd("\\sqrt")),
    btn("\\nthroot{n}{a}", cmd("\\nthroot")),
    btn("|a|", type("|")),
    btn("ans", type("ans")),
  ]);

  let tempResult: number = 0;
  let lastResult: number = 0;

  exprInput.el().onkeydown = (e) => {
    if (e.key === "Enter") {
      calculate();
      lastResult = tempResult;
    }
  };

  exprInput.config({
    autoCommands: "pi tau",
    autoOperatorNames: "sin cos tan",
    handlers: {
      edit() {
        calculate();
      },
    } as any,
  } as MathQuillConfig);

  const calculate = () => {
    const expr = (exprInput.latex() as string)
      .replace(/\\(?:left|right)/g, "")
      .replace(/\\sqrt\[(.+)\]\{(.+)\}/g, "{$2}^{1/{$1}}")
      .replace(/\\pi/g, "PI")
      .replace(/ans/g, `(${lastResult})`);

    try {
      tempResult = evaluatex(expr, {}, { latex: true })({ e: Math.E });
      tempResult = Number(tempResult.toFixed(6));
      resultElem.latex(String(tempResult));
    } catch {
      resultElem.latex("");
    }
  };
});
