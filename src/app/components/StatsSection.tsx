const stats = [
  { num: "80", unit: "% +", label: "建设周期缩短", desc: "智慧课程、数字教材和课程知识资产建设效率显著提升，从以月计缩短至以天计。" },
  { num: "60", unit: "% +", label: "成本下降", desc: "单门课程建设和资源迭代成本大幅降低，高校投入产出效率系统性提升。" },
  { num: "95", unit: "% +", label: "AI 幻觉降低", desc: "基于课程知识库、精准索引和教师审核机制，AI 教学应用可信度系统性增强。" },
];

export function StatsSection() {
  return (
    <section className="bg-white section-shell">
      <div className="page-shell">
        <div className="grid lg:grid-cols-12 gap-8 mb-8 lg:mb-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#8B1A1A]" />
              <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>Impact</span>
            </div>
            <h2 className="mobile-wrap text-[#2A1714]" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-section-title)", lineHeight: 1.25, whiteSpace: "nowrap" }}>
              让智慧课程建设更快、更准、更可持续
            </h2>
            <p className="mobile-wrap mobile-copy text-[#666] mt-5" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, whiteSpace: "nowrap" }}>
              炎书让智慧课程建设从「重复劳动」走向「知识资产沉淀」，从「一次交付」走向「持续迭代」。
            </p>
          </div>
        </div>

        <div className="border-t border-[#EFE0DC]">
          {stats.map((item, i) => (
            <div key={item.label}
              className={`grid gap-6 lg:grid-cols-[220px_220px_minmax(0,1fr)] lg:gap-x-24 items-center py-5 lg:py-6 ${i < stats.length - 1 ? "border-b border-[#EFE0DC]" : ""}`}>
              <div>
                <span className="text-[#B32626]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", lineHeight: 1 }}>
                  <span style={{ fontSize: "var(--type-stat-num)" }}>{item.num}</span>
                  <span style={{ fontSize: "var(--type-stat-unit)" }}>{item.unit}</span>
                </span>
              </div>
              <div className="flex justify-start text-left lg:justify-center lg:text-center">
                <h3 className="text-[#2A1714]" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-stat-title)", lineHeight: 1.35 }}>
                  {item.label}
                </h3>
              </div>
              <div className="flex justify-start text-left lg:justify-center lg:text-center">
                <p className="text-[#666] xl:whitespace-nowrap" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
