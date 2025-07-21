<template>
  <div class="homePage min-h-screen flex flex-col">
    <!-- 个人资料头部 -->
    <header ref="headerRef" class="w-full p-6 flex items-center justify-center">
      <div
        class="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 w-full max-w-md"
      >
        <!-- 头像 -->
        <div class="relative mr-4">
          <img
            src="@/assets/image/wxs.jpg"
            alt="Profile Avatar"
            class="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <!-- 个人信息 -->
        <div class="flex flex-col">
          <h1 class="text-[18px] font-bold text-[#111111]">Willis</h1>
          <p class="text-[#555555] text-sm">Front-end Developer</p>
          <div
            @click="openBlob"
            class="w-[120px] mt-[7px] flex items-center justify-center py-[4px] px-[4px] bg-[#f6f6f6] text-[#6D6D6D] text-[12px] text-center rounded-[20px]"
          >
            <p>BlogAddress</p>
          </div>
        </div>
      </div>
    </header>
    <div ref="projectTitleRef" class="flex items-center px-6 text-[19px]">
      <div class="bg-[#4d6bfd] w-[4px] h-[19px] mr-2"></div>
      <span>PROJECT EXPERIENCE</span>
    </div>
    <!-- 时间线 -->
    <div ref="timelineContainerRef" class="timeline-container p-6">
      <div
        v-for="(item, index) in timelineData"
        :key="index"
        class="relative pl-8 border-l-2 border-gray-300 mb-6"
        ref="timelineItems"
      >
        <div class="text-gray-500 text-sm mb-2 flex items-center">
          {{ item.date }}
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl">
          <p class="text-gray-900 font-bold">{{ item.title }}</p>
          <p class="text-gray-600 mt-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHome } from "./index.js";

const {
  openBlob,
  timelineData,
  headerRef,
  projectTitleRef,
  timelineContainerRef,
  timelineItems,
} = useHome();
</script>

<style scoped>
.iPbnzK {
  background-position: 50%;
  background-size: cover;
  height: 100dvh;
  position: absolute;
  z-index: -99;
  width: 100vw;
  background-image: url("@/assets/image/bg.jpg");
  filter: blur(8px);
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
