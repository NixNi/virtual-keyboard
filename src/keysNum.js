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
  function meta() {

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
    ["~", "`", "6%", "Backquote", undefined, 0],
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
    ["Q", "q", "6%", "KeyQ", undefined, 0],
    ["W", "w", "6%", "KeyW", undefined, 0],
    ["E", "e", "6%", "KeyE", undefined, 0],
    ["R", "r", "6%", "KeyR", undefined, 0],
    ["T", "t", "6%", "KeyT", undefined, 0],
    ["Y", "y", "6%", "KeyY", undefined, 0],
    ["U", "u", "6%", "KeyU", undefined, 0],
    ["I", "i", "6%", "KeyI", undefined, 0],
    ["O", "o", "6%", "KeyO", undefined, 0],
    ["P", "p", "6%", "KeyP", undefined, 0],
    ["{", "[", "6%", "BracketLeft", undefined, 0],
    ["}", "]", "6%", "BracketRight", undefined, 0],
    ["/", "\\", "6%", "Backslash", undefined, 0],
    ["DEL", "DEL", "6%", "Delete", del, 0],
    ["Caps Lock", "Caps Lock", "12%", "CapsLock", caps, 0],
    ["A", "a", "6%", "KeyA", undefined, 0],
    ["S", "s", "6%", "KeyS", undefined, 0],
    ["D", "d", "6%", "KeyD", undefined, 0],
    ["F", "f", "6%", "KeyF", undefined, 0],
    ["G", "g", "6%", "KeyG", undefined, 0],
    ["H", "h", "6%", "KeyH", undefined, 0],
    ["J", "j", "6%", "KeyJ", undefined, 0],
    ["K", "k", "6%", "KeyK", undefined, 0],
    ["L", "l", "6%", "KeyL", undefined, 0],
    [":", ";", "6%", "Semicolon", undefined, 0],
    ["\"", "'", "6%", "Quote", undefined, 0],
    ["Enter", "Enter", "12%", "Enter", enter, 0],
    ["Shift", "Shift", "12%", "ShiftLeft", shift, 0],
    ["|", "\\", "6%", "IntlBackslash", undefined, 0],
    ["Z", "z", "6%", "KeyZ", undefined, 0],
    ["X", "x", "6%", "KeyX", undefined, 0],
    ["C", "c", "6%", "KeyC", undefined, 0],
    ["V", "v", "6%", "KeyV", undefined, 0],
    ["B", "b", "6%", "KeyB", undefined, 0],
    ["N", "n", "6%", "KeyN", undefined, 0],
    ["M", "m", "6%", "KeyM", undefined, 0],
    ["<", ",", "6%", "Comma", undefined, 0],
    [">", ".", "6%", "Period", undefined, 0],
    ["?", "/", "6%", "Slash", undefined, 0],
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