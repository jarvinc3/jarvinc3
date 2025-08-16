
export interface Skill {
   name: string;
   icon: string;
   level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface SkillCategory {
   category: string;
   icon: string;
   skills: Skill[];
}

export const skillsData: SkillCategory[] = [
   {
      category: 'Languages',
      icon: "streamline-freehand:learning-programming-book",
      skills: [
         { icon: "logos:javascript", name: 'JavaScript', level: 'Expert' },
         { icon: "logos:typescript-icon", name: 'TypeScript', level: 'Expert' },
         { icon: "logos:python", name: 'Python', level: 'Advanced' },
         { icon: "logos:nodejs-icon", name: 'Node.js', level: 'Expert' }
      ]
   },
   {
      category: 'Frontend',
      icon: "solar:programming-outline",
      skills: [
         { icon: "logos:react", name: 'React', level: 'Expert' },
         { icon: "logos:nextjs-icon", name: 'Next.js', level: 'Advanced' },
         { icon: "logos:angular-icon", name: 'AngularJs', level: 'Intermediate' },
         { icon: "logos:astro-icon", name: 'AstroJs', level: 'Advanced' },
         { icon: "logos:html-5", name: 'HTML5', level: 'Expert' },
         { icon: "logos:css-3", name: 'CSS3', level: 'Expert' },
         { icon: "logos:tailwindcss-icon", name: 'TailwindCSS', level: 'Expert' },
         { icon: "logos:bootstrap", name: 'Bootstrap', level: 'Advanced' }
      ]
   },
   {
      category: 'Backend',
      icon: "hugeicons:laptop-programming",
      skills: [
         { icon: "skill-icons:expressjs-dark", name: 'Express.js', level: 'Expert' },
         { icon: "logos:nestjs", name: 'Nest.js', level: 'Advanced' },
         { icon: "logos:django-icon", name: 'Django', level: 'Advanced' },
         { icon: "logos:graphql", name: 'GraphQL', level: 'Intermediate' },
      ]
   },
   {
      category: 'Databases',
      icon: "mdi:database-cog-outline",
      skills: [
         { icon: "logos:postgresql", name: 'PostgreSQL', level: 'Advanced' },
         { icon: "logos:mysql-icon", name: 'MySQL', level: 'Advanced' },
         { icon: "logos:supabase-icon", name: 'SupaBase', level: 'Expert' },
         { icon: "logos:firebase-icon", name: 'Firebase', level: 'Intermediate' },
      ]
   },
   {
      category: 'Tools',
      icon: "fluent:window-dev-tools-24-regular",
      skills: [
         { icon: "logos:github-icon", name: 'Git/GitHub', level: 'Expert' },
         { icon: "logos:docker-icon", name: 'Docker', level: 'Advanced' },
         { icon: "devicon:vscode", name: 'VS Code', level: 'Expert' },
         { icon: "mingcute:ai-fill", name: 'Ai Tools', level: 'Advanced' }
      ]
   }
];

export interface Stat {
   iconColor: string;
   count: number | string;
   label: string;
   description: string;
}

export interface Highlight {
   countColor: string;
   count: number | string;
   label: string;
   description: string;
}

export const statGrid: Stat[] = [
   {
      iconColor: "text-blue-500",
      count: skillsData.reduce((acc, cat) => acc + cat.skills.length, 0),
      label: "Total Skills",
      description: `Across ${skillsData.length} different categories.`,
   },
   {
      iconColor: "text-emerald-500",
      count: skillsData.reduce((acc, cat) => acc + cat.skills.filter(s => s.level === 'Expert').length, 0),
      label: "Expert Level",
      description: `${Math.round((skillsData.reduce((acc, cat) => acc + cat.skills.filter(s => s.level === 'Expert').length, 0) / skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)) * 100)}% of all skills`,
   },
   {
      iconColor: "text-purple-500",
      count: 12,
      label: "Total Projects",
      description: "Avg 3 projects per skill.",
   },
   {
      iconColor: "text-orange-500",
      count: "3+",
      label: "Years Experience",
      description: "Since 2022, continuous learning.",
   },
]

export const keyHighlights: Highlight[] = [
   {
      countColor: "text-emerald-500",
      count: skillsData.find(cat => cat.category === 'Frontend')?.skills.length || 0,
      label: "Frontend Technologies",
      description: "Most diverse category",
   },
   {
      countColor: "text-blue-500",
      count: skillsData.reduce((acc, cat) => acc + cat.skills.filter(s => s.level === 'Expert' || s.level === 'Advanced').length, 0),
      label: "Advanced+ Skills",
      description: "Production ready",
   },
   {
      countColor: "text-purple-500",
      count: skillsData.find(cat => cat.category === 'Backend')?.skills.length || 0,
      label: "Most Used Category",
      description: "By project count",
   },
]
