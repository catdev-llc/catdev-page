export const services = [
  {
    number: '01',
    title: 'Cloud & Platform Engineering',
    summary: 'Architecture and production platforms for organizations modernizing critical infrastructure and software delivery.',
    capabilities: ['Cloud architecture', 'Platform engineering', 'Kubernetes', 'Infrastructure as code', 'CI/CD & GitOps', 'Observability & reliability'],
  },
  {
    number: '02',
    title: 'Security Engineering',
    summary: 'Security designed into cloud platforms, applications and delivery systems—before risk reaches production.',
    capabilities: ['Security architecture', 'Cloud security', 'DevSecOps', 'Application security', 'Supply chain security', 'Security assessment & validation'],
  },
  {
    number: '03',
    title: 'Enterprise Technology Services',
    summary: 'Technical and commercial delivery around enterprise software—from solution engineering through lifecycle operations.',
    capabilities: ['Solution engineering', 'Pre-sales technical support', 'Implementation & integration', 'Migration', 'Customer enablement', 'Managed operations'],
  },
];

export const solutions = [
  {
    title: 'Cloud Modernization',
    summary: 'Move legacy infrastructure and delivery workflows toward secure, automated and observable platforms.',
    outcome: 'A maintainable production foundation with a controlled path from the current state.',
  },
  {
    title: 'Secure Software Delivery',
    summary: 'Integrate security controls, artifact provenance and automated validation throughout the delivery lifecycle.',
    outcome: 'Faster delivery with stronger governance and clearer operational evidence.',
  },
  {
    title: 'Enterprise Software Integration',
    summary: 'Connect enterprise products to the infrastructure, identity, data and operating processes around them.',
    outcome: 'Technology that works within the customer environment—not beside it.',
  },
  {
    title: 'Private AI Infrastructure',
    summary: 'Design self-hosted AI and retrieval systems for controlled data, auditable workflows and local compute.',
    outcome: 'Practical AI capability with architecture, deployment and operations treated as one system.',
  },
];

export const caseStudies = [
  {
    industry: 'Financial services · Europe',
    title: 'Cloud modernization for a European banking institution',
    challenge: 'Move critical services from legacy infrastructure to Azure while maintaining regulatory, security and operational requirements.',
    engagement: 'Azure landing-zone architecture, infrastructure as code, delivery pipeline migration, policy enforcement, observability and team enablement.',
    outcome: 'Fifteen critical services migrated without downtime, with infrastructure changes brought under version control and audit-ready documentation delivered.',
    tags: ['Azure', 'Terraform', 'Cloud security', 'Delivery automation'],
  },
  {
    industry: 'Financial services · United States',
    title: 'Secure delivery for a core banking integration',
    challenge: 'Establish a delivery path for a sensitive greenfield transaction-exchange system with stringent audit and approval requirements.',
    engagement: 'Pipeline architecture, automated testing, security validation, secrets management, artifact provenance and controlled deployment workflows.',
    outcome: 'A production-ready delivery pipeline with traceable approvals, automated security evidence and a repeatable pattern for subsequent work.',
    tags: ['DevSecOps', 'Kubernetes', 'Vault', 'Software supply chain'],
  },
  {
    industry: 'Telecommunications',
    title: 'Automated analysis for fiber network operations',
    challenge: 'Reduce the time required to interpret OTDR data, locate fiber faults and prepare actionable incident information.',
    engagement: 'Monitoring integration, deterministic telemetry normalization, trace analysis, operator workflows and automated incident reporting.',
    outcome: 'Failure analysis and incident packages produced in minutes, with more precise information available to operations and field teams.',
    tags: ['OTDR', 'Systems integration', 'Operational automation', 'Network engineering'],
  },
];

export const engineeringProjects = [
  {
    name: 'Hikari',
    discipline: 'Operational systems integration',
    summary: 'An OTDR monitoring and fault-analysis system combining device adapters, event processing, deterministic normalization and operator-guided analysis.',
    href: '/projects/hikari',
  },
  {
    name: 'AXIOM',
    discipline: 'Private AI infrastructure',
    summary: 'A self-hosted research platform for document ingestion, hybrid retrieval, evidence handling and structured research workflows.',
    href: '/projects/axiom',
  },
  {
    name: 'cyb3r',
    discipline: 'Controlled security automation',
    summary: 'An engineering project focused on operator oversight, evidence handling, disciplined tool use and repeatable security research workflows.',
    href: '/projects/cyb3r',
  },
];

export const trustSignals = [
  { value: '15+', label: 'years across production systems and security' },
  { value: 'Cloud · Security · Software', label: 'architecture connected to implementation' },
  { value: 'International', label: 'delivery experience across Europe and North America' },
];
