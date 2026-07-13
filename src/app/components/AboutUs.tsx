export function AboutUs() {
  return (
    <section id="about" className="bg-[#F5F2EC] section-shell">
      <div className="page-shell">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#8B1A1A]" />
              <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>About Us</span>
            </div>
            <h2 className="text-[#1A1A1A] mb-8" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-section-title)", lineHeight: 1.25 }}>
              深圳市燧光明<br />科技有限公司
            </h2>
            <div className="space-y-5">
              {[
                "深圳市燧光明科技有限公司是由中咨联教育技术（深圳）有限公司投资创建的 AI+教育科技公司，核心产品为「炎书——中国高校知识引擎平台」。",
                "中咨联教育技术（深圳）有限公司是中国华南地区规模领先的智慧教育服务商，深耕高校数字化资源建设 10 年以上，累计交付精品课程 1000 余门，其中 66 门获评「国家精品课程」，累计服务高校客户 217 所，覆盖双一流院校 42 所。",
                "炎书平台以垂直大模型、知识库技术和课程图谱为核心能力，推动高校从「资源数字化」走向「知识资产化」和「教学智能化」。",
              ].map((para, i) => (
                <p key={i} className="mobile-copy text-[#666]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)", lineHeight: 1.85, maxWidth: "52ch" }}>{para}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-[#1C1917] p-6 sm:p-8 lg:p-10 min-h-[210px] flex items-end" style={{ borderRadius: 3 }}>
                <div>
                  <div className="text-[#D7C2B3] tracking-[0.08em] mb-4 text-[16px] font-semibold" style={{ fontFamily: "'Noto Serif SC', serif" }}>使命</div>
                  <p className="text-white" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.45rem", lineHeight: 1.5 }}>
                    传承炎黄文明，<br />书写教育未来。
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E8E4DE] p-6 sm:p-8 lg:p-10 min-h-[210px] flex items-end" style={{ borderRadius: 3 }}>
                <div>
                  <div className="text-[#8B1A1A] tracking-[0.08em] mb-4 text-[16px] font-semibold" style={{ fontFamily: "'Noto Serif SC', serif" }}>愿景</div>
                  <p className="text-[#1A1A1A]" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.45rem", lineHeight: 1.5 }}>
                    成为 AI 时代<br />高校知识资产基础设施。
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { num: "10年+", label: "高校数字化服务积累" },
                { num: "217所", label: "服务高校总数" },
                { num: "1000门+", label: "精品课程交付" },
                { num: "42所", label: "双一流院校覆盖" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-[#E8E4DE] p-5" style={{ borderRadius: 3 }}>
                  <div className="text-[#8B1A1A] mb-1.5" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "1.73rem", lineHeight: 1 }}>{item.num}</div>
                  <div className="text-[#999] text-[12.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
