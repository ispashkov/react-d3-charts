import { RadarChartCategory, RadarChartDataSeries } from './radar.types';

export const RadarChartMockPalette = [
  '#bfe1ff',
  '#a8d4ff',
  '#7abcff',
  '#4da0ff',
  '#0088ff',
  '#0075db',
  '#005aaa',
  '#003c70',
];

export const RadarChartMockCategories: RadarChartCategory<{
  slug: string;
  isToFocus: boolean;
}>[] = [
  {
    slug: '1',
    data: { slug: 'fighting', isToFocus: true },
    value: 10,
    prevValue: 5,
    name: '00:00',
  },
  {
    slug: '2',
    data: { slug: 'farming', isToFocus: false },
    value: 20,
    prevValue: 25,
    name: '01:00',
  },
  {
    slug: '3',
    data: { slug: 'vision', isToFocus: false },
    value: 30,
    prevValue: 25,
    name: '02:00',
  },
  {
    slug: '4',
    data: { slug: 'aggression', isToFocus: false },
    value: 40,
    prevValue: 45,
    name: '03:00',
  },
  {
    slug: '5',
    data: { slug: 'survivability', isToFocus: false },
    value: 50,
    prevValue: 45,
    name: '04:00',
  },
  {
    slug: '6',
    data: { slug: 'objectives', isToFocus: false },
    value: 60,
    prevValue: 65,
    name: '05:00',
  },
  {
    slug: '7',
    data: { slug: 'consistency', isToFocus: false },
    value: 70,
    prevValue: 65,
    name: '06:00',
  },
  {
    slug: '8',
    data: { slug: 'versatility', isToFocus: false },
    value: 80,
    prevValue: 85,
    name: '07:00',
  },
  {
    slug: '24',
    data: { slug: 'versatility', isToFocus: false },
    value: 90,
    prevValue: 85,
    name: '09:00',
  },
  {
    slug: '9',
    data: { slug: 'versatility', isToFocus: false },
    value: 90,
    prevValue: 85,
    name: '09:00',
  },
  {
    slug: '10',
    data: { slug: 'versatility', isToFocus: false },
    value: 100,
    prevValue: 85,
    name: '10:00',
  },
  {
    slug: '11',
    data: { slug: 'versatility', isToFocus: false },
    value: 110,
    prevValue: 85,
    name: '11:00',
  },
  {
    slug: '12',
    data: { slug: 'versatility', isToFocus: false },
    value: 120,
    prevValue: 85,
    name: '12:00',
  },
  {
    slug: '13',
    data: { slug: 'versatility', isToFocus: false },
    value: 120,
    prevValue: 85,
    name: '13:00',
  },
  {
    slug: '14',
    data: { slug: 'versatility', isToFocus: false },
    value: 120,
    prevValue: 85,
    name: '14:00',
  },
  {
    slug: '15',
    data: { slug: 'versatility', isToFocus: false },
    value: 120,
    prevValue: 85,
    name: '15:00',
  },
  {
    slug: '16',
    data: { slug: 'versatility', isToFocus: false },
    value: 130,
    prevValue: 85,
    name: '16:00',
  },
  {
    slug: '17',
    data: { slug: 'versatility', isToFocus: false },
    value: 120,
    prevValue: 85,
    name: '17:00',
  },
  {
    slug: '18',
    data: { slug: 'versatility', isToFocus: false },
    value: 120,
    prevValue: 85,
    name: '18:00',
  },
  {
    slug: '19',
    data: { slug: 'versatility', isToFocus: false },
    value: 140,
    prevValue: 85,
    name: '19:00',
  },
  {
    slug: '20',
    data: { slug: 'versatility', isToFocus: false },
    value: 120,
    prevValue: 85,
    name: '20:00',
  },
  {
    slug: '21',
    data: { slug: 'versatility', isToFocus: false },
    value: 120,
    prevValue: 85,
    name: '21:00',
  },
  {
    slug: '22',
    data: { slug: 'versatility', isToFocus: false },
    value: 120,
    prevValue: 85,
    name: '22:00',
  },
  {
    slug: '23',
    data: { slug: 'versatility', isToFocus: false },
    value: 150,
    prevValue: 85,
    name: '23:00',
  },
];

export const RadarChartMockPoints1: RadarChartDataSeries[] = [
  {
    slug: 'test',
    color: 'blue',
    points: {
      '1': 10,
      '2': 20,
      '3': 30,
      '4': 40,
      '5': 50,
      '6': 60,
      '7': 70,
      '8': 80,
    },
  },
];

export const RadarChartMockPoints2: RadarChartDataSeries[] = [
  {
    slug: 'test',
    color: 'blue',
    points: {
      '1': 5,
      '2': 10,
      '3': 15,
      '4': 20,
      '5': 25,
      '6': 30,
      '7': 35,
      '8': 40,
      '9': 45,
      '10': 50,
    },
  },
  {
    slug: 'test2',
    color: 'red',
    points: {
      '1': 10,
      '2': 20,
      '3': 30,
      '4': 40,
      '5': 50,
      '6': 60,
      '7': 70,
      '8': 80,
      '9': 90,
      '10': 100,
    },
  },
];

export const RadarChartMockPoints3: RadarChartDataSeries[] = [
  {
    slug: 'test',
    color: 'blue',
    points: {
      '1': 100,
      '2': 100,
      '3': 100,
      '4': 100,
      '5': 100,
      '6': 100,
      '7': 100,
    },
  },
];
