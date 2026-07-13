type CtaSectionProps = {
  onOpenContact: (title: "预约产品演示" | "联系合作") => void;
};

export function CtaSection({ onOpenContact }: CtaSectionProps) {
  return (
    <section id="contact-cta" className="bg-[#F5F2EC] section-shell">
      <div className="page-shell">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-[#8B1A1A]" />
              <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>开始知识资产化之旅</span>
            </div>
            <h2 className="text-[#1A1A1A] mb-5" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-cta-title)", lineHeight: 1.2 }}>
              让高校从资源数字化，<br />走向知识资产化
            </h2>
            <p className="text-[#777]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-ui)", lineHeight: 1.85, maxWidth: "52ch" }}>
              炎书帮助高校把课程资源、教材资源、教师经验和教学成果，转化为可持续生长的校本知识资产。
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col gap-3">
              <button onClick={() => onOpenContact("预约产品演示")}
                className="touch-target w-full py-3.5 bg-[#8B1A1A] text-white hover:bg-[#7A1616] transition-colors"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-ui)", letterSpacing: "0.04em", borderRadius: 2 }}>
                预约产品演示
              </button>
              <button onClick={() => onOpenContact("联系合作")}
                className="touch-target w-full py-3.5 border border-[#CFC5BA] text-[#666] hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-colors"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-ui)", letterSpacing: "0.04em", borderRadius: 2 }}>
                联系合作
              </button>
            </div>
            <p className="text-center text-[#BBBBBB] mt-3 text-[13px] leading-relaxed" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              提交后，我们将在 1 个工作日内与您联系。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
