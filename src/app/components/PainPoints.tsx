const items = [
  {
    num: "01",
    title: "资源沉睡",
    badge: "难以复用 · 难以调用",
    desc: "课程资源大量存在，但分散存储缺少结构，教师无法高效复用，AI 无法精准调用，资源的潜在价值未被利用。",
  },
  {
    num: "02",
    title: "AI 幻觉",
    badge: "泛化内容 · 可信度不足",
    desc: "通用大模型缺乏校本知识库支撑，无法与本校课程、教材和教学目标精准对齐。生成内容泛化严重，教师难以直接使用。",
  },
  {
    num: "03",
    title: "建设低效",
    badge: "周期长 · 成本高 · 难迭代",
    desc: "智慧课程、数字教材和专业群资源建设依赖人工制作，单门课程建设以月计，且交付后难以持续更新，投入产出效率极低。",
  },
];

export function PainPoints() {
  return (
    <section className="bg-white section-shell">
      <div className="page-shell">
        <div className="mb-10 lg:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#8B1A1A]" />
              <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>Pain Points</span>
            </div>
            <h2 className="mobile-wrap text-[#1A1A1A]" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-section-title)", lineHeight: 1.25, whiteSpace: "nowrap" }}>
              难点不在模型，而在知识资产
            </h2>
            <p className="mobile-wrap mobile-copy text-[#888] mt-6" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, whiteSpace: "nowrap" }}>
              在大模型能力快速普及的今天，高校 AI 教学落地的核心瓶颈已从「模型是否足够强大」转移到「课程知识资产是否可被 AI 调用」。
            </p>
          </div>
        </div>

        <div className="border-t border-[#E8E4DE]">
          {items.map((item, i) => (
            <div key={item.num}
              className={`grid lg:grid-cols-12 gap-6 items-start py-6 lg:py-7 ${i < items.length - 1 ? "border-b border-[#E8E4DE]" : ""}`}>
              <div className="lg:col-span-1">
                <span className="text-[#D8D3CC]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "1.84rem", lineHeight: 1 }}>
                  {item.num}
                </span>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-[#1A1A1A] mb-2" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-row-title)", lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <span className="text-[#C4892E]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-caption)", letterSpacing: "0.03em" }}>
                  {item.badge}
                </span>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <p className="mobile-wrap text-[#666]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, whiteSpace: "nowrap" }}>
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
