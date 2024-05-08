import "./styles.css";

export function injectHeader(props: { title: string; other: { title: string; path: string } }) {
  const header = document.getElementById("header")!;

  header.innerHTML = `
    <h1 id="title">${props.title}</h1>
    <div id="text-row">
      <a id="url" href="${props.other.path}">${props.other.title}</a>
      <p id="watermark-text">Сделал Вадим Абгалимов для итогового проекта</p>
    </div>
  `;
}
