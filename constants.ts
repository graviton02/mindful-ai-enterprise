import { 
  AlertTriangle, 
  Database, 
  ShieldAlert, 
  Cpu, 
  Users,
  BrainCircuit,
  Search,
  Bot,
  Network
} from 'lucide-react';
import { Challenge, JourneyStep, Offering, VisionPoint } from './types';

export const HERO_TITLE = "Mindful AI. Built to Scale. Engineered for Outcomes.";
export const HERO_SUBTITLE = "Most enterprises struggle to translate AI ambition into sustained business value. Scaling AI safely, reliably, and cost-effectively remains a persistent challenge.";

export const CHALLENGES: Challenge[] = [
  {
    title: "Strategic Misalignment",
    description: "Disconnected initiatives, duplicated investments, and lack of a unified AI north star.",
    icon: AlertTriangle
  },
  {
    title: "Data Fragmentation & Quality Gaps",
    description: "Siloed systems, broken data lineage, inconsistent metadata, and unreliable insights.",
    icon: Database
  },
  {
    title: "Governance & Compliance Risks",
    description: "Opaque model behavior, privacy exposure, regulatory uncertainty, and absence of a unified governance layer.",
    icon: ShieldAlert
  },
  {
    title: "Engineering & Platform Limitations",
    description: "Legacy environments, immature MLOps/LLMOps, and fragile one-off AI implementations.",
    icon: Cpu
  },
  {
    title: "Talent & Change Constraints",
    description: "Limited AI skills, weak adoption frameworks, and slow organizational readiness.",
    icon: Users
  }
];

export const VISION_POINTS: VisionPoint[] = [
  { id: 1, text: "Intelligence with Purpose", size: 40 },
  { id: 2, text: "Trust as the Foundation", size: 38 },
  { id: 3, text: "Human–AI Co-Decisioning", size: 36 },
  { id: 4, text: "Embedded Intelligence in Everyday Work", size: 32 },
  { id: 5, text: "Governed Autonomy", size: 32 },
  { id: 6, text: "Resilient Data and Platform Foundations", size: 30 },
  { id: 7, text: "Continuous Learning and Adaptation", size: 30 },
  { id: 8, text: "Outcome-Driven Measurement", size: 28 },
  { id: 9, text: "Responsible Innovation", size: 28 },
  { id: 10, text: "Enterprise-Wide Participation", size: 26 },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 1,
    title: "AI Discovery & Future-State Blueprinting",
    subtitle: "We establish strategic clarity before any build begins.",
    description: "This includes enterprise AI readiness assessment, high-value use-case discovery, ROI modeling, risk evaluation, and the creation of a unified, business-aligned AI transformation roadmap."
  },
  {
    id: 2,
    title: "Trusted Data Foundations",
    subtitle: "AI is only as reliable as the data beneath it.",
    description: "We enable data profiling, cleansing, metadata enrichment, lineage management, privacy guardrails, and secure Retrieval-Augmented Generation (RAG) readiness to ensure trustworthy intelligence at scale."
  },
  {
    id: 3,
    title: "Unified Intelligence Infrastructure",
    subtitle: "We engineer the digital backbone for scalable AI.",
    description: "This includes vector databases, data lakes, real-time event pipelines, API abstraction layers, orchestration fabrics, and secure multi-cloud deployment architectures."
  },
  {
    id: 4,
    title: "Secure & Outcome-Engineered AI Systems",
    subtitle: "We move beyond experiments to production-grade intelligence.",
    description: "This includes predictive intelligence systems, RAG-enabled copilots, and multi-agent autonomous workflows—built with enterprise security, reliability, and compliance guardrails."
  },
  {
    id: 5,
    title: "Enterprise Adoption & Value Realization",
    subtitle: "AI value is only realized when it is adopted at scale.",
    description: "We enable KPI-driven performance dashboards, structured change management programs, AI governance councils, and adoption telemetry to ensure sustained enterprise impact."
  },
  {
    id: 6,
    title: "Continuous Optimization & Governance",
    subtitle: "Ensuring trustworthy AI behavior throughout the lifecycle.",
    description: "Continuous optimization and governance operate across all five stages—ensuring drift detection, performance monitoring, cost governance, security oversight, and trustworthy AI behavior throughout the lifecycle."
  }
];

export const OFFERINGS: Offering[] = [
  {
    title: "Predictive, Prescriptive & Decision Intelligence",
    summary: "We design systems that support structured, data-driven decision-making under uncertainty.",
    details: [
      "These systems forecast outcomes, evaluate alternative actions, and simulate trade-offs across cost, risk, revenue, and service performance.",
      "Recommendations are built to be explainable, auditable, and aligned with enterprise KPIs."
    ],
    icon: BrainCircuit
  },
  {
    title: "RAG-Powered Enterprise Intelligence",
    summary: "We establish a governed enterprise intelligence layer by unifying knowledge across structured and unstructured systems including ERPs, CRMs, documents, emails, intranets, and legacy platforms.",
    details: [
      "Using Retrieval-Augmented Generation (RAG), responses are contextual, citation-backed, role-secured, and policy-aligned.",
      "This enables reliable enterprise search, AI-assisted knowledge access, and controlled automation."
    ],
    icon: Search
  },
  {
    title: "GenAI-Powered Copilots",
    summary: "We embed GenAI capabilities directly within existing enterprise platforms such as MS365, ServiceNow, Salesforce, and Oracle, enabling AI assistance inside day-to-day workflows.",
    details: [
      "These copilots support activities such as policy interpretation, documentation, case summarization, content generation, and task assistance across business and technology functions."
    ],
    icon: Bot
  },
  {
    title: "Agentic AI Solutions",
    summary: "We design agent-based systems for policy-governed autonomous execution.",
    details: [
      "These systems are built on a shared orchestration layer and operate across core enterprise platforms.",
      "They execute multi-step workflows, handle exceptions, and escalate decisions where human oversight is required.",
      "The focus remains on control, traceability, and operational safety, rather than fully unconstrained automation."
    ],
    icon: Network
  }
];