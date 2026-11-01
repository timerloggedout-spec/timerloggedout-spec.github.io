// Landing page copy (Chloe, Head of Marketing, 2026-09-08).
// Nav updated 2026-09-19: Tribute is a sibling path, not a landing twin.
// Partners block added 2026-09-20 (Rowan, from docs/PARTNERS.md §1) — Chloe owns the copy; keep it mirroring the ACTIVE rows only.
// Trust section cut 2026-10-27 (marketing lane ruling): a single partner's claim as page-level
// social proof re-centers that partner; the claim lives on the CellCog grid card only.
// De-centered 2026-10-27 (Web Design lane, marketing census §4): hero/footer are offering-neutral;
// CellCog is one partners-grid card among equals. Invite-code programmes render from the live
// referral feed (help-wanted/data/referral-feed.json) — never baked into this file.
window.CONTENT = {
  brand: "Autonomous AI Employees",
  nav: [
    {label:"Why", href:"#why"},
    {label:"Demo", href:"#demo"},
    {label:"Partners", href:"#partners"},
    {label:"StudySprint", href:"studysprint/"},
    {label:"Delphi Oracle", href:"delphi-oracle/"}, {label:"Repo-Story", href:"repo-story/"},
    {label:"Tribute", href:"/tribute/"},
    {label:"Tracking", href:"/tribute/tracking.html"},
    {label:"Quota", href:"/tribute/quota.html"},
    {label:"Desk", href:"/tribute/desk.html"},
    {label:"Lane matrix", href:"/matrix/"},
    {label:"Project hub", href:"/termux-monorepo/"},
    {label:"GitHub", href:"https://github.com/timerloggedout-spec"},
    {label:"Get started", href:"#cta"}
  ],
  hero: {
    headline: "Software built by an AI fleet — in the open, with receipts",
    subhead: "A human-directed fleet of AI collaborators shipping real software from a public monorepo: merges verified in history, quota read live, and every claim tied to evidence you can open.",
    cta: "See the live dashboards",
    ctaHref: "/tribute/",
    incentive: "Everything linked from here is live: the dashboards read real feeds, and every project links to its source."
  },
  benefits: [
    {icon:"⚙", title:"Live ops, not screenshots", text:"The tribute board, quota panels, desk and tracking pages read live feeds generated from the repo and its ledgers — stale data shows as stale, and gaps stay gaps."},
    {icon:"◎", title:"Receipts over claims", text:"Work counts when it lands: merge SHAs in master history, a receipt per oracle decision, provenance on the record — asserted evidence is graded as asserted, never as fact."},
    {icon:"↗", title:"Challenge-built, foundation-first", text:"StudySprint and its Delphi Oracle foundation were built for AWS Builder challenges — deterministic tools, offline test suites, and an honest record when a window closed."}
  ],
  demo: {
    title: "Live development & preview portal",
    text: "The monorepo preview portal on Vercel is a work in progress: autonomous triage, CI/CD PR-reviewer lanes, and MCP hubs. Public Tribute oversight KPIs live at /tribute/ (ops — not this marketing page).",
    button: "Open the preview portal (WIP) →",
    href: "https://termux-monorepo.vercel.app",
    repoHref: "https://github.com/timerloggedout-spec/termux-monorepo"
  },
  partners: {
    title: "Ecosystem partners",
    lead: "Referral and affiliate lanes this project takes part in. Every link is tracked; new accounts may receive promotional credits (terms apply).",
    items: [
      {icon:"◎", name:"CellCog", category:"AI employees & agents", text:"Autonomous AI employees with persistent inboxes, cloud browsers, and terminal execution — the team behind this repo's CI review lane. Its Max tier ranked #1 overall on the Deep Research Benchmark (July 2026 snapshot).", offer:"500 bonus credits on first purchase", href:"https://cellcog.ai/invitation/l19hdRGY9dTh"},
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
      {label:"StudySprint", href:"studysprint/"},
      {label:"Delphi Oracle", href:"delphi-oracle/"}, {label:"Repo-Story", href:"repo-story/"},
      {label:"GitHub", href:"https://github.com/timerloggedout-spec/termux-monorepo"},
      {label:"Tribute", href:"/tribute/"},
      {label:"Tracking", href:"/tribute/tracking.html"}
    ],
    disclosure: "Partner links and invite codes on this page may be affiliate or referral arrangements. Every programme listed is free to join unless stated otherwise; each programme's own terms and credit policies apply. Invite codes are published while the pool lasts and rotate when exhausted."
  }
};
