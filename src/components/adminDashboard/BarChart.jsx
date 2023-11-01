import { ResponsiveBar } from '@nivo/bar';

import { mockBarData as data } from '../../data/mockData';
import { tokens } from '../../theme';

const BarChart = ({ isDashboard = false }) => {
  const colors = tokens;

  return (
    <ResponsiveBar
      axisBottom={{
        legend: isDashboard ? undefined : 'country', // changed
        legendOffset: 32,
        legendPosition: 'middle',
        tickPadding: 5,
        tickRotation: 0,
        tickSize: 5,
      }}
      axisLeft={{
        legend: isDashboard ? undefined : 'food', // changed
        legendOffset: -40,
        legendPosition: 'middle',
        tickPadding: 5,
        tickRotation: 0,
        tickSize: 5,
      }}
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
      }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', '1.6']],
      }}
      defs={[
        {
          background: 'inherit',
          color: '#38bcb2',
          id: 'dots',
          padding: 1,
          size: 4,
          stagger: true,
          type: 'patternDots',
        },
        {
          background: 'inherit',
          color: '#eed312',
          id: 'lines',
          lineWidth: 6,
          rotation: -45,
          spacing: 10,
          type: 'patternLines',
        },
      ]}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          anchor: 'bottom-right',
          dataFrom: 'keys',
          direction: 'column',
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
          itemDirection: 'left-to-right',
          itemHeight: 20,
          itemOpacity: 0.85,
          itemWidth: 100,
          itemsSpacing: 2,
          justify: false,
          symbolSize: 20,
          translateX: 120,
          translateY: 0,
        },
      ]}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      axisRight={null}
      axisTop={null}
      colors={{ scheme: 'nivo' }}
      data={data}
      enableLabel={false}
      indexBy="country"
      indexScale={{ round: true, type: 'band' }}
      keys={['customers', 'Service Providers']}
      labelSkipHeight={12}
      labelSkipWidth={12}
      margin={{ bottom: 50, left: 60, right: 130, top: 50 }}
      padding={0.3}
      role="application"
      valueScale={{ type: 'linear' }}
    />
  );
};

export default BarChart;
