export const getInitials = (str) => {
  const words = str.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase());
  return initials.join("");
};
