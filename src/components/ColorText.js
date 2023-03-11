export default function ColorText({ text }) {
  if (!text) {
    return null;
  }
  const lenght = text.split(" ").length;
  const lastWord = text.substring(text.lastIndexOf(" ") + 1);
  const textWithoutLastWord = text.replace(lastWord, "");
  return (
    <>
      {textWithoutLastWord}
      {lenght > 1 ? <span>{lastWord}</span> : lastWord}
    </>
  );
}