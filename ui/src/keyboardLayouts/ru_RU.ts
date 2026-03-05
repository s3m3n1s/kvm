import { KeyboardLayout, KeyCombo } from "../keyboardLayouts";
import { en_US } from "./en_US";

const name = "Russian";
const isoCode = "ru-RU";

// Standard Russian (ЙЦУКЕН) layout for Windows/Linux
export const chars = {
  ...en_US.chars,

  // Lowercase
  й: { key: "KeyQ" },
  ц: { key: "KeyW" },
  у: { key: "KeyE" },
  к: { key: "KeyR" },
  е: { key: "KeyT" },
  н: { key: "KeyY" },
  г: { key: "KeyU" },
  ш: { key: "KeyI" },
  щ: { key: "KeyO" },
  з: { key: "KeyP" },
  х: { key: "BracketLeft" },
  ъ: { key: "BracketRight" },

  ф: { key: "KeyA" },
  ы: { key: "KeyS" },
  в: { key: "KeyD" },
  а: { key: "KeyF" },
  п: { key: "KeyG" },
  р: { key: "KeyH" },
  о: { key: "KeyJ" },
  л: { key: "KeyK" },
  д: { key: "KeyL" },
  ж: { key: "Semicolon" },
  э: { key: "Quote" },

  я: { key: "KeyZ" },
  ч: { key: "KeyX" },
  с: { key: "KeyC" },
  м: { key: "KeyV" },
  и: { key: "KeyB" },
  т: { key: "KeyN" },
  ь: { key: "KeyM" },
  б: { key: "Comma" },
  ю: { key: "Period" },
  ".": { key: "Slash" },

  // Uppercase
  Й: { key: "KeyQ", shift: true },
  Ц: { key: "KeyW", shift: true },
  У: { key: "KeyE", shift: true },
  К: { key: "KeyR", shift: true },
  Е: { key: "KeyT", shift: true },
  Н: { key: "KeyY", shift: true },
  Г: { key: "KeyU", shift: true },
  Ш: { key: "KeyI", shift: true },
  Щ: { key: "KeyO", shift: true },
  З: { key: "KeyP", shift: true },
  Х: { key: "BracketLeft", shift: true },
  Ъ: { key: "BracketRight", shift: true },

  Ф: { key: "KeyA", shift: true },
  Ы: { key: "KeyS", shift: true },
  В: { key: "KeyD", shift: true },
  А: { key: "KeyF", shift: true },
  П: { key: "KeyG", shift: true },
  Р: { key: "KeyH", shift: true },
  О: { key: "KeyJ", shift: true },
  Л: { key: "KeyK", shift: true },
  Д: { key: "KeyL", shift: true },
  Ж: { key: "Semicolon", shift: true },
  Э: { key: "Quote", shift: true },

  Я: { key: "KeyZ", shift: true },
  Ч: { key: "KeyX", shift: true },
  С: { key: "KeyC", shift: true },
  М: { key: "KeyV", shift: true },
  И: { key: "KeyB", shift: true },
  Т: { key: "KeyN", shift: true },
  Ь: { key: "KeyM", shift: true },
  Б: { key: "Comma", shift: true },
  Ю: { key: "Period", shift: true },
  ",": { key: "Slash", shift: true },

  // Russian-specific symbols
  ё: { key: "Backquote" },
  Ё: { key: "Backquote", shift: true },
} as Record<string, KeyCombo>;

export const keyDisplayMap: Record<string, string> = {
  ...en_US.keyDisplayMap,

  KeyQ: "й",
  KeyW: "ц",
  KeyE: "у",
  KeyR: "к",
  KeyT: "е",
  KeyY: "н",
  KeyU: "г",
  KeyI: "ш",
  KeyO: "щ",
  KeyP: "з",
  BracketLeft: "х",
  BracketRight: "ъ",

  KeyA: "ф",
  KeyS: "ы",
  KeyD: "в",
  KeyF: "а",
  KeyG: "п",
  KeyH: "р",
  KeyJ: "о",
  KeyK: "л",
  KeyL: "д",
  Semicolon: "ж",
  Quote: "э",

  KeyZ: "я",
  KeyX: "ч",
  KeyC: "с",
  KeyV: "м",
  KeyB: "и",
  KeyN: "т",
  KeyM: "ь",
  Comma: "б",
  Period: "ю",
  Slash: ".",

  Backquote: "ё",

  "(KeyQ)": "Й",
  "(KeyW)": "Ц",
  "(KeyE)": "У",
  "(KeyR)": "К",
  "(KeyT)": "Е",
  "(KeyY)": "Н",
  "(KeyU)": "Г",
  "(KeyI)": "Ш",
  "(KeyO)": "Щ",
  "(KeyP)": "З",
  "(BracketLeft)": "Х",
  "(BracketRight)": "Ъ",

  "(KeyA)": "Ф",
  "(KeyS)": "Ы",
  "(KeyD)": "В",
  "(KeyF)": "А",
  "(KeyG)": "П",
  "(KeyH)": "Р",
  "(KeyJ)": "О",
  "(KeyK)": "Л",
  "(KeyL)": "Д",
  "(Semicolon)": "Ж",
  "(Quote)": "Э",

  "(KeyZ)": "Я",
  "(KeyX)": "Ч",
  "(KeyC)": "С",
  "(KeyV)": "М",
  "(KeyB)": "И",
  "(KeyN)": "Т",
  "(KeyM)": "Ь",
  "(Comma)": "Б",
  "(Period)": "Ю",
  "(Slash)": ",",

  "(Backquote)": "Ё",
};

export const virtualKeyboard = en_US.virtualKeyboard;

export const ru_RU: KeyboardLayout = {
  isoCode,
  name,
  chars,
  keyDisplayMap,
  modifierDisplayMap: en_US.modifierDisplayMap,
  virtualKeyboard,
};
