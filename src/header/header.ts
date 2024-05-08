import "./styles.css";
import { BASE_PUBLIC_PATH } from "../../globals";

export function injectHeader(props: { title: string; other: { title: string; path: string } }) {
  const header = document.getElementById("header")!;
  const toPath = join(BASE_PUBLIC_PATH, props.other.path);

  header.innerHTML = `
    <h1 id="title">${props.title}</h1>
    <div id="text-row">
      <a id="url" href="${toPath}">${props.other.title}</a>
      <p id="watermark-text">Сделал Вадим Абгалимов для итогового проекта</p>
    </div>
  `;
}

const join = (...paths: string[]) => {
  const newPaths = [...paths];

  for (let i = 0; i < newPaths.length; i++) {
    if (newPaths[i].at(-1) === "/") {
      newPaths[i] = newPaths[i].slice(0, -1);
    }
  }

  for (let i = 1; i < newPaths.length; i++) {
    if (newPaths[i][0] === "/") {
      newPaths[i] = newPaths[i].slice(1);
    }
  }

  return newPaths.join("/");
};
