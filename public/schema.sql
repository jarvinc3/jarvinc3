-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.about_me (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text NOT NULL,
  last_name text NOT NULL,
  little_description text,
  description text,
  job_position text,
  social_media ARRAY,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  language text NOT NULL,
  phone_number text,
  secondary_phone_number text,
  mail_address text,
  secondary_mail_address text,
  current_adress text,
  city_address text,
  country text,
  CONSTRAINT about_me_pkey PRIMARY KEY (id)
);
CREATE TABLE public.category (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  about_me_id bigint NOT NULL,
  category text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  icon text,
  CONSTRAINT category_pkey PRIMARY KEY (id),
  CONSTRAINT skills_about_me_id_fkey FOREIGN KEY (about_me_id) REFERENCES public.about_me(id)
);
CREATE TABLE public.category_technologies (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  skill_id bigint NOT NULL,
  skill text NOT NULL,
  icon text NOT NULL,
  level text NOT NULL,
  CONSTRAINT category_technologies_pkey PRIMARY KEY (id),
  CONSTRAINT skills_description_skill_id_fkey FOREIGN KEY (skill_id) REFERENCES public.category(id)
);
CREATE TABLE public.education (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  about_me_id bigint,
  init_date timestamp with time zone,
  finish_date timestamp with time zone,
  currently boolean DEFAULT false,
  place_of_study text NOT NULL,
  graduate text,
  honors text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  language text NOT NULL,
  CONSTRAINT education_pkey PRIMARY KEY (id),
  CONSTRAINT education_about_me_id_fkey FOREIGN KEY (about_me_id) REFERENCES public.about_me(id)
);
CREATE TABLE public.experience (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  about_me_id bigint,
  init_date timestamp with time zone,
  finish_date timestamp with time zone,
  currently boolean DEFAULT false,
  company_name text NOT NULL,
  position_in text NOT NULL,
  achievements ARRAY,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  language text NOT NULL,
  CONSTRAINT experience_pkey PRIMARY KEY (id),
  CONSTRAINT experience_about_me_id_fkey FOREIGN KEY (about_me_id) REFERENCES public.about_me(id)
);
CREATE TABLE public.project_images (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL,
  image_url text NOT NULL,
  CONSTRAINT project_images_pkey PRIMARY KEY (id),
  CONSTRAINT project_images_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id)
);
CREATE TABLE public.project_objectives (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL,
  objective text NOT NULL,
  language text NOT NULL DEFAULT 'es'::text,
  CONSTRAINT project_objectives_pkey PRIMARY KEY (id),
  CONSTRAINT project_objectives_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id)
);
CREATE TABLE public.project_results (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL,
  result text NOT NULL,
  language text NOT NULL DEFAULT 'es'::text,
  CONSTRAINT project_results_pkey PRIMARY KEY (id),
  CONSTRAINT project_results_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id)
);
CREATE TABLE public.project_technologies (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL,
  technology_id uuid NOT NULL,
  description text,
  CONSTRAINT project_technologies_pkey PRIMARY KEY (id),
  CONSTRAINT project_technologies_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id),
  CONSTRAINT project_technologies_technology_id_fkey FOREIGN KEY (technology_id) REFERENCES public.category_technologies(id)
);
CREATE TABLE public.project_timeline (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL,
  phase_name text NOT NULL,
  duration text,
  status text CHECK (status = ANY (ARRAY['planned'::text, 'in_progress'::text, 'completed'::text])),
  CONSTRAINT project_timeline_pkey PRIMARY KEY (id),
  CONSTRAINT project_timeline_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id)
);
CREATE TABLE public.project_translations (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL,
  language text NOT NULL,
  title text NOT NULL,
  subtitle text,
  description text,
  CONSTRAINT project_translations_pkey PRIMARY KEY (id),
  CONSTRAINT project_translations_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id)
);
CREATE TABLE public.projects (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  about_me_id bigint NOT NULL,
  title text NOT NULL,
  subtitle text,
  description text,
  status text CHECK (status = ANY (ARRAY['planned'::text, 'in_progress'::text, 'completed'::text, 'archived'::text])),
  featured boolean DEFAULT false,
  duration text,
  code_lines text,
  components text,
  api_endpoints text,
  test_coverage text,
  demo_url text,
  github_url text,
  documentation_url text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT projects_pkey PRIMARY KEY (id),
  CONSTRAINT projects_about_me_id_fkey FOREIGN KEY (about_me_id) REFERENCES public.about_me(id)
);
CREATE TABLE public.service_offerings (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  language text NOT NULL,
  description ARRAY,
  service text,
  icon text,
  about_me_id bigint NOT NULL,
  CONSTRAINT service_offerings_pkey PRIMARY KEY (id),
  CONSTRAINT service_offerings_about_me_id_fkey FOREIGN KEY (about_me_id) REFERENCES public.about_me(id)
);