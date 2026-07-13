import { useEffect, useRef } from "react";

const SNAP_DURATION = 760;
const WHEEL_THRESHOLD = 18;
const TOUCH_THRESHOLD = 42;
const SECTION_SELECTOR = "main > section";

type TouchStart = {
  x: number;
  y: number;
};

const isElement = (target: EventTarget | null): target is Element => target instanceof Element;

const getSections = () =>
  Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR)).filter(
    (section) => section.offsetHeight > window.innerHeight * 0.45,
  );

const getScrollTop = () => window.scrollY || window.pageYOffset || 0;

const getMaxScrollTop = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

const getSectionTop = (section: HTMLElement) =>
  Math.min(section.getBoundingClientRect().top + getScrollTop(), getMaxScrollTop());

const isInteractiveTarget = (target: EventTarget | null) =>
  isElement(target) &&
  Boolean(target.closest("input, textarea, select, button, [contenteditable='true'], [data-native-scroll]"));

const canScrollInside = (target: EventTarget | null, deltaY: number) => {
  if (!isElement(target)) return false;

  let element: Element | null = target;
  while (element && element !== document.body) {
    if (element instanceof HTMLElement) {
      const style = window.getComputedStyle(element);
      const isScrollable = /(auto|scroll|overlay)/.test(style.overflowY);

      if (isScrollable && element.scrollHeight > element.clientHeight + 1) {
        const atTop = element.scrollTop <= 1;
        const atBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 1;

        if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) return true;
      }
    }

    element = element.parentElement;
  }

  return false;
};

export function useMagneticSectionScroll() {
  const lockedUntilRef = useRef(0);
  const touchStartRef = useRef<TouchStart | null>(null);
  const touchHandledRef = useRef(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const desktopPointer = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    if (!desktopPointer.matches) return;

    const clearLockLater = () => {
      window.setTimeout(() => {
        if (performance.now() >= lockedUntilRef.current) {
          lockedUntilRef.current = 0;
        }
      }, SNAP_DURATION + 90);
    };

    const getTargetIndex = (direction: 1 | -1) => {
      const sections = getSections();
      if (sections.length < 2) return null;

      const currentTop = getScrollTop();
      const positions = sections.map(getSectionTop);
      const lastIndex = positions.length - 1;
      const boundaryTolerance = 8;
      const searchTolerance = Math.max(12, window.innerHeight * 0.018);

      if (direction > 0 && currentTop >= positions[lastIndex] - boundaryTolerance) {
        return null;
      }

      if (direction > 0) {
        const nextIndex = positions.findIndex((top) => top > currentTop + searchTolerance);
        return nextIndex === -1 ? null : nextIndex;
      }

      for (let index = positions.length - 1; index >= 0; index -= 1) {
        if (positions[index] < currentTop - searchTolerance) return index;
      }

      return null;
    };

    const snapByDirection = (direction: 1 | -1) => {
      const targetIndex = getTargetIndex(direction);
      if (targetIndex === null) return false;

      const targetSection = getSections()[targetIndex];
      if (!targetSection) return false;

      const targetTop = getSectionTop(targetSection);
      if (Math.abs(targetTop - getScrollTop()) < 2) return false;

      lockedUntilRef.current = performance.now() + SNAP_DURATION;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
      clearLockLater();
      return true;
    };

    const isLocked = () => performance.now() < lockedUntilRef.current;

    const handleWheel = (event: WheelEvent) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey) return;
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      if (isInteractiveTarget(event.target) || canScrollInside(event.target, event.deltaY)) return;

      if (isLocked()) {
        event.preventDefault();
        return;
      }

      if (snapByDirection(event.deltaY > 0 ? 1 : -1)) {
        event.preventDefault();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;

      touchHandledRef.current = false;
      touchStartRef.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    };

    const handleTouchMove = (event: TouchEvent) => {
      const start = touchStartRef.current;
      if (!start || touchHandledRef.current || event.touches.length !== 1) return;
      if (isInteractiveTarget(event.target)) return;

      const current = event.touches[0];
      const deltaX = start.x - current.clientX;
      const deltaY = start.y - current.clientY;

      if (Math.abs(deltaY) < TOUCH_THRESHOLD || Math.abs(deltaY) < Math.abs(deltaX) * 1.2) return;
      if (canScrollInside(event.target, deltaY)) return;

      if (isLocked()) {
        event.preventDefault();
        return;
      }

      if (snapByDirection(deltaY > 0 ? 1 : -1)) {
        touchHandledRef.current = true;
        event.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      touchStartRef.current = null;
      touchHandledRef.current = false;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || isInteractiveTarget(event.target)) {
        return;
      }

      const direction =
        event.key === "PageDown" || event.key === "ArrowDown" || event.key === " "
          ? 1
          : event.key === "PageUp" || event.key === "ArrowUp"
            ? -1
            : null;

      if (!direction) return;

      if (isLocked()) {
        event.preventDefault();
        return;
      }

      if (snapByDirection(direction)) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
