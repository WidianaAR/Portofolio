const WorkExperienceEn = [
    {
        id: 1,
        duration: 'JAN 2024 - PRESENT',
        company: 'PT. Sila Teknologi Utama',
        role: 'Software Developer',
        desc: 'Contributed to full-stack development and industrial automation solutions across multiple sectors, including oil & gas, healthcare, education, retail, and tourism. Responsibilities included developing monitoring dashboards and automation systems, building feature-rich websites using Django (RBAC authentication, real-time chat, multi-method payment integration, and automated schedulers), as well as developing REST APIs and cross-platform mobile applications with Flutter.',
        skills: ['ASP.NET MVC', 'C#', 'Django', 'Python', 'Flutter', 'Dart', 'REST API', 'WebSocket', 'Django Channels', 'Redis', 'PostgreSQL', 'Oracle SQL', 'Chart.js', 'Payment Gateway', 'SMTP/Email Service', 'Barcode Generator & Scanner', 'Figma', 'django-crontab'],
        details: [
            {
                id: 1,
                app: 'ProptimaX',
                link: '',
                client: 'Pertamina Hulu Mahakam',
                desc: [
                    'Designed and developed interactive custom charts using Chart.js for visualizing gas, oil, and sand risk assessment data, enabling faster issue identification.',
                    'Designed an Entity-Relationship Diagram (ERD) to consolidate multiple databases into a centralized data warehouse, improving data structure and control.',
                    'Developed 19 functional requirements using ASP.NET MVC and MSSQL / Oracle SQL, covering 9 dashboards/toolboxes and 10 supporting features such as data tables, Excel upload, and landing pages.',
                    'Revamped application performance by moving calculation logic from the application layer to Stored Procedures and SQL Views, reducing data volume per request from millions of records to 50 records through database-level parameter filtering and pagination.',
                ],
                skills: ['ASP.NET MVC', 'C#', 'Chart.js', 'Oracle SQL', 'MSSQL']
            },
            {
                id: 2,
                app: 'Lakeview',
                link: 'https://lakeview.id/',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Developed and optimized authorization systems using OOP principles and RBAC.',
                    'Resolved bugs in existing payment modules (OTS, QRIS, EDC, etc.) integrated with Midtrans.',
                    'Developed voucher and promotion systems from scratch.',
                    'Developed transaction features for staff, including ticket and wristband printing pages.',
                    'Developed a doorprize management page.',
                    'Optimized schedulers using django-crontab for daily data synchronization and automated email notifications.',
                ],
                skills: ['Python', 'Dart', 'Django', 'Flutter', 'REST API', 'Payment Gateway', 'PostgreSQL', 'django-crontab', 'SMTP/Email Service', 'Figma'],
            },
            {
                id: 3,
                app: 'SiPintar',
                link: 'https://sipintar.silatama.co.id/',
                client: 'Madrasah Aliyah Negeri Balikpapan',
                desc: [
                    'Designed the application UI/UX from scratch using Figma.',
                    'Developed role-based access for four user roles: Admin, Teacher, Exam Supervisor, and Student — each with distinct permissions and workflows.',
                    'Built an automated grading system supporting multiple question types (multiple choice, multiple selection, true/false) with manual review flow for essay and short-answer questions.',
                    'Developed exam scheduling and time management features, including auto-submit when time expires and access restriction outside scheduled hours.',
                    'Built a real-time exam supervision module for Exam Supervisors, including student activity monitoring, lock/unlock access for students who exit the exam, and remaining time display.',
                    'Developed an automatic difficulty indicator and student performance charts generated based on correct and incorrect answer ratios.',
                    'Configured Safe Exam Browser (SEB) to restrict exam access on laptops to a controlled browser environment.',
                    'Developed authentication systems using OOP principles, RBAC, and automated activation token delivery via email.',
                    'Provided system usage training for end users and prepared structured End User Documentation (EUD) as a guidance reference.',
                ],
                skills: ['Django', 'Python', 'PostgreSQL', 'Figma', 'Safe Exam Browser'],
            },
            {
                id: 4,
                app: 'GrandMedica',
                link: 'https://grandmedica.co.id/',
                client: 'Klinik GrandMedica Indonesia',
                desc: [
                    'Redesigned and developed the homepage from scratch, including UI/UX design and implementation, to be more informative and responsive.',
                    'Built a patient registration module integrated with queue systems, barcodes, and online forms to accelerate registration processes and reduce input errors.',
                    'Built a queue calling module from scratch that allows admins and operators to flexibly control the calling process.',
                    'Extended the existing medical sample labeling system by adding patient wristband printing with barcode and patient name, previously only supported plain barcode label printing.',
                ],
                skills: ['Django', 'Python', 'Barcode Generator & Scanner', 'PostgreSQL', 'Figma'],
            },
            {
                id: 5,
                app: 'Kasijasa',
                link: 'https://kasijasa.com/',
                client: 'PT. Sila Teknologi Utama',
                desc: [
                    'Diagnosed and fixed an existing real-time chat system built with Django Channels, WebSocket, and Redis that was not functioning correctly, ensuring stable and reliable two - way communication.',
                    'Developed a service rental workflow from scratch, covering the full cycle from offer acceptance, progress tracking(on progress, completed), client review, to jobseeker portfolio submission.',
                    'Redesigned the homepage and testimonials page.',
                ],
                skills: ['Django', 'Django Channels', 'WebSocket', 'Redis', 'PostgreSQL'],
            },
            {
                id: 6,
                app: 'Yoline',
                link: 'https://yoline.co.id/',
                client: 'Yova Supermart',
                desc: [
                    'Resolved bugs related to transactions, stock, and API integrations on a production system.',
                    'Redesigned the homepage to improve visual appearance and user experience.',
                    'Fixed UI issues on Flutter mobile transaction pages, including order detail and payment screens.',
                ],
                skills: ['Django', 'Python', 'Flutter', 'Dart', 'REST API', 'PostgreSQL'],
            },
            {
                id: 7,
                app: 'LajuPos',
                link: '',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Designed the application UI/UX from scratch using Figma.',
                    'Developed a Flutter application with Django REST API for on-site ticket purchasing, covering ticket listing, quota selection, and order confirmation flow.',
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
            {
                id: 8,
                app: 'Investor App',
                link: '',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Designed the application UI/UX from scratch using Figma.',
                    'Contributed to developing a Flutter application with Django REST API for real-time sales monitoring, including transaction summaries, sales charts, and breakdown by payment type.',
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
            {
                id: 9,
                app: 'HIPMI Balikpapan App',
                link: 'https://play.google.com/store/apps/details?id=com.hipmi.id',
                client: 'Himpunan Pengusaha Muda Indonesia',
                desc: [
                    'Designed the application UI/UX from scratch using Figma.',
                    'Contributed to developing a Flutter application with Django REST API for a membership directory platform, including login, member listing, and member detail pages — with admin validation to ensure only verified HIPMI members are granted access.',
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
        ]
    },
    {
        id: 2,
        duration: 'OCT - DEC 2023',
        company: 'PT. Mahakarya Inovasi Bangsa',
        role: 'Software Quality Assurance',
        desc: 'Conducted UAT and SIT on Laravel-based websites, prepared testing documentation, analyzed bugs, and reported findings using Trello.',
        skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
        details: [
            {
                id: 1,
                app: 'Travelsya',
                link: 'https://www.travelsya.com/',
                client: 'PT. Travelsya Wisata Indonesia',
                desc: [
                    'Conducted UAT and SIT on a travel platform covering ticket and hotel booking features.',
                    'Analyzed and reported bug findings via Trello.',
                ],
                skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
            },
            {
                id: 2,
                app: 'DLH Website',
                link: '',
                client: 'Environmental Agency of Balikpapan',
                desc: [
                    'Conducted UAT and SIT on an internal operational control system for the Environmental Agency of Balikpapan.',
                    'Analyzed and reported bug findings via Trello.',
                ],
                skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
            },
            {
                id: 3,
                app: 'Election Website',
                link: '',
                client: 'PT. Mahakarya Inovasi Bangsa',
                desc: [
                    'Conducted UAT and SIT on a regional election (Pilkada) website.',
                    'Analyzed and reported bug findings via Trello.',
                ],
                skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
            },
        ]
    },
]

export default WorkExperienceEn;