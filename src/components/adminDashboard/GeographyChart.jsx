import { ResponsiveChoropleth } from '@nivo/geo';

import { mockGeographyData as data } from '../../data/mockData';
import { geoFeatures } from '../../data/mockGeoFeatures';
import { tokens } from '../../theme';

const GeographyChart = ({ isDashboard = false }) => {
  const colors = tokens;
  return (
    <ResponsiveChoropleth
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1,
                      itemTextColor: '#ffffff',
                    },
                  },
                ],
                itemDirection: 'left-to-right',
                itemHeight: 18,
                itemOpacity: 0.85,
                itemTextColor: colors.grey[100],
                itemWidth: 94,
                itemsSpacing: 0,
                justify: true,
                symbolSize: 18,
                translateX: 20,
                translateY: -100,
              },
            ]
          : undefined
      }
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
      borderColor="#ffffff"
      borderWidth={1.5}
      data={data}
      domain={[0, 1000000]}
      features={geoFeatures.features}
      label="properties.name"
      margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
      projectionRotation={[0, 0, 0]}
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      unknownColor="#666666"
      valueFormat=".2s"
    />
  );
};

export default GeographyChart;
