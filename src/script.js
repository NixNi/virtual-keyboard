import KeysNumInit from "./keysNum.js";
import Keyboard from "./Key.js";

const body = document.body;

const KeyboardElem = document.createElement('div');
KeyboardElem.classList.add("keyboard");
body.append(KeyboardElem);

const TextHolder = document.createElement('textarea');
TextHolder.classList.add("textholder");
TextHolder.placeholder = `Поменять язык с помощью физической клавиатуры Alt + Shift
Поменять язык с помощью вирутальной клавиатуры на клавишу Win`;
body.append(TextHolder);

const KeysNum = KeysNumInit(TextHolder);

let kb = new Keyboard(KeysNum, TextHolder);
kb.initEventListeners();
KeyboardElem.append(...kb.getElements());
