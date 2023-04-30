export default class Key {
  constructor(TextHolder, Upper, Down, width, code, fun, control = 0) {
    this.TextHolder = TextHolder;
    this.Upper = Upper;
    this.Down = Down;
    this.fun = fun;
    this.control = control;
    this.width = width;
    this.element = document.createElement('div');
    this.element.classList.add("key");
    this.element.style.width = width;
    this.element.innerText = Down;
    this.element.addEventListener("mousedown", () => {
      let evt = new KeyboardEvent('keydown', { 'code': code, 'which': code });
      document.dispatchEvent(evt);
      if (!fun) TextHolder.value = TextHolder.value + Down;
      else fun();
    });
    this.element.addEventListener("mouseup", () => {
      let evt = new KeyboardEvent('keyup', { 'code': code, 'which': code });
      document.dispatchEvent(evt);
    });
    this.element.addEventListener("mouseleave", () => {
      let evt = new KeyboardEvent('keyup', { 'code': code, 'which': code });
      document.dispatchEvent(evt);
    });
  }
  getElement() {
    return this.element;
  }
  setUp() {
    this.element.innerText = this.Upper;
  }
  setDown() {
    this.element.innerText = this.Down;
  }
  setUpCaps() {
    this.element.innerText = this.Upper;
  }
  setDownCaps() {
    this.element.innerText = this.Down;
  }

  setControl(c) {
    this.control = c;
    if (c == 0) this.setDown();
    if (c == 1) this.setUp();
    if (c == 2) this.setUpCaps();
    if (c == 3) this.setDownCaps();
  }
}