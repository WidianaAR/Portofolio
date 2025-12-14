const WorkExperienceId = [
    {
        id: 1,
        duration: 'JAN 2024 - PRESENT',
        company: 'PT. Sila Teknologi Utama',
        role: 'Software Developer',
        desc: 'Pengembangan sistem full-stack dan solusi otomasi industri, mencakup pembuatan dashboard monitoring terintegrasi dengan PI Server dan Prosper, pengembangan website fitur lengkap (autentikasi RBAC, chat real-time, pembayaran multi-metode, scheduler) menggunakan Django, pengembangan REST API dan aplikasi mobile dengan Flutter.',
        skills: ['ASGI', 'Barcode Generator & Scanner', 'Chart.js', 'Dart', 'Django', 'Figma', 'Flutter', 'Oracle SQL', 'PI Web API', 'PostgreSQL', 'Prosper', 'Python', 'Payment Gateway', 'Redis', 'REST API', 'SMTP/Email Service', 'Safe Exam Browser', 'WebSocket', 'django-crontab'],
        details: [
            {
                id: 1,
                app: 'Lakeview',
                link: 'https://lakeview.id/',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Mengembangkan modul pembayaran lengkap (OTS, QRIS, EDC, GoPay) dengan integrasi Midtrans, termasuk sistem voucher dan promo.',
                    'Membangun scheduler menggunakan django-crontab untuk sinkronisasi data harian dan pengiriman notifikasi email otomatis.',
                    'Mengoptimalkan sistem autentikasi menggunakan prinsip OOP, Role-Based Access Control (RBAC), dan otomatisasi pengiriman token aktivasi melalui email.',
                ],
                skills: ['Python', 'Dart', 'Django', 'Flutter', 'REST API', 'Payment Gateway', 'PostgreSQL', 'django-crontab', 'SMTP/Email Service'],
            },
            {
                id: 2,
                app: 'Proptimax',
                link: '',
                client: 'Pertamina Hulu Mahakam',
                desc: [
                    'Membangun dashboard dan toolbox terintegrasi dengan PI Server (PI Web API) dan Prosper (OpenServer & pywin32) untuk otomatisasi pemantauan sumur, menggantikan proses manual berbasis Excel.',
                    'Mendesain dan mengembangkan custom chart interaktif menggunakan Chart.js untuk visualisasi data Gas (MMscfd), Oil (BOPD), dan sand risk assessment guna mempercepat identifikasi masalah.',
                    'Mendesain Entity-Relationship Diagram (ERD) untuk konsolidasi database ke dalam data warehouse terpusat demi struktur data yang lebih rapi.',
                    'Mengoptimalkan sistem autentikasi menggunakan OOP, RBAC, dan otomatisasi pengiriman token aktivasi melalui email.',
                    'Membangun scheduler dengan django-crontab untuk sinkronisasi data harian.',
                ],
                skills: ['Django', 'Python', 'Chart.js', 'PI Web API', 'Prosper', 'Oracle SQL', 'django-crontab'],
            },
            {
                id: 3,
                app: 'GrandMedica',
                link: 'https://grandmedica.co.id/',
                client: 'Klinik GrandMedica Indonesia',
                desc: [
                    'Mendesain ulang dan mengembangkan halaman homepage agar lebih informatif dan responsif.',
                    'Mengembangkan modul pendaftaran pasien terintegrasi dengan sistem antrian, barcode, dan formulir online untuk mempercepat proses registrasi serta mengurangi kesalahan input.',
                    'Mengembangkan pelabelan sampel medis dengan sistem barcode yang dapat di-scan untuk menampilkan data pasien secara instan.',
                ],
                skills: ['Django', 'Python', 'Barcode Generator & Scanner', 'PostgreSQL'],
            },
            {
                id: 4,
                app: 'Kasijasa',
                link: 'https://kasijasa.com/',
                client: 'PT. Sila Teknologi Utama',
                desc: [
                    'Mengimplementasikan fitur chat real-time menggunakan Django Channels, ASGI, dan Redis untuk memastikan komunikasi dua arah yang stabil.',
                    'Melakukan redesign homepage dan mengembangkan beberapa fitur pendukung lainnya.',
                ],
                skills: ['Django', 'Django Channels', 'Redis', 'ASGI', 'WebSocket'],
            },
            {
                id: 5,
                app: 'SiPintar',
                link: 'https://sipintar.silatama.co.id/',
                client: 'Madrasah Aliyah Negeri Balikpapan',
                desc: [
                    'Merancang dan mendesain UI/UX aplikasi.',
                    'Membangun Website Exam System aman dengan dukungan multi-user serta integrasi Safe Exam Browser untuk mencegah kecurangan.',
                    'Mengembangkan modul penilaian otomatis untuk berbagai tipe soal, termasuk sistem bobot dan tingkat kesulitan yang dikalkulasi otomatis berdasarkan persentase jawaban siswa.',
                    'Menyediakan pelatihan penggunaan sistem bagi end user dan menyusun dokumentasi End User Documentation (EUD) yang terstruktur untuk panduan fitur utama.',
                ],
                skills: ['Django', 'Python', 'PostgreSQL', 'Safe Exam Browser', 'REST API', 'Figma'],
            },
            {
                id: 6,
                app: 'Yoline',
                link: 'https://yoline.co.id/',
                client: 'Yova Supermart',
                desc: [
                    'Membantu penyelesaian bug terkait pembayaran, stok, dan integrasi API.',
                ],
                skills: ['Django', 'Python', 'Flutter', 'REST API'],
            },
            {
                id: 7,
                app: 'LajuPos',
                link: '',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Merancang dan membuat desain UI/UX aplikasi.',
                    'Mengembangkan aplikasi Flutter serta REST API berbasis Django untuk sinkronisasi data real-time terkait stok barang, harga, dan tiket.'
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
            {
                id: 8,
                app: 'Investor App',
                link: '',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Merancang dan membuat desain UI/UX aplikasi.',
                    'Mengembangkan aplikasi Flutter dan REST API untuk sinkronisasi data real-time pada total dan nominal transaksi.'
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
            {
                id: 9,
                app: 'HIPMI Balikpapan App',
                link: 'https://play.google.com/store/apps/details?id=com.hipmi.id',
                client: 'Himpunan Pengusaha Muda Indonesia',
                desc: [
                    'Merancang dan membuat desain UI/UX aplikasi.',
                    'Mengembangkan aplikasi Flutter dan REST API untuk sinkronisasi data real-time terkait data pengguna.'
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
        desc: 'Melakukan UAT dan SIT pada website berbasis Laravel, menyusun dokumentasi hasil pengujian, menganalisis bug serta menyampaikan temuan menggunakan Trello.',
        skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
        details: [
            {
                id: 1,
                app: 'Travelsya',
                link: 'https://www.travelsya.com/',
                client: 'PT. Travelsya Wisata Indonesia',
                desc: [
                    'Melakukan UAT dan SIT pada website dan menyusun dokumentasi hasil pengujian.',
                    'Menganalisis dan menyampaikan temuan bug melalui Trello'
                ],
                skills: ['UAT', 'SIT', 'Trello'],
            },
            {
                id: 2,
                app: 'DLH Website',
                link: '',
                client: 'Dinas Lingkungan Hidup Balikpapan',
                desc: [
                    'Melakukan UAT dan SIT pada website dan menyusun dokumentasi hasil pengujian.',
                    'Menganalisis dan menyampaikan temuan bug melalui Trello'
                ],
                skills: ['UAT', 'SIT', 'Trello'],
            },
            {
                id: 3,
                app: 'Pemilu Website',
                link: '',
                client: 'PT. Mahakarya Inovasi Bangsa',
                desc: [
                    'Melakukan UAT dan SIT pada website dan menyusun dokumentasi hasil pengujian.',
                    'Menganalisis dan menyampaikan temuan bug melalui Trello'
                ],
                skills: ['UAT', 'SIT', 'Trello'],
            },
        ]
    },
]

export default WorkExperienceId;