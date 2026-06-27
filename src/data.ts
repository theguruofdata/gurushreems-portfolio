import { Project, JourneyMilestone, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'data-discovery-assistant',
    title: 'AI-Powered Data Discovery Assistant',
    category: 'Generative AI',
    description: 'Architected a GenAI-powered data discovery assistant using Google ADK, Gemini, and enterprise metadata repositories. Enables business users and engineers to discover datasets, identify table relationships, locate columns, and retrieve domain knowledge through natural language queries. Expected to reduce data support requests by 50-70% and accelerate column discovery from hours to seconds.',
    tags: ['Google ADK', 'Gemini API', 'BigQuery', 'Python', 'Metadata Repositories', 'GCP'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN-5ChoL_VctOMtNcfSE-2p8V1T6u0Dv8QAggZJqZUSoKQupSfN6BOY-QtR5lejqQZ5bkEeuXJpiqdcmupYoQ7gjmstF_nGtD_lO8DVWef_D6L0368TVgXN-nfT12JcgD3yh8fjSg5OyVhFYIQqwyKmRIdxyDWTKcb4D0Y4n9V4lMKeRtJejIHkz_ydtW2aGeQI1tsaRQmWuR4QyxXPgrLpqqd2vTyp9Os2c1jlQsrgthIJGMgjsyM24IvhyxcFhL0hplohHx8ey28',
    year: '2025',
    role: 'GenAI Architect & Senior Engineer',
    client: 'Enterprise AI Initiatives',
    liveUrl: '#',
    interactiveType: 'minimalist'
  },
  {
    id: 'data-quality-profiling',
    title: 'Enterprise Data Profiling & Quality',
    category: 'Data Governance',
    description: 'Designed and deployed a scalable governance platform that automatically evaluates completeness, uniqueness, nullability, schema drift, and custom query anomalies across 80+ enterprise datasets. Reduced manual profiling effort by 500+ hours/year across engineering teams and ensured highly reliable data pipelines.',
    tags: ['Airflow', 'Python', 'BigQuery', 'GCP Cloud Functions', 'Data Quality Frameworks'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAenXezLefD69a95UezuCU45Q1nns874awP01IS6E338sw0fIsxF0lbN8VsM0t1Ih_TKErOFFfdpC2YsxQoL-dEPVu3LySGzwFJvXJYBjUrcSX9Sd1vwU74a3iT1XhhS7i9gjTmC2yFZLgFTjB7BS_KajatjVV3NODID_r3-XuHNv4M9W2HVNXO0quMA6uYr14GflJxA-YBvfo1mWnQAAO0CmW8c1a97BUE6jQmzMNlM7IcPjTkIrp0Q0QKS9TQNhyZGupUpvhcIIn6',
    year: '2024',
    role: 'Data Platform Architect',
    client: 'Lumen Technologies',
    liveUrl: '#',
    interactiveType: 'dashboard'
  },
  {
    id: 'metadata-observability',
    title: 'Informatica Metadata & Observability',
    category: 'Data Platform',
    description: 'Architected a centralized metadata repository by integrating Informatica IDMC APIs, scheduler metadata, workflow dependencies, and execution metrics into BigQuery using Airflow and JIRA API. Centralized metadata tracking for 100+ active workflows and reduced overall troubleshooting and engineering support efforts by 20%.',
    tags: ['Airflow', 'Python', 'BigQuery', 'Informatica IDMC API', 'GCP', 'Jira API'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa0-dqxO5FrgljKplW63WzTBMOyqH56I8yash8TgJmgN8XesU3w1F4hn1X4jSTTYlDogKuXlm1gCCnMweugo9RK9wTGwHPBjwY-xQz26W6Cl7QhrEEu_bf9cODCHa5KeYn7c1wIof_ssxsgjwe000-oSd3z2RdtkXnmjgjFZ43nyifW6UikJpe4jOfZObCtI4znoJ4OCCbl_lgkTm42_KI44JIQSB97kvQH_YRQwMAgLqRnpSCBiNvFtd_ZAuBX2GWUwBht8jRoTm_',
    year: '2024',
    role: 'Lead Architect & Senior Data Engineer',
    client: 'Lumen Technologies',
    liveUrl: '#',
    interactiveType: 'canvas'
  },
  {
    id: 'email-governance',
    title: 'Governance & GCR Notification Framework',
    category: 'Infrastructure Automation',
    description: 'Designed and implemented a metadata-driven governance framework automating ownership mapping, distribution list management, and targeted operational incident alerts. Reduced manual notification overhead by 60–80% and realized potential savings of over 2,000 engineering hours annually across multiple teams.',
    tags: ['Python', 'Airflow', 'BigQuery', 'ServiceNow API', 'Operational Alerting'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhVN0GaQn08ihjEVVfjhWQSdny817YUoQVrtqT8Lcy5q6L5Te95CsE3EaSbvYbxREnDx4MS7YJfZFdLEZRoE_KFsIpv6CPBsqXkfqeuDJAhyDpHBKLN6xW-LyeKCjlJVJ6Nges4zZ3_SvdgvgEwy9b8ONAWJ7MN0wp6-W2SYVQlMWUwalQzRlWXYPAiBouS_2H3ij0rDHw6jd5H8E_dcVRxQFID-GY651ZFvCiM5vOD1WJBug-rqOHHLSkWc5L8e9LkKesJ2nRwSqh',
    year: '2023',
    role: 'Data Solutions Lead',
    client: 'Lumen Technologies',
    liveUrl: '#',
    interactiveType: 'spatial'
  }
];

export const JOURNEY: JourneyMilestone[] = [
  {
    id: 'degree',
    period: '2016 — 2020',
    title: 'Visvesvaraya Technological University, B. E',
    description: 'Acquired core foundation in computer science and software engineering. Excelled in database management, algorithms, and analytical problem solving.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmy1-lOnkQ_jlhpmA_qs_TwVZfCxHKosiqO7F_v8nK8z5-6J_msCbNwh1yeYN54Qwoh8QSB15ko9cPqW3rdivoovfcLOMgDv2f7XngtXBEBBlFnM8r538VkQi0hI2PH3LIHqbahjYIkgmx-JIR4UlAwlzmffQyEa9TLhI5RGGxIXm3GFBqudmLB2ebIVZeDTAE-6F9txUhmBZldIYlymSiThTcOUmB9DGFB0aiWT81tw3okJbC3DVkJa4cMxcOOYO22JblZ-bjXmvS',
    align: 'left'
  },
  {
    id: 'lumen-consultant',
    period: '2021 — 2025',
    title: 'Data Consultant — Lumen Technologies',
    description: 'Collaborated with business stakeholders to develop custom data solutions on GCP and Informatica Cloud. Built integration pipelines for Lumen\'s customer engagement via Afiniti AI. Integrated multi-source data, enabling strategic vendor analysis which resulted in $1M in annual business savings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaH-53I2Hifa3Kz5dtyL2NuZKK6mamz9DmS6YHBqqRlw0LnXr8TDVMQx4q7PCbtk4B5lthYN5ooXvAUGSLtSdOhnTyiKUW8c8-UMERhQoFJUN9iCElfgxoGhvcknQpleV_uFPdgJkIBUqLC-xIteToHpDMf5eRHf1GSpHx9RVntw-se1F7JdThkkNx3S8KdeurVtCshKnayAbdwIChh6kuwzTZ044hKET6HWRPnHBm7JqlwsfOSr94TpdzOf16abRoPbmA-NTByiiZ',
    align: 'right'
  },
  {
    id: 'lumen-sr-engineer',
    period: '2025 — PRESENT',
    title: 'Senior Data Engineer — Lumen Technologies',
    description: 'Leading a team of 2 engineers optimizing BigQuery scripts and eliminating source dependencies. Spearheaded cloud migrations of legacy jobs and 200B+ records to GCP. Achieved 20-30% server cost reductions and improved ETL pipeline load efficiency by 70%. Deployed robust, scalable cloud data solutions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-GQHu1ovwTfYE4GmocNTxvAawV4-kfA4UM4jOq9SDo6ag_y9IyP9kHjxJST_R07aUui0TjK6zknKIVswcOBe16MeqpUbiFscRUtMJqGoKm46eRNWFA_E58kUh62QybNLS6JhXglOvEZUM5Lr_Vs8ZfykuOq1ZE3NltdRac7mDQMWfrfr44JYOYBnU9pDr5G4DMzYUYWrm2IU6owyx6H5bdGz4Cc3UzF7ciicCAmWAWvHYK7_v-U3FW4EfQGNMrdyb1NoxIkPhRc-2',
    align: 'left'
  }
];

export const STATS: Stat[] = [
  {
    id: 'exp',
    value: '5+',
    label: 'Years GCP Experience'
  },
  {
    id: 'records',
    value: '200B+',
    label: 'Records Migrated'
  },
  {
    id: 'savings',
    value: '$1M+',
    label: 'Annual Cost Savings'
  }
];
