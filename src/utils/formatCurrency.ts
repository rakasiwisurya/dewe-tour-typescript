export const formatCurrency = (currency: number) => {
  return `IDR. ${new Intl.NumberFormat().format(currency)}`;
};
