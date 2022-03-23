export const RADAR_CHART_SIZE = 300;
export const RADAR_CHART_RADIUS = RADAR_CHART_SIZE / 2;
export const RADAR_CHART_CIRCLE_RADIANS = 2 * Math.PI;
export const RADAR_CHART_LABELS_GAP = 8;
export const RADAR_CHART_LABEL_TEXT_HEIGHT = 12;
export const RADAR_CHART_LABEL_TEXT_WIDTH = 32;

export function getRadialX(radius: number, angle: number) {
  return radius * Math.sin(angle);
}

export function getRadialY(radius: number, angle: number) {
  return -radius * Math.cos(angle);
}

export function calcAngle(index: number, count: number): number {
  return (index * RADAR_CHART_CIRCLE_RADIANS) / count;
}
