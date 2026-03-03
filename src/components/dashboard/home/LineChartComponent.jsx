import { Line, LineChart } from 'recharts';

// #endregion
export const LineChartComponent = ({usersSingupsFiveMonths}) => {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '300px', maxHeight: '90px', aspectRatio: 1.618 }}
      responsive
      data={usersSingupsFiveMonths}
    >
      <Line type="monotone" dataKey="total_users" stroke="#7f13ec" strokeWidth={2} />
    </LineChart>
  );
}