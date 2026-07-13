import heroPlatformPreview from "../../assets/hero-platform-preview.png";

const trustStats = [
  { num: "217", unit: "所", label: "服务高校" },
  { num: "1000", unit: "+", label: "精品课程" },
  { num: "66", unit: "门", label: "国家精品课程" },
  { num: "42", unit: "所", label: "双一流院校" },
];

type HeroProps = {
  onRequestDemo: () => void;
};

export function Hero({ onRequestDemo }: HeroProps) {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative box-border overflow-hidden bg-[#FAFAF8] pt-[60px] lg:min-h-[100dvh] flex items-center">
      <div className="page-shell relative z-10 w-full py-10 sm:py-12 lg:py-16">
        <div className="hero-layout">
          <div className="hero-copy-panel">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-5 h-px bg-[#8B1A1A]" />
              <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                ABOUT YANSHU
              </span>
            </div>

            <h1 className="text-[#8B1A1A] mb-5" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-hero-title)", lineHeight: 1.18 }}>
              炎书，<br /><span className="mobile-wrap text-[#1A1A1A]" style={{ whiteSpace: "nowrap" }}>中国高校知识引擎</span>
            </h1>

            <p className="mobile-wrap text-[#555] mb-3" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body-lg)", lineHeight: 1.8, maxWidth: "76ch", whiteSpace: "nowrap" }}>
              让高校课程资源变成
              <span className="text-[#C4892E]"> AI 可调用</span>、
              <span className="text-[#C4892E]">教师可复用</span>、
              <span className="text-[#C4892E]">学生可学习</span>、
              <span className="text-[#C4892E]">学校可管理</span>的知识资产。
            </p>

            <p className="mobile-wrap text-[#999] mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, maxWidth: "78ch", whiteSpace: "nowrap" }}>
              基于垂直大模型、知识库技术和课程图谱，提供从资源结构化到教学智能化的一体化平台。
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button onClick={onRequestDemo}
                className="touch-target px-7 py-3 bg-[#8B1A1A] text-white hover:bg-[#7A1616] transition-colors"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-ui)", letterSpacing: "0.03em", borderRadius: 2 }}>
                预约产品演示
              </button>
              <button onClick={() => scrollTo("#solutions")}
                className="touch-target px-7 py-3 border border-[#D8D3CC] text-[#555] hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-colors"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-ui)", letterSpacing: "0.03em", borderRadius: 2 }}>
                查看解决方案
              </button>
            </div>
          </div>

          <div className="hero-visual" aria-label="炎书平台首页预览">
            <div className="hero-visual-frame">
              <img
                src={heroPlatformPreview}
                alt="炎书平台首页课程工作台预览"
                className="hero-visual-image"
              />
            </div>
          </div>
        </div>

        <div className="hero-stats-band mt-10 sm:mt-12 lg:mt-16 border-b border-[#E8E4DE] pb-6 sm:pb-7 lg:max-w-[1080px]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4 sm:gap-x-10">
            {trustStats.map(s => (
              <div key={s.label}>
                <div className="text-[#8B1A1A] mb-2" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "clamp(1.9rem, 3.2vw, 3.35rem)", lineHeight: 0.95, fontVariantNumeric: "tabular-nums" }}>
                  {s.num}<span style={{ fontSize: "clamp(0.82rem, 1vw, 1rem)" }}>{s.unit}</span>
                </div>
                <div className="text-[#AAAAAA]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
