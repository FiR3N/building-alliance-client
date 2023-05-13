export function rusToLatin(text: string): string {
  const newStr = text.replace(/[ъь]/g, "");
  const map: { [key: string]: string } = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  return newStr
    .toLowerCase()
    .replace(/[^a-zA-Zа-яА-Я0-9]/g, " ")
    .replace(/ +/g, "-")
    .split("")
    .map((char) => (map[char] ? map[char] : char))
    .join("");
}
