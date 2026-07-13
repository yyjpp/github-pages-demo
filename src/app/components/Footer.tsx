import { Phone, Mail, MapPin } from "lucide-react";

type FooterProps = {
  onRequestDemo: () => void;
};

export function Footer({ onRequestDemo }: FooterProps) {
  const footerTextStyle = {
    color: "#D8D3CE",
    fontFamily: "'Noto Sans SC', sans-serif",
    fontSize: "var(--text-small)",
    fontWeight: 400,
    lineHeight: 1.75,
  };
  void onRequestDemo;

  return (
    <footer className="bg-[#1C1917]">
      <div className="page-shell py-14">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5">
            <div className="flex items-center mb-5">
              <span style={{ ...footerTextStyle, fontWeight: 700 }}>炎书AI</span>
            </div>
            <p className="mb-2 font-normal" style={footerTextStyle}>中国高校知识引擎</p>
            <p className="mb-6 font-normal" style={{ ...footerTextStyle, maxWidth: "44ch" }}>
              帮助高校将课程资源、教材资源、教师经验和教学成果，转化为 AI 可调用、教师可复用、学生可学习、学校可管理的知识资产。
            </p>
            <div className="space-y-1.5">
              <p className="font-normal" style={footerTextStyle}>使命：传承炎黄文明，书写教育未来。</p>
              <p className="font-normal" style={footerTextStyle}>愿景：成为 AI 时代高校知识资产基础设施。</p>
            </div>
          </div>

          <div className="flex justify-start lg:col-span-4 lg:col-start-9 lg:justify-end">
            <div className="w-fit text-left">
              <p className="mb-5" style={{ ...footerTextStyle, fontWeight: 700 }}>联系我们</p>
              <div className="space-y-3.5">
                <div className="flex items-center justify-start gap-3 font-normal" style={footerTextStyle}>
                  <Phone size={13} className="shrink-0" color="#D8D3CE" strokeWidth={1.5} />
                  <span style={{ ...footerTextStyle, textAlign: "left" }}>电话：请联系我们获取</span>
                </div>
                <div className="flex items-center justify-start gap-3 font-normal" style={footerTextStyle}>
                  <Mail size={13} className="shrink-0" color="#D8D3CE" strokeWidth={1.5} />
                  <span style={{ ...footerTextStyle, textAlign: "left" }}>info@yanshuedu.com</span>
                </div>
                <div className="flex items-start justify-start gap-3 font-normal" style={footerTextStyle}>
                  <MapPin size={13} className="mt-0.5 shrink-0" color="#D8D3CE" strokeWidth={1.5} />
                  <span style={{ ...footerTextStyle, textAlign: "left" }}>深圳市燧光明科技有限公司</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2E2A27] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-normal" style={{ ...footerTextStyle, fontSize: "var(--text-caption)" }}>
            © 2026 深圳市燧光明科技有限公司 All Rights Reserved.
          </p>
          <p className="font-normal" style={{ ...footerTextStyle, fontSize: "var(--text-caption)" }}>炎书AI——中国高校知识引擎平台</p>
        </div>
      </div>
    </footer>
  );
}
