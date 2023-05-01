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
    this.element = document.createElement('div');
    this.element.classList.add("key");
    this.element.style.width = width;
    this.element.innerText = Down;
    this.element.addEventListener("mousedown", () => {
      TextHolder.focus();
      let evt = new KeyboardEvent('keydown', { 'code': code });
      document.dispatchEvent(evt);
      if (!fun) {
        if (Keyboard.control == 0) insert(this.TextHolder, this.Down);
        if (Keyboard.control == 1) insert(this.TextHolder, this.Upper);
        if (Keyboard.control == 2) insert(this.TextHolder, !sh ? this.Upper : this.Down);
        if (Keyboard.control == 3) insert(this.TextHolder, sh ? this.Upper : this.Down);
      }
      else fun(this.Keyboard.control, this.Keyboard.setControl.bind(Keyboard), this.Keyboard.changeLanguage.bind(Keyboard));
    });
    this.element.addEventListener("mouseup", () => {
      TextHolder.focus();
      let evt = new KeyboardEvent('keyup', { 'code': code });
      document.dispatchEvent(evt);
    });
    this.element.addEventListener("mouseleave", () => {
      let evt = new KeyboardEvent('keyup', { 'code': code });
      document.dispatchEvent(evt);
    });
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
  setControl() {
    if (this.Keyboard.control == 0) this.element.innerText = this.Down;
    if (this.Keyboard.control == 1) this.element.innerText = this.Upper;
    if (this.Keyboard.control == 2) this.element.innerText = !this.sh ? this.Upper : this.Down;
    if (this.Keyboard.control == 3) this.element.innerText = this.sh ? this.Upper : this.Down;
  }
}


class Keyboard {
  constructor(Keys, TextHolder, control = 0) {
    this.control = control;
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
    for (let i of this.Keys) i.changeLanguage();
  }
  initEventListeners() {
    document.addEventListener("keydown", (e) => {
      if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && !e.getModifierState('CapsLock') && e.isTrusted) this.setControl(1);
      if (e.code == "CapsLock" && e.getModifierState('CapsLock') && e.isTrusted) this.setControl(2);
      if (e.code == "CapsLock" && !e.getModifierState('CapsLock') && e.isTrusted) this.setControl(0);
      if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && e.getModifierState('CapsLock') && e.isTrusted) this.setControl(3);
      if ((e.code == "ShiftLeft" && e.altKey ) && e.isTrusted) this.changeLanguage();
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
