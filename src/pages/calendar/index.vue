<template>
  <div>
    <el-calendar :range="['2019-03-03', '2019-03-09']" first-day-of-week="7">
    </el-calendar>
    <Schedule />
  </div>
</template>

<script>
import Schedule from "@/pages/schedule";

export default {
  name: "Calendar",
  components: { Schedule },
};
</script>

<style>
</style>