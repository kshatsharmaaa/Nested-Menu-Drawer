
import type { MenuItem } from '../types/menu';

export const rootMenuData: MenuItem[] = [
  {
    id: '1',
    label: 'Home',
    description: 'Welcome to our comprehensive platform',
  },
  {
    id: '2',
    label: 'Products & Services',
    description: 'Explore our comprehensive offerings',
    children: [
      {
        id: '21',
        label: 'Software Solutions',
        description: 'Custom software development and deployment',
        children: [
          {
            id: '211',
            label: 'System Architecture',
            description: 'Scalable system design and planning',
          },
          {
            id: '212',
            label: 'Performance Optimization',
            description: 'Application and system optimization',
          },
          {
            id: '213',
            label: 'Security Audits',
            description: 'Comprehensive security assessments',
          },
        ],
      },
      {
        id: '22',
        label: 'Cloud & Infrastructure',
        description: 'Scalable cloud solutions and infrastructure',
      },
      {
        id: '23',
        label: 'Consulting Services',
        description: 'Expert guidance and strategic support',
        children: [
          {
            id: '231',
            label: 'Technical Consulting',
            description: 'Architecture and implementation guidance',
            children: [
              {
                id: '2311',
                label: 'Data Governance',
                description: 'Data quality, privacy, and compliance frameworks',
              },
              {
                id: '2312',
                label: 'Data Architecture',
                description: 'Enterprise data architecture design',
              },
              {
                id: '2313',
                label: 'Data Lake Strategy',
                description: 'Data lake design and implementation',
              },
            ],
          },
          {
            id: 'business-strategy',
            label: 'Business Strategy',
            description: 'Digital transformation and business planning',
          },
          {
            id: 'training-workshops',
            label: 'Training & Workshops',
            description: 'Team skill development and knowledge transfer',
          },
        ],
      },
      {
        id: '24',
        label: 'Digital Transformation',
        description: 'Comprehensive digital transformation strategies',
      },
      {
        id: '25',
        label: 'Cybersecurity Consulting',
        description: 'Comprehensive cybersecurity services and solutions',
      },
      {
        id: '26',
        label: 'Data & Analytics Consulting',
        description: 'Data strategy, analytics, and business intelligence',
      },
      {
        id: '27',
        label: 'DevOps & Platform Engineering',
        description: 'DevOps transformation and platform engineering',
      },
      {
        id: '28',
        label: 'Support & Maintenance',
        description: 'Ongoing maintenance and support services',
      },
    ],
  },
  {
    id: '3',
    label: 'Industry Solutions',
    description: 'Specialized solutions for different industries',
  },
  {
    id: '4',
    label: 'Company',
    description: 'Learn about our organization and culture',
  },
  {
    id: '5',
    label: 'Resources',
    description: 'Knowledge base, tools, and learning materials',
  },
  {
    id: '6',
    label: 'Support',
    description: 'Get help and support when you need it',
  },
  {
    id: '7',
    label: 'Research & Innovation',
    description: 'Cutting-edge research and innovation initiatives',
  },
  {
    id: '8',
    label: 'Sustainability',
    description: 'Environmental responsibility and sustainable technology',
  },
  {
    id: '9',
    label: 'Investor Relations',
    description: 'Financial information and investor resources',
  },
  {
    id: '10',
    label: 'Contact',
    description: 'Get in touch with our team',
  },
];
