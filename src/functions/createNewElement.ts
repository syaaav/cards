export default function createNewEl(
  type: string,
  className: string,
  text: string,
  container: HTMLDivElement | null
) {
  const el = document.createElement(type);
  el.classList.add(className);
  el.textContent = text;
  if (container != null) {
    container.appendChild(el);
  }
}
