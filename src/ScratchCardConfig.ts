export enum SCRATCH_TYPE {
  BRUSH,
  SPRAY,
  CIRCLE,
  LINE
}

export interface SC_CONFIG {
  scratchType: SCRATCH_TYPE,
  containerWidth: number,
  containerHeight: number,
  imageForwardSrc: string,
  imageBackgroundSrc: string,
  imageBackgroundClippingPath?: Path2D,
  htmlBackground: string,
  clearZoneRadius: number,
  nPoints: number,
  pointSize: number,
  percentToFinish: number
  callback ?: () => void,
  brushSrc: string,
  enabledPercentUpdate: boolean
}
