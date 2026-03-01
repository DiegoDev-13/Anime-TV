import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  { views: 400 }, { views: 300 }, { views: 500 }, { views: 200 }, { views: 900 }
];

export const MiniChart = () => (
  <div className="h-23 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <Bar dataKey="views" fill="#7f13ec" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);