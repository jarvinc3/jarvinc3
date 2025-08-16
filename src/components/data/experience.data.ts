export interface Experience {
   id: number;
   about_me_id: number;
   init_date: string;
   finish_date: string;
   currently: boolean;
   company_name: string;
   position_in: string;
   achievements: string[];
   created_at: string;
   updated_at: string;
   language: string;
}

export const experienceData: Experience[] = [
   {
      id: 1,
      about_me_id: 1,
      init_date: "2023-01-11 15:47:25+00",
      finish_date: "2023-11-01 15:47:26+00",
      currently: false,
      company_name: "DevSync Labs",
      position_in: "Full-Stack Developer Intern",
      achievements: [
         "I developed interactive interfaces using React and TailwindCSS.",
         "I implemented endpoints in Node.js with Express and connected PostgreSQL databases.",
         "I collaborated on the integration of external APIs and on continuous deployment using Docker and Git.",
         "I learned to work with agile methodologies, code reviews, and ticket management in real production environments."
      ],
      created_at: "2025-08-11 15:53:45.788959+00",
      updated_at: "2025-08-11 15:53:45.788959+00",
      language: "en"
   },
   {
      id: 2,
      about_me_id: 1,
      init_date: "2023-11-01 15:56:08+00",
      finish_date: "2024-04-15 15:56:25+00",
      currently: false,
      company_name: "Media Revolution Srl",
      position_in: "FrontEnd Developer",
      achievements: [
         "I led the development of a ticket management platform, 100% improving the workflow and task assignment for the company.",
         "I developed more than 50 landing business pages increasing development efficiency by 40%.",
         "Enhanced performance of a crypto-betting web game by optimizing layout and code structure.",
         "I provided pioneering solutions such as the implementation of TailwindCSS and the use of architectures in the frontend, maintaining a clean and reusable code."
      ],
      created_at: "2025-08-11 15:58:07.291056+00",
      updated_at: "2025-08-11 15:58:07.291056+00",
      language: "en"
   },
   {
      id: 3,
      about_me_id: 1,
      init_date: "2024-04-15 15:59:44+00",
      finish_date: "2025-06-13 15:59:57+00",
      currently: false,
      company_name: "Media Revolution Srl",
      position_in: "FullStack Developer",
      achievements: [
         "Implemented a microservice to check domain availability and store data for purchases.",
         "Improved backend data pipelines, boosting performance and data handling by 30%.",
         "Pioneer in project docking and efficient memory data management."
      ],
      created_at: "2025-08-11 16:01:03.026111+00",
      updated_at: "2025-08-11 16:01:03.026111+00",
      language: "en"
   },
   {
      id: 4,
      about_me_id: 2,
      init_date: "2023-01-11 16:01:38+00",
      finish_date: "2023-11-01 16:01:50+00",
      currently: false,
      company_name: "DevSync Labs",
      position_in: "Full-Stack Developer Intern",
      achievements: [
         "Desarrollé interfaces interactivas usando React y TailwindCSS.",
         "Implementé endpoints en Node.js con Express y conecté bases de datos PostgreSQL.",
         "Colaboré en la integración de APIs externas y en el despliegue continuo usando Docker y Git.",
         "Aprendí a trabajar con metodologías ágiles, revisión de código y manejo de tickets en entornos reales de producción."
      ],
      created_at: "2025-08-11 16:02:58.628102+00",
      updated_at: "2025-08-11 16:02:58.628102+00",
      language: "es"
   },
   {
      id: 5,
      about_me_id: 2,
      init_date: "2023-11-01 16:07:37+00",
      finish_date: "2024-04-15 16:07:46+00",
      currently: false,
      company_name: "Media Revolution Srl",
      position_in: "FrontEnd Developer",
      achievements: [
         "Lideré el desarrollo de una plataforma de gestion de tickets, mejorando un 100% el flujo de trabajo y la asignacion de tareas para la empresa.",
         "Desarrollé mas de 50 landing pages empresariales aumentando la eficiencia del desarrollo un 40%.",
         "Brindé mejoras en el rendimiento de un videojuego web enfocado en las apuestas crypto, tambien implementé con exito la estructura y layout de la aplicacion.",
         "Aporté soluciones pioneras como la implementacion de TailwindCSS y el uso de arquitecturas en el frontend, manteniendo un codigo limpio y reutilizable."
      ],
      created_at: "2025-08-11 16:08:48.830169+00",
      updated_at: "2025-08-11 16:08:48.830169+00",
      language: "es"
   },
   {
      id: 6,
      about_me_id: 2,
      init_date: "2024-04-15 16:09:15+00",
      finish_date: "2025-06-13 16:09:36+00",
      currently: false,
      company_name: "Media Revolution Srl",
      position_in: "FullStack Developer",
      achievements: [
         "Implementé un microservicio para verificar la disponibilidad de dominios y almacenarlos para su compra.",
         "Mejoré las conexiones al backend de distintas aplicaciones, aumentando un 30% el manejo de datos.",
         "Pionero en la dockerizacion de proyectos y el manejo eficiente de los datos en memoria."
      ],
      created_at: "2025-08-11 16:10:31.852692+00",
      updated_at: "2025-08-11 16:10:31.852692+00",
      language: "es"
   }
];