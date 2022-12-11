export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(newDate);
};
