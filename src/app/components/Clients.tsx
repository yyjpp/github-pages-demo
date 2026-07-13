const clients = [
  { name: "深圳职业技术大学", type: "高职院校", tag: "双高建设" },
  { name: "深圳大学", type: "综合性大学", tag: "应用型本科" },
  { name: "广州中医药大学", type: "中医药院校", tag: "双一流建设" },
  { name: "武汉大学", type: "综合性大学", tag: "985高校" },
  { name: "深圳技师学院", type: "技工院校", tag: "技工教育" },
];

const scenarios = ["智慧课程建设", "数字教材建设", "课程知识库", "AI 智能体", "专业群知识资产建设"];

export function Clients() {
  return (
    <section id="clients" className="bg-white section-shell">
      <div className="page-shell">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="lg:sticky" style={{ top: 88 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-px bg-[#8B1A1A]" />
                <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>Clients</span>
              </div>
              <h2 className="text-[#1A1A1A] mb-5" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-section-title)", lineHeight: 1.25 }}>
                服务高校 AI 教学<br />与知识资产建设
              </h2>
              <p className="text-[#888] mb-8" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, maxWidth: "42ch" }}>
                覆盖职业教育、应用型本科、普通本科、技工院校等多类高校场景，支持智慧课程、数字教材、课程知识库、AI智能体和专业群知识资产建设。
              </p>

              <div className="mb-10">
                <h3 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.1rem", lineHeight: 1.35 }}>
                  已服务高校 :
                </h3>
                <div className="text-[#8B1A1A]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "3.42rem", lineHeight: 1 }}>
                  217<span style={{ fontSize: "1.26rem" }}>所</span>
                </div>
              </div>

              <div>
                <h3 className="text-[#1A1A1A] mb-4" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.1rem", lineHeight: 1.35 }}>
                  支持场景 :
                </h3>
                <div className="flex flex-wrap items-center gap-2.5">
                  {scenarios.map((s) => (
                    <span key={s} className="text-[#666] bg-[#F8F6F2] px-3 py-1.5 text-[13px]" style={{ fontFamily: "'Noto Sans SC', sans-serif", borderRadius: 2 }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 border-t border-[#E8E4DE]">
            {clients.map((client, i) => (
              <div key={client.name}
                className={`grid grid-cols-12 gap-4 sm:gap-5 items-start sm:items-center py-6 ${i < clients.length - 1 ? "border-b border-[#E8E4DE]" : ""}`}>
                <div className="col-span-2">
                  <div className="w-9 h-9 bg-[#FDF5F3] flex items-center justify-center" style={{ borderRadius: 2 }}>
                    <span className="text-[#8B1A1A]" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--text-ui)" }}>{client.name[0]}</span>
                  </div>
                </div>
                <div className="col-span-10">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="text-[#1A1A1A] mb-1.5" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.1rem", lineHeight: 1.35 }}>{client.name}</h3>
                      <p className="text-[#999]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-small)" }}>{client.type}</p>
                    </div>
                    <span className="text-[#C4892E] bg-[#FBF5EC] px-2.5 py-1 text-[11.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif", borderRadius: 2 }}>{client.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
