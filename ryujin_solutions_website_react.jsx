import React from "react";
import { motion } from "framer-motion";

// Ryujin Solutions - Single-file React landing page
// Tailwind CSS assumed available in the project.
// Replace image import with your own hosted path if deploying to production.
const logoSrc = "/mnt/data/Gemini_Generated_Image_rsjd87rsjd87rsjd.png";

export default function RyujinLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071431] to-[#072940] text-slate-100 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logoSrc} alt="Ryujin Solutions" className="w-14 h-14 object-contain rounded-full shadow-lg" />
          <div>
            <h1 className="text-xl font-bold tracking-tight">Ryujin Solutions</h1>
            <p className="text-sm text-slate-300">AI Automation & Intelligent Orchestration</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-slate-200">
          <a href="#solutions" className="hover:text-white">Solutions</a>
          <a href="#how" className="hover:text-white">How it Works</a>
          <a href="#usecases" className="hover:text-white">Use Cases</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-2 rounded-md font-semibold">Get a Demo</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Automate. Optimize. Scale.</h2>
            <p className="mt-4 text-slate-300 max-w-xl">
              Ryujin Solutions blends state-of-the-art agentic AI, robotic process automation, and secure orchestration to
              automate repetitive work, accelerate software delivery, and unlock new operational scale.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block bg-cyan-500 px-5 py-3 rounded-md font-semibold text-slate-900 shadow-md">Request Demo</a>
              <a href="#solutions" className="inline-block border border-slate-600 px-5 py-3 rounded-md text-slate-200">View Solutions</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md text-sm text-slate-300">
              <div>
                <div className="font-semibold">Time to Value</div>
                <div>Deploy in weeks, not months</div>
              </div>
              <div>
                <div className="font-semibold">Security-first</div>
                <div>Enterprise-grade governance & audits</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-md p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/6 shadow-xl">
              <img src={logoSrc} alt="Ryujin logo" className="w-full h-64 object-contain rounded-lg" />
            </div>
          </motion.div>
        </section>

        {/* Solutions / Services */}
        <section id="solutions" className="py-12">
          <h3 className="text-2xl font-bold">Our Solutions</h3>
          <p className="mt-2 text-slate-300 max-w-2xl">A modular suite built for enterprise automation, tailored to systems and teams of any size.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Agentic Automation",
                desc: "Autonomous agents that execute cross-system workflows, integrate with APIs, and reason over business rules.",
              },
              {
                title: "Intelligent RPA",
                desc: "Computer-vision and NLP-driven robots to automate legacy UI flows and document processing at scale.",
              },
              {
                title: "AI in SDLC",
                desc: "Tools that accelerate requirements-to-deploy: code generation, test automation, and CI/CD orchestration.",
              },
              {
                title: "Observability & Governance",
                desc: "Audit trails, explainability, role-based approvals and secure secrets management for regulated industries.",
              },
              {
                title: "Hyperautomation Center",
                desc: "Low-code builders, connectors, and dashboards so business users can compose automations without developers.",
              },
              {
                title: "Custom Integrations",
                desc: "Enterprise-grade connectors to ERPs, CRMs, cloud platforms, and on-prem systems — with SLA guarantees.",
              },
            ].map((s) => (
              <article key={s.title} className="rounded-xl p-6 bg-white/4 border border-white/6">
                <h4 className="font-semibold text-lg">{s.title}</h4>
                <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
                <div className="mt-4">
                  <a className="text-cyan-300 text-sm hover:underline" href="#contact">Request a pilot →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-12">
          <h3 className="text-2xl font-bold">How Ryujin Works</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/6">
              <div className="font-semibold">1. Discover</div>
              <p className="mt-2 text-slate-300 text-sm">We map processes, measure effort, and surface high ROI automation opportunities.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/6">
              <div className="font-semibold">2. Build</div>
              <p className="mt-2 text-slate-300 text-sm">Agent templates, reusable connectors, and secure pipelines bring reliable automations to life.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/6">
              <div className="font-semibold">3. Operate</div>
              <p className="mt-2 text-slate-300 text-sm">Monitoring, drift detection, and governed change management keep automations healthy and compliant.</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="usecases" className="py-12">
          <h3 className="text-2xl font-bold">Use Cases</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/4 rounded-xl border border-white/6">
              <h4 className="font-semibold">Finance & Accounting</h4>
              <p className="mt-2 text-slate-300 text-sm">Invoice processing, reconciliations, and compliance reporting — cut cycle time by 70%.</p>
            </div>
            <div className="p-6 bg-white/4 rounded-xl border border-white/6">
              <h4 className="font-semibold">Customer Operations</h4>
              <p className="mt-2 text-slate-300 text-sm">Case routing, customer verification, and SLA-driven responses — improve resolution times and CSAT.</p>
            </div>
            <div className="p-6 bg-white/4 rounded-xl border border-white/6">
              <h4 className="font-semibold">IT & DevOps</h4>
              <p className="mt-2 text-slate-300 text-sm">Automated incident triage, remediation scripts, and CI/CD acceleration for reliable deployments.</p>
            </div>
            <div className="p-6 bg-white/4 rounded-xl border border-white/6">
              <h4 className="font-semibold">HR & Talent</h4>
              <p className="mt-2 text-slate-300 text-sm">Onboarding workflows, credentialing, and background checks handled end-to-end with audit logs.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-12">
          <h3 className="text-2xl font-bold">Pricing & Engagement</h3>
          <p className="mt-2 text-slate-300 max-w-xl">We offer flexible engagement models tailored to your business size and outcomes. For accurate pricing — based on scope, integrations, and SLA — please contact our sales team.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="p-6 bg-white/4 rounded-xl border border-white/6">
              <h4 className="font-semibold text-lg">Custom Pricing</h4>
              <p className="mt-2 text-slate-300 text-sm">All pricing is quoted per project. Tell us about your needs and we'll propose a tailored plan.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/6 bg-white/4 flex flex-col items-start justify-center">
              <div className="font-semibold text-lg">Contact to get pricing details</div>
              <p className="mt-2 text-slate-300 text-sm">Prefer a quick chat? Schedule a call or request a demo and we'll prepare a pricing estimate.</p>
              <a href="#contact" className="mt-4 inline-block bg-cyan-500 px-5 py-3 rounded-md font-semibold text-slate-900">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <p className="mt-2 text-slate-300 max-w-2xl">Schedule a demo or start an automation discovery workshop.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form
              className="space-y-4 p-6 bg-white/5 rounded-xl border border-white/6"
              onSubmit={(e) => {
                e.preventDefault();
                // In a real app you'd wire this to an API endpoint or CRM.
                alert("Thanks! We'll contact you shortly.");
              }}
            >
              <div>
                <label className="block text-sm">Full name</label>
                <input required className="mt-1 w-full rounded-md px-3 py-2 bg-transparent border border-white/8" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm">Work email</label>
                <input required type="email" className="mt-1 w-full rounded-md px-3 py-2 bg-transparent border border-white/8" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm">Company</label>
                <input className="mt-1 w-full rounded-md px-3 py-2 bg-transparent border border-white/8" placeholder="Company name" />
              </div>
              <div>
                <label className="block text-sm">How can we help?</label>
                <textarea className="mt-1 w-full rounded-md px-3 py-2 bg-transparent border border-white/8" rows={4} placeholder="e.g. automate invoice processing"></textarea>
              </div>
              <button type="submit" className="bg-cyan-500 px-4 py-2 rounded-md font-semibold text-slate-900">Request demo</button>
            </form>

            <div className="p-6 rounded-xl border border-white/6 bg-white/4">
              <h4 className="font-semibold">Quick contacts</h4>
              <p className="mt-3 text-slate-300 text-sm">Email: <a href="mailto:RyujinSolutions@gmail.com" className="text-cyan-300">RyujinSolutions@gmail.com</a></p>

              <div className="mt-6">
                <div className="font-semibold">Security & Compliance</div>
                <p className="mt-2 text-slate-300 text-sm">SOC2-ready processes, role-based access, and end-to-end encryption for sensitive automation flows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 py-8 border-t border-white/6 text-slate-300">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-semibold">Ryujin Solutions</div>
              <div className="text-sm text-slate-400">© {new Date().getFullYear()} Ryujin Solutions — All rights reserved.</div>
            </div>
            <div className="flex gap-4">
              <a className="text-sm hover:underline" href="#">Privacy</a>
              <a className="text-sm hover:underline" href="#">Terms</a>
              <a className="text-sm hover:underline" href="#">Careers</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
