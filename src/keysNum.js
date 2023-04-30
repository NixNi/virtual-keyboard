export default function KeysNumInit(TextHolder) {
  function backspace() {
    TextHolder.value = TextHolder.value.slice(0, -1);
  }
  function tab(){
    TextHolder.value += "\t";
  }
  function del() {
    
  }
  function caps() {

  }
  function enter() {
    TextHolder.value += "\n";
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
  ];

  return KeysNum;
}