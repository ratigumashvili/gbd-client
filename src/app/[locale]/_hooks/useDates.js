export default function useDates() {
  const today = new Date();
  const endDate = today.toISOString().slice(0, 10);

  const startDate = new Date(today);
  startDate.setFullYear(today.getFullYear() - 2);
  const formattedStartDate = startDate.toISOString().slice(0, 10);

  return { formattedStartDate, endDate };
}

