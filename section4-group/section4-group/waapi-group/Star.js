export default class Star {
  constructor(number) {
    this.element = document.createElement("div");
    this.element.classList.add("star");
    this.element.innerHTML = number;
    // element.style.left = `${x}px`;
    // element.style.top = `${y}px`;
    // element.style.transform = `scale(${scale}px)`;
    document.body.append(this.element);
  }
}
