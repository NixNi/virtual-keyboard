import KeysNumInit from "./keysNum.js";
import Key from "./Key.js";

const body = document.body;

const Keyboard = document.createElement('div');
Keyboard.classList.add("keyboard");
body.append(Keyboard);

const TextHolder = document.createElement('textarea');
TextHolder.classList.add("textholder");
body.append(TextHolder);

const KeysNum = KeysNumInit(TextHolder);




let Keys = {};
for (let i of KeysNum) {
  let K = new Key(TextHolder, ...i);
  Keys[i[3]] = K;
  Keyboard.append(K.getElement());
}

console.log(Keys);
document.addEventListener("keydown", (e) => {
  if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
    for (let i in Keys) {
      Keys[i].setControl(1);
    }
  }
  console.log(e);
  Keys[e.code]?.getElement().classList.add("active");
});
document.addEventListener("keyup", (e) => {
  if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
    for (let i in Keys) {
      Keys[i].setControl(0);
    }
  }
  Keys[e.code]?.getElement().classList.remove("active");
});


TextHolder.addEventListener("input", e=>console.log(e))