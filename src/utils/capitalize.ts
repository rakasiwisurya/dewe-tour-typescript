export const capitalize = (text: string) => {
  return text.split(" ").map((word: string) => word[0].toUpperCase() + word.substring(1));
};
