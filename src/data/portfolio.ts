import type { PortfolioData } from '../types/portfolio'
import pelvisenseImage from '../assets/pelvisense.webp'
import tootorAvatarImage from '../assets/Tootor AI Avatar.png'
import adminDashboardImage from '../assets/admin_dashboard.webp'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Joyce Li',
    role: 'Software Engineer',
    tagline: 'I build AI-native products that still meet enterprise reliability standards.',
    location: 'Toronto, ON, Canada',
    availability: 'Open to senior full-stack and platform engineering roles.',
    summary:
      'Software engineer focused on React and Node.js, with work centered on product delivery and platform reliability. Recent projects include AI orchestration, secure APIs, and high-availability services.',
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
    ],
  },
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
      name: 'PelviSense Tracker',
      description:
        'Mobile companion app for PelviSense training, progress tracking, and daily session support.',
      highlights: [
        'Implemented Flutter flows for guided sessions, device data capture, and progress history.',
        'Designed a clean mobile UX so day-to-day logging stays quick, clear, and consistent.',
      ],
      images: [
        {
          src: pelvisenseImage,
          alt: 'PelviSense mobile app interface',
        },
      ],
      links: [
        {
          label: 'App Store',
          href: 'https://apps.apple.com/hk/app/pelvisense-tracker/id6550893131',
          type: 'website',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/joyceli214/emg_sensor',
          type: 'github',
        },
      ],
      technologies: ['Flutter', 'Dart', 'Android', 'iOS'],
    },
    {
      name: 'Tootor AI Avatar',
      description:
        'AI avatar tutoring interface with real-time voice interaction and conversational guidance.',
      highlights: [
        'Integrated speech input, LLM responses, and avatar behavior into a unified live chat flow.',
        'Improved usability with responsive turn-taking and natural voice-first interaction design.',
      ],
      images: [
        {
          src: tootorAvatarImage,
          alt: 'Tootor AI avatar interface',
        },
      ],
      links: [
        {
          label: 'Website',
          href: 'https://tootor.ca',
          type: 'website',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/joyceli214/talking-avatar-with-ai',
          type: 'github',
        },
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'JavaScript', 'C++'],
    },
    {
      name: 'Vintage Audio Shop Admin Portal',
      description:
        'Web admin dashboard for catalog management, order workflows, and day-to-day shop operations.',
      highlights: [
        'Built React and Go interfaces for inventory updates, order handling, and admin operations.',
        'Dashboard preview image is intentionally blurred to protect customer privacy.',
      ],
      images: [
        {
          src: adminDashboardImage,
          alt: 'Blurred admin dashboard screenshot for privacy protection',
        },
      ],
      links: [
        {
          label: 'Website',
          href: 'https://admin-humphreys.up.railway.app/',
          type: 'website',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/joyceli214/humphreys',
          type: 'github',
        },
      ],
      technologies: ['Go', 'React', 'Vite', 'PostgreSQL'],
    },
  ],
  skills: [
    {
      title: 'Frontend',
      items: [
        'React',
        'TypeScript',
        'JavaScript',
        'Vite',
        'Tailwind CSS',
        'Astro',
        'React Router',
        'Three.js',
      ],
    },
    {
      title: 'Backend & APIs',
      items: [
        'Node.js',
        'Express',
        'NestJS',
        'Go',
        'Gin',
        'Java',
        'Spring Boot',
        'REST APIs',
        'JWT Auth',
        'OpenAPI',
        'OAuth 2.0',
        'Keycloak',
      ],
    },
    {
      title: 'Data & Mobile',
      items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Flutter', 'Dart', 'Android', 'iOS', 'BLE'],
    },
    {
      title: 'DevOps & Tooling',
      items: ['Git', 'Docker', 'CI/CD', 'Vitest', 'Testing Library', 'JUnit', 'Mockito', 'ESLint'],
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
