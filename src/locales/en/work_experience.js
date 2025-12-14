const WorkExperienceId = [
    {
        id: 1,
        duration: 'JAN 2024 - PRESENT',
        company: 'PT. Sila Teknologi Utama',
        role: 'Software Developer',
        desc: 'Full-stack system development and industrial automation solutions, including building monitoring dashboards integrated with PI Server and Prosper, developing full-featured websites (RBAC authentication, real-time chat, multi-method payments, schedulers) using Django, as well as developing REST APIs and mobile applications with Flutter.',
        skills: ['ASGI', 'Barcode Generator & Scanner', 'Chart.js', 'Dart', 'Django', 'Figma', 'Flutter', 'Oracle SQL', 'PI Web API', 'PostgreSQL', 'Prosper', 'Python', 'Payment Gateway', 'Redis', 'REST API', 'SMTP/Email Service', 'Safe Exam Browser', 'WebSocket', 'django-crontab'],
        details: [
            {
                id: 1,
                app: 'Lakeview',
                link: 'https://lakeview.id/',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Developed a complete payment module (OTS, QRIS, EDC, GoPay) integrated with Midtrans, including voucher and promo systems.',
                    'Built a scheduler using django-crontab for daily data synchronization and automated email notifications.',
                    'Optimized the authentication system using OOP principles, Role-Based Access Control (RBAC), and automated activation token delivery via email.',
                ],
                skills: ['Python', 'Dart', 'Django', 'Flutter', 'REST API', 'Payment Gateway', 'PostgreSQL', 'django-crontab', 'SMTP/Email Service'],
            },
            {
                id: 2,
                app: 'Proptimax',
                link: '',
                client: 'Pertamina Hulu Mahakam',
                desc: [
                    'Built dashboards and toolboxes integrated with PI Server (PI Web API) and Prosper (OpenServer & pywin32) for automated well monitoring, replacing manual Excel-based processes.',
                    'Designed and developed custom interactive charts using Chart.js for Gas (MMscfd), Oil (BOPD), and sand risk assessment data visualization to accelerate issue identification.',
                    'Designed an Entity-Relationship Diagram (ERD) to consolidate databases into a centralized data warehouse for a cleaner data structure.',
                    'Optimized the authentication system using OOP, RBAC, and automated activation token delivery via email.',
                    'Built a scheduler using django-crontab for daily data synchronization.',
                ],
                skills: ['Django', 'Python', 'Chart.js', 'PI Web API', 'Prosper', 'Oracle SQL', 'django-crontab'],
            },
            {
                id: 3,
                app: 'GrandMedica',
                link: 'https://grandmedica.co.id/',
                client: 'Klinik GrandMedica Indonesia',
                desc: [
                    'Redesigned and developed the homepage to be more informative and responsive.',
                    'Developed a patient registration module integrated with queue systems, barcodes, and online forms to speed up registration and reduce input errors.',
                    'Developed medical sample labeling with a scannable barcode system to instantly display patient data.',
                ],
                skills: ['Django', 'Python', 'Barcode Generator & Scanner', 'PostgreSQL'],
            },
            {
                id: 4,
                app: 'Kasijasa',
                link: 'https://kasijasa.com/',
                client: 'PT. Sila Teknologi Utama',
                desc: [
                    'Implemented real-time chat features using Django Channels, ASGI, and Redis to ensure stable two-way communication.',
                    'Redesigned the homepage and developed several supporting features.',
                ],
                skills: ['Django', 'Django Channels', 'Redis', 'ASGI', 'WebSocket'],
            },
            {
                id: 5,
                app: 'SiPintar',
                link: 'https://sipintar.silatama.co.id/',
                client: 'Madrasah Aliyah Negeri Balikpapan',
                desc: [
                    'Designed and created the application UI/UX.',
                    'Built a secure Website Exam System with multi-user support and Safe Exam Browser integration to prevent cheating.',
                    'Developed an automatic grading module for various question types, including weighting and difficulty levels calculated automatically based on student answer percentages.',
                    'Provided system usage training for end users and prepared structured End User Documentation (EUD) as guidance for core features.',
                ],
                skills: ['Django', 'Python', 'PostgreSQL', 'Safe Exam Browser', 'REST API', 'Figma'],
            },
            {
                id: 6,
                app: 'Yoline',
                link: 'https://yoline.co.id/',
                client: 'Yova Supermart',
                desc: [
                    'Assisted in resolving bugs related to payments, inventory, and API integration.',
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
                    'Developed a Flutter application and Django-based REST API for real-time data synchronization related to inventory, pricing, and tickets.'
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
                    'Developed a Flutter application and REST API for real-time data synchronization of transaction totals and amounts.'
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
                    'Developed a Flutter application and REST API for real-time synchronization of user-related data.'
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
        desc: 'Conducted UAT and SIT on Laravel-based websites, prepared testing result documentation, analyzed bugs, and reported findings using Trello.',
        skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
        details: [
            {
                id: 1,
                app: 'Travelsya',
                link: 'https://www.travelsya.com/',
                client: 'PT. Travelsya Wisata Indonesia',
                desc: [
                    'Conducted UAT and SIT on the website and prepared testing result documentation.',
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
                    'Conducted UAT and SIT on the website and prepared testing result documentation.',
                    'Analyzed and reported bug findings via Trello'
                ],
                skills: ['UAT', 'SIT', 'Trello'],
            },
            {
                id: 3,
                app: 'Pemilu Website',
                link: '',
                client: 'PT. Mahakarya Inovasi Bangsa',
                desc: [
                    'Conducted UAT and SIT on the website and prepared testing result documentation.',
                    'Analyzed and reported bug findings via Trello'
                ],
                skills: ['UAT', 'SIT', 'Trello'],
            },
        ]
    },
]

export default WorkExperienceId;
