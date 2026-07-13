const rows = [
  { category: "传统教学平台", capabilities: "教学流程、课程发布、作业考试、教学管理", limitation: "偏管理流程，知识结构化不足", diff: "作为知识引擎层，可与现有教学平台协同，为其提供课程知识库、课程图谱、AI 调用和知识资产能力。" },
  { category: "数字资源服务商", capabilities: "视频、课件、教材、动画、交互资源制作", limitation: "多为静态交付，难以持续更新和复用", diff: "交付的是可迭代、可调用、可管理的课程知识资产，而不只是一次性交付的数字资源。" },
  { category: "教育 AI 公司", capabilities: "大模型、智能体、算力、通用 AI 应用", limitation: "不一定理解课程细节、教材体系和教务流程", diff: "将模型能力与高校课程资源、教师经验和教学场景结合，把 AI 能力转化为高校教学生产力。" },
];

export function Comparison() {
  return (
    <section className="bg-[#F8F6F2] section-shell">
      <div className="page-shell">
        <div className="mb-10 lg:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#8B1A1A]" />
              <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>Differentiation</span>
            </div>
            <h2 className="mobile-wrap text-[#1A1A1A]" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-section-title)", lineHeight: 1.25, whiteSpace: "nowrap" }}>
              不做新的教学平台，而做知识引擎层
            </h2>
            <p className="mobile-wrap mobile-copy text-[#888] mt-5" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, whiteSpace: "nowrap" }}>
              炎书聚焦于让高校课程知识资产「可被 AI 调用」，定位为 AI 时代的知识基础设施层，而不是替代现有系统。
            </p>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.6fr_1.8fr_3fr] gap-8 xl:gap-10 pb-4 border-b border-[#E8E4DE]">
          <div><span className="text-[#1A1A1A] text-[0.95rem] font-semibold" style={{ fontFamily: "'Noto Serif SC', serif", lineHeight: 1.4 }}>对比对象</span></div>
          <div><span className="text-[#1A1A1A] text-[0.95rem] font-semibold" style={{ fontFamily: "'Noto Serif SC', serif", lineHeight: 1.4 }}>主要能力</span></div>
          <div><span className="text-[#1A1A1A] text-[0.95rem] font-semibold" style={{ fontFamily: "'Noto Serif SC', serif", lineHeight: 1.4 }}>局限</span></div>
          <div><span className="text-[#1A1A1A] text-[0.95rem] font-semibold" style={{ fontFamily: "'Noto Serif SC', serif", lineHeight: 1.4 }}>炎书差异</span></div>
        </div>

        {rows.map((row, i) => (
          <div key={row.category}
            className={`grid lg:grid-cols-[0.8fr_1.6fr_1.8fr_3fr] gap-6 lg:gap-8 xl:gap-10 py-5 lg:py-6 ${i < rows.length - 1 ? "border-b border-[#E8E4DE]" : ""}`}>
            <div>
              <h3 className="text-[#1A1A1A]" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.07rem", lineHeight: 1.4 }}>{row.category}</h3>
            </div>
            <div>
              <span className="mb-2 block text-[11px] uppercase tracking-[0.14em] text-[#B7AFA7] lg:hidden" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>主要能力</span>
              <p className="text-[#666]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)", lineHeight: 1.8 }}>{row.capabilities}</p>
            </div>
            <div>
              <span className="mb-2 block text-[11px] uppercase tracking-[0.14em] text-[#B7AFA7] lg:hidden" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>局限</span>
              <p className="text-[#C4892E]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)", lineHeight: 1.8 }}>{row.limitation}</p>
            </div>
            <div>
              <span className="mb-2 block text-[11px] uppercase tracking-[0.14em] text-[#B7AFA7] lg:hidden" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>炎书差异</span>
              <p className="text-[#8B1A1A]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)", lineHeight: 1.8 }}>{row.diff}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
