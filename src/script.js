const body = document.body;

const Keyboard = document.createElement('div');
Keyboard.classList.add("keyboard");
body.append(Keyboard);

const TextHolder = document.createElement('textarea')
TextHolder.classList.add("textholder")
body.append(TextHolder)

class Key {
  constructor(Upper, Down, width, code, fun, control = 0) {
    this.Upper = Upper;
    this.Down = Down;
    this.fun = fun;
    this.control = control;
    this.width = width;
    this.element = document.createElement('div');
    this.element.classList.add("key");
    this.element.style.width = width;
    this.element.innerText = Down;
    this.element.addEventListener("click", () => {
      let evt = new KeyboardEvent('keydown', { 'code': code, 'which': code, target:TextHolder });
      document.dispatchEvent(evt);
    })
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
}

let KeysNum = [
  ["~", "`", "6%", "Backquote", undefined],
  ["!", "1", "6%", "Digit1", undefined],
  ["@", "2", "6%", "Digit2", undefined],
  ["#", "3", "6%", "Digit3", undefined],
  ["$", "4", "6%", "Digit4", undefined],
  ["%", "5", "6%", "Digit5", undefined],
  ["^", "6", "6%", "Digit6", undefined],
  ["&", "7", "6%", "Digit7", undefined],
  ["*", "8", "6%", "Digit8", undefined],
  ["(", "9", "6%", "Digit9", undefined],
  [")", "0", "6%", "Digit0", undefined],
  ["_", "-", "6%", "Minus", undefined],
  ["+", "=", "6%", "Equal", undefined],
  ["Backspace", "Backspace", "12%", "Backspace", undefined],
];

let Keys = {};
for (let i of KeysNum) {
  let K = new Key(...i);
  Keys[i[3]] = K;
  Keyboard.append(K.getElement());
}

console.log(Keys);
document.addEventListener("keydown", (e) => {
  if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
    for (let i in Keys) {
      Keys[i].setUp()
    }
  }
  console.log(e)
  Keys[e.code]?.getElement().classList.add("active");
});
document.addEventListener("keyup", (e) => {
  if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
    for (let i in Keys) {
      Keys[i].setDown();
    }
  }
  Keys[e.code]?.getElement().classList.remove("active");
});
