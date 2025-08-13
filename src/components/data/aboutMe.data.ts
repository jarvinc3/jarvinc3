export interface AboutMeData {
   id: number,
   name: string,
   last_name: string,
   short_description: string,
   description: string[],
   job_position: string,
   social_media: { icon: string, url: string }[],
   created_at: Date,
   updated_at: Date,
   language: string,
   phone_number: string,
   secondary_phone_number: string,
   mail_address: string,
   secondary_mail_address: string,
   current_adress: string,
   city_address: string,
   country: string,
}

export const aboutMeData: AboutMeData[] = [
   {
      id: 1,
      name: "Jarvin",
      last_name: "Collado",
      short_description: "I am a Full stack Developer based in Santo Domingo.",
      description: [
         `I'm a Full-Stack Developer with +2 years of experience building modern web applications using React, Next.js, and Node.js.
         I focus on performance, clean architecture, and maintainable code.`,

         `I have led frontend projects, implemented backend microservices, and improved workflows with scalable solutions. At Media Revolution,
         I helped build a ticketing system, developed 50+ landing pages, and enhanced the performance of a crypto-betting platform.`,

         `I am passionate about solving real-world problems with code, learning by doing, and constantly improving.
         Currently exploring testing, performance optimization, and integrating AI into web experiences.`
      ],
      job_position: "Full stack Developer",
      social_media: [
         {
            icon: "line-md:github-loop",
            url: "https://github.com/jarvinc3"
         },
         {
            icon: "line-md:linkedin",
            url: "https://www.linkedin.com/in/jarvin-collado"
         },
         {
            icon: "line-md:instagram",
            url: "https://www.instagram.com/jarv.c3"
         },
         {
            icon: "basil:gmail-outline",
            url: "https://twitter.com/yalbi"
         },
      ],
      created_at: new Date("2025-08-08T09:08:43.800414Z"),
      updated_at: new Date("2025-08-08T09:08:43.800414Z"),
      language: "en",
      phone_number: "+1 (809) 637-6631",
      secondary_phone_number: "",
      mail_address: "jarvinct3@gmail.com",
      secondary_mail_address: "jarvincollado@gmail.com",
      current_adress: "#30 Villa carolina 2da, Hato Nuevo",
      city_address: "Santo Domingo",
      country: "Dominican Republic"
   },
   {
      id: 1,
      name: "Jarvin",
      last_name: "Collado",
      short_description: "Soy un Desarrollador Frontend con sede en Santo Domingo.",
      description: [
         `Soy un Desarrollador Full Stack con más de 2 años de experiencia creando aplicaciones web modernas usando React, Next.js y Node.js.
         Me enfoco en el rendimiento, la arquitectura limpia y un código mantenible.`,

         `He liderado proyectos de frontend, implementado microservicios de backend y mejorado flujos de trabajo con soluciones escalables.
         En Media Revolution, contribuí a un sistema de tickets, desarrollé más de 50 páginas de aterrizaje y mejoré el rendimiento de una plataforma de apuestas cripto.`,

         `Me apasiona resolver problemas reales con código, aprender haciendo y mejorar constantemente.
         Actualmente exploro testing, optimización de rendimiento e integración de IA en experiencias web.`
      ],
      job_position: "Desarrollador Full Stack",
      social_media: [
         {
            icon: "line-md:github-loop",
            url: "https://github.com/jarvinc3"
         },
         {
            icon: "line-md:linkedin",
            url: "https://www.linkedin.com/in/jarvin-collado"
         },
         {
            icon: "line-md:instagram",
            url: "https://www.instagram.com/jarv.c3"
         },
         {
            icon: "basil:gmail-outline",
            url: "https://twitter.com/yalbi"
         },
      ],
      created_at: new Date("2025-08-08T09:08:43.800414Z"),
      updated_at: new Date("2025-08-08T09:08:43.800414Z"),
      language: "es",
      phone_number: "+1 (809) 637-6631",
      secondary_phone_number: "",
      mail_address: "jarvinct3@gmail.com",
      secondary_mail_address: "jarvincollado@gmail.com",
      current_adress: "#30 Villa carolina 2da, Hato Nuevo",
      city_address: "Santo Domingo",
      country: "Republica Dominicana"
   }
];