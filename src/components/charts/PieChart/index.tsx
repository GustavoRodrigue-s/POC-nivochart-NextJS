import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import { dataPie } from '../constants';

export const PieChart: React.FC = function () {
  return (
    <ResponsivePie
      data={dataPie}
      margin={{ left: 200, right: 200, top: 200, bottom: 200 }}
      theme={{
        fontSize: 16,
        tooltip: {
          container: {
            backgroundColor: '#000',
            borderRadius: 5,
            fontFamily: 'Arial',
          },
        },
      }}
      innerRadius={0.5}
      arcLabelsTextColor="#000"
      arcLinkLabelsTextColor="#fff"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      activeOuterRadiusOffset={10}
      cornerRadius={5}
      padAngle={1}
      borderWidth={3}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'php',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          itemWidth: 100,
          itemHeight: 18,
          translateY: 86,
          itemTextColor: '#999',
          symbolShape: 'circle',
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#fff',
              },
            },
          ],
        },
      ]}
    />
  );
};
