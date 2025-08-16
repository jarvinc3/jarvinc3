export interface EducationRow {
   id: number;
   about_me_id: number;
   init_date: string;
   finish_date: string | null;
   currently: boolean;
   place_of_study: string;
   graduate: string;
   honors: string | null;
   created_at: string;
   updated_at: string;
   language: string;
}

export const educationRows: EducationRow[] = [
   {
      id: 1,
      about_me_id: 1,
      init_date: "2025-07-07 16:17:22+00",
      finish_date: null,
      currently: true,
      place_of_study: "UNIVERSIDAD DEL CARIBE",
      graduate: "B.S. in Software Engineering",
      honors: null,
      created_at: "2025-08-11 16:17:51.615967+00",
      updated_at: "2025-08-11 16:17:51.615967+00",
      language: "en"
   },
   {
      id: 2,
      about_me_id: 1,
      init_date: "2022-01-03 16:20:52+00",
      finish_date: "2022-11-25 16:21:16+00",
      currently: false,
      place_of_study: "FUNVAL INTERNATIONAL",
      graduate: "Full-Stack Web Development Technician",
      honors: "Graduated with excellence",
      created_at: "2025-08-11 16:22:07.709137+00",
      updated_at: "2025-08-11 16:22:07.709137+00",
      language: "en"
   },
   {
      id: 3,
      about_me_id: 2,
      init_date: "2025-07-07 16:22:52+00",
      finish_date: null,
      currently: true,
      place_of_study: "UNIVERSIDAD DEL CARIBE",
      graduate: "Ingeniería de Software",
      honors: null,
      created_at: "2025-08-11 16:23:45.410784+00",
      updated_at: "2025-08-11 16:23:45.410784+00",
      language: "es"
   },
   {
      id: 4,
      about_me_id: 2,
      init_date: "2022-01-10 16:24:00+00",
      finish_date: "2022-11-25 16:24:10+00",
      currently: false,
      place_of_study: "FUNVAL INTERNATIONAL",
      graduate: "Técnico en Desarrollo Web Full Stack",
      honors: "Graduado con excelencia",
      created_at: "2025-08-11 16:24:53.251361+00",
      updated_at: "2025-08-11 16:24:53.251361+00",
      language: "es"
   }
];