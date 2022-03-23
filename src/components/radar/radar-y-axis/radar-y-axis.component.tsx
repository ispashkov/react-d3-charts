import * as React from 'react';
import { scaleLinear } from 'd3-scale';

import { RadarCategoryData, RadarChartCategory } from '../radar.types';
import {
  RADAR_CHART_LABELS_GAP,
  RADAR_CHART_LABEL_TEXT_WIDTH,
  RADAR_CHART_RADIUS,
} from '../radar.utils';
import { RadarChartMockPalette } from '../radar.mock';

interface Props<Data extends RadarCategoryData, ValueKey extends string> {
  categories: RadarChartCategory<Data, ValueKey>[];
  radarRadius: number;
}

export const RadarYAxis = <
  Data extends RadarCategoryData,
  ValueKey extends string
>(
  props: Props<Data, ValueKey>
) => {
  const { radarRadius, categories } = props;

  const values = categories.map((it) => it.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  const getY = scaleLinear()
    .domain([minValue, maxValue])
    .range([radarRadius, RADAR_CHART_LABELS_GAP * 2]);
  const ticks = getY.ticks(RadarChartMockPalette.length);

  return (
    <g
      name="y-axis"
      transform={`translate(${0},${
        -RADAR_CHART_RADIUS - RADAR_CHART_LABELS_GAP * 1.75
      })`}
    >
      {ticks.map((tick: number) => {
        return (
          <text
            key={tick}
            x={0}
            y={getY(tick)}
            width={RADAR_CHART_LABEL_TEXT_WIDTH}
            fill="#fff"
            fontSize="10"
            textAnchor="middle"
          >
            {tick}
          </text>
        );
      })}
    </g>
  );
};
