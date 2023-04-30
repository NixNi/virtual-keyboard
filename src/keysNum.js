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
    insert("\t")
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
      const valueAfterCursor = inputValue.slice(cursorPos+1);
      TextHolder.value = valueBeforeCursor + valueAfterCursor;
      TextHolder.setSelectionRange(cursorPos, cursorPos);
    }
  }
  function caps() {

  }
  function enter() {
    insert("\n")
  }
  function shift() {
    
  }
  function arrowUp() {

  }


  const KeysNum = [
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
    ["Backspace", "Backspace", "12%", "Backspace", backspace],
    ["Tab", "Tab", "6%", "Tab", tab],
    ["Q", "q", "6%", "KeyQ", undefined],
    ["W", "w", "6%", "KeyW", undefined],
    ["E", "e", "6%", "KeyE", undefined],
    ["R", "r", "6%", "KeyR", undefined],
    ["T", "t", "6%", "KeyT", undefined],
    ["Y", "y", "6%", "KeyY", undefined],
    ["U", "u", "6%", "KeyU", undefined],
    ["I", "i", "6%", "KeyI", undefined],
    ["O", "o", "6%", "KeyO", undefined],
    ["P", "p", "6%", "KeyP", undefined],
    ["{", "[", "6%", "BracketLeft", undefined],
    ["}", "]", "6%", "BracketRight", undefined],
    ["/", "\\", "6%", "Backslash", undefined],
    ["DEL", "DEL", "6%", "Delete", del],
    ["Caps Lock", "Caps Lock", "12%", "CapsLock", caps],
    ["A", "a", "6%", "KeyA", undefined],
    ["S", "s", "6%", "KeyS", undefined],
    ["D", "d", "6%", "KeyD", undefined],
    ["F", "f", "6%", "KeyF", undefined],
    ["G", "g", "6%", "KeyG", undefined],
    ["H", "h", "6%", "KeyH", undefined],
    ["J", "j", "6%", "KeyJ", undefined],
    ["K", "k", "6%", "KeyK", undefined],
    ["L", "l", "6%", "KeyL", undefined],
    [":", ";", "6%", "Semicolon", undefined],
    ["\"", "'", "6%", "Quote", undefined],
    ["Enter", "Enter", "12%", "Enter", enter],
    ["Shift", "Shift", "12%", "ShiftLeft", shift],
    ["|", "\\", "6%", "IntlBackslash", undefined],
    ["Z", "z", "6%", "KeyZ", undefined],
    ["X", "x", "6%", "KeyX", undefined],
    ["C", "c", "6%", "KeyC", undefined],
    ["V", "v", "6%", "KeyV", undefined],
    ["B", "b", "6%", "KeyB", undefined],
    ["N", "n", "6%", "KeyN", undefined],
    ["M", "m", "6%", "KeyM", undefined],
    ["<", ",", "6%", "Comma", undefined],
    [">", ".", "6%", "Period", undefined],
    ["?", "/", "6%", "Slash", undefined],
    ["↑", "↑", "6%", "ArrowUp", arrowUp],
    ["Shift", "Shift", "6%", "ShiftRight", shift],
  ];

  return KeysNum;
}