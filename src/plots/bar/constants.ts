import { Plot } from '../../core/plot';
import { deepAssign } from '../../utils';

/**
 * 条形图默认配置项
 */
export const DEFAULT_OPTIONS = deepAssign({}, Plot.getDefaultOptions(), {
  barWidthRatio: 0.6,
  marginRatio: 1 / 32,
  tooltip: {
    shared: true,
    showMarkers: false,
    offset: 20,
  },
  legend: {
    radio: {},
  },
  interactions: [{ type: 'active-region' }],
});
