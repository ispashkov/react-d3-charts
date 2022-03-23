import * as React from 'react';

import { RadarChartCategory, RadarCategoryData } from '../radar.types';
import {
  getRadialX,
  getRadialY,
  calcAngle,
  RADAR_CHART_LABELS_GAP,
  RADAR_CHART_LABEL_TEXT_HEIGHT,
} from '../radar.utils';

interface Props<Data extends RadarCategoryData, ValueKey extends string> {
  categories: RadarChartCategory<Data, ValueKey>[];
  labelHeight: number;
  labelWidth: number;
  radarRadius: number;
}

function getEdgeCoordinate(
  categoryIndex: number,
  categoriesCount: number,
  rx: number,
  ry: number
): [number, number] {
  const angle = calcAngle(categoryIndex, categoriesCount);
  return [getRadialX(rx, angle), getRadialY(ry, angle)];
}

export const RadarXAxis = <
  Data extends RadarCategoryData,
  ValueKey extends string
>(
  props: Props<Data, ValueKey>
) => {
  const { categories, labelHeight, labelWidth, radarRadius } = props;
  const categoriesCount = categories.length;

  return (
    <g name="x-axis" transform={`translate(0, 0)`}>
      {categories.map(
        (
          category: RadarChartCategory<Data, ValueKey>,
          categoryIndex: number
        ) => {
          const rX = radarRadius + labelWidth / 2 + RADAR_CHART_LABELS_GAP;
          const rY = radarRadius + labelHeight / 2 + RADAR_CHART_LABELS_GAP;
          const [x, y] = getEdgeCoordinate(
            categoryIndex,
            categoriesCount,
            rX,
            rY
          );

          return (
            <g
              key={category.slug}
              transform={`translate(${x - labelWidth / 2},${
                y - labelHeight / 2
              })`}
            >
              <text
                x={labelWidth / 2}
                y={RADAR_CHART_LABEL_TEXT_HEIGHT}
                fill="#000"
                fontSize="12"
                width={labelWidth}
                textAnchor="middle"
              >
                {category.name}
              </text>
            </g>
          );
        }
      )}
    </g>
  );
};
