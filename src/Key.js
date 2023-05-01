function insert(TextHolder, text) {
  const cursorPos = TextHolder.selectionStart;
  const inputValue = TextHolder.value;
  const selectedText = TextHolder.value.slice(cursorPos, TextHolder.selectionEnd);
  if (selectedText.length > 0) {
    const valueBeforeSelection = inputValue.slice(0, cursorPos);
    const valueAfterSelection = inputValue.slice(TextHolder.selectionEnd);
    TextHolder.value = valueBeforeSelection + text + valueAfterSelection;
  } else {
    const valueBeforeCursor = inputValue.slice(0, cursorPos);
    const valueAfterCursor = inputValue.slice(cursorPos);
    TextHolder.value = valueBeforeCursor + text + valueAfterCursor;
  }
  TextHolder.setSelectionRange(cursorPos + 1, cursorPos + 1);
}


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
      TextHolder.focus()
      let evt = new KeyboardEvent('keydown', { 'code': code});
      document.dispatchEvent(evt);
      let evtInp = new InputEvent({inputType: "insertText", data: Upper })
      TextHolder.dispatchEvent(evtInp)
      if (!fun) insert(TextHolder, Down)
      else fun();
    });
    this.element.addEventListener("mouseup", () => {
      TextHolder.focus()
      let evt = new KeyboardEvent('keyup', { 'code': code });
      document.dispatchEvent(evt);
    });
    this.element.addEventListener("mouseleave", () => {
      let evt = new KeyboardEvent('keyup', { 'code': code});
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