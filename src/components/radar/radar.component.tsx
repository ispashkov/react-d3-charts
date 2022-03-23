import * as React from 'react';
import styled from 'styled-components';
import {
  RADAR_CHART_LABEL_TEXT_WIDTH,
  RADAR_CHART_LABEL_TEXT_HEIGHT,
  RADAR_CHART_RADIUS,
  RADAR_CHART_SIZE,
} from './radar.utils';
import { RadarDataGrid } from './radar-data-grid/radar-data-grid.component';
import { RadarChartMockCategories, RadarChartMockPalette } from './radar.mock';
import { RadarYAxis } from './radar-y-axis/radar-y-axis.component';
import { RadarXAxis } from './radar-x-axis/radar-x-axis.component';

interface Props {
  className?: string;
}

export const Radar: React.FC<Props> = (props) => {
  const { className } = props;

  const radarRadius = RADAR_CHART_RADIUS;
  const categories = RadarChartMockCategories;
  const style = {
    padding: `${RADAR_CHART_LABEL_TEXT_WIDTH}px`,
  };

  return (
    <Svg
      className={className}
      viewBox={`0 0 ${RADAR_CHART_SIZE} ${RADAR_CHART_SIZE}`}
      style={style}
      overflow="visible"
    >
      <g transform={`translate(${RADAR_CHART_RADIUS},${RADAR_CHART_RADIUS})`}>
        <RadarDataGrid
          levels={RadarChartMockPalette}
          radarRadius={radarRadius}
          categories={categories}
        />
        <RadarYAxis radarRadius={radarRadius} categories={categories} />
        <RadarXAxis
          categories={categories}
          radarRadius={radarRadius}
          labelWidth={RADAR_CHART_LABEL_TEXT_WIDTH}
          labelHeight={RADAR_CHART_LABEL_TEXT_HEIGHT}
        />
      </g>
    </Svg>
  );
};

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;
