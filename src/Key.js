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

function createButton() {
  this.element = document.createElement('div');
  this.element.classList.add("key");
  this.element.style.width = this.width;
  this.element.addEventListener("mousedown", () => {
    this.TextHolder.focus();
    let evt = new KeyboardEvent('keydown', { 'code': this.code });
    document.dispatchEvent(evt);
    if (!this.fun) {
      if (this.Keyboard.control == 0) insert(this.TextHolder, this.Down);
      if (this.Keyboard.control == 1) insert(this.TextHolder, this.Upper);
      if (this.Keyboard.control == 2) insert(this.TextHolder, !this.sh ? this.Upper : this.Down);
      if (this.Keyboard.control == 3) insert(this.TextHolder, this.sh ? this.Upper : this.Down);
    }
    else this.fun(this.Keyboard.control, this.Keyboard.setControl.bind(this.Keyboard), this.Keyboard.changeLanguage.bind(this.Keyboard));
  });
  this.element.addEventListener("mouseup", () => {
    this.TextHolder.focus();
    let evt = new KeyboardEvent('keyup', { 'code': this.code });
    document.dispatchEvent(evt);
  });
  this.element.addEventListener("mouseleave", () => {
    let evt = new KeyboardEvent('keyup', { 'code': this.code });
    document.dispatchEvent(evt);
  });

  let textBox = document.createElement('p');
  textBox.classList.add('text');
  textBox.textContent = this.Down;
  this.element.append(textBox);

  if (this.sh) {
    let addText = document.createElement('p');
    addText.classList.add('keyTextAdded');
    addText.textContent = this.Upper;
    this.element.append(addText);
  }
  return this.element;
}

class Key {
  constructor(TextHolder, Keyboard, Upper, Down, width, code, fun, sh = 0, aUpper, aDown) {
    this.TextHolder = TextHolder;
    this.Keyboard = Keyboard;
    this.Upper = Upper;
    this.Down = Down;
    this.aUpper = aUpper;
    this.aDown = aDown;
    this.fun = fun;
    this.width = width;
    this.sh = sh;
    this.code = code;
    this.element = createButton.call(this);
  }
  getElement() {
    return this.element;
  }
  changeLanguage() {
    if (this.aDown) {
      let i = this.Down;
      this.Down = this.aDown;
      this.aDown = i;
      i = this.Upper;
      this.Upper = this.aUpper;
      this.aUpper = i;
      this.setControl();
    }
  }
  setText(text, ch = 0) {
    this.element.children[ch].textContent = text;
  }

  setControl() {
    if (this.Keyboard.control == 0) this.setText(this.Down);
    if (this.Keyboard.control == 1) this.setText(this.Upper);
    if (this.Keyboard.control == 2) this.setText(!this.sh ? this.Upper : this.Down);
    if (this.Keyboard.control == 3) this.setText(this.sh ? this.Upper : this.Down);
    if (this.sh) {
      if (this.Keyboard.control == 1) this.setText(this.Down, 1);
      if (this.Keyboard.control == 0) this.setText(this.Upper, 1);
      if (this.Keyboard.control == 3) this.setText(!this.sh ? this.Upper : this.Down, 1);
      if (this.Keyboard.control == 2) this.setText(this.sh ? this.Upper : this.Down, 1);
    }
  }
}


class Keyboard {
  constructor(Keys, TextHolder, control = 0) {
    this.control = control;
    this.TextHolder = TextHolder;
    this.Keys = [];
    this.KeysI = {};
    for (let k of Keys) {
      let elem = new Key(TextHolder, this, ...k,);
      this.Keys.push(elem);
      this.KeysI[k[3]] = elem;
    }
  }
  getElements() {
    return this.Keys.map(it => it.getElement());
  }
  getElementsI() {
    return this.KeysI;
  }
  setControl(num) {
    this.control = num;
    for (let i of this.Keys) i.setControl();
  }
  changeLanguage() {
    localStorage.setItem("language", localStorage.getItem("language") === "0" ? "1" : "0");
    for (let i of this.Keys) i.changeLanguage();
  }
  initEventListeners() {
    document.addEventListener("keydown", (e) => {
      if (e.code == "Tab") { e.preventDefault(); insert(this.TextHolder, "\t"); }
      if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && !e.getModifierState('CapsLock') && e.isTrusted) this.setControl(1);
      if (e.code == "CapsLock" && e.getModifierState('CapsLock') && e.isTrusted) this.setControl(2);
      if (e.code == "CapsLock" && !e.getModifierState('CapsLock') && e.isTrusted) this.setControl(0);
      if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && e.getModifierState('CapsLock') && e.isTrusted) this.setControl(3);
      if ((e.code == "ShiftLeft" && e.altKey) && e.isTrusted) this.changeLanguage();
      this.KeysI[e.code]?.getElement().classList.add("active");
    });
    document.addEventListener("keyup", (e) => {
      if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && !e.getModifierState('CapsLock') && e.isTrusted) this.setControl(0);
      if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && e.getModifierState('CapsLock') && e.isTrusted) this.setControl(2);
      if (!(e.code == "ShiftLeft" && (this.control == 1 || this.control == 3)
        || e.code == "ShiftRight" && (this.control == 1 || this.control == 3)
        || e.code == "CapsLock" && (this.control == 2 || this.control == 3)))
        this.KeysI[e.code]?.getElement().classList.remove("active");
    });

  }
}

export default Keyboard;
