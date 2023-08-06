import Chart from "../Chart/Chart";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ExpensesChart = ({ items = [] }) => {
  const monthWiseTotal = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };

  items.forEach((item) => {
    const month = item.date.getMonth();
    monthWiseTotal[MONTHS[month]] += item.amount;
  });

  const monthWiseTotalArray = MONTHS.map((monthString) => ({
    label: monthString,
    value: monthWiseTotal[monthString],
  }));

  // TODO: do with .reduce, reason: forEach is a void kind of code, that shouldn't be sitting in a component directly

  return (
    <div>
      <Chart dataPoints={monthWiseTotalArray} />
    </div>
  );
};

export default ExpensesChart;
