import { useState, useEffect, useRef } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import logoNoVac from "../../assets/logo-no-vac.png";

const navLinks = [
  { label: "首页", href: "#hero" },
  { label: "产品能力", href: "#capabilities" },
  { label: "解决方案", href: "#solutions" },
  { label: "典型客户", href: "#clients" },
  { label: "关于我们", href: "#about" },
];

const platformLinks = [
  { label: "教师端", href: "https://teacher.suiguangming.com/app" },
  { label: "学生端", href: "https://student.suiguangming.com/app" },
];

type NavigationProps = {
  onRequestDemo: () => void;
};

export function Navigation({ onRequestDemo }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");
  const [platformOpen, setPlatformOpen] = useState(false);
  const platformRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const probeY = Math.min(window.innerHeight * 0.45, window.innerHeight - 1);
      let current = "#hero";

      navLinks.forEach((link) => {
        const section = document.querySelector<HTMLElement>(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY) current = link.href;
      });

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const closePlatformMenu = (event: MouseEvent | TouchEvent) => {
      if (!platformRef.current || !(event.target instanceof Node)) return;
      if (event.target instanceof Element && event.target.closest("[data-platform-menu-root]")) return;
      if (!platformRef.current.contains(event.target)) setPlatformOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlatformOpen(false);
    };

    document.addEventListener("mousedown", closePlatformMenu);
    document.addEventListener("touchstart", closePlatformMenu, { passive: true });
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closePlatformMenu);
      document.removeEventListener("touchstart", closePlatformMenu);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const scrollTo = (href: string) => {
    setActiveHref(href);
    setPlatformOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const requestDemo = () => {
    onRequestDemo();
    setMobileOpen(false);
    setPlatformOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAFAF8]/95 backdrop-blur-sm ${scrolled ? "border-b border-[#E8E4DE]" : "border-b border-transparent"}`}>
      <div className="page-shell">
        <div className="flex items-center justify-between h-[60px]">
          <button onClick={() => scrollTo("#hero")} className="flex items-center -ml-2 lg:-ml-4" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <img src={logoNoVac} alt="炎书" className="h-6 sm:h-7 w-auto object-contain" />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <button key={link.href} onClick={() => scrollTo(link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`${isActive ? "text-[#8B1A1A]" : "text-[#777]"} hover:text-[#8B1A1A] transition-colors`}
                  style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", fontWeight: 400, letterSpacing: "0.02em" }}>
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <button onClick={requestDemo}
              className="px-4 py-1.5 text-[#8B1A1A] border border-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white transition-colors"
              style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)", fontWeight: 400, letterSpacing: "0.03em", borderRadius: 2 }}>
              预约演示
            </button>
            <div ref={platformRef} data-platform-menu-root className="relative w-[128px]">
              <button
                type="button"
                onClick={() => setPlatformOpen((open) => !open)}
                aria-expanded={platformOpen}
                aria-haspopup="menu"
                className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap px-4 py-1.5 bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)", fontWeight: 400, letterSpacing: "0.03em", borderRadius: 2 }}
              >
                进入平台
                <ChevronRight
                  size={14}
                  strokeWidth={1.8}
                  className={`transition-transform duration-200 ${platformOpen ? "rotate-90" : ""}`}
                />
              </button>

              {platformOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-[calc(100%+8px)] z-50 w-full overflow-hidden border border-[#E8E4DE] bg-[#FAFAF8] shadow-[0_14px_36px_rgba(28,25,23,0.12)]"
                  style={{ borderRadius: 2 }}
                >
                  {platformLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      role="menuitem"
                      onClick={() => setPlatformOpen(false)}
                      className="block w-full px-3.5 py-3 text-left text-[#555] hover:bg-[#F5F2EC] hover:text-[#8B1A1A] transition-colors"
                      style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)", letterSpacing: "0.03em" }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            className="touch-target lg:hidden flex w-11 items-center justify-center text-[#666]"
            aria-label={mobileOpen ? "关闭导航菜单" : "打开导航菜单"}
            aria-expanded={mobileOpen}
            onClick={() => { setMobileOpen(!mobileOpen); setPlatformOpen(false); }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden absolute right-[var(--page-gutter)] top-[calc(100%+8px)] w-[min(320px,calc(100vw-(var(--page-gutter)*2)))] max-h-[calc(100svh-76px)] overflow-y-auto border border-[#E8E4DE] bg-[#FAFAF8] px-4 py-3 shadow-[0_18px_40px_rgba(28,25,23,0.12)]"
          style={{ borderRadius: 2 }}
          data-native-scroll
        >
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`touch-target block w-full text-left py-3 ${isActive ? "text-[#8B1A1A]" : "text-[#666]"}`}
                style={{ background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid #F0EDE8", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-ui)", fontWeight: 400 }}>
                {link.label}
              </button>
            );
          })}
          <div className="grid gap-2 pt-3 pb-2" data-platform-menu-root>
            <button onClick={requestDemo}
              className="touch-target w-full py-2.5 text-[#8B1A1A] border border-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white transition-colors"
              style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)", fontWeight: 400, borderRadius: 2 }}>
              预约演示
            </button>
            <button
              type="button"
              onClick={() => setPlatformOpen((open) => !open)}
              aria-expanded={platformOpen}
              aria-haspopup="menu"
              className="touch-target flex w-full items-center justify-center gap-1.5 py-2.5 bg-[#1A1A1A] text-white"
              style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)", fontWeight: 400, borderRadius: 2 }}
            >
              进入平台
              <ChevronRight
                size={14}
                strokeWidth={1.8}
                className={`transition-transform duration-200 ${platformOpen ? "rotate-90" : ""}`}
              />
            </button>
          </div>

          {platformOpen && (
            <div role="menu" className="grid grid-cols-2 gap-2 pb-2" data-platform-menu-root>
              {platformLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  role="menuitem"
                  onClick={() => { setPlatformOpen(false); setMobileOpen(false); }}
                  className="touch-target flex items-center justify-center border border-[#E8E4DE] bg-white py-2.5 text-center text-[#666] hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-colors"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)", borderRadius: 2 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
