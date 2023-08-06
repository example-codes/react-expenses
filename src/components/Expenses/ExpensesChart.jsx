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
  const mockProp = Array(3)
    .fill(null)
    .map((_) => items)
    .flat(Infinity)
    .map((item, i) => ({
      label: MONTHS[i],
      value: item.amount,
    }));

  return (
    <div>
      <Chart dataPoints={mockProp} />
    </div>
  );
};

export default ExpensesChart;
