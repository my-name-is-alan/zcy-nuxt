<script setup>
import { registerMap } from "echarts/core";
import china from "~/utils/china.json"

registerMap('china', china);

import getData from "~/utils/map";

const map = shallowRef(null);
const option = shallowRef(getData());
</script>

<template>
  <div id="chart" class="w-full flex-1">
    <VChart class="w-full h-full" :option="option" ref="map" autoresize style="background-color: #404a59"></VChart>
  </div>
</template>
