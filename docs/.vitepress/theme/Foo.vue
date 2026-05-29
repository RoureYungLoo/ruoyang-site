<template>
  <!-- 跑马灯外层容器 -->
  <el-card class="marquee-card" shadow="hover">
    <div class="marquee-container">
      <!-- 滚动内容层 -->
      <div class="marquee-content">
        <!-- 这里放你的跑马灯文字/内容 -->
        <span class="marquee-item">
          欢迎使用 Element Plus 跑马灯效果 🎉
        </span>
        <span class="marquee-item">
          支持无缝滚动 | 自定义速度 | 自定义样式 ✨
        </span>
        <span class="marquee-item">
          可用于公告、通知、头条提示 💬
        </span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
// 无需额外 JS，纯 CSS 动画实现
</script>

<style scoped>
/* 跑马灯卡片样式 */
.marquee-card {
  width: 100%;
  margin: 20px 0;
  background-color: #fdf6e3;
  border-color: #fbc78e;
}

/* 跑马灯容器：隐藏溢出 */
.marquee-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

/* 跑马灯内容：执行动画 */
.marquee-content {
  display: inline-block;
  /* 动画：名称 时长 线性 无限循环 */
  animation: marquee 20s linear infinite;
}

/* 单个内容项间距 */
.marquee-item {
  margin-right: 100px;
  font-size: 14px;
  color: #d48806;
}

/* 关键帧：从右向左滚动 */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>