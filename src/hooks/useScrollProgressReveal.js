import { useEffect, useRef } from "react";

function clamp01(n) {
  return Math.max(0, Math.min(1, n));
}

function range01(x, a, b) {
  return clamp01((x - a) / (b - a));
}

function getScrollParent(node) {
  if (!node) return window;

  let parent = node.parentElement;
  while (parent) {
    const style = window.getComputedStyle(parent);
    const oy = style.overflowY;
    const ox = style.overflowX;

    const canY =
      (oy === "auto" || oy === "scroll") &&
      parent.scrollHeight > parent.clientHeight;
    const canX =
      (ox === "auto" || ox === "scroll") &&
      parent.scrollWidth > parent.clientWidth;

    if (canY || canX) return parent;
    parent = parent.parentElement;
  }
  return window;
}

export default function useScrollProgressReveal({ preset = "focus" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scrollParent = getScrollParent(el);
    let raf = 0;

    const update = () => {
      raf = 0;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // ===== CONTACT (soft): basé sur la visibilité =====
      if (preset === "soft") {
        const visiblePx = Math.max(
          0,
          Math.min(vh, rect.bottom) - Math.max(0, rect.top)
        );
        const visibleRatio = rect.height > 0 ? visiblePx / rect.height : 0;

        // démarre ~15% visible, finit ~65% visible
        const p = range01(visibleRatio, 0.15, 0.65);
        el.style.setProperty("--p", p.toFixed(4));
        return;
      }

      // ===== HEADER: basé sur la position (plus progressif pour un petit bloc) =====
      if (preset === "header") {
        const start = vh * 0.92; // commence quand le header arrive bas dans l’écran
        const end = vh * 0.55; // finit quand il approche le milieu
        const raw = (start - rect.top) / (start - end);
        const p = clamp01(raw);

        el.style.setProperty("--p", p.toFixed(4));
        return;
      }

      // ===== FOCUS (projets): split gauche/droite/meta =====
      const start = vh * 0.85;
      const end = vh * 0.18;

      const raw = (start - rect.top) / (start - end);
      const p = clamp01(raw);

      el.style.setProperty("--p-left", range01(p, 0.0, 0.45).toFixed(4));
      el.style.setProperty("--p-right", range01(p, 0.3, 0.75).toFixed(4));
      el.style.setProperty("--p-meta", range01(p, 0.55, 1.0).toFixed(4));
    };

    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    if (scrollParent !== window) {
      scrollParent.addEventListener("scroll", schedule, { passive: true });
    }

    update();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (scrollParent !== window) {
        scrollParent.removeEventListener("scroll", schedule);
      }
      if (raf) cancelAnimationFrame(raf);
    };
  }, [preset]);

  return { ref };
}
