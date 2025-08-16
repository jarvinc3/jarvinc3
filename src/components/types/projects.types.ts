export interface Project {
   id: string;
   title: string;
   subtitle: string;
   description: string;
   objectives: string[];
   results: string[];
   technologies: Array<{
      name: string;
      category: string;
      description: string;
   }>;
   images: string[];
   timeline: {
      duration: string;
      phases: Array<{
         name: string;
         duration: string;
         status: string;
      }>;
   };
   metrics: {
      codeLines: string;
      components: string;
      apiEndpoints: string;
      testCoverage: string;
   };
   links: {
      demo?: string;
      github?: string;
      documentation?: string;
   };
   status: string;
   featured: boolean;
   translations: {
      en: {
         title: string;
         subtitle: string;
         description: string;
         objectives: string[];
         results: string[];
      };
      es: {
         title: string;
         subtitle: string;
         description: string;
         objectives: string[];
         results: string[];
      };
   };
}

export interface Technology {
   name: string;
   category: string;
   description: string;
}

export interface TechnologyCardProps {
   technology: Technology;
}

export interface ProjectGalleryProps {
   images: string[];
   projectTitle: string;
}

export interface ProjectsData {
   projects: Project[];
}

export interface Phase {
   name: string;
   duration: string;
   status: 'completed' | 'in-progress' | 'pending';
}

export interface Timeline {
   duration: string;
   phases: Phase[];
}

export interface ProjectTimelineProps {
   timeline: Timeline;
}

export interface Metrics {
   codeLines: string;
   components: string;
   apiEndpoints: string;
   testCoverage: string;
}

export interface ProjectMetricsProps {
   metrics: Metrics;
}

export const categoryIcons = {
   Frontend: 'logos:react',
   Backend: 'logos:nodejs',
   Database: 'logos:postgresql',
   Payment: 'logos:stripe',
   Cloud: 'logos:aws',
   DevOps: 'logos:docker-icon',
};

export const categoryColors = {
   Frontend: 'from-blue-500 to-blue-600',
   Backend: 'from-green-500 to-green-600',
   Database: 'from-purple-500 to-purple-600',
   Payment: 'from-orange-500 to-orange-600',
   Cloud: 'from-indigo-500 to-indigo-600',
   DevOps: 'from-gray-500 to-gray-600',
};

export const metricIcons = {
   codeLines: 'mdi:code-braces',
   components: 'mdi:component',
   apiEndpoints: 'mdi:api',
   testCoverage: 'mdi:shield-check',
};

export const metricLabels = {
   codeLines: 'Líneas de Código',
   components: 'Componentes',
   apiEndpoints: 'API Endpoints',
   testCoverage: 'Cobertura de Tests',
};

export const metricColors = {
   codeLines: 'from-blue-500 to-blue-600',
   components: 'from-green-500 to-green-600',
   apiEndpoints: 'from-purple-500 to-purple-600',
   testCoverage: 'from-orange-500 to-orange-600',
};