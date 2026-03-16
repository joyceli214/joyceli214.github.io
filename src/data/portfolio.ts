import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Joyce Li',
    role: 'Senior Full Stack Engineer',
    tagline: 'I build AI-native products that still meet enterprise reliability standards.',
    location: 'Toronto, ON, Canada',
    availability: 'Open to senior full-stack and platform engineering roles.',
    summary:
      'Full stack engineer focused on React and Node.js, with work centered on product delivery and platform reliability. Recent projects include AI orchestration, secure APIs, and high-availability services.',
    contacts: [
      {
        label: 'Email',
        href: 'mailto:joyceli214@gmail.com',
        value: 'joyceli214@gmail.com',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/joyce-li-ca',
        value: 'linkedin.com/in/joyce-li-ca',
      },
      {
        label: 'Phone',
        href: 'tel:+14162680598',
        value: '+1 (416) 268-0598',
      },
    ],
  },
  impactStats: [
    {
      label: 'Global Rollout',
      value: '5,000+',
      context: 'locations supported through cloud voice infrastructure',
    },
    {
      label: 'SSO Migration',
      value: '200,000+',
      context: 'users moved to Keycloak-based authentication',
    },
    {
      label: 'Healthcare Automation',
      value: '30+',
      context: 'clinical branches served by automated inquiry flows',
    },
  ],
  experience: [
    {
      company: 'Shift Technologies Canada Inc.',
      companyUrl: 'https://cloudrep.ai',
      title: 'Senior Full Stack Developer',
      period: 'Jan 2025 - Present',
      bullets: [
        'Built an in-house AI orchestrator for real-time coordination between LLM and STT/TTS models used by voice agents.',
        'Designed high-availability AWS deployments (EC2/S3) supporting a global fitness network.',
        'Led technical strategy and delivery for enterprise clients in travel and healthcare.',
        'Shipped secure NestJS microservices and Twilio/Stripe integrations for complex automation workflows.',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'NestJS', 'AWS', 'Twilio', 'Stripe'],
    },
    {
      company: 'Orient Overseas Container Line',
      companyUrl: 'https://www.oocl.com',
      title: 'Full Stack Developer',
      period: 'Jul 2022 - Aug 2024',
      bullets: [
        'Supported migration of over 200,000 users into a Keycloak SSO architecture with minimal disruption.',
        'Improved session handling by aligning logout behavior with OpenID Connect RP-Initiated Logout.',
        'Decoupled legacy frameworks into Java Spring Boot services to reduce dependency on vendor tooling.',
        'Modernized the NDR dashboard from AngularJS to React and contributed to a 24% page-load improvement.',
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'Keycloak', 'OAuth 2.0'],
    },
    {
      company: 'Albacastor Technology Limited',
      companyUrl: 'https://www.albacastor.com',
      title: 'Software Engineer',
      period: 'Jun 2021 - Jun 2022',
      bullets: [
        'Built a hardware-to-cloud pipeline over HTTP to stream telemetry from edge devices into Firebase.',
        'Wrote C++ firmware on ESP32 microcontrollers for sensor processing and UV sanitization logic.',
      ],
      technologies: ['C++', 'ESP32', 'Firebase', 'HTTP'],
    },
    {
      company: 'Consumer Council',
      companyUrl: 'https://www.consumer.org.hk/en',
      title: 'IT Division Summer Intern',
      period: 'Jun 2020 - Aug 2020',
      bullets: [
        'Migrated legacy applications from PHP 5 to PHP 7 to improve performance and maintainability.',
        'Ran WCAG 2.0 accessibility checks for compliance-focused releases.',
      ],
      technologies: ['PHP', 'Accessibility', 'Legacy Modernization'],
    },
  ],
  projects: [
    {
      name: 'Tootor AI Tutor',
      description:
        'Integrated LLM workflows with lip-sync interaction to create a voice-responsive tutoring avatar.',
      impact: 'Explored more accessible and conversational learning experiences.',
      technologies: ['LLMs', 'Voice Interaction', 'Avatar Rendering'],
      status: 'Academic',
    },
    {
      name: 'PolyU PelviSense',
      description:
        'Developed a Flutter app with BLE support for live medical data visualization.',
      impact:
        'Turned raw sensor signals into interfaces that are easier to interpret quickly.',
      technologies: ['Flutter', 'BLE', 'Mobile UI'],
      status: 'Academic',
    },
    {
      name: 'Enterprise Voice AI Platform',
      description:
        'Led implementation of production voice AI flows across orchestration services, secure APIs, and cloud infrastructure.',
      impact:
        'Supported real-world operations across fitness, travel, and healthcare contexts.',
      technologies: ['NestJS', 'AWS', 'Twilio', 'Stripe', 'Microservices'],
      status: 'Private',
    },
  ],
  skills: [
    {
      title: 'Frontend',
      items: ['React.js', 'Redux', 'TypeScript', 'HTML5', 'CSS'],
    },
    {
      title: 'Backend & APIs',
      items: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'REST', 'JSON', 'OAuth 2.0', 'Keycloak'],
    },
    {
      title: 'Cloud & Data',
      items: ['AWS EC2/S3', 'Azure', 'MongoDB', 'RDBMS', 'ElasticSearch', 'Firebase'],
    },
    {
      title: 'DevOps & Tooling',
      items: ['Docker', 'CI/CD', 'Terraform', 'JUnit', 'Mockito', 'SwaggerHub', 'Git'],
    },
  ],
  education: [
    {
      institution: 'The Hong Kong University of Science and Technology',
      program: 'Dual Degree Program in Technology and Management',
      details: 'Major in Computer Engineering and General Business Management',
    },
  ],
  languages: ['English (Fluent)', 'Mandarin (Fluent)', 'Cantonese (Native)'],
}
