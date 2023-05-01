export default function KeysNumInit(TextHolder) {
  function insert(text) {
    const cursorPos = TextHolder.selectionStart;
    const inputValue = TextHolder.value;
    const selectedText = TextHolder.value.slice(cursorPos, TextHolder.selectionEnd);
    if (selectedText.length > 0) {
      const valueBeforeSelection = inputValue.slice(0, cursorPos);
      const valueAfterSelection = inputValue.slice(TextHolder.selectionEnd);
      TextHolder.value = valueBeforeSelection + text + valueAfterSelection;
    } else {
      const valueBeforeCursor = inputValue.slice(0, cursorPos - 1);
      const valueAfterCursor = inputValue.slice(cursorPos);
      TextHolder.value = valueBeforeCursor + text + valueAfterCursor;
    }
    TextHolder.setSelectionRange(cursorPos + 1, cursorPos + 1);
  }
  function backspace() {
    const cursorPos = TextHolder.selectionStart;
    const inputValue = TextHolder.value;
    const selectedText = TextHolder.value.slice(cursorPos, TextHolder.selectionEnd);
    if (selectedText.length > 0) {
      const valueBeforeSelection = inputValue.slice(0, cursorPos);
      const valueAfterSelection = inputValue.slice(TextHolder.selectionEnd);
      TextHolder.value = valueBeforeSelection + valueAfterSelection;
    } else {
      const valueBeforeCursor = inputValue.slice(0, cursorPos - 1);
      const valueAfterCursor = inputValue.slice(cursorPos);
      TextHolder.value = valueBeforeCursor + valueAfterCursor;
      TextHolder.setSelectionRange(cursorPos - 1, cursorPos - 1);
    }
  }
  function tab() {
    insert("\t");
  }
  function del() {
    const cursorPos = TextHolder.selectionStart;
    const inputValue = TextHolder.value;

    const selectedText = TextHolder.value.slice(cursorPos, TextHolder.selectionEnd);
    if (selectedText.length > 0) {
      const valueBeforeSelection = inputValue.slice(0, cursorPos);
      const valueAfterSelection = inputValue.slice(TextHolder.selectionEnd);
      TextHolder.value = valueBeforeSelection + valueAfterSelection;
    } else {
      const valueBeforeCursor = inputValue.slice(0, cursorPos);
      const valueAfterCursor = inputValue.slice(cursorPos + 1);
      TextHolder.value = valueBeforeCursor + valueAfterCursor;
      TextHolder.setSelectionRange(cursorPos, cursorPos);
    }
  }
  function caps(Kb,Kbs) {
    console.log(Kb);
    if (Kb == 0) Kbs(2);
    if (Kb == 1) Kbs(3);
    if (Kb == 2) Kbs(0);
    if (Kb == 3) Kbs(1);
  }
  function enter() {
    insert("\n");
  }
  function shift(Kb, Kbs) {
    console.log(Kb);
    if (Kb == 0) Kbs(1);
    if (Kb == 1) Kbs(0);
    if (Kb == 2) Kbs(3);
    if (Kb == 3) Kbs(2);
  }

  function ctrl() {

  }
  function meta(Kb, Kbs, Kbc) {
    Kbc()
  }
  function alt() {

  }
  function arrowUp() {
    const cursorPos = TextHolder.selectionStart;
    const currentLineStartPosition = TextHolder.value.lastIndexOf('\n', cursorPos - 1);
    const previousLineStartPosition = TextHolder.value.lastIndexOf('\n', currentLineStartPosition - 1);
    const newCursorPos = Math.min(currentLineStartPosition, previousLineStartPosition + cursorPos - currentLineStartPosition);
    TextHolder.setSelectionRange(newCursorPos, newCursorPos);
  }
  function arrowDown() {
    const cursorPos = TextHolder.selectionStart;
    const currentLineStartPosition = TextHolder.value.lastIndexOf('\n', cursorPos - 1);
    const currentLineEndPosition = TextHolder.value.indexOf('\n', cursorPos);
    const nextLineStartPosition = currentLineEndPosition + 1;
    const nextLineEndPosition = TextHolder.value.indexOf('\n', nextLineStartPosition) != -1 ? TextHolder.value.indexOf('\n', nextLineStartPosition) : TextHolder.value.length;
    const newCursorPos = Math.min(nextLineEndPosition, nextLineStartPosition + cursorPos - currentLineStartPosition - 1);
    TextHolder.setSelectionRange(newCursorPos, newCursorPos);
  }
  function arrowLeft() {
    const cursorPos = TextHolder.selectionStart;
    TextHolder.setSelectionRange(cursorPos - 1, cursorPos - 1);
  }
  function arrowRight() {
    const cursorPos = TextHolder.selectionStart;
    TextHolder.setSelectionRange(cursorPos + 1, cursorPos + 1);
  }

  const KeysNum = [
    ["~", "`", "6%", "Backquote", undefined, 0 , "Ё","ё"],
    ["!", "1", "6%", "Digit1", undefined, 1],
    ["@", "2", "6%", "Digit2", undefined, 1],
    ["#", "3", "6%", "Digit3", undefined, 1],
    ["$", "4", "6%", "Digit4", undefined, 1],
    ["%", "5", "6%", "Digit5", undefined, 1],
    ["^", "6", "6%", "Digit6", undefined, 1],
    ["&", "7", "6%", "Digit7", undefined, 1],
    ["*", "8", "6%", "Digit8", undefined, 1],
    ["(", "9", "6%", "Digit9", undefined, 1],
    [")", "0", "6%", "Digit0", undefined, 1],
    ["_", "-", "6%", "Minus", undefined, 1],
    ["+", "=", "6%", "Equal", undefined, 1],
    ["Backspace", "Backspace", "12%", "Backspace", backspace, 0],
    ["Tab", "Tab", "6%", "Tab", tab, 0],
    ["Q", "q", "6%", "KeyQ", undefined, 0,"Й","й"],
    ["W", "w", "6%", "KeyW", undefined, 0,"Ц","ц"],
    ["E", "e", "6%", "KeyE", undefined, 0,"У","у"],
    ["R", "r", "6%", "KeyR", undefined, 0,"К","к"],
    ["T", "t", "6%", "KeyT", undefined, 0,"Е","е"],
    ["Y", "y", "6%", "KeyY", undefined, 0,"Н","н"],
    ["U", "u", "6%", "KeyU", undefined, 0,"Г","г"],
    ["I", "i", "6%", "KeyI", undefined, 0,"Ш","ш"],
    ["O", "o", "6%", "KeyO", undefined, 0,"Щ","щ"],
    ["P", "p", "6%", "KeyP", undefined, 0,"З","з"],
    ["{", "[", "6%", "BracketLeft", undefined, 0,"Х","х"],
    ["}", "]", "6%", "BracketRight", undefined, 0,"Ъ","ъ"],
    ["/", "\\", "6%", "Backslash", undefined, 1],
    ["DEL", "DEL", "6%", "Delete", del, 0],
    ["Caps Lock", "Caps Lock", "12%", "CapsLock", caps, 0],
    ["A", "a", "6%", "KeyA", undefined, 0, "Ф", "ф"],
    ["S", "s", "6%", "KeyS", undefined, 0, "Ы", "ы"],
    ["D", "d", "6%", "KeyD", undefined, 0, "В", "в"],
    ["F", "f", "6%", "KeyF", undefined, 0, "А", "а"],
    ["G", "g", "6%", "KeyG", undefined, 0, "П", "п"],
    ["H", "h", "6%", "KeyH", undefined, 0, "Р", "р"],
    ["J", "j", "6%", "KeyJ", undefined, 0, "О", "о"],
    ["K", "k", "6%", "KeyK", undefined, 0, "Л", "л"],
    ["L", "l", "6%", "KeyL", undefined, 0, "Д", "д"],
    [":", ";", "6%", "Semicolon", undefined, 0, "Ж", "ж"],
    ["\"", "'", "6%", "Quote", undefined, 0, "Э", "э"],
    ["Enter", "Enter", "12%", "Enter", enter, 0],
    ["Shift", "Shift", "12%", "ShiftLeft", shift, 0],
    ["|", "\\", "6%", "IntlBackslash", undefined, 1],
    ["Z", "z", "6%", "KeyZ", undefined, 0,"Я","я"],
    ["X", "x", "6%", "KeyX", undefined, 0,"Ч","ч"],
    ["C", "c", "6%", "KeyC", undefined, 0,"С","с"],
    ["V", "v", "6%", "KeyV", undefined, 0,"М","м"],
    ["B", "b", "6%", "KeyB", undefined, 0,"И","и"],
    ["N", "n", "6%", "KeyN", undefined, 0,"Т","т"],
    ["M", "m", "6%", "KeyM", undefined, 0,"Ь","ь"],
    ["<", ",", "6%", "Comma", undefined, 0,"Б","б"],
    [">", ".", "6%", "Period", undefined, 0,"Ю","ю"],
    ["?", "/", "6%", "Slash", undefined, 1,",","."],
    ["↑", "↑", "6%", "ArrowUp", arrowUp, 0],
    ["Shift", "Shift", "6%", "ShiftRight", shift, 0],
    ["Ctrl", "Ctrl", "9%", "ControlLeft", ctrl, 0],
    ["Win", "Win", "6%", "MetaLeft", meta, 0],
    ["Alt", "Alt", "6%", "AltLeft", alt, 0],
    [" ", " ", "40%", "Space", undefined, 0],
    ["Alt", "Alt", "6%", "AltRight", alt, 0],
    ["Ctrl", "Ctrl", "9%", "ControlRight", ctrl, 0],
    ["←", "←", "6%", "ArrowLeft", arrowLeft, 0],
    ["↓", "↓", "6%", "ArrowDown", arrowDown, 0],
    ["→", "→", "6%", "ArrowRight", arrowRight, 0],
  ];

  return KeysNum;
}