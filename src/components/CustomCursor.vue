<template>
    <div
      v-show="!isMobile && isVisible"
      :class="['custom-cursor', { 'cursor-hover': isHovering }]"
      :style="{ top: `${y}px`, left: `${x}px` }"
    ></div>
  </template>
  
  <script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);
    const isHovering = ref(false);
    const isMobile = ref(false);
    const isVisible = ref(true);

    let idleTimeout;

    const updateCursor = (e) => {
      x.value = e.clientX;
      y.value = e.clientY;
      showCursor();
    };

    const showCursor = () => {
      isVisible.value = true;
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        isVisible.value = false;
      }, 2000); // hide after 2s of no movement
    };

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    const addHoverListeners = () => {
      const clickableEls = document.querySelectorAll(
        "a, button, input, textarea, [role='button']"
      );
      clickableEls.forEach((el) => {
        el.addEventListener("mouseenter", () => (isHovering.value = true));
        el.addEventListener("mouseleave", () => (isHovering.value = false));
      });
    };

    onMounted(() => {
      window.addEventListener("mousemove", updateCursor);
      window.addEventListener("resize", checkMobile);
      checkMobile();
      addHoverListeners();
    });

    onUnmounted(() => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("resize", checkMobile);
      clearTimeout(idleTimeout);
    });

    return { x, y, isHovering, isMobile, isVisible };
  },
};
</script>

<style>
/* Hide system cursor globally */
html,
body,
button,
a,
input,
textarea {
  cursor: none !important;
}

.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.15); /* soft white glow for black bg */
  border: 1px solid white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease, width 0.15s ease, height 0.15s ease,
    opacity 0.3s ease;
  backdrop-filter: blur(2px);
  opacity: 1;
}

.custom-cursor[style*="display: none"] {
  opacity: 0;
}

.cursor-hover {
  width: 35px;
  height: 35px;
  transform: translate(-50%, -50%) scale(1.3);
  background-color: rgba(255, 255, 255, 0.25);
  border-color: #ffffff;
}
</style>
