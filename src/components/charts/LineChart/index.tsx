import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import { dataLine } from '../constants';

export const LineChart: React.FC = function () {
  return (
    <ResponsiveLine
      data={dataLine}
      margin={{ left: 200, right: 200, top: 200, bottom: 200 }}
      theme={{
        textColor: '#fff',
        fontSize: 16,
        tooltip: {
          container: {
            backgroundColor: '#000',
            fontFamily: 'Arial',
            borderRadius: 5,
          },
        },
      }}
      pointSize={14}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
      }}
      isInteractive
      enableSlices="x"
    />
  );
};
