import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { data } from "./timelinedata";

export const useHome = () => {
  const openBlob = () => {
    window.open("https://hungerwl.github.io/wl-blob/", "_self");
  };

  const timelineData = ref(data);

  const headerRef = ref(null);
  const projectTitleRef = ref(null);
  const timelineContainerRef = ref(null);
  const timelineItems = ref([]);

  // 初始化IntersectionObserver
  let observer = null;

  const animateOnIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        });
        observer.unobserve(entry.target);
      }
    });
  };

  onMounted(() => {
    // 为页面区域内的元素（头部和标题）立即执行动画
    gsap.set([headerRef.value, projectTitleRef.value], {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.out" },
    });
    tl.to(headerRef.value, { opacity: 1, y: 0 }).to(
      projectTitleRef.value,
      { opacity: 1, y: 0 },
      "-=0.3"
    );

    // 设置时间线容器和时间线项的初始状态
    gsap.set([timelineContainerRef.value, ...timelineItems.value], {
      opacity: 0,
      y: 20,
    });

    // 初始化IntersectionObserver
    observer = new IntersectionObserver(animateOnIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    // 观察时间线容器和时间线项
    if (timelineContainerRef.value) {
      observer.observe(timelineContainerRef.value);
    }

    timelineItems.value.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    openBlob,
    timelineData,
    headerRef,
    projectTitleRef,
    timelineContainerRef,
    timelineItems,
  };
};
