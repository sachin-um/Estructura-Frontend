import { ResponsivePie } from '@nivo/pie';

import { mockPieData as data } from '../../data/mockData';
import { tokens } from '../../theme';

const PieChart = () => {
  const colors = tokens;
  return (
    <ResponsivePie
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      defs={[
        {
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          id: 'dots',
          padding: 1,
          size: 4,
          stagger: true,
          type: 'patternDots',
        },
        {
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          id: 'lines',
          lineWidth: 6,
          rotation: -45,
          spacing: 10,
          type: 'patternLines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
          itemDirection: 'left-to-right',
          itemHeight: 18,
          itemOpacity: 1,
          itemTextColor: '#999',
          itemWidth: 100,
          itemsSpacing: 0,
          justify: false,
          symbolShape: 'circle',
          symbolSize: 18,
          translateX: 0,
          translateY: 56,
        },
      ]}
      theme={{
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
      activeOuterRadiusOffset={8}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      cornerRadius={3}
      data={data}
      enableArcLabels={false}
      innerRadius={0.5}
      margin={{ bottom: 80, left: 80, right: 80, top: 40 }}
      padAngle={0.7}
    />
  );
};

export default PieChart;
