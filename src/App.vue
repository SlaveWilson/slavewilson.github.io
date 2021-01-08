<template lang="pug">
main
  section.fullpage
    h1 Section 1
  section.fullpage
    h1 Section 2
  section.fullpage
    h1 Section 3
  section.fullpage
    h1 Section 4

.sections-menu
  span.menu-point(
    :class="{active: activeSection === index}", 
    @click="scrollToSection(index)",
    v-for="(offset, index) in offsets",
    :key="index"
  )
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, Ref, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    let inMove = false;
    const activeSection = ref(0);
    const offsets: Ref<Array<number> | undefined> = ref();
    offsets.value = [];
    let touchStartY = 0;

    const calculateSectionOffsets = function () {
      const sections = document.getElementsByTagName("section");
      const length = sections.length;

      for (let i = 0; i < length; i++) {
        const sectionOffset = sections[i].offsetTop;
        offsets.value!.push(sectionOffset);
      }
    };

    const scrollToSection = function (id: number, force = false) {
      if (inMove && !force) return false;
      activeSection.value = id;
      inMove = true;

      document.getElementsByTagName("section")[id].scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(() => {
        inMove = false;
      }, 400);
    };

    const moveDown = function () {
      inMove = true;
      activeSection.value--;
      if (activeSection.value < 0) activeSection.value = offsets.value!.length - 1;
      scrollToSection(activeSection.value, true);
    };

    const moveUp = function () {
      inMove = true;
      activeSection.value++;
      if (activeSection.value > offsets.value!.length - 1) activeSection.value = 0;
      scrollToSection(activeSection.value, true);
    };

    const handleMouseWheel = function (e: WheelEvent) {
      if (e.deltaY < 30 && !inMove) moveDown();
      else if (e.deltaY > 30 && !inMove) moveUp();

      e.preventDefault();
      return false;
    };

    const touchStart = function (e: TouchEvent) {
      e.preventDefault();
      touchStartY = e.touches[0].clientY;
    };

    const touchMove = function (e: TouchEvent) {
      if (inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (touchStartY < currentY) moveDown();
      else moveUp();

      touchStartY = 0;
      return false;
    };

    onMounted(() => {
      calculateSectionOffsets();
      window.addEventListener("wheel", handleMouseWheel, { passive: false });
      window.addEventListener("touchstart", touchStart, { passive: false });
      window.addEventListener("touchmove", touchMove, { passive: false });
    });

    onUnmounted(() => {
      window.removeEventListener("wheel", handleMouseWheel);
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
    });

    return {
      activeSection,
      offsets,
      scrollToSection,
    };
  },
});
</script>

<style lang="scss" scoped>
.fullpage {
  height: 100vh;
  width: 100%;
}
.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}
.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #fff;
  display: block;
  margin: 1rem 0;
  opacity: 0.6;
  transition: 0.4s ease all;
}
.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
</style>
