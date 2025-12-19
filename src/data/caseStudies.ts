export interface CaseStudy {
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  solutionTypes: string[];
  technologies: string[];
  problem: string;
  solution: string[];
  security: string[];
  outcome: string[];
  whyCatdev: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'open-source-ci',
    title: 'Open-Source Company CI Overhaul',
    clientType: 'High-Velocity Open Source Organization',
    industry: 'SaaS',
    solutionTypes: ['platform-engineering', 'devsecops'],
    technologies: ['Drone CI', 'Terraform', 'Ansible', 'Hetzner Cloud', 'Go', 'Docker', 'Trivy', 'Sigstore/Cosign', 'Prometheus', 'Grafana'],
    problem: 'Running approximately 200 Drone CI jobs per hour for Go microservices across a Hetzner VM fleet. Infrastructure was provisioned manually, CI pipelines lacked security scanning, and container images were unsigned. Scaling was becoming painful, and there was no visibility into supply chain security.',
    solution: [
      'Migrated infrastructure to Terraform + Ansible for reproducible VM provisioning',
      'Re-architected Drone CI pipelines with parallelization and caching optimizations',
      'Integrated Trivy for vulnerability scanning in every build',
      'Implemented Sigstore (Cosign) for container image signing',
      'Set up SBOM generation for all artifacts',
      'Deployed Prometheus + Grafana for CI/CD observability',
      'Created automated alerting for pipeline failures and security issues',
    ],
    security: [
      'Vulnerability scanning integrated into every pipeline',
      'Container images cryptographically signed with Sigstore',
      'SBOM generated for every build artifact',
      'Secrets moved to HashiCorp Vault (no credentials in Git)',
      'Pipeline access restricted with RBAC',
    ],
    outcome: [
      '40% faster CI pipeline execution through optimization',
      '100% of container images now signed and verified',
      'Zero manual infrastructure provisioning (full IaC adoption)',
      'Complete vulnerability visibility across all builds',
      'Team can confidently scale to 500+ builds/hour',
    ],
    whyCatdev: 'The client needed a team that understood both high-velocity CI/CD and supply chain security. Generic DevOps consultants would have optimized pipelines but missed the security gaps. catdev delivered both speed and security without compromising either.',
    featured: true,
  },
  {
    slug: 'european-bank-azure',
    title: 'European Bank Migration to Azure',
    clientType: 'Tier 2 European Banking Institution',
    industry: 'Financial Services',
    solutionTypes: ['cloud-migration', 'devsecops'],
    technologies: ['Azure', 'Terraform', 'Azure DevOps', 'Azure Key Vault', 'Azure Policy', 'Qualys', 'Azure Monitor', 'Log Analytics'],
    problem: 'Legacy on-premises infrastructure running critical banking services. Jenkins pipelines were fragile and undocumented. Migration to Azure Cloud required meeting strict regulatory compliance (PSD2, GDPR, local data residency). Team lacked cloud-native expertise and needed a secure, compliant landing zone.',
    solution: [
      'Designed and deployed Azure landing zone with Terraform (hub-and-spoke architecture)',
      'Migrated Jenkins pipelines to Azure DevOps with declarative YAML pipelines',
      'Implemented Azure Policy for compliance enforcement (PSD2, GDPR)',
      'Set up Azure Key Vault for secrets management',
      'Integrated vulnerability scanning (Qualys) into Azure DevOps',
      'Configured Azure Monitor + Log Analytics for compliance auditing',
      'Created documentation and runbooks for SOC2 and ISO 27001 readiness',
      'Trained internal team on Azure best practices and IaC workflows',
    ],
    security: [
      'Azure landing zone built with security and compliance from day one',
      'All secrets stored in Azure Key Vault with automatic rotation',
      'Vulnerability scanning enforced in every pipeline',
      'Azure Policy enforcing encryption at rest and in transit',
      'Network segmentation with NSGs and Azure Firewall',
      'Audit logs and compliance reporting for regulators',
    ],
    outcome: [
      'Successfully migrated 15 critical banking services to Azure with zero downtime',
      'Achieved PSD2 and GDPR compliance certification',
      'Reduced Jenkins maintenance overhead by 70%',
      'Infrastructure changes now peer-reviewed and version-controlled',
      'Audit-ready compliance documentation delivered to regulators',
    ],
    whyCatdev: 'Banking migrations require deep understanding of both cloud infrastructure and regulatory compliance. catdev brought experience with financial services, Azure landing zones, and compliance frameworks—delivering a secure, audit-ready platform that passed regulatory scrutiny on the first review.',
    featured: true,
  },
  {
    slug: 'us-bank-pipeline',
    title: 'U.S. Bank Core Banking Exchange Pipeline',
    clientType: 'Major U.S. Banking Institution',
    industry: 'Financial Services',
    solutionTypes: ['devsecops', 'platform-engineering'],
    technologies: ['GitHub Actions', 'Terraform', 'HashiCorp Vault', 'Docker', 'Kubernetes', 'Sigstore', 'Trivy', 'SonarQube'],
    problem: 'Building a new core banking transaction exchange interface (NDA-protected details). No existing CI/CD pipeline for this greenfield project. Extremely high compliance requirements (PCI DSS, SOC2, FFIEC). Needed end-to-end pipeline with full audit trails, secrets management, and deployment automation for a highly sensitive transactional system.',
    solution: [
      'Designed and implemented secure CI/CD pipeline from scratch',
      'Built multi-stage pipeline with automated testing, security scanning, and approval gates',
      'Integrated HashiCorp Vault for secrets management',
      'Implemented SBOM generation and image signing for all artifacts',
      'Set up automated compliance reporting and audit logging',
      'Created deployment automation with blue/green releases and automated rollbacks',
      'Delivered comprehensive documentation for compliance audits (PCI DSS, SOC2, FFIEC)',
      'Established pipeline governance with role-based access and approval workflows',
    ],
    security: [
      'Full supply chain security: SBOM + VEX + image signing',
      'Secrets never stored in Git—automated Vault integration',
      'Every pipeline run audited and logged for compliance',
      'Multi-level approval gates for production deployments',
      'Static and dynamic security testing (SAST/DAST)',
      'Compliance artifacts generated automatically for auditors',
    ],
    outcome: [
      'Delivered production-ready pipeline meeting all PCI DSS and FFIEC requirements',
      'Zero security findings during external audit',
      'Deployment time reduced from days (manual) to minutes (automated)',
      'Full audit trail and compliance documentation for regulators',
      'Established repeatable pattern for future banking projects',
    ],
    whyCatdev: 'Building pipelines for core banking systems requires understanding financial regulations, security frameworks, and high-stakes operational discipline. catdev delivered a pipeline that satisfied auditors, security teams, and compliance officers—while still being fast and developer-friendly.',
    featured: true,
  },
  {
    slug: 'fiber-monitoring',
    title: 'Fiber Monitoring Startup Kubernetes Platform',
    clientType: 'Dark Fiber Network Monitoring SaaS Startup',
    industry: 'SaaS',
    solutionTypes: ['platform-engineering'],
    technologies: ['Kubernetes', 'Vultr', 'Terraform', 'GitHub Actions', 'Go', 'TypeScript', 'ArgoCD', 'Trivy', 'Prometheus', 'Grafana', 'Loki'],
    problem: 'Early-stage startup building a monitoring platform for dark fiber networks. Development environment pipelines needed for Go backend services and TypeScript frontend. Required Kubernetes cluster on Vultr for cost efficiency. Team lacked DevOps expertise and needed a production-ready platform quickly to focus on product development.',
    solution: [
      'Deployed Kubernetes cluster on Vultr with Terraform',
      'Built GitHub Actions CI/CD pipelines for Go and TypeScript components',
      'Integrated Trivy for vulnerability scanning (build + runtime)',
      'Implemented GitOps deployments with ArgoCD',
      'Set up observability stack: Prometheus, Grafana, Loki',
      'Developed custom Kubernetes operator in Go for domain-specific automation',
      'Created secure secrets management workflow',
      'Delivered operational runbooks and incident response procedures',
    ],
    security: [
      'Vulnerability scanning in CI/CD and Kubernetes runtime',
      'Secrets managed with Sealed Secrets (GitOps-friendly)',
      'Pod Security Standards enforced cluster-wide',
      'Network policies isolating tenant workloads',
      'Automated certificate management with cert-manager',
    ],
    outcome: [
      'Production-ready Kubernetes platform delivered in 6 weeks',
      'Dev team able to deploy 10+ times per day with confidence',
      '60% cost savings vs. AWS EKS',
      'Full observability and alerting from day one',
      'Custom operator automated domain-specific operational tasks',
    ],
    whyCatdev: 'Startups need fast execution without cutting corners on security or reliability. catdev delivered a production-grade platform quickly, allowing the founding team to focus on product-market fit instead of infrastructure firefighting. The custom operator in Go showed deep technical expertise beyond standard tooling.',
    featured: false,
  },
  {
    slug: 'ai-gpu-platform',
    title: 'AI Startup GPU Kubernetes Platform',
    clientType: 'AI/ML SaaS Startup',
    industry: 'AI/ML',
    solutionTypes: ['platform-engineering'],
    technologies: ['Kubernetes', 'Vultr GPU Nodes', 'Terraform', 'GitHub Actions', 'PHP', 'Docker', 'Trivy', 'Sigstore', 'Prometheus', 'Grafana'],
    problem: 'AI startup needed production Kubernetes infrastructure on Vultr with managed GPU nodes for machine learning workloads. Existing PHP application needed containerization and modern CI/CD. No security scanning or image signing in place. Required fast iteration for AI model training and deployment.',
    solution: [
      'Provisioned Kubernetes cluster on Vultr with GPU node pools using Terraform',
      'Containerized legacy PHP application and built Docker images',
      'Implemented GitHub Actions pipelines: build, test, scan, deploy',
      'Integrated Trivy for vulnerability scanning in build and runtime',
      'Set up image signing and verification with Sigstore',
      'Deployed Prometheus + Grafana for GPU utilization monitoring',
      'Configured autoscaling for GPU workloads based on demand',
      'Created CI/CD workflow for ML model deployments',
    ],
    security: [
      'Container images scanned for vulnerabilities before deployment',
      'All images cryptographically signed with Sigstore',
      'Secrets stored in external secrets operator (AWS Secrets Manager)',
      'GPU workloads isolated with Kubernetes namespaces and RBAC',
      'Runtime security monitoring for anomalous GPU usage',
    ],
    outcome: [
      'Production Kubernetes platform with GPU support live in 5 weeks',
      'PHP application modernized and containerized',
      'CI/CD pipelines reduced deployment time from hours to minutes',
      '100% of container images signed and verified',
      'Cost-optimized GPU autoscaling saved 40% on infrastructure spend',
    ],
    whyCatdev: 'AI startups need specialized infrastructure expertise—GPU orchestration, cost optimization, and fast iteration cycles. catdev delivered a platform that handled GPU workloads efficiently while maintaining security standards that would scale with the company\'s growth and eventual SOC2 certification.',
    featured: false,
  },
  {
    slug: 'fiber-ai-ops',
    title: 'Fiber Network AI Ops: Automated Failure Analysis',
    clientType: 'Fiber ISP / Telecom Provider',
    industry: 'Telecommunications',
    solutionTypes: ['ai-ops', 'managed-ops'],
    technologies: ['Claude AI', 'OTDR Systems', 'Python', 'Machine Learning', 'ADVA FSP3000', 'Network Monitoring', 'Automated Reporting'],
    problem: 'Fiber network SLA breach investigations taking hours or days to complete. Manual OTDR analysis, root cause identification, and report generation bottlenecked incident response. Field crews dispatched without detailed failure analysis, increasing mean time to repair (MTTR). No automated way to correlate alarms with precise failure locations and actionable repair instructions.',
    solution: [
      'Deployed AI-powered fiber network analytics system with autonomous failure analysis',
      'Integrated with ADVA FSP3000 ALM monitoring equipment for real-time OTDR data ingestion',
      'Built AI agent using Claude (Anthropic) for intelligent OTDR trace interpretation',
      'Automated root cause analysis correlating failure signatures with probable causes',
      'Generated comprehensive audit reports within minutes of alarm detection',
      'Created field crew dispatch instructions with precise failure locations (±15 meters)',
      'Implemented automated SLA breach detection and documentation',
      'Delivered audit-ready reports with technical depth matching senior engineer analysis',
    ],
    security: [
      'AI agent operates in isolated environment with controlled data access',
      'All analysis fully auditable with decision tracing and explainability',
      'OTDR measurement data encrypted in transit and at rest',
      'Access controls limiting system interaction to authorized personnel',
      'Complete audit trail of AI-generated decisions and recommendations',
    ],
    outcome: [
      'Incident reports generated in minutes vs. hours (95% time reduction)',
      'Automated root cause analysis with 95% confidence scoring',
      'Precise failure localization (20.03 km ± 15 meters) enabling faster field response',
      'SLA breach documentation ready for stakeholders within minutes',
      'Reduced MTTR by 60% through faster diagnosis and dispatch',
      'Field crews arrive with actionable intelligence instead of guesswork',
      'Complete audit reports with technical analysis rivaling senior engineers',
    ],
    whyCatdev: 'Telecom infrastructure monitoring requires deep domain expertise in fiber optics, OTDR analysis, and network engineering—combined with cutting-edge AI capabilities. catdev delivered an AI agent that doesn\'t just detect failures, but performs expert-level analysis faster than humans. The system generates reports with technical depth that would take experienced engineers hours to produce, all while being fully auditable and explainable for regulatory compliance.',
    featured: true,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getCaseStudiesBySolutionType(solutionType: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.solutionTypes.includes(solutionType));
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(cs => cs.featured);
}
