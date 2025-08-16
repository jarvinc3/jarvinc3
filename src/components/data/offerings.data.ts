export interface ServiceOffering {
   id: string;
   language: string;
   description: string[];
   service: string;
   icon: string;
}

export const serviceOfferings: ServiceOffering[] = [
   {
      id: "03480b8b-ca91-40ce-ba4e-381363cd8fe3",
      language: "en",
      description: [
         "Design of secure, clean, and well-documented REST APIs.",
         "Integration with relational and non-relational databases (PostgreSQL, MongoDB).",
         "Authentication and authorization with role management, JWT tokens, and middleware.",
         "Scalable architecture using patterns such as MVC, services, and modularization.",
         "Automation of backend processes and tasks using cron jobs and workers.",
         "Testing and monitoring to ensure production stability."
      ],
      service: "BACKEND",
      icon: "https://img.icons8.com/?size=100&id=116827&format=png&color=000000"
   },
   {
      id: "080eb563-65a2-45d6-a451-fe8c90dcc459",
      language: "en",
      description: [
         "Responsive UI/UX design for all devices.",
         "Clean and modern design that builds trust.",
         "Responsive layout optimized for conversion.",
         "Use of design systems and UI/UX best practices.",
         "Visual adaptation aligned with brand identity.",
         "Seamless integration between design and frontend development."
      ],
      service: "UI/UX DESIGN",
      icon: "https://img.icons8.com/?size=100&id=24870&format=png&color=000000"
   },
   {
      id: "69d13a7f-ca54-4aef-a433-038ce7bb2c57",
      language: "es",
      description: [
         "Desarrollo de interfaces responsivas para web y móvil.",
         "Integración con APIs y manejo eficiente del estado (React Query, Context, etc.).",
         "Animaciones fluidas con Framer Motion y experiencias interactivas.",
         "Componentes reutilizables y arquitectura limpia basada en buenas prácticas.",
         "Optimización del rendimiento para cargas rápidas y mejor experiencia de usuario.",
         "Testing y mantenimiento enfocados en estabilidad y escalabilidad."
      ],
      service: "FRONTEND",
      icon: "https://img.icons8.com/?size=100&id=2778&format=png&color=000000"
   },
   {
      id: "8d129b23-df99-40ed-aa70-724edb46cc1b",
      language: "es",
      description: [
         "Diseño de APIs REST seguras, limpias y bien documentadas.",
         "Integración con bases de datos relacionales y no relacionales (PostgreSQL, MongoDB).",
         "Autenticación y autorización con manejo de roles, tokens JWT y middlewares.",
         "Arquitecturas escalables usando patrones como MVC, servicios y modularización.",
         "Automatización de procesos backend y tareas con cron jobs y workers.",
         "Testing y monitoreo para asegurar estabilidad en producción."
      ],
      service: "BACKEND",
      icon: "https://img.icons8.com/?size=100&id=116827&format=png&color=000000"
   },
   {
      id: "8d4a3f7e-924e-4780-abff-aa60b2a4bf7c",
      language: "es",
      description: [
         "Diseño UI/UX responsivo para todos los dispositivos.",
         "Diseño limpio y moderno que transmite confianza.",
         "Maquetación responsiva enfocada en la conversión.",
         "Uso de sistemas de diseño y buenas prácticas de UX/UI.",
         "Adaptación visual alineada con la identidad de marca.",
         "Integración fluida entre diseño y desarrollo frontend."
      ],
      service: "DISEÑO UI/UX",
      icon: "https://img.icons8.com/?size=100&id=24870&format=png&color=000000"
   },
   {
      id: "c50c52d4-3939-4026-8691-6b48c921f16b",
      language: "en",
      description: [
         "Development of responsive interfaces for web and mobile.",
         "API integration and efficient state management (React Query, Context, etc.).",
         "Smooth animations with Framer Motion and interactive experiences.",
         "Reusable components and clean architecture based on best practices.",
         "Performance optimization for fast loading and improved UX.",
         "Testing and maintenance focused on stability and scalability."
      ],
      service: "FRONTEND",
      icon: "https://img.icons8.com/?size=100&id=2778&format=png&color=000000"
   }
];