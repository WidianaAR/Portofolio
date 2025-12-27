const WorkExperienceEn = [
    {
        id: 1,
        duration: 'JAN 2024 - PRESENT',
        company: 'PT. Sila Teknologi Utama',
        role: 'Software Developer',
        desc: 'Full-stack system development and industrial automation solutions, including building monitoring dashboards integrated with PI Server and Prosper, developing feature-rich websites (RBAC authentication, real-time chat, multi-method payments, scheduler) using Django, as well as developing REST APIs and mobile applications with Flutter.',
        skills: ['ASGI', 'Barcode Generator & Scanner', 'Chart.js', 'Dart', 'Django', 'Figma', 'Flutter', 'Oracle SQL', 'PI Web API', 'PostgreSQL', 'Prosper', 'Python', 'Payment Gateway', 'Redis', 'REST API', 'SMTP/Email Service', 'Safe Exam Browser', 'WebSocket', 'django-crontab'],
        details: [
            {
                id: 1,
                app: 'ProptimaX',
                link: '',
                client: 'Pertamina Hulu Mahakam',
                desc: [
                    'Built dashboards and toolboxes integrated with Prosper (OpenServer & pywin32) to automate well monitoring, replacing manual Excel-based processes.',
                    'Designed and developed custom interactive charts using Chart.js to visualize Gas (MMscfd), Oil (BOPD), and sand risk assessment data, accelerating issue identification.',
                    'Designed Entity-Relationship Diagrams (ERD) to consolidate databases into a centralized data warehouse for improved data structure.',
                    'Built authentication and authorization systems using OOP and Role-Based Access Control (RBAC).',
                    'Developed schedulers using django-crontab for Excel data ingestion and daily data synchronization.',
                ],
                skills: ['Django', 'Python', 'Chart.js', 'PI Web API', 'Prosper', 'Oracle SQL', 'django-crontab'],
            },
            {
                id: 2,
                app: 'Lakeview',
                link: 'https://lakeview.id/',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Developed authorization systems using OOP principles and RBAC.',
                    'Assisted in developing payment modules (OTS, QRIS, EDC, etc.) integrated with Midtrans, including voucher and promotion systems.',
                    'Helped optimize schedulers using django-crontab for daily data synchronization and automated email notifications.',
                ],
                skills: ['Python', 'Dart', 'Django', 'Flutter', 'REST API', 'Payment Gateway', 'PostgreSQL', 'django-crontab', 'SMTP/Email Service'],
            },
            {
                id: 3,
                app: 'SiPintar',
                link: 'https://sipintar.silatama.co.id/',
                client: 'Madrasah Aliyah Negeri Balikpapan',
                desc: [
                    'Designed and created the application UI/UX.',
                    'Built a secure Exam System website with multi-user support and Safe Exam Browser integration to prevent cheating.',
                    'Developed authentication systems using OOP, RBAC, and automated activation token delivery via email.',
                    'Built automated grading modules for various question types, including weighting and difficulty level systems calculated automatically based on student answer percentages.',
                    'Provided system usage training for end users and prepared structured End User Documentation (EUD) as guidance for core features.',
                ],
                skills: ['Django', 'Python', 'PostgreSQL', 'Safe Exam Browser', 'REST API', 'Figma'],
            },
            {
                id: 4,
                app: 'GrandMedica',
                link: 'https://grandmedica.co.id/',
                client: 'Klinik GrandMedica Indonesia',
                desc: [
                    'Redesigned and developed the homepage to be more informative and responsive.',
                    'Built a patient registration module integrated with queue systems, barcodes, and online forms to accelerate registration processes and reduce input errors.',
                    'Developed a queue calling module that allows admins and operators to flexibly control the calling process.',
                    'Assisted in developing medical sample labeling with a scannable barcode system to instantly display patient data.',
                ],
                skills: ['Django', 'Python', 'Barcode Generator & Scanner', 'PostgreSQL'],
            },
            {
                id: 5,
                app: 'Kasijasa',
                link: 'https://kasijasa.com/',
                client: 'PT. Sila Teknologi Utama',
                desc: [
                    'Implemented real-time chat features using Django Channels, ASGI, and Redis to ensure stable two-way communication.',
                    'Redesigned the homepage and testimonials page, and developed several other key features.',
                ],
                skills: ['Django', 'Django Channels', 'Redis', 'ASGI', 'WebSocket'],
            },
            {
                id: 6,
                app: 'Yoline',
                link: 'https://yoline.co.id/',
                client: 'Yova Supermart',
                desc: [
                    'Assisted in resolving bugs related to payments, inventory, and API integrations.',
                ],
                skills: ['Django', 'Python', 'Flutter', 'REST API'],
            },
            {
                id: 7,
                app: 'LajuPos',
                link: '',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Designed and created the application UI/UX.',
                    'Developed a Flutter application and Django-based REST API for real-time data synchronization of inventory, pricing, and tickets.'
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
            {
                id: 8,
                app: 'Investor App',
                link: '',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Designed and created the application UI/UX.',
                    'Developed Flutter applications and REST APIs for real-time data synchronization of transaction totals and amounts.'
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
            {
                id: 9,
                app: 'HIPMI Balikpapan App',
                link: 'https://play.google.com/store/apps/details?id=com.hipmi.id',
                client: 'Himpunan Pengusaha Muda Indonesia',
                desc: [
                    'Designed and created the application UI/UX.',
                    'Developed Flutter applications and REST APIs for real-time synchronization of user-related data.'
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
                    'Conducted UAT and SIT on the website and prepared testing documentation.',
                    'Analyzed and reported bug findings via Trello'
                ],
                skills: ['UAT', 'SIT', 'Trello'],
            },
            {
                id: 2,
                app: 'DLH Website',
                link: '',
                client: 'Environmental Agency of Balikpapan',
                desc: [
                    'Conducted UAT and SIT on the website and prepared testing documentation.',
                    'Analyzed and reported bug findings via Trello'
                ],
                skills: ['UAT', 'SIT', 'Trello'],
            },
            {
                id: 3,
                app: 'Election Website',
                link: '',
                client: 'PT. Mahakarya Inovasi Bangsa',
                desc: [
                    'Conducted UAT and SIT on the website and prepared testing documentation.',
                    'Analyzed and reported bug findings via Trello'
                ],
                skills: ['UAT', 'SIT', 'Trello'],
            },
        ]
    },
]

export default WorkExperienceEn;