import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  FolderOpen,
  GitBranch,
  GraduationCap,
  MessageSquareMore,
  PencilLine,
  Presentation,
  RefreshCw,
  Route,
  ScanSearch,
  Search,
  UploadCloud,
  UserCheck,
  Users,
  Video,
  Waypoints,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";

type FlowStep = {
  num: string;
  title: string;
  detail?: string;
  icon: LucideIcon;
  x: number;
  y: number;
};

type UpdateSource = {
  label: string;
  icon: LucideIcon;
};

type GeneratedFeature = {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const AUTO_FLOW_HOVER_MS = 3000;

const flowSteps: FlowStep[] = [
  { num: "1", title: "更新资料", detail: "上传新资料", icon: UploadCloud, x: 108, y: 88 },
  { num: "2", title: "自动识别", detail: "结构化识别内容", icon: ScanSearch, x: 362, y: 88 },
  { num: "3", title: "自动匹配", detail: "资源自动匹配关联知识点", icon: Waypoints, x: 616, y: 88 },
  { num: "4", title: "二次审核", detail: "支持人工审核", icon: UserCheck, x: 616, y: 262 },
  { num: "5", title: "成果生成", detail: "自动生成建设成果报告与支持材料", icon: BadgeCheck, x: 616, y: 436 },
  { num: "6", title: "自动补充", detail: "补充数字教材与资源库", icon: BookOpenCheck, x: 362, y: 436 },
  { num: "7", title: "同步调用", detail: "AI助教、学伴等同步调用", icon: Bot, x: 108, y: 436 },
];

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

const generatedFeatures: GeneratedFeature[] = [
  { num: "1", title: "数字教材", desc: "可阅读 / 可互动 / 可更新", icon: BookOpen },
  { num: "2", title: "课程视频", desc: "知识点视频 / 微课视频", icon: Video },
  { num: "3", title: "教学PPT", desc: "自动生成 / 教学配套", icon: Presentation },
  { num: "4", title: "知识点测评", desc: "随堂测评 / 章节练习", icon: ClipboardCheck },
  { num: "5", title: "课程重难点学习路径", desc: "重难点梳理 / 个性化学习路径", icon: Route },
  { num: "6", title: "四维图谱", desc: "知识图谱 / 能力图谱 / 问题图谱 / 思政图谱", icon: GitBranch },
  { num: "7", title: "AI助教", desc: "答疑辅教 / 教学支持", icon: Bot },
  { num: "8", title: "AI学伴", desc: "陪伴学习 / 个性化辅学", icon: Users },
];

function SectionKicker() {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px w-5 bg-[#8B1A1A]" />
      <span
        className="uppercase tracking-[0.18em] text-[#8B1A1A]"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "10.5px",
          lineHeight: 1,
        }}
      >
        Product Features
      </span>
    </div>
  );
}

function FlowNode({ step, isActive = false }: { step: FlowStep; isActive?: boolean }) {
  const Icon = step.icon;
  const displayTitle = `${step.num}. ${step.title}`;

  return (
    <div
      data-active={isActive ? "true" : undefined}
      className="group absolute z-10 h-[136px] w-[136px] overflow-hidden rounded-full border border-[#E7CFC6] bg-[#FFFDFC] text-center shadow-[0_16px_32px_rgba(139,26,26,0.08)] outline-none transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#8B1A1A] hover:bg-[#8B1A1A] hover:shadow-[0_22px_42px_rgba(139,26,26,0.18)] focus-visible:border-[#8B1A1A] focus-visible:bg-[#8B1A1A] focus-visible:ring-2 focus-visible:ring-[#D9B66F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF7] data-[active=true]:border-[#8B1A1A] data-[active=true]:bg-[#8B1A1A] data-[active=true]:shadow-[0_22px_42px_rgba(139,26,26,0.18)] motion-reduce:transition-none"
      style={{
        left: step.x,
        top: step.y,
        transform: "translate(-50%, -50%)",
      }}
      aria-label={`第 ${step.num} 步：${step.title}${step.detail ? `，${step.detail}` : ""}`}
      role="group"
      tabIndex={0}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:opacity-0 group-focus-visible:-translate-y-2 group-focus-visible:opacity-0 group-data-[active=true]:-translate-y-2 group-data-[active=true]:opacity-0 motion-reduce:transition-none">
        <span className="mb-2 flex items-center justify-center text-[#8B1A1A]">
          <Icon size={30} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span
          className="text-[#1A1A1A]"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "15px",
            lineHeight: 1.28,
            fontWeight: 600,
          }}
        >
          {displayTitle}
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[active=true]:opacity-100 motion-reduce:transition-none">
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFF9F2]/[0.13]"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: "76px",
            lineHeight: 0.88,
            fontWeight: 700,
            fontVariantNumeric: "tabular-nums",
          }}
          aria-hidden="true"
        >
          {step.num}
        </span>
        <span
          className="relative text-[#FFF9F2]"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "15px",
            lineHeight: 1.28,
            fontWeight: 650,
          }}
        >
          {step.title}
        </span>
        {step.detail && (
          <span
            className="relative mt-2 max-w-[96px] text-[#F5EEE5]"
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "11.5px",
              lineHeight: 1.42,
              fontWeight: 400,
            }}
          >
            {step.detail}
          </span>
        )}
      </div>
    </div>
  );
}

function RenewNode() {
  return (
    <div
      className="group absolute z-10 h-[136px] w-[136px] overflow-hidden rounded-full border border-[#E7CFC6] bg-[#FFFDFC] text-center shadow-[0_16px_32px_rgba(139,26,26,0.08)] outline-none transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#8B1A1A] hover:bg-[#8B1A1A] hover:shadow-[0_22px_42px_rgba(139,26,26,0.18)] focus-visible:border-[#8B1A1A] focus-visible:bg-[#8B1A1A] focus-visible:ring-2 focus-visible:ring-[#D9B66F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF7] motion-reduce:transition-none"
      style={{ left: 108, top: 262, transform: "translate(-50%, -50%)" }}
      aria-label="开启新一轮"
      role="group"
      tabIndex={0}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:opacity-0 group-focus-visible:-translate-y-2 group-focus-visible:opacity-0 motion-reduce:transition-none">
        <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5EEE5] text-[#8B1A1A] shadow-[0_7px_16px_rgba(139,26,26,0.08)]">
          <RefreshCw size={18} strokeWidth={1.85} aria-hidden="true" />
        </span>
        <span
          className="text-[#8B1A1A]"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "16px",
            lineHeight: 1.38,
            fontWeight: 600,
          }}
        >
          开启新一轮
        </span>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 opacity-0 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
        <RefreshCw
          size={62}
          strokeWidth={1.45}
          className="pointer-events-none absolute right-2 top-3 text-[#FFF9F2]/[0.14]"
          aria-hidden="true"
        />
        <span
          className="relative text-[#FFF9F2]"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "15px",
            lineHeight: 1.35,
            fontWeight: 650,
          }}
        >
          开启新一轮
        </span>
        <span
          className="relative mt-2 max-w-[92px] text-[#F5EEE5]"
          style={{
            fontFamily: "'Noto Sans SC', sans-serif",
            fontSize: "11.5px",
            lineHeight: 1.42,
          }}
        >
          新资料再次进入更新闭环
        </span>
      </div>
    </div>
  );
}

function FlowDiagram() {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const cycleTimer = window.setInterval(() => {
      setActiveFlowIndex((current) => (current + 1) % flowSteps.length);
    }, AUTO_FLOW_HOVER_MS);

    return () => window.clearInterval(cycleTimer);
  }, []);

  return (
    <div
      className="relative h-[524px] w-[720px] xl:-translate-x-[40px] xl:origin-top-left xl:scale-[1.06]"
      aria-label="交付后课程一键更新与一键验收闭环"
    >
      <svg
        className="absolute inset-0 h-full w-full text-[#8B1A1A]"
        viewBox="0 0 720 524"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <marker id="product-highlights-arrow" markerWidth="10" markerHeight="10" refX="8.5" refY="5" orient="auto">
            <path d="M0 0L10 5L0 10Z" fill="currentColor" />
          </marker>
        </defs>
        <path d="M176 88H294" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#product-highlights-arrow)" />
        <path d="M430 88H548" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#product-highlights-arrow)" />
        <path d="M616 156V194" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#product-highlights-arrow)" />
        <path d="M616 330V368" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#product-highlights-arrow)" />
        <path d="M548 436H430" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#product-highlights-arrow)" />
        <path d="M294 436H176" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#product-highlights-arrow)" />
        <path d="M108 368V330" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#product-highlights-arrow)" />
        <path d="M108 194V156" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#product-highlights-arrow)" />
      </svg>

      {flowSteps.map((step, index) => (
        <FlowNode key={step.num} step={step} isActive={index === activeFlowIndex} />
      ))}
      <RenewNode />

      <div
        className="absolute z-10 w-[320px] text-center"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <p
          className="text-[#8B1A1A]"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "1.5rem",
            lineHeight: 1.45,
            fontWeight: 700,
          }}
        >
          持续更新
        </p>
        <p
          className="mt-1 text-[#3D3430]"
          style={{
            fontFamily: "'Noto Sans SC', sans-serif",
            fontSize: "13px",
            lineHeight: 1.50,
          }}
        >
          让课程资产进入自我生长的良性循环，<br />
          越用越新，越用越好，越用越值
        </p>
      </div>
    </div>
  );
}

function SourceRow({ source }: { source: UpdateSource }) {
  const Icon = source.icon;

  return (
    <div className="flex min-h-10 items-center gap-3 rounded-[3px] border border-[#EFE1DC] bg-[#FFFDFC] px-3.5 py-2.5 shadow-[0_5px_12px_rgba(85,45,32,0.035)]">
      <Icon size={18} strokeWidth={1.85} className="shrink-0 text-[#8B1A1A]" aria-hidden="true" />
      <span
        className="text-[#1A1A1A]"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "15px",
          lineHeight: 1.35,
          fontWeight: 500,
        }}
      >
        {source.label}
      </span>
    </div>
  );
}

function PanelTitle({ icon: Icon, children }: { icon: LucideIcon; children: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-[3px] bg-[#8B1A1A] text-white shadow-[0_8px_16px_rgba(139,26,26,0.16)]">
        <Icon size={17} strokeWidth={1.9} aria-hidden="true" />
      </span>
      <h3
        className="text-[#1A1A1A]"
        style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "1rem",
          lineHeight: 1.4,
          fontWeight: 600,
        }}
      >
        {children}
      </h3>
    </div>
  );
}

function TeacherInputCard() {
  return (
    <article className="overflow-hidden rounded-[6px] border border-[#D8B7AA] bg-[#FFFDFC] shadow-[0_18px_34px_rgba(84,58,45,0.08)]">
      <div className="bg-[#8B1A1A] px-4 py-3 text-center shadow-[0_1px_0_rgba(255,255,255,0.24)_inset]">
        <h3
          className="text-white"
          style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "1.08rem",
            lineHeight: 1.35,
            fontWeight: 700,
          }}
        >
          教师资料输入
        </h3>
      </div>

      <div className="flex min-h-[306px] flex-col items-center px-5 pb-8 pt-7 sm:min-h-[322px] lg:px-4 xl:px-5">
        <div className="flex h-[108px] w-[124px] items-center justify-center text-[#8B1A1A]" aria-hidden="true">
          <FolderOpen size={90} strokeWidth={1.65} />
        </div>

        <div className="mt-8 h-px w-full bg-[#D8D3CC]" />

        <p
          className="mt-5 text-center text-[#2D2926]"
          style={{
            fontFamily: "'Noto Sans SC', sans-serif",
            fontSize: "15.5px",
            lineHeight: 1.85,
            fontWeight: 400,
          }}
        >
          课程大纲 / 论文 /<br />
          案例 / PPT /<br />
          实践任务
        </p>
      </div>
    </article>
  );
}

function FeatureOutputCard({ feature }: { feature: GeneratedFeature }) {
  const Icon = feature.icon;

  return (
    <article className="group flex min-h-[156px] flex-col items-center rounded-[6px] border border-[#E2C8BC] bg-[#FFFDFC] px-3.5 pb-4 pt-5 text-center shadow-[0_10px_22px_rgba(84,58,45,0.05)] transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#8B1A1A] hover:shadow-[0_18px_30px_rgba(139,26,26,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#F5EEE5] text-[#8B1A1A] transition-colors duration-300 group-hover:bg-[#8B1A1A] group-hover:text-[#FFF9F2]">
        <Icon size={36} strokeWidth={1.75} aria-hidden="true" />
      </div>

      <h3
        className="mt-2.5 text-[#8B1A1A]"
        style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "15.5px",
          lineHeight: 1.35,
          fontWeight: 700,
        }}
      >
        {feature.num}. {feature.title}
      </h3>

      <div className="mt-2.5 h-px w-full bg-[#D8D3CC]" />

      <p
        className="mt-2.5 max-w-[190px] text-[#2D2926]"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "13.5px",
          lineHeight: 1.55,
          fontWeight: 500,
        }}
      >
        {feature.desc}
      </p>
    </article>
  );
}

function OutputSectionHeader() {
  return (
    <div className="flex min-h-12 items-center justify-center rounded-[6px] bg-[#8B1A1A] px-5 text-center text-[#FFF9F2] shadow-[0_12px_24px_rgba(139,26,26,0.12)]">
      <span
        style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "1.05rem",
          lineHeight: 1.35,
          fontWeight: 700,
        }}
      >
        智能解析 - 自动生成 - 结构化输出
      </span>
    </div>
  );
}

function ProductFeatureBuildPage() {
  return (
    <section id="product-features" className="section-shell bg-[#FDFBF7]" aria-label="产品特点：教师资料输入与课程成果组件">
      <div className="page-shell">
        <div className="mb-7 max-w-[1180px] lg:mb-8">
          <SectionKicker />
          <h2
            className="text-[#1A1A1A]"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              fontSize: "var(--type-section-title)",
              lineHeight: 1.25,
              fontWeight: 600,
            }}
          >
            全流程辅助建课
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
            从教师原始资料快速生成四维图谱、数字教材、视频、PPT、评测题与AI智能体。
          </p>
        </div>

        <div className="mx-auto max-w-[1248px]">
          <div className="grid items-center gap-5 lg:grid-cols-[184px_52px_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[190px_58px_minmax(0,1fr)]">
            <TeacherInputCard />

            <div className="flex justify-center text-[#8B1A1A]" aria-hidden="true">
              <span className="flex h-12 w-12 rotate-90 items-center justify-center lg:rotate-0">
                <ArrowRight size={46} strokeWidth={2.4} fill="currentColor" />
              </span>
            </div>

            <div className="grid gap-3">
              <OutputSectionHeader />

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {generatedFeatures.map((feature) => (
                  <FeatureOutputCard key={feature.num} feature={feature} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[6px] border border-[#E1CDBD] bg-[#F5EEE5] px-5 py-4 text-center shadow-[0_14px_28px_rgba(84,58,45,0.055)] sm:px-7">
            <p
              className="mx-auto max-w-[820px] text-[#1A1A1A]"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "1.12rem",
                lineHeight: 1.7,
                fontWeight: 600,
              }}
            >
              我们交付的不只是文件，而是一门可运行、可学习、可更新的课程。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductHighlights() {
  return (
    <>
      <ProductFeatureBuildPage />

      <section className="section-shell bg-white">
        <div className="page-shell product-highlights-shell">
          <div className="mb-7 max-w-[1180px] lg:mb-8">
            <SectionKicker />
            <h2
              className="text-[#1A1A1A]"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                fontSize: "var(--type-section-title)",
                lineHeight: 1.25,
                fontWeight: 600,
              }}
            >
              内容便捷更新 与 建设成果辅助生成
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

          <div className="grid gap-8 xl:grid-cols-[724px_508px] xl:items-start xl:justify-start xl:gap-8">
            <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 xl:h-[556px] xl:w-[764px] xl:overflow-visible">
              <FlowDiagram />
            </div>

            <aside className="flex flex-col gap-3 lg:gap-3 xl:h-[556px] xl:w-[508px] xl:justify-between">
              <section className="min-h-[220px] rounded-[4px] border border-[#E8DCD4] bg-[#F5EEE5] px-5 py-4 shadow-[0_16px_34px_rgba(84,58,45,0.055)] sm:px-6">
                <PanelTitle icon={Search}>更新来源</PanelTitle>
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {updateSources.map((source) => (
                    <SourceRow key={source.label} source={source} />
                  ))}
                </div>
              </section>

              <section className="min-h-[118px] rounded-[4px] border border-[#E8DCD4] bg-[#F5EEE5] px-5 py-[14px] shadow-[0_16px_34px_rgba(84,58,45,0.055)] sm:px-6">
                <PanelTitle icon={CheckCircle2}>更新价值</PanelTitle>
                <p
                  className="mt-4 text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.78,
                  }}
                >
                  知识更新更及时，教学内容更前沿，体验更优质，课程资产更增值。
                </p>
              </section>

              <section className="min-h-[104px] rounded-[4px] border border-[#E8DCD4] bg-[#F5EEE5] px-5 py-[14px] shadow-[0_16px_34px_rgba(84,58,45,0.055)] sm:px-6">
                <PanelTitle icon={BadgeCheck}>成果辅助生成</PanelTitle>
                <p
                  className="mt-4 text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.78,
                  }}
                >
                  让建设成果的检验更高效，真正实现标准化、可追溯。
                </p>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
