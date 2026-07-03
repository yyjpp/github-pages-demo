import architectureImage from "../../assets/yanshu-architecture.png";

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
    <section id="hero" className="box-border bg-[#FAFAF8] pt-[60px] lg:min-h-[100dvh] flex items-center">
      <div className="page-shell w-full py-10 sm:py-12 lg:py-14">
        <div className="grid lg:grid-cols-[minmax(380px,0.9fr)_minmax(480px,1.1fr)] xl:grid-cols-[minmax(420px,0.9fr)_minmax(520px,1.1fr)] gap-10 sm:gap-14 lg:gap-6 xl:gap-8 items-center">
          <div className="hero-copy-panel" style={{ maxWidth: 560 }}>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-5 h-px bg-[#8B1A1A]" />
              <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                ABOUT YANSHU
              </span>
            </div>

            <h1 className="text-[#8B1A1A] mb-5" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-hero-title)", lineHeight: 1.18 }}>
              炎书，<br /><span className="text-[#1A1A1A]">中国高校<br />知识引擎</span>
            </h1>

            <p className="text-[#555] mb-3" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body-lg)", lineHeight: 1.8, maxWidth: "52ch" }}>
              让高校课程资源变成
              <span className="text-[#C4892E]"> AI 可调用</span>、
              <span className="text-[#C4892E]">教师可复用</span>、
              <span className="text-[#C4892E]">学生可学习</span>、
              <span className="text-[#C4892E]">学校可管理</span>的知识资产。
            </p>

            <p className="text-[#999] mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, maxWidth: "50ch" }}>
              炎书，基于垂直大模型、知识库技术和课程图谱，提供从资源结构化到教学智能化的一体化平台。
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

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:inline-flex sm:max-w-full sm:flex-wrap sm:gap-x-10 sm:gap-y-4 mt-9 sm:mt-10 pt-7 border-t border-[#E8E4DE]">
              {trustStats.map(s => (
                <div key={s.label}>
                  <div className="text-[#8B1A1A] mb-0.5" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "1.47rem", lineHeight: 1 }}>
                    {s.num}<span style={{ fontSize: "0.8rem" }}>{s.unit}</span>
                  </div>
                  <div className="text-[#AAAAAA]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "10.5px", letterSpacing: "0.05em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:translate-y-8 xl:translate-y-10">
            <img
              src={architectureImage}
              alt="炎书平台架构图"
              className="w-full max-w-[560px] lg:max-w-[650px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
