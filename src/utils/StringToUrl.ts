export default function StringToUrl(str: string) {
  return str.toLowerCase().split(" ").join("-");
}
