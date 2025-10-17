import type { MenuItem } from '../types/menu';
import { 
  HomeIcon, Package,  Code,  Layers,  Zap,  ShieldCheck,  Cloud,  Users,  Settings,  Database,  HardDrive,  Waves,  TrendingUp,  GraduationCap,  Sparkles,  Shield,  BarChart,  GitBranch,  Wrench,  Building2,  Building,  BookOpen,  Headphones,  Lightbulb,  Leaf,  DollarSign,  Mail} from 'lucide-react';

export const rootMenuData: MenuItem[] = [
  {
    id: '1',
    label: 'Home',
    description: 'Welcome to our comprehensive platform',
    icon: HomeIcon,
  },
  {
    id: '2',
    label: 'Products & Services',
    description: 'Explore our comprehensive offerings',
    icon: Package,
    children: [
      {
        id: '21',
        label: 'Software Solutions',
        description: 'Custom software development and deployment',
        icon: Code,
        children: [
          {
            id: '211',
            label: 'System Architecture',
            description: 'Scalable system design and planning',
            icon: Layers,
          },
          {
            id: '212',
            label: 'Performance Optimization',
            description: 'Application and system optimization',
            icon: Zap,
          },
          {
            id: '213',
            label: 'Security Audits',
            description: 'Comprehensive security assessments',
            icon: ShieldCheck,
          },
        ],
      },
      {
        id: '22',
        label: 'Cloud & Infrastructure',
        description: 'Scalable cloud solutions and infrastructure',
        icon: Cloud,
      },
      {
        id: '23',
        label: 'Consulting Services',
        description: 'Expert guidance and strategic support',
        icon: Users,
        children: [
          {
            id: '231',
            label: 'Technical Consulting',
            description: 'Architecture and implementation guidance',
            icon: Settings,
            children: [
              {
                id: '2311',
                label: 'Data Governance',
                description: 'Data quality, privacy, and compliance frameworks',
                icon: Database,
              },
              {
                id: '2312',
                label: 'Data Architecture',
                description: 'Enterprise data architecture design',
                icon: HardDrive,
              },
              {
                id: '2313',
                label: 'Data Lake Strategy',
                description: 'Data lake design and implementation',
                icon: Waves,
              },
            ],
          },
          {
            id: 'business-strategy',
            label: 'Business Strategy',
            description: 'Digital transformation and business planning',
            icon: TrendingUp,
          },
          {
            id: 'training-workshops',
            label: 'Training & Workshops',
            description: 'Team skill development and knowledge transfer',
            icon: GraduationCap,
          },
        ],
      },
      {
        id: '24',
        label: 'Digital Transformation',
        description: 'Comprehensive digital transformation strategies',
        icon: Sparkles,
      },
      {
        id: '25',
        label: 'Cybersecurity Consulting',
        description: 'Comprehensive cybersecurity services and solutions',
        icon: Shield,
      },
      {
        id: '26',
        label: 'Data & Analytics Consulting',
        description: 'Data strategy, analytics, and business intelligence',
        icon: BarChart,
      },
      {
        id: '27',
        label: 'DevOps & Platform Engineering',
        description: 'DevOps transformation and platform engineering',
        icon: GitBranch,
      },
      {
        id: '28',
        label: 'Support & Maintenance',
        description: 'Ongoing maintenance and support services',
        icon: Wrench,
      },
    ],
  },
  {
    id: '3',
    label: 'Industry Solutions',
    description: 'Specialized solutions for different industries',
    icon: Building2,
  },
  {
    id: '4',
    label: 'Company',
    description: 'Learn about our organization and culture',
    icon: Building,
  },
  {
    id: '5',
    label: 'Resources',
    description: 'Knowledge base, tools, and learning materials',
    icon: BookOpen,
  },
  {
    id: '6',
    label: 'Support',
    description: 'Get help and support when you need it',
    icon: Headphones,
  },
  {
    id: '7',
    label: 'Research & Innovation',
    description: 'Cutting-edge research and innovation initiatives',
    icon: Lightbulb,
  },
  {
    id: '8',
    label: 'Sustainability',
    description: 'Environmental responsibility and sustainable technology',
    icon: Leaf,
  },
  {
    id: '9',
    label: 'Investor Relations',
    description: 'Financial information and investor resources',
    icon: DollarSign,
  },
  {
    id: '10',
    label: 'Contact',
    description: 'Get in touch with our team',
    icon: Mail,
  },
];
