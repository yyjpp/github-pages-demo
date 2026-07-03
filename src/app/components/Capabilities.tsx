import { Bot, BookOpen, BrainCircuit, GitBranch, Layers } from "lucide-react";

const capabilities = [
  { num: "01", title: "垂直大模型底座", tag: "AI 能力层", desc: "基于通用大模型，叠加高校课程知识库和专业群知识库，形成面向高校教学场景的垂直 AI 应用能力。", icon: BrainCircuit },
  { num: "02", title: "知识库技术", tag: "知识结构化", desc: "将教材、课件、讲义、视频、题库等资源进行结构化处理和精准索引，让 AI 回答有来源、可追溯。", icon: Layers },
  { num: "03", title: "课程图谱", tag: "结构可视化", desc: "自动梳理课程目标、知识点、教学任务、教学资源和评价标准之间的关系，形成可视化、可调用的课程知识结构。", icon: GitBranch },
  { num: "04", title: "数字教材生成", tag: "内容生成", desc: "基于课程知识库生成数字教材初稿、题库、案例、导学内容、微课脚本和 AI 问答库，提升课程内容建设效率。", icon: BookOpen },
  { num: "05", title: "AI 智能体", tag: "智能应用", desc: "面向教师、学生和教学管理场景，提供 AI 助教、AI 学伴、AI 评价、AI 教学管理等智能体应用。", icon: Bot },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-[#F8F6F2] section-shell">
      <div className="page-shell">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky" style={{ top: 88 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-px bg-[#8B1A1A]" />
                <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>Core Capabilities</span>
              </div>
              <h2 className="text-[#1A1A1A] mb-5" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-section-title)", lineHeight: 1.25 }}>
                从资源到知识，<br />从知识到教学，<br />从教学到资产
              </h2>
              <p className="text-[#888] mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, maxWidth: "42ch" }}>
                五大核心能力，构成从资源输入到知识资产化的完整链路，覆盖高校智慧课程建设全流程。
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 border-t border-[#E8E4DE]">
            {capabilities.map((item, i) => (
              <div key={item.num}
                className={`grid grid-cols-12 gap-4 sm:gap-5 items-start py-6 ${i < capabilities.length - 1 ? "border-b border-[#E8E4DE]" : ""}`}>
                <div className="col-span-2">
                  <div className="text-[#D8D3CC]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "1.84rem", lineHeight: 1 }}>
                    {item.num}
                  </div>
                </div>
                <div className="col-span-10">
                  <h3 className="text-[#1A1A1A] mb-2.5 flex flex-wrap items-center gap-x-3 gap-y-2" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.1rem", lineHeight: 1.35 }}>
                    <span className="inline-flex items-center gap-2.5">
                      <item.icon size={17} strokeWidth={1.8} className="text-[#8B1A1A]" aria-hidden="true" />
                      <span>{item.title}</span>
                    </span>
                    <span className="text-[#C4892E] bg-[#FBF5EC] px-2 py-1 text-[10.5px] tracking-wide" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400, borderRadius: 2 }}>
                      {item.tag}
                    </span>
                  </h3>
                  <p className="text-[#666]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.8 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
