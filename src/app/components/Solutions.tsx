const solutions = [
  { num: "01", title: "智慧课程建设方案", audience: "教务处 · 课程负责人", desc: "快速生成课程知识库、数字教材、题库、AI 智能体和课程建设成果包。", points: ["课程知识库建设", "数字教材生成", "题库智能构建", "AI 助教配置", "课程成果包"] },
  { num: "02", title: "专业群知识引擎方案", audience: "二级学院 · 专业群负责人", desc: "沉淀专业群知识库、岗位能力图谱、课程体系和专业建设成果。", points: ["专业群知识库", "岗位能力图谱", "课程体系梳理", "专业建设成果", "知识资产管理"] },
  { num: "03", title: "数字教材建设方案", audience: "教材建设 · 教学改革项目", desc: "将传统教材升级为可交互、可更新、可被 AI 调用的数字教材。", points: ["教材结构化处理", "交互内容生成", "AI 问答库构建", "持续迭代更新", "多终端适配"] },
  { num: "04", title: "AI 智能体应用方案", audience: "教师 · 学生 · 教学管理", desc: "提供 AI 助教、AI 学伴、AI 评价、AI 教学管理等智能体应用。", points: ["AI 助教系统", "AI 学伴应用", "智能评价体系", "教学管理智能化", "个性化学习路径"] },
];

export function Solutions() {
  return (
    <section id="solutions" className="bg-white section-shell">
      <div className="page-shell solutions-shell">
        <div className="mb-12 lg:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#8B1A1A]" />
              <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>Solutions</span>
            </div>
            <h2 className="mobile-wrap text-[#1A1A1A]" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-section-title)", lineHeight: 1.25, whiteSpace: "nowrap" }}>
              面向高校不同场景的知识引擎解决方案
            </h2>
            <p className="mobile-wrap mobile-copy text-[#888] mt-5" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, whiteSpace: "nowrap" }}>
              炎书针对高校不同角色和建设场景，提供四类落地解决方案，帮助不同部门快速找到对应价值。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#E8E4DE]">
          {solutions.map((item) => (
            <div key={item.num} className="group bg-white p-6 sm:p-8 lg:p-10 hover:bg-[#FDF8F5] transition-colors duration-200">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-5">
                <span className="text-[#D8D3CC]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "2.36rem", lineHeight: 1 }}>
                  {item.num}
                </span>
                <span className="text-[#C4892E] bg-[#FBF5EC] px-2.5 py-1 text-[11.5px] tracking-wide" style={{ fontFamily: "'Noto Sans SC', sans-serif", borderRadius: 2 }}>
                  {item.audience}
                </span>
              </div>
              <h3 className="text-[#1A1A1A] mb-3 transition-[font-size] duration-200" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.24rem", lineHeight: 1.35 }}>
                  <span className="transition-[font-size] duration-200 lg:group-hover:text-[1.45rem]">
                {item.title}
                </span>
              </h3>
              <p className="text-[#666] mb-5 text-[15px] lg:text-[13.5px] xl:whitespace-nowrap lg:group-hover:text-[16px] transition-[font-size] duration-200" style={{ fontFamily: "'Noto Sans SC', sans-serif", lineHeight: 1.85 }}>
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-[#F0EDE8]">
                {item.points.map((p) => (
                  <span key={p} className="text-[#999] bg-[#F8F6F2] lg:group-hover:bg-[#8B1A1A] lg:group-hover:text-white px-2.5 py-1.5 text-[12px] transition-colors duration-200" style={{ fontFamily: "'Noto Sans SC', sans-serif", borderRadius: 2 }}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
