import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { dataBar } from '../constants';

export const BarChar: React.FC = function () {
  return (
    <ResponsiveBar
      data={dataBar}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      margin={{ left: 200, right: 200, top: 200, bottom: 200 }}
      theme={{
        fontSize: 16,
        textColor: '#fff',
        tooltip: {
          container: {
            backgroundColor: '#000',
            fontFamily: 'Arial',
          },
        },
      }}
      maxValue="auto"
      minValue="auto"
      padding={0.5}
      labelSkipHeight={1}
      labelTextColor="#000"
      isInteractive
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          itemOpacity: 0.85,
          itemWidth: 100,
          itemHeight: 18,
          translateX: 120,
          itemsSpacing: 5,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
