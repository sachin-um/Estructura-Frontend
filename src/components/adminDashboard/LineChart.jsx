import { ResponsiveLine } from '@nivo/line';

import { mockLineData as data } from '../../data/mockData';
import { tokens } from '../../theme';

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const colors = tokens;

  return (
    <ResponsiveLine
      axisBottom={{
        legend: isDashboard ? undefined : 'transportation', // added
        legendOffset: 36,
        legendPosition: 'middle',
        orient: 'bottom',
        tickPadding: 5,
        tickRotation: 0,
        tickSize: 0,
      }}
      axisLeft={{
        legend: isDashboard ? undefined : 'count', // added
        legendOffset: -40,
        legendPosition: 'middle',
        orient: 'left',
        tickPadding: 5,
        tickRotation: 0,
        tickSize: 3,
        tickValues: 5, // added
      }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
          itemDirection: 'left-to-right',
          itemHeight: 20,
          itemOpacity: 0.75,
          itemWidth: 80,
          itemsSpacing: 0,
          justify: false,
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          symbolShape: 'circle',
          symbolSize: 12,
          translateX: 100,
          translateY: 0,
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
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      yScale={{
        max: 'auto',
        min: 'auto',
        reverse: false,
        stacked: true,
        type: 'linear',
      }}
      axisRight={null}
      axisTop={null}
      colors={isDashboard ? { datum: 'color' } : { scheme: 'nivo' }} // added
      curve="catmullRom"
      data={data}
      enableGridX={false}
      enableGridY={false}
      margin={{ bottom: 50, left: 60, right: 110, top: 50 }}
      pointBorderColor={{ from: 'serieColor' }}
      pointBorderWidth={2}
      pointColor={{ theme: 'background' }}
      pointLabelYOffset={-12}
      pointSize={8}
      useMesh={true}
      xScale={{ type: 'point' }}
      yFormat=" >-.2f"
    />
  );
};

export default LineChart;
