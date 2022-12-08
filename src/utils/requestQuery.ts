export const requestQuery = (data: any): string => {
  if (data) {
    return `?${Object.keys(data)
      .map((key) => `${key}=${data[key]}`)
      .join("&")}`;
  }

  return "";
};
