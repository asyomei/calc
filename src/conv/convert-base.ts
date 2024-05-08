export function convertBase(
  number: string | number,
  fromBase: number,
  toBase: number,
): {
  ok: boolean;
  value: string;
} {
  number = String(number);

  if (!/^\-?[0-9A-Z]+(\.[0-9A-Z]*)?$/i.test(number)) {
    return { ok: false, value: "Некорректное число" };
  }

  let negative = number[0] === "-";
  if (negative) {
    number = number.slice(1);
  }

  let x = 0;
  for (const digit of number) {
    let code = digit.toUpperCase().charCodeAt(0);
    code -= code <= ORD_0 + 9 ? ORD_0 : ORD_A - 10;

    if (code >= fromBase) {
      return { ok: false, value: "Некорректное число при текущем основании" };
    }

    x = x * fromBase + code;
  }

  let result = "";
  do {
    let code = x % toBase;
    code += code < 10 ? ORD_0 : ORD_A - 10;
    result = String.fromCharCode(code) + result;
    x = Math.trunc(x / toBase);
  } while (x > 0);

  if (negative) {
    result = "-" + result;
  }

  return { ok: true, value: result };
}

const ORD_0 = "0".charCodeAt(0);
const ORD_A = "A".charCodeAt(0);
