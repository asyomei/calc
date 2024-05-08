import { clamp } from "../utils/clamp";
import { convertBase } from "./convert-base";
import "../global.css";
import "./styles.css";
import { injectHeader } from "../header/header";

injectHeader({
  title: "Конвертер систем счисления",
  other: {
    title: "Калькулятор",
    path: "/",
  },
});

const numberInput = document.getElementById("number-input") as HTMLInputElement;
const fromBaseInput = document.getElementById("from-base-input") as HTMLInputElement;
const toBaseInput = document.getElementById("to-base-input") as HTMLInputElement;
const outputDiv = document.getElementById("output") as HTMLDivElement;

numberInput.onkeydown = sanitizeNumberInput;

numberInput.oninput = onInputChange;
fromBaseInput.oninput = onInputChange;
toBaseInput.oninput = onInputChange;

function sanitizeNumberInput(e: KeyboardEvent) {
  const cursorPos = numberInput.selectionStart;
  const oldNumber = numberInput.value;

  if (e.key.length > 1) return;
  if (e.key === "-" && cursorPos === 0 && !oldNumber.includes("-")) return;
  if (e.key === "." && !oldNumber.includes(".")) return;
  if (/^[0-9A-Z]$/i.test(e.key)) return;

  e.preventDefault();
}

function onInputChange() {
  const number = numberInput.value;
  const fromBase = normalizeBase(Number(fromBaseInput.value));
  const toBase = normalizeBase(Number(toBaseInput.value));

  fromBaseInput.value = String(fromBase);
  toBaseInput.value = String(toBase);

  if (number.length === 0) {
    outputDiv.innerHTML = "";
    return;
  }

  const result = convertBase(number, fromBase, toBase);

  if (result.ok) {
    outputDiv.className = "result";
    outputDiv.innerHTML = `${number}<sub>${fromBase}</sub> = ${result.value}<sub>${toBase}</sub>`;
  } else {
    outputDiv.className = "error";
    outputDiv.innerHTML = result.value;
  }
}

const normalizeBase = (base: number) => clamp(base, 2, 36);
