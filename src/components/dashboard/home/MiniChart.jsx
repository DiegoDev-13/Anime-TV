import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  { views: 0 }, { views: 0 }, { views: 0 }, { views: 0 }, { views: 100 }
];

export const MiniChart = ({dataStats}) => (
  <div className="h-23 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={dataStats}>
        <Bar dataKey="total_vistas" fill="#7f13ec" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);