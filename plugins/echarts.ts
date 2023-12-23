import { use, registerMap } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, PieChart,ScatterChart, EffectScatterChart } from 'echarts/charts';

import { GridComponent,GeoComponent, LegendComponent,TitleComponent, TooltipComponent,
   } from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import VChart, { THEME_KEY } from 'vue-echarts';
import china from "~/utils/china.json"
/**
 * 按需注册 ECharts 组件
 */
export default defineNuxtPlugin((nuxtAPP) => {
  const { vueApp } = nuxtAPP;
  vueApp.component('VChart', VChart);
  vueApp.provide(THEME_KEY, 'light');
  use([
    ScatterChart,
    EffectScatterChart,
    GeoComponent,
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    LineChart,
    UniversalTransition,
    LabelLayout,
  ]);
  //@ts-ignore
  registerMap('china', china);
});
