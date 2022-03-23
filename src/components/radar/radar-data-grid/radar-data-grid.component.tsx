import * as React from 'react';
import { RadarCategoryData, RadarChartCategory } from '../radar.types';

interface Props<Data extends RadarCategoryData> {
  levels: string[];
  radarRadius: number;
  categories: RadarChartCategory<Data>[];
}

function getLevelRadius(
  levelIndex: number,
  levelsCount: number,
  radarRadius: number
) {
  return radarRadius * ((levelsCount - levelIndex) / levelsCount);
}

export const RadarDataGrid = <Data extends RadarCategoryData>(
  props: Props<Data>
) => {
  const { levels, radarRadius } = props;
  const levelsCount = levels.length;

  return (
    <g name="data-grid">
      {levels.map((color, levelIndex) => {
        const radius = getLevelRadius(levelIndex, levelsCount, radarRadius);

        return (
          <circle
            key={levelIndex}
            cx={0}
            cy={0}
            r={radius}
            strokeWidth="0.7px"
            stroke="#fff"
            fill={color}
          />
        );
      })}
    </g>
  );
};
