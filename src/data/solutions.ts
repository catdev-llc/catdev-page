export interface Solution {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  heroHeadline: string;
  heroSubheadline: string;
  problemStatement: string;
  problems: string[];
  solutionOverview: string[];
  services: {
    title: string;
    description: string;
  }[];
  techStack: {
    category: string;
    tools: {
      name: string;
      description: string;
    }[];
  }[];
  benefits: string[];
  caseStudySlugs: string[];
  engagementModels: string[];
}

export const solutions: Solution[] = [
  {
    id: 'platform-engineering',
    title: 'Platform Engineering',
    slug: '/solutions/platform-engineering',
    tagline: 'Production-grade platforms from infrastructure to deployment',
    description: 'Complete secure delivery platform built from the ground up. Terraform infrastructure, Kubernetes cluster, CI/CD pipelines, supply chain security, observability stack, and operational runbooks.',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>`,
    heroHeadline: 'Ship faster with production-grade platform engineering',
    heroSubheadline: 'From infrastructure to deployment automation—we build the complete delivery platform so your team can focus on features, not infrastructure.',
    problemStatement: 'Engineering teams waste months building and maintaining infrastructure instead of shipping features.',
    problems: [
      'Infrastructure provisioned manually leads to configuration drift and production surprises',
      'Kubernetes clusters lack security hardening, monitoring, and disaster recovery plans',
      'CI/CD pipelines are fragile, slow, and missing security scanning or supply chain controls',
      'No clear operational runbooks when things break at 3 AM',
    ],
    solutionOverview: [
      'We build your complete cloud-native delivery platform from the ground up—everything as code, production-hardened, and fully documented.',
      'Our platform engineering approach covers the entire value chain: infrastructure provisioning with Terraform, production-ready Kubernetes clusters with autoscaling and disaster recovery, secure CI/CD pipelines with automated testing and deployment, and comprehensive observability with Prometheus, Grafana, and Loki.',
      'Every platform we deliver is security-first, compliance-ready, and designed for long-term operational excellence. You get a turnkey system that lets your engineering team ship features daily without infrastructure headaches.',
    ],
    services: [
      {
        title: 'Infrastructure as Code',
        description: 'Terraform and Ansible for reproducible, version-controlled infrastructure. Multi-cloud ready: Hetzner, Vultr, AWS, Azure.',
      },
      {
        title: 'Kubernetes Cluster Design & Operations',
        description: 'Production-grade clusters with autoscaling, disaster recovery, security hardening, and operational runbooks.',
      },
      {
        title: 'CI/CD Pipelines',
        description: 'GitHub Actions, GitLab CI, or Azure DevOps. Automated testing, builds, and deployments with full observability.',
      },
      {
        title: 'Container Security & SBOM Generation',
        description: 'Vulnerability scanning at build and runtime. SBOM generation, VEX documents, and compliance-ready artifacts.',
      },
      {
        title: 'Image Signing & Provenance',
        description: 'SLSA-aligned supply chain security. Sigstore integration (Cosign, Rekor, Fulcio) for cryptographic image verification.',
      },
      {
        title: 'Deployment Automation',
        description: 'GitOps workflows, blue/green deployments, canary releases, and automated rollbacks with ArgoCD or Flux.',
      },
      {
        title: 'Observability Stack',
        description: 'Prometheus, Grafana, Loki, Tempo—metrics, logs, traces, and alerting configured for your platform.',
      },
      {
        title: 'Secure Operational Runbooks',
        description: 'Documented incident response procedures, backup/restore processes, and disaster recovery plans.',
      },
    ],
    techStack: [
      {
        category: 'Cloud Providers',
        tools: [
          { name: 'AWS', description: 'EKS, EC2, RDS, S3' },
          { name: 'Azure', description: 'AKS, VMs, CosmosDB' },
          { name: 'GCP', description: 'GKE, Compute, CloudSQL' },
          { name: 'Hetzner / Vultr', description: 'Cost-effective alternatives' },
        ],
      },
      {
        category: 'Infrastructure & Orchestration',
        tools: [
          { name: 'Terraform', description: 'Multi-cloud infrastructure as code' },
          { name: 'Ansible', description: 'Configuration management' },
          { name: 'Kubernetes', description: 'Container orchestration' },
          { name: 'Helm', description: 'Kubernetes package management' },
        ],
      },
      {
        category: 'CI/CD & GitOps',
        tools: [
          { name: 'GitHub Actions', description: 'CI/CD automation' },
          { name: 'GitLab CI', description: 'Enterprise CI/CD' },
          { name: 'ArgoCD', description: 'GitOps deployments' },
          { name: 'Flux', description: 'GitOps toolkit' },
        ],
      },
      {
        category: 'Observability',
        tools: [
          { name: 'Prometheus', description: 'Metrics and monitoring' },
          { name: 'Grafana', description: 'Observability dashboards' },
          { name: 'Loki', description: 'Log aggregation' },
          { name: 'Tempo', description: 'Distributed tracing' },
        ],
      },
    ],
    benefits: [
      'Ship features daily without infrastructure bottlenecks',
      'Zero configuration drift—everything version-controlled',
      'Production-grade reliability from day one',
      'Security and compliance built-in, not bolted on',
      'Complete documentation for operational handoff',
    ],
    caseStudySlugs: ['fiber-monitoring', 'ai-gpu-platform'],
    engagementModels: ['platform-build'],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & Supply Chain Security',
    slug: '/solutions/devsecops',
    tagline: 'Zero-trust pipeline and artifact security',
    description: 'Harden your software supply chain with SBOM generation, image signing, vulnerability management, and runtime security—compliance-ready for SOC2, ISO 27001, and PCI DSS.',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
    heroHeadline: 'Security baked in, not bolted on',
    heroSubheadline: 'From supply chain hardening to runtime protection—we secure your entire delivery pipeline and make compliance audits painless.',
    problemStatement: 'Software supply chains are under attack, and compliance frameworks demand provenance, SBOMs, and vulnerability management.',
    problems: [
      'Container images are unsigned and unverified—no way to prove provenance or detect tampering',
      'Vulnerability scanning is manual, inconsistent, or missing entirely',
      'No SBOM generation means audit failures and compliance headaches',
      'Secrets leak into Git repositories and CI/CD logs',
      'Runtime security gaps leave production systems vulnerable to container escapes and lateral movement',
    ],
    solutionOverview: [
      'We harden your entire software supply chain with zero-trust security controls—from build-time scanning to cryptographic image signing to runtime threat detection.',
      'Every artifact is scanned, signed, and tracked. SBOMs and VEX documents are generated automatically. Secrets are rotated and managed securely. Runtime policies enforce least-privilege containers and block suspicious behavior.',
      'Our approach is compliance-first: we deliver the documentation, audit trails, and security controls required for SOC2, ISO 27001, PCI DSS, and SLSA frameworks.',
    ],
    services: [
      {
        title: 'CI/CD Security & Pipeline Hardening',
        description: 'Harden GitHub Actions, GitLab CI, or Azure DevOps workflows. Enforce branch protections, require signed commits, and audit pipeline access.',
      },
      {
        title: 'AI-Driven Penetration Testing in CI/CD',
        description: 'Autonomous AI agent performs continuous security testing within your delivery pipeline. Thinks like an attacker, maps attack surfaces, proposes exploitation strategies, and executes tests with human approval gates. Every deployment is tested by an adversarial AI before production.',
      },
      {
        title: 'VEX/SBOM Workflows',
        description: 'Generate SBOMs for every build. Create VEX documents to document vulnerability status and mitigations.',
      },
      {
        title: 'Image Signing & Verification',
        description: 'Sign container images with Sigstore. Enforce signature verification at runtime using OPA or Kyverno policies.',
      },
      {
        title: 'Secrets Management',
        description: 'HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault. Rotate secrets automatically, never commit to Git.',
      },
      {
        title: 'Runtime Security',
        description: 'Falco for runtime threat detection. Enforce least-privilege containers and restrict syscalls.',
      },
      {
        title: 'Kubernetes Security Policies',
        description: 'OPA Gatekeeper or Kyverno for policy enforcement. Pod Security Standards, NetworkPolicies, and admission control.',
      },
      {
        title: 'Vulnerability Management',
        description: 'Continuous scanning with Trivy or Grype. Automated remediation workflows and compliance reporting.',
      },
      {
        title: 'Compliance Documentation',
        description: 'Generate audit-ready documentation for SOC2, ISO 27001, PCI DSS, and SLSA compliance frameworks.',
      },
    ],
    techStack: [
      {
        category: 'Supply Chain Security',
        tools: [
          { name: 'Sigstore', description: 'Image signing and provenance' },
          { name: 'Cosign', description: 'Container signing' },
          { name: 'Rekor', description: 'Transparency log' },
          { name: 'Syft / CycloneDX', description: 'SBOM generation' },
        ],
      },
      {
        category: 'Vulnerability Scanning & Penetration Testing',
        tools: [
          { name: 'AI Pentest Agents', description: 'Autonomous adversarial testing' },
          { name: 'Metasploit / Nuclei', description: 'Exploitation validation' },
          { name: 'Trivy', description: 'Build and runtime scanning' },
          { name: 'Grype', description: 'Vulnerability detection' },
          { name: 'Snyk', description: 'Dependency scanning' },
          { name: 'OWASP ZAP', description: 'Dynamic application testing' },
        ],
      },
      {
        category: 'Secrets Management',
        tools: [
          { name: 'HashiCorp Vault', description: 'Enterprise secrets management' },
          { name: 'AWS Secrets Manager', description: 'Cloud-native secrets' },
          { name: 'Azure Key Vault', description: 'Azure secrets and keys' },
          { name: 'Sealed Secrets', description: 'GitOps-friendly secrets' },
        ],
      },
      {
        category: 'Policy & Runtime Security',
        tools: [
          { name: 'OPA Gatekeeper', description: 'Policy enforcement' },
          { name: 'Kyverno', description: 'Kubernetes-native policies' },
          { name: 'Falco', description: 'Runtime threat detection' },
          { name: 'Tracee', description: 'Runtime security monitoring' },
        ],
      },
    ],
    benefits: [
      'Pass SOC2, ISO 27001, and PCI DSS audits without scrambling',
      'Detect vulnerabilities before they reach production',
      'Cryptographic proof of artifact provenance',
      'Zero secrets in Git or CI/CD logs',
      'Runtime threat detection and automated response',
    ],
    caseStudySlugs: ['open-source-ci', 'us-bank-pipeline'],
    engagementModels: ['supply-chain-hardening', 'platform-operations'],
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Modernization',
    slug: '/solutions/cloud-migration',
    tagline: 'VPS to Kubernetes, legacy to cloud-native',
    description: 'Migrate from VPS to Kubernetes, Jenkins to modern CI/CD, or on-premises to cloud—with zero downtime and production-grade outcomes.',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>`,
    heroHeadline: 'Modernize infrastructure without the risk',
    heroSubheadline: 'Migrate from legacy VPS, on-premises, or outdated CI/CD to modern cloud-native platforms—with zero downtime and production-grade outcomes.',
    problemStatement: 'Legacy infrastructure is holding you back, but migration feels too risky and complex.',
    problems: [
      'VPS infrastructure is provisioned manually—scaling is painful and error-prone',
      'Jenkins pipelines are fragile, plugin-dependent, and impossible to version-control',
      'On-premises data centers cost more to operate than cloud alternatives',
      'Fear of downtime and data loss prevents migration from starting',
      'No clear path from legacy monoliths to containerized microservices',
    ],
    solutionOverview: [
      'We migrate your infrastructure and pipelines to modern cloud-native platforms with zero downtime and minimal disruption.',
      'Our migration approach is methodical: assess your current state, design the target architecture, build migration tooling, execute in phases, and validate at every step. We handle containerization, data migration, DNS cutover, and rollback planning.',
      'Whether you are moving from VPS to Kubernetes, Jenkins to GitHub Actions, or on-premises to AWS/Azure/GCP—we deliver modern, scalable infrastructure without the risk.',
    ],
    services: [
      {
        title: 'VPS → Kubernetes Migrations',
        description: 'Containerize legacy applications and migrate to Kubernetes clusters with zero-downtime deployments.',
      },
      {
        title: 'On-Prem → Cloud Transitions',
        description: 'Lift-and-shift or re-architecture from on-premises infrastructure to AWS, Azure, GCP, or cost-effective alternatives like Hetzner and Vultr.',
      },
      {
        title: 'Jenkins → Modern CI/CD Migration',
        description: 'Migrate from Jenkins to GitHub Actions, GitLab CI, or Azure DevOps. Eliminate plugin hell and embrace declarative pipelines.',
      },
      {
        title: 'Infrastructure as Code Adoption',
        description: 'Replace ClickOps with Terraform or OpenTofu. Version-control your infrastructure and enable peer review.',
      },
      {
        title: 'Database Migration & Replication',
        description: 'Migrate databases with minimal downtime using replication, read replicas, and cutover strategies.',
      },
      {
        title: 'Legacy Application Containerization',
        description: 'Containerize monolithic applications and deploy to Kubernetes without rewriting code.',
      },
      {
        title: 'DNS & Traffic Cutover Planning',
        description: 'Blue/green deployments and traffic shifting strategies to minimize risk during cutover.',
      },
      {
        title: 'Rollback & Disaster Recovery',
        description: 'Comprehensive rollback plans and disaster recovery testing before go-live.',
      },
    ],
    techStack: [
      {
        category: 'Target Platforms',
        tools: [
          { name: 'Kubernetes', description: 'Modern container orchestration' },
          { name: 'AWS / Azure / GCP', description: 'Enterprise cloud providers' },
          { name: 'Hetzner / Vultr', description: 'Cost-effective cloud' },
          { name: 'Docker', description: 'Containerization' },
        ],
      },
      {
        category: 'Migration Tools',
        tools: [
          { name: 'Terraform', description: 'Infrastructure provisioning' },
          { name: 'Ansible', description: 'Configuration automation' },
          { name: 'Velero', description: 'Kubernetes backup/restore' },
          { name: 'Flyway / Liquibase', description: 'Database migrations' },
        ],
      },
      {
        category: 'Modern CI/CD',
        tools: [
          { name: 'GitHub Actions', description: 'Cloud-native CI/CD' },
          { name: 'GitLab CI', description: 'Self-hosted CI/CD' },
          { name: 'Azure DevOps', description: 'Enterprise CI/CD' },
          { name: 'ArgoCD', description: 'GitOps deployments' },
        ],
      },
      {
        category: 'Monitoring & Validation',
        tools: [
          { name: 'Prometheus', description: 'Metrics during migration' },
          { name: 'Grafana', description: 'Migration dashboards' },
          { name: 'Loki', description: 'Log aggregation' },
          { name: 'Sentry', description: 'Error tracking' },
        ],
      },
    ],
    benefits: [
      'Zero downtime migrations with comprehensive rollback plans',
      'Eliminate manual infrastructure provisioning',
      'Reduce operational costs by 30-60%',
      'Modern CI/CD pipelines replace fragile Jenkins setups',
      'Production-grade infrastructure from day one',
    ],
    caseStudySlugs: ['european-bank-azure'],
    engagementModels: ['platform-build'],
  },
  {
    id: 'managed-ops',
    title: 'Managed Operations',
    slug: '/solutions/managed-ops',
    tagline: 'We build it, we run it, you ship features',
    description: 'Ongoing platform operations, monitoring, patching, vulnerability management, and incident response—so your engineering team can focus on building products.',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>`,
    heroHeadline: 'We run your platform. You ship features.',
    heroSubheadline: 'Ongoing operations, monitoring, patching, incident response, and vulnerability management—handled by senior platform engineers with skin in the game.',
    problemStatement: 'Your engineering team is stuck maintaining infrastructure instead of building products.',
    problems: [
      'Platform operations distract senior engineers from feature development',
      'Kubernetes upgrades, node patching, and certificate rotation are manual and risky',
      'No one monitors the platform until something breaks in production',
      'Vulnerability scanning happens occasionally—remediation rarely',
      'Incident response is chaotic with no clear runbooks or escalation paths',
    ],
    solutionOverview: [
      'We operate your platform 24/7 so your engineering team can focus on features, not firefighting.',
      'Our managed operations service covers everything from proactive monitoring and alerting to Kubernetes upgrades and vulnerability remediation. We handle first and second-level incident response, perform regular patching and certificate rotation, and maintain compliance documentation for SOC2, ISO 27001, and other frameworks.',
      'This is not a typical managed service—we run the platforms we build. We have skin in the game, deep technical expertise, and operational discipline earned from running production systems at scale.',
    ],
    services: [
      {
        title: 'Monthly Vulnerability Management',
        description: 'Continuous scanning and remediation. We triage CVEs, patch systems, and update dependencies on your behalf.',
      },
      {
        title: 'Monitoring & Observability',
        description: 'Production monitoring with business-hours support and critical incident escalation. Dashboards, SLIs, and alerting rules tuned to your workload.',
      },
      {
        title: 'Pipeline Maintenance',
        description: 'Keep CI/CD pipelines up to date with the latest tooling, best practices, and security patches.',
      },
      {
        title: 'Cluster Operations & Patching',
        description: 'Kubernetes upgrades, node patching, certificate rotation, and capacity planning handled by our team.',
      },
      {
        title: 'Incident Support (L1/L2)',
        description: 'First and second-level incident response. We troubleshoot platform issues so your team can focus on features.',
      },
      {
        title: 'Compliance-Ready Documentation',
        description: 'Maintain up-to-date runbooks, architecture diagrams, and compliance artifacts for SOC2, ISO 27001, or GDPR.',
      },
      {
        title: 'Capacity Planning & Cost Optimization',
        description: 'Monitor resource usage, forecast capacity needs, and optimize cloud spending.',
      },
      {
        title: 'Disaster Recovery Testing',
        description: 'Regular backup validation and disaster recovery drills to ensure RTO/RPO targets are met.',
      },
    ],
    techStack: [
      {
        category: 'Monitoring & Alerting',
        tools: [
          { name: 'Prometheus', description: 'Metrics and alerting' },
          { name: 'Grafana', description: 'Dashboards and visualization' },
          { name: 'Loki', description: 'Log aggregation' },
          { name: 'PagerDuty / Opsgenie', description: 'Incident management' },
        ],
      },
      {
        category: 'Vulnerability Management',
        tools: [
          { name: 'Trivy', description: 'Continuous scanning' },
          { name: 'Dependabot', description: 'Dependency updates' },
          { name: 'Snyk', description: 'Vulnerability tracking' },
          { name: 'Renovate', description: 'Automated updates' },
        ],
      },
      {
        category: 'Operations Automation',
        tools: [
          { name: 'Ansible', description: 'Configuration management' },
          { name: 'Terraform', description: 'Infrastructure updates' },
          { name: 'Velero', description: 'Backup and restore' },
          { name: 'Argo Rollouts', description: 'Progressive delivery' },
        ],
      },
      {
        category: 'Incident Response',
        tools: [
          { name: 'Runbooks', description: 'Documented procedures' },
          { name: 'kubectl / k9s', description: 'Cluster troubleshooting' },
          { name: 'Sentry', description: 'Error tracking' },
          { name: 'Datadog APM', description: 'Application monitoring' },
        ],
      },
    ],
    benefits: [
      'Engineering team focuses on features, not infrastructure',
      'Proactive monitoring prevents incidents before they impact users',
      'Regular patching and upgrades without downtime',
      'Compliance documentation maintained automatically',
      '24/7 coverage with clear escalation paths',
    ],
    caseStudySlugs: [],
    engagementModels: ['platform-operations'],
  },
  {
    id: 'ai-ops',
    title: 'AI Ops & Intelligent Automation',
    slug: '/solutions/ai-ops',
    tagline: 'Autonomous operations powered by AI',
    description: 'AI-powered operations automation, intelligent failure analysis, and autonomous incident response. From network analytics to security assessments—let AI handle the toil.',
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>`,
    heroHeadline: 'AI Ops: Intelligence replaces toil',
    heroSubheadline: 'Automated incident analysis, intelligent failure detection, and autonomous operations—powered by AI agents that never sleep.',
    problemStatement: 'Manual incident response, slow root cause analysis, and reactive monitoring waste engineering hours and delay recovery.',
    problems: [
      'Incident reports take hours or days to generate—by the time analysis is done, the damage is done',
      'Security assessments bottleneck CI/CD pipelines—manual reviews can\'t keep up with deployment velocity',
      'Network failures require manual log diving and OTDR analysis—mean time to diagnose remains unacceptably high',
      'Reactive monitoring means you find out about problems when customers complain, not before',
      'Engineering teams spend more time analyzing failures than preventing them',
    ],
    solutionOverview: [
      'We deploy AI-powered operations automation that transforms manual toil into autonomous intelligence. From network failure analysis to security assessments to incident reporting—AI agents handle the heavy lifting.',
      'Our AI Ops approach combines machine learning models, agentic systems, and intelligent automation to deliver outcomes that were previously impossible: fiber network failure reports generated in minutes instead of hours, security assessments integrated directly into CI/CD, and autonomous incident response that doesn\'t require human intervention.',
      'This isn\'t chatbot theater—these are production AI agents operating in the infrastructure and security domain, making real decisions, generating real analysis, and taking real actions. Fully auditable, fully explainable, fully accountable.',
    ],
    services: [
      {
        title: 'AI-Powered Network Analytics',
        description: 'Automated fiber network failure analysis with OTDR interpretation, root cause identification, and actionable repair instructions—all generated within minutes of alarm detection.',
      },
      {
        title: 'AI-Driven Penetration Testing',
        description: 'Autonomous security agent that thinks like an attacker, performs continuous reconnaissance, identifies vulnerabilities, and proposes attack vectors—running automatically in your CI/CD pipeline. Not just scanning, but intelligent adversarial testing with explainable AI reasoning.',
      },
      {
        title: 'AI-Based Security Assessments',
        description: 'Integrated into CI/CD pipelines for automated code security analysis, vulnerability detection, and compliance checking—no bottlenecks, no waiting.',
      },
      {
        title: 'Autonomous Incident Response',
        description: 'AI agents that detect anomalies, analyze logs, correlate events, and generate detailed incident reports with root cause analysis and remediation steps.',
      },
      {
        title: 'Intelligent SLA Monitoring',
        description: 'Automated breach detection with AI-generated audit reports. Know exactly when, where, and why SLAs were violated—with evidence and analysis ready for stakeholders.',
      },
      {
        title: 'AI Agentic Systems',
        description: 'Autonomous AI agents operating in the platform/infrastructure domain. Self-healing systems, automated optimization, intelligent resource allocation.',
      },
      {
        title: 'Predictive Failure Analysis',
        description: 'Machine learning models trained on historical data to predict failures before they happen. Proactive maintenance instead of reactive firefighting.',
      },
      {
        title: 'Anomaly Detection & Alerting',
        description: 'AI-powered baseline learning and anomaly detection for networks, applications, and infrastructure. Reduce false positives, catch real issues faster.',
      },
      {
        title: 'Automated Reporting & Documentation',
        description: 'AI-generated reports, runbooks, and post-mortems. Complete audit trails with technical depth that would take humans hours to produce.',
      },
    ],
    techStack: [
      {
        category: 'AI & Machine Learning',
        tools: [
          { name: 'Claude (Anthropic)', description: 'Advanced reasoning and analysis' },
          { name: 'OpenAI GPT-4', description: 'Natural language understanding' },
          { name: 'LangChain / LangGraph', description: 'AI agent orchestration' },
          { name: 'Custom ML Models', description: 'Domain-specific predictions' },
        ],
      },
      {
        category: 'Network Monitoring',
        tools: [
          { name: 'OTDR Systems', description: 'Fiber optic test equipment' },
          { name: 'SNMP / NetFlow', description: 'Network telemetry' },
          { name: 'Prometheus / Grafana', description: 'Metrics and visualization' },
          { name: 'Packet Analyzers', description: 'Deep packet inspection' },
        ],
      },
      {
        category: 'Security Analysis & Penetration Testing',
        tools: [
          { name: 'Custom AI Pentest Agents', description: 'Autonomous adversarial testing' },
          { name: 'Metasploit Framework', description: 'Exploitation and validation' },
          { name: 'OWASP ZAP', description: 'Dynamic security testing' },
          { name: 'Nuclei', description: 'Vulnerability scanning templates' },
          { name: 'Semgrep / CodeQL', description: 'Static analysis integration' },
          { name: 'Trivy / Grype', description: 'Container vulnerability scanning' },
        ],
      },
      {
        category: 'Automation & Orchestration',
        tools: [
          { name: 'Kubernetes', description: 'Agent deployment platform' },
          { name: 'Temporal / Airflow', description: 'Workflow orchestration' },
          { name: 'Python / Go', description: 'Agent development' },
          { name: 'REST / gRPC APIs', description: 'System integration' },
          { name: 'MITRE ATT&CK', description: 'Attack technique mapping' },
        ],
      },
    ],
    benefits: [
      'Incident reports in minutes instead of hours—AI analyzes faster than humans',
      'Zero bottlenecks in CI/CD—security assessments run automatically',
      'Predictive maintenance—catch failures before they impact users',
      'Reduced MTTR by 60-80%—autonomous analysis accelerates recovery',
      'Audit-ready documentation—every decision explained and traceable',
    ],
    caseStudySlugs: ['fiber-ai-ops'],
    engagementModels: ['platform-build', 'platform-operations'],
  },
];

export function getSolutionById(id: string): Solution | undefined {
  return solutions.find(s => s.id === id);
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find(s => s.slug === slug);
}
