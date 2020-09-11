const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function showDate() {
  const now = new Date();
  const day = now.getDate();
  const month = months[now.getMonth()];
  return `${String(day).padStart(2, "0")} ${month}`;
}
