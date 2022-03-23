import * as React from 'react';

export type RadarChartDataSeries<ValueKey extends string = string> = {
  slug: string;
  color: string;
  points: Record<ValueKey, number>;
};

export type RadarChartCategory<
  Data extends RadarCategoryData = RadarCategoryData,
  ValueKey extends string = string
> = {
  slug: ValueKey;
  data: Data;
  name: string;
  value: number;
  prevValue?: number;
};

export type RadarChartData<
  Data extends RadarCategoryData = RadarCategoryData,
  ValueKey extends string = string
> = {
  series: RadarChartDataSeries<ValueKey>[];
  categories: RadarChartCategory<Data, ValueKey>[];
};

export interface RadarCategoryData {}

export type TooltipFC<Data extends RadarCategoryData> = React.FC<{
  category: RadarChartCategory<Data>;
}>;
