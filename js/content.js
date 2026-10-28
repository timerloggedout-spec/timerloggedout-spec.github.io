// Landing page copy (Chloe, Head of Marketing, 2026-09-08).
// Nav updated 2026-09-19: Ops dashboard is a sibling path, not a landing twin.
// Partners block added 2026-09-20 (Rowan, from docs/PARTNERS.md §1) — Chloe owns the copy; keep it mirroring the ACTIVE rows only.
// De-centered 2026-10-27 (Web Design lane, marketing census §4): hero/footer are offering-neutral;
// CellCog is one partners-grid card among equals. Invite-code programmes render from the live
// referral feed (help-wanted/data/referral-feed.json) — never baked into this file.
window.CONTENT = {
  brand: "Autonomous AI Employees",
  nav: [
    {label:"Why", href:"#why"},
    {label:"Demo", href:"#demo"},
    {label:"Partners", href:"#partners"},
    {label:"Ops dashboard", href:"/help-wanted/"},
    {label:"Get started", href:"#cta"}
  ],
  hero: {
    headline: "Deploy 24/7 Autonomous AI Employees for Your Engineering Workflows",
    subhead: "Go beyond chat wrappers. Hire deep-reasoning AI employees equipped with persistent inboxes, cloud browsers, and terminal execution to automate complex software tasks.",
    cta: "Get started free",
    ctaHref: "#partners",
    incentive: "Every programme in the stack below is free to join — invite codes and links, no card required."
  },
  benefits: [
    {icon:"⚙", title:"True Cross-Modal Super-Agents", text:"Execute terminal commands, browse live staging sites, and generate production assets across code, data dashboards, and multimedia without leaving your workflow."},
    {icon:"◎", title:"#1 in Deep Research (July 2026)", text:"Powered by benchmark-leading reasoning models that thoroughly synthesize vast codebases and technical documentation with verifiable accuracy."},
    {icon:"↗", title:"Built-in Memory & Multi-Agent Collaboration", text:"Your AI employees retain context across shifts, coordinate seamlessly in dedicated team channels, and manage persistent task boards while you sleep."}
  ],
  demo: {
    title: "Live development & preview portal",
    text: "The monorepo preview portal on Vercel is a work in progress: autonomous triage, CI/CD PR-reviewer lanes, and MCP hubs. Public help-wanted oversight KPIs live at /help-wanted/ (ops — not this marketing page).",
    button: "Open the preview portal (WIP) →",
    href: "https://termux-monorepo.vercel.app",
    repoHref: "https://github.com/timerloggedout-spec/termux-monorepo"
  },
  trust: "CellCog Max ranked #1 overall on the Deep Research Benchmark (July 2026 snapshot). Live leaderboard: huggingface.co/spaces/muset-ai/DeepResearch-Bench-Leaderboard",
  partners: {
    title: "Ecosystem partners",
    lead: "Referral and affiliate lanes this project takes part in. Every link is tracked; new accounts may receive promotional credits (terms apply).",
    items: [
      {icon:"◎", name:"CellCog", category:"AI employees & agents", text:"Autonomous AI employees with persistent inboxes, cloud browsers, and terminal execution — the team behind this repo's CI review lane.", offer:"500 bonus credits on first purchase", href:"https://cellcog.ai/invitation/l19hdRGY9dTh"},
      {icon:"⌕", name:"Polsia", category:"AI directory & intelligence", text:"AI directory and intelligence platform.", offer:"Referral bonus credits", href:"https://polsia.com/?ref=B5K7S8NL"},
      {icon:"⚙", name:"Manus AI", category:"AI employees & agents", text:"General-purpose AI agent platform.", offer:"Invitation link", href:"https://manus.im/invitation/5MHU34UJRBOTVC6?utm_source=invitation&utm_medium=social&utm_campaign=system_share"},
      {icon:"▤", name:"Grafana", category:"Observability & cloud", text:"Dashboards and alerting for the CI/CD traces and telemetry this monorepo emits.", offer:"Referral sign-up", href:"https://grafana.com/auth/sign-up?refCode=gr8WEigykKjVGTV"}
    ],
    note: "The full registry (active lanes, pipeline, wallets) lives in the monorepo:",
    registryLabel: "docs/PARTNERS.md →",
    registryHref: "https://github.com/timerloggedout-spec/termux-monorepo/blob/master/docs/PARTNERS.md"
  },
  footer: {
    line: "Autonomous AI Employees — built in the open.",
    links: [
      {label:"Partners", href:"#partners"},
      {label:"GitHub", href:"https://github.com/timerloggedout-spec/termux-monorepo"},
      {label:"Ops dashboard", href:"/help-wanted/"}
    ],
    disclosure: "Partner links and invite codes on this page may be affiliate or referral arrangements. Every programme listed is free to join unless stated otherwise; each programme's own terms and credit policies apply. Invite codes are published while the pool lasts and rotate when exhausted."
  }
};
