import { Sparklines, SparklinesLine } from 'react-sparklines';

import './Chart.scss';

export function Chart({ data, color, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <Sparklines data={data} limit={200} margin={5} >
        <SparklinesLine color={color} style={{ fill: "none",  strokeWidth: 0.3 }} />
      </Sparklines>
    </div>
  );
}
