export interface Service {
  slug: string;
  number: string;
  label: string;
  title: string;
  summary: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    slug: 'cloud-management',
    number: '01',
    label: 'Cloud & Platform',
    title: 'Cloud and platform engineering',
    summary: 'Design, migration and implementation support for cloud and cloud-native environments.',
    capabilities: [
      'Cloud solution design and architecture',
      'Migration from on-premises environments to cloud',
      'Cloud monitoring and security assessments',
      'Cloud-native and serverless application design',
      'Kubernetes deployments on AKS and EKS',
    ],
  },
  {
    slug: 'integration',
    number: '02',
    label: 'Integration & APIs',
    title: 'System integration and APIs',
    summary: 'Connect enterprise applications and platforms through open standards, secure APIs and integration infrastructure.',
    capabilities: [
      'Requirements assessment and integration architecture',
      'Integration infrastructure for on-premises and cloud environments',
      'API-first design and API security',
      'Integration using Apache Camel, Spring Boot and Quarkus',
    ],
  },
  {
    slug: 'ca-services',
    number: '03',
    label: 'Enterprise Automation',
    title: 'Enterprise automation',
    summary: 'Automate workloads across applications, platforms and cloud environments to reduce operational complexity.',
    capabilities: [
      'Automation architecture and implementation',
      'Automic Automation',
      'AutoSys Workload Automation',
      'IT Process Automation Manager',
    ],
  },
  {
    slug: 'security',
    number: '04',
    label: 'Security',
    title: 'Enterprise security',
    summary: 'Strengthen access controls and API security using established identity and security standards.',
    capabilities: [
      'Identity and access management',
      'OAuth 2.0, JWT and SAML standards',
      'Layer7 API Management and Developer Portal',
      'API gateway security design and implementation',
    ],
  },
];