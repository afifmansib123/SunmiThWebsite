export function dateFormat(date: string) {
  const inputDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = inputDate.toLocaleDateString("en-US", options);

  return formattedDate;
}
