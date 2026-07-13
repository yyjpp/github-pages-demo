import {
  Bot,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  FileText,
  GitBranch,
  GraduationCap,
  Search,
  MessageSquareMore,
  PencilLine,
  Presentation,
  Route,
  Users,
  Video,
  Workflow,
  UserCheck,
  LibraryBig,
  FileCheck2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type FeatureCard = {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const featureCards: FeatureCard[] = [
  {
    num: "01",
    title: "数字教材",
    desc: "可阅读 / 可互动 / 可更新",
    icon: BookOpen,
  },
  {
    num: "02",
    title: "课程视频",
    desc: "知识点视频 / 微课视频",
    icon: Video,
  },
  {
    num: "03",
    title: "教学PPT",
    desc: "自动生成 / 教学配套",
    icon: Presentation,
  },
  {
    num: "04",
    title: "知识点测评",
    desc: "随堂测评 / 章节练习",
    icon: ClipboardCheck,
  },
  {
    num: "05",
    title: "课程重难点学习路径",
    desc: "重难点梳理 / 个性化学习路径",
    icon: Route,
  },
  {
    num: "06",
    title: "四维图谱",
    desc: "知识图谱 / 能力图谱 / 问题图谱 / 思政图谱",
    icon: GitBranch,
  },
  {
    num: "07",
    title: "AI助教",
    desc: "答疑辅教 / 教学支持",
    icon: Bot,
  },
  {
    num: "08",
    title: "AI学伴",
    desc: "陪伴学习 / 个性化辅学",
    icon: Users,
  },
];

type UpdateFlowStep = {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const updateFlowSteps: UpdateFlowStep[] = [
  {
    num: "1",
    title: "教师上传新资料",
    desc: "新增内容进入课程资产池",
    icon: FileText,
  },
  {
    num: "2",
    title: "自动识别",
    desc: "标题、关键词、摘要和知识点",
    icon: Search,
  },
  {
    num: "3",
    title: "自动匹配",
    desc: "章节、知识点、教学目标和学习任务",
    icon: Workflow,
  },
  {
    num: "4",
    title: "教师审核后入库",
    desc: "确认质量后沉淀为课程资产",
    icon: UserCheck,
  },
  {
    num: "5",
    title: "一键验收",
    desc: "自动生成验收清单、验收报告",
    icon: FileCheck2,
  },
  {
    num: "6",
    title: "补充资源库",
    desc: "补充数字教材和课程资源库",
    icon: LibraryBig,
  },
  {
    num: "7",
    title: "同步调用",
    desc: "AI助教、AI学伴和课程图谱同步调用",
    icon: Bot,
  },
];

type UpdateSource = {
  label: string;
  icon: LucideIcon;
};

const updateSources: UpdateSource[] = [
  { label: "新论文", icon: FileText },
  { label: "新案例", icon: Briefcase },
  { label: "新课件", icon: Presentation },
  { label: "新视频", icon: Video },
  { label: "新任务", icon: ClipboardCheck },
  { label: "新作品", icon: PencilLine },
  { label: "新反馈", icon: MessageSquareMore },
  { label: "新科研成果", icon: GraduationCap },
];

const updateValues = [
  "知识更新更及时",
  "教学内容更新更前沿",
  "师生体验更优质",
  "课程资产更增值",
  "验收过程更高效、标准化、可追溯",
];

function FeatureCell({ num, title, desc, icon: Icon }: FeatureCard) {
  return (
    <div className="group flex h-full min-h-[132px] flex-col bg-white p-4 transition-colors duration-200 hover:bg-[#FDF8F5] sm:min-h-[144px] sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span
          className="text-[#D8D3CC]"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: "1.28rem",
            lineHeight: 1,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {num}
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8EAE7] text-[#B62A22] transition-colors duration-200 group-hover:bg-[#8B1A1A] group-hover:text-white">
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        </div>
      </div>
      <h3
        className="text-[#1A1A1A]"
        style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "1.05rem",
          lineHeight: 1.35,
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
      <p
        className="mt-3 text-[#666]"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "var(--text-small)",
          lineHeight: 1.7,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

function LifecycleNode({ step, className }: { step: UpdateFlowStep; className: string }) {
  const Icon = step.icon;

  return (
    <div
      className={`absolute z-20 flex h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#FF6A63] bg-white px-3 text-center shadow-[0_14px_26px_rgba(201,22,22,0.08)] ${className}`}
      aria-label={`第 ${step.num} 步：${step.title}，${step.desc}`}
    >
      <span
        className="absolute -left-1.5 -top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#C91616] text-white shadow-[0_7px_15px_rgba(201,22,22,0.22)]"
        style={{
          fontFamily: "'Libre Baskerville', Georgia, serif",
          fontSize: "1rem",
          lineHeight: 1,
          fontWeight: 700,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {step.num}
      </span>
      <Icon size={30} strokeWidth={1.8} className="mb-2 text-[#E01818]" aria-hidden="true" />
      <p
        className="text-[#1A1A1A]"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "13.5px",
          lineHeight: 1.42,
          fontWeight: 600,
        }}
      >
        {step.title}
      </p>
      <p
        className="mt-0.5 text-[#3F3532]"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "12px",
          lineHeight: 1.38,
        }}
      >
        {step.desc}
      </p>
    </div>
  );
}

function CenterLifecycleBadge() {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 flex h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-dashed border-[#FF8A84] bg-white text-center">
      <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-[10px] bg-[#D80909] text-white shadow-[0_16px_26px_rgba(201,22,22,0.18)]">
        <Presentation size={36} strokeWidth={1.8} aria-hidden="true" />
        <span className="absolute -right-1.5 -top-1.5 h-4 w-4 rounded-full bg-white" />
      </div>
      <p
        className="text-[#D80909]"
        style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "1.75rem",
          lineHeight: 1.18,
          fontWeight: 700,
        }}
      >
        持续更新
      </p>
      <p
        className="mt-2 text-[#1A1A1A]"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "15px",
          lineHeight: 1.5,
          fontWeight: 500,
        }}
      >
        课程资产开始生长
      </p>
    </div>
  );
}

function SourcePanelTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto -mt-4 flex h-9 min-w-[142px] items-center justify-center rounded-full bg-[#C91616] px-5 text-white shadow-[0_10px_18px_rgba(201,22,22,0.18)]">
      <span
        className="flex items-center gap-2"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "15px",
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        {children}
      </span>
    </div>
  );
}

function LifecycleDiagram() {
  return (
    <div className="relative mx-auto h-[520px] w-full min-w-[620px] max-w-[680px]" aria-label="课程交付后持续更新与验收闭环">
      <svg
        className="absolute inset-0 h-full w-full text-[#D80909]"
        viewBox="0 0 680 520"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker id="lifecycle-arrow" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">
            <path d="M0 0L14 7L0 14Z" fill="currentColor" />
          </marker>
          <filter id="lifecycle-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="4" floodColor="#C91616" floodOpacity="0.16" />
          </filter>
        </defs>
        <path d="M248 68C300 24 386 26 435 72" stroke="currentColor" strokeWidth="10" strokeLinecap="round" filter="url(#lifecycle-soft-shadow)" markerEnd="url(#lifecycle-arrow)" />
        <path d="M502 129C546 168 556 226 528 279" stroke="currentColor" strokeWidth="10" strokeLinecap="round" filter="url(#lifecycle-soft-shadow)" markerEnd="url(#lifecycle-arrow)" />
        <path d="M503 345C456 425 361 454 278 420" stroke="currentColor" strokeWidth="10" strokeLinecap="round" filter="url(#lifecycle-soft-shadow)" markerEnd="url(#lifecycle-arrow)" />
        <path d="M207 421C121 397 70 323 80 236" stroke="currentColor" strokeWidth="10" strokeLinecap="round" filter="url(#lifecycle-soft-shadow)" markerEnd="url(#lifecycle-arrow)" />
        <path d="M91 185C106 116 149 75 212 58" stroke="currentColor" strokeWidth="10" strokeLinecap="round" filter="url(#lifecycle-soft-shadow)" markerEnd="url(#lifecycle-arrow)" />
        <path d="M265 246C286 221 302 207 332 195" stroke="currentColor" strokeWidth="8" strokeLinecap="round" markerEnd="url(#lifecycle-arrow)" />
      </svg>

      <CenterLifecycleBadge />
      <LifecycleNode step={updateFlowSteps[0]} className="left-[50%] top-[13%]" />
      <LifecycleNode step={updateFlowSteps[1]} className="left-[83%] top-[27%]" />
      <LifecycleNode step={updateFlowSteps[2]} className="left-[84%] top-[61%]" />
      <LifecycleNode step={updateFlowSteps[3]} className="left-[66%] top-[86%]" />
      <LifecycleNode step={updateFlowSteps[4]} className="left-[36%] top-[86%]" />
      <LifecycleNode step={updateFlowSteps[5]} className="left-[17%] top-[62%]" />
      <LifecycleNode step={updateFlowSteps[6]} className="left-[18%] top-[28%]" />
    </div>
  );
}

function UpdateStepCard({ num, title, desc, icon: Icon }: UpdateFlowStep) {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-3 rounded-[6px] border border-[#F2B6B2] bg-white p-4 shadow-[0_8px_18px_rgba(201,22,22,0.06)]">
      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#FF6A63] bg-white text-[#E01818]"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "13px",
          lineHeight: 1,
          fontWeight: 600,
        }}
      >
        <Icon size={23} strokeWidth={1.85} aria-hidden="true" />
        <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C91616] text-[11px] text-white">
          {num}
        </span>
      </div>
      <div>
        <h3
          className="text-[#1A1A1A]"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "1rem",
            lineHeight: 1.35,
            fontWeight: 600,
          }}
        >
          {title}
        </h3>
        <p
          className="mt-1.5 text-[#5E504B]"
          style={{
            fontFamily: "'Noto Sans SC', sans-serif",
            fontSize: "var(--text-small)",
            lineHeight: 1.65,
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

function UpdateSourceRow({ label, icon: Icon }: UpdateSource) {
  return (
    <div className="flex min-h-[38px] items-center gap-3 rounded-[6px] border border-[#EFE1DC] bg-white px-4 py-2 shadow-[0_5px_12px_rgba(85,45,32,0.04)]">
      <Icon size={18} strokeWidth={1.85} className="shrink-0 text-[#E01818]" aria-hidden="true" />
      <span
        className="text-[#1A1A1A]"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "15px",
          lineHeight: 1.35,
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function ProductFeatures() {
  return (
    <>
      <section id="product-features" className="section-shell bg-[#F8F6F2]">
        <div className="page-shell">
          <div className="mb-10 lg:mb-12">
            <div className="max-w-[820px]">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-5 bg-[#8B1A1A]" />
                <span
                  className="text-[10.5px] uppercase tracking-[0.18em] text-[#8B1A1A]"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  Product Features
                </span>
              </div>
              <h2
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "var(--type-section-title)",
                  lineHeight: 1.25,
                  fontWeight: 600,
                }}
              >
                一键建课能力
              </h2>
              <p
                className="mobile-copy mt-5 text-[#666]"
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "var(--text-body)",
                  lineHeight: 1.85,
                  maxWidth: "76ch",
                  whiteSpace: "nowrap",
                }}
              >
                <span>
                  交付的不只是文件，而是一门可运行、可学习、可更新的课程。
                </span>
                将课程大纲、课件、案例与实践任务统一解析，自动组织为可交付、可运行、可持续迭代的课程知识资产。
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-6">
            <article className="overflow-hidden rounded-[4px] border border-[#E1D9D2] bg-white shadow-[0_1px_0_rgba(255,255,255,0.82)_inset] lg:col-span-3">
              <div className="border-b border-[#7A1616] bg-[#8B1A1A] px-5 py-4">
                <span
                  className="mb-2 block text-[#FBE7D0]"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "var(--text-caption)",
                    lineHeight: 1.4,
                    letterSpacing: "0.04em",
                  }}
                >
                  Input
                </span>
                <div
                  className="text-white"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "1.18rem",
                    lineHeight: 1.35,
                    fontWeight: 600,
                  }}
                >
                  教师资料输入
                </div>
                <p
                  className="mt-2 text-[#F3E7E2]"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "var(--text-small)",
                    lineHeight: 1.55,
                  }}
                >
                  智能解析后支持按需结构化输出
                </p>
              </div>
              <div className="px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
                <div className="flex min-h-[124px] flex-col items-center justify-center rounded-[4px] bg-[#FFFDFC]">
                  <FileText size={58} strokeWidth={1.55} className="text-[#8B1A1A]" aria-hidden="true" />
                </div>
                <div className="my-5 h-px bg-[#E8E4DE]" />
                <p
                  className="text-center text-black"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "var(--text-body)",
                    lineHeight: 1.85,
                  }}
                >
                  课程大纲 / 论文 /
                  <br />
                  案例 / PPT /
                  <br />
                  实践任务
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[4px] border border-[#E1D9D2] bg-white shadow-[0_1px_0_rgba(255,255,255,0.82)_inset] lg:col-span-9">
              <div className="border-b border-[#7A1616] bg-[#8B1A1A] px-5 py-4 sm:px-6">
                <span
                  className="mb-2 block text-[#FBE7D0]"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "var(--text-caption)",
                    lineHeight: 1.4,
                    letterSpacing: "0.04em",
                  }}
                >
                  Output
                </span>
                <div
                  className="text-white"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "1.18rem",
                    lineHeight: 1.35,
                    fontWeight: 600,
                  }}
                >
                  课程成果组件
                </div>
                <p
                  className="mt-2 text-[#F3E7E2]"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "var(--text-small)",
                    lineHeight: 1.7,
                  }}
                >
                  覆盖备课、授课、练习、评价与陪伴学习
                </p>
              </div>
              <div className="grid gap-px bg-[#E8E4DE] sm:grid-cols-2 xl:grid-cols-4">
                {featureCards.map((card) => (
                  <FeatureCell key={card.title} {...card} />
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="page-shell">
          <div className="mb-8 lg:mb-10">
            <div className="max-w-[1080px]">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-5 bg-[#8B1A1A]" />
                <span
                  className="text-[10.5px] uppercase tracking-[0.18em] text-[#8B1A1A]"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  Course Lifecycle
                </span>
              </div>
              <h2
                className="mobile-wrap text-[#1A1A1A] lg:whitespace-nowrap"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "var(--type-section-title)",
                  lineHeight: 1.25,
                  fontWeight: 600,
                }}
              >
                交付后课程 “一键更新” “一键验收”
              </h2>
              <p
                className="mobile-copy mt-5 text-[#666] lg:whitespace-nowrap"
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "var(--text-body)",
                  lineHeight: 1.85,
                  maxWidth: "none",
                }}
              >
                课程交付后，教师新增资料可被持续解析、审核、入库，并驱动数字教材、课程资源库、AI 应用与课程图谱同步更新。
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(430px,0.92fr)_minmax(500px,1.08fr)] lg:items-start lg:gap-12">
            <article className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
              <div className="hidden md:block">
                <LifecycleDiagram />
              </div>

              <div className="grid gap-3 md:hidden">
                {updateFlowSteps.map((step) => (
                  <UpdateStepCard key={step.num} {...step} />
                ))}
                <div className="rounded-[4px] bg-[#F3F1EE] px-4 py-3 text-[#1A1A1A]">
                  <p
                    style={{
                      fontFamily: "'Noto Serif SC', serif",
                      fontSize: "1rem",
                      lineHeight: 1.45,
                      fontWeight: 600,
                    }}
                  >
                    开启新一轮
                  </p>
                  <p
                    className="mt-1 text-[#666]"
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "var(--text-small)",
                      lineHeight: 1.65,
                    }}
                  >
                    课程资产持续更新，形成可复用、可验收、可增长的闭环。
                  </p>
                </div>
              </div>
            </article>

            <aside className="grid gap-4 lg:gap-5">
              <section className="min-h-[190px] bg-[#D9D8D6] px-6 py-6 sm:min-h-[232px] sm:px-8 lg:px-9">
                <h3
                  className="text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "1rem",
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  更新来源
                </h3>
                <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {updateSources.map((source) => (
                    <UpdateSourceRow key={source.label} {...source} />
                  ))}
                </div>
              </section>

              <section className="min-h-[160px] bg-[#D9D8D6] px-6 py-6 sm:min-h-[156px] sm:px-8 lg:px-9">
                <h3
                  className="text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "1rem",
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  更新价值
                </h3>
                <div className="mt-7 flex flex-wrap gap-2">
                  {updateValues.map((value) => (
                    <span
                      key={value}
                      className="rounded-full bg-white/62 px-3 py-1.5 text-[#2F2B28]"
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.35,
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
