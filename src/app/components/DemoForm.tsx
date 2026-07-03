import { useState } from "react";
import { CheckCircle, ChevronUp } from "lucide-react";

const interests = ["智慧课程建设", "数字教材建设", "专业群知识引擎", "AI 智能体", "区域职教平台", "投资或生态合作"];

type DemoFormProps = {
  title: string;
  onClose: () => void;
};

export function DemoForm({ title, onClose }: DemoFormProps) {
  const [form, setForm] = useState({ name: "", org: "", title: "", phone: "", wechat: "", message: "" });
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggle = (item: string) =>
    setSelected((prev) => prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "请填写姓名";
    if (!form.org.trim()) e.org = "请填写单位";
    if (!form.phone.trim()) e.phone = "请填写手机号";
    else if (!/^1[3-9]\d{9}$/.test(form.phone)) e.phone = "请填写正确的手机号";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const fieldClass = (field: string) =>
    `touch-target w-full pb-2.5 pt-1 bg-transparent text-base sm:text-sm text-[#1A1A1A] border-b outline-none transition-colors placeholder-[#C5C0B8] ${
      errors[field] ? "border-red-400 focus:border-red-500" : "border-[#E8E4DE] focus:border-[#8B1A1A]"
    }`;

  return (
    <section id="demo-form" className="bg-white section-shell">
      <div className="form-shell">
        <div className="mb-10 sm:mb-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-px bg-[#8B1A1A]" />
              <span className="text-[#8B1A1A] tracking-[0.18em] uppercase text-[10.5px]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>CONTACT US</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="touch-target inline-flex shrink-0 items-center gap-1.5 border border-[#E8E4DE] px-3 py-1.5 font-normal text-[#777] transition-colors hover:border-[#8B1A1A] hover:text-[#8B1A1A]"
              style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-caption)", fontWeight: 400, borderRadius: 2 }}
            >
              <ChevronUp size={14} strokeWidth={1.6} />
              收起
            </button>
          </div>
          <h2 className="text-[#1A1A1A] mb-3" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "var(--type-section-title)", lineHeight: 1.25 }}>
            {title}
          </h2>
          <p className="text-[#999]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)" }}>留下您的信息，我们将在 1 个工作日内与您联系。</p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <CheckCircle size={44} className="text-[#8B1A1A] mx-auto mb-5" strokeWidth={1.5} />
            <h3 className="text-[#1A1A1A] mb-2" style={{ fontFamily: "'Noto Serif SC', serif", fontSize: "1.26rem" }}>提交成功</h3>
            <p className="text-[#999]" style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-body)" }}>我们将在 1 个工作日内与您联系。</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-7 sm:gap-8">
              <div>
                <label className="block text-[10.5px] text-[#AAAAAA] uppercase tracking-[0.14em] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>姓名 <span className="text-red-400">*</span></label>
                <input className={fieldClass("name")} placeholder="您的姓名" value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }} />
                {errors.name && <p className="text-red-400 text-[11.5px] mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-[10.5px] text-[#AAAAAA] uppercase tracking-[0.14em] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>单位 <span className="text-red-400">*</span></label>
                <input className={fieldClass("org")} placeholder="您的单位或院校" value={form.org}
                  onChange={(e) => { setForm({ ...form, org: e.target.value }); setErrors({ ...errors, org: "" }); }} />
                {errors.org && <p className="text-red-400 text-[11.5px] mt-1">{errors.org}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-7 sm:gap-8">
              <div>
                <label className="block text-[10.5px] text-[#AAAAAA] uppercase tracking-[0.14em] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>职务</label>
                <input className={fieldClass("title")} placeholder="您的职务" value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })} />
              </div>
              <div>
                <label className="block text-[10.5px] text-[#AAAAAA] uppercase tracking-[0.14em] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>手机号 <span className="text-red-400">*</span></label>
                <input className={fieldClass("phone")} placeholder="11 位手机号" value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }} />
                {errors.phone && <p className="text-red-400 text-[11.5px] mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-[10.5px] text-[#AAAAAA] uppercase tracking-[0.14em] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>微信号</label>
              <input className={fieldClass("wechat")} placeholder="便于及时联系" value={form.wechat}
                onChange={(e) => setForm({ ...form, wechat: e.target.value })} />
            </div>

            <div>
              <label className="block text-[10.5px] text-[#AAAAAA] uppercase tracking-[0.14em] mb-3" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>关注方向</label>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <button type="button" key={item} onClick={() => toggle(item)}
                    className={`touch-target px-3 py-2 text-[13px] font-normal border transition-colors ${
                      selected.includes(item)
                        ? "bg-[#8B1A1A] text-white border-[#8B1A1A]"
                        : "bg-white text-[#666] border-[#E8E4DE] hover:border-[#8B1A1A] hover:text-[#8B1A1A]"
                    }`}
                    style={{ fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 400, borderRadius: 2 }}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10.5px] text-[#AAAAAA] uppercase tracking-[0.14em] mb-2" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>留言</label>
              <textarea
                className="w-full min-h-[132px] pb-2.5 pt-1 bg-transparent text-base sm:text-sm text-[#1A1A1A] border-b border-[#E8E4DE] outline-none focus:border-[#8B1A1A] transition-colors resize-none placeholder-[#C5C0B8]"
                rows={4} placeholder="请简单描述您的需求。"
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>

            <div className="pt-2">
              <button type="submit"
                className="touch-target w-full py-4 bg-[#8B1A1A] text-white hover:bg-[#7A1616] transition-colors"
                style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "var(--text-ui)", letterSpacing: "0.08em", borderRadius: 2 }}>
                提交信息
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
