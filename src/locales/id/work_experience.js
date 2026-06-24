const WorkExperienceId = [
    {
        id: 1,
        duration: 'JAN 2024 - SEKARANG',
        company: 'PT. Sila Teknologi Utama',
        role: 'Software Developer',
        desc: 'Berkontribusi dalam pengembangan full-stack dan solusi otomasi industri di berbagai sektor, termasuk oil & gas, kesehatan, pendidikan, ritel, dan pariwisata. Lingkup pekerjaan mencakup pengembangan dashboard monitoring dan sistem otomasi, pembangunan fitur website menggunakan Django (autentikasi RBAC, real-time chat, integrasi pembayaran multi-metode, dan scheduler otomatis), serta pengembangan REST API dan aplikasi mobile lintas platform menggunakan Flutter.',
        skills: ['ASP.NET MVC', 'C#', 'Django', 'Python', 'Flutter', 'Dart', 'REST API', 'WebSocket', 'Django Channels', 'Redis', 'PostgreSQL', 'Oracle SQL', 'Chart.js', 'Payment Gateway', 'SMTP/Email Service', 'Barcode Generator & Scanner', 'Figma', 'django-crontab'],
        details: [
            {
                id: 1,
                app: 'ProptimaX',
                link: '',
                client: 'Pertamina Hulu Mahakam',
                desc: [
                    'Merancang dan mengembangkan custom chart interaktif menggunakan Chart.js untuk visualisasi data gas, oil, dan sand risk assessment, memungkinkan identifikasi masalah yang lebih cepat.',
                    'Mendesain Entity-Relationship Diagram (ERD) untuk konsolidasi beberapa database ke dalam data warehouse terpusat, meningkatkan struktur dan kemudahan kontrol data.',
                    'Mengembangkan 19 functional requirement menggunakan ASP.NET MVC dan MSSQL / Oracle SQL, mencakup 9 dashboard/toolbox serta 10 fitur pendukung seperti tabel data, upload Excel, dan landing page.',
                    'Melakukan revamping performa aplikasi dengan memindahkan logic kalkulasi dari application layer ke Stored Procedure dan SQL Views, mereduksi volume data per request dari jutaan record menjadi 50 record melalui penerapan filter parameter dan pagination di database layer.',
                ],
                skills: ['ASP.NET MVC', 'C#', 'Chart.js', 'Oracle SQL', 'MSSQL']
            },
            {
                id: 2,
                app: 'Lakeview',
                link: 'https://lakeview.id/',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Mengembangkan dan mengoptimalkan sistem otorisasi menggunakan prinsip OOP dan RBAC.',
                    'Memperbaiki bug pada modul pembayaran yang sudah ada (OTS, QRIS, EDC, dll) yang terintegrasi dengan Midtrans.',
                    'Mengembangkan sistem voucher dan promosi dari awal.',
                    'Mengembangkan fitur transaksi untuk staff, termasuk halaman cetak tiket dan gelang.',
                    'Mengembangkan halaman manajemen doorprize.',
                    'Mengoptimalkan scheduler menggunakan django-crontab untuk sinkronisasi data harian dan pengiriman notifikasi email otomatis.',
                ],
                skills: ['Python', 'Dart', 'Django', 'Flutter', 'REST API', 'Payment Gateway', 'PostgreSQL', 'django-crontab', 'SMTP/Email Service', 'Figma'],
            },
            {
                id: 3,
                app: 'SiPintar',
                link: 'https://sipintar.silatama.co.id/',
                client: 'Madrasah Aliyah Negeri Balikpapan',
                desc: [
                    'Mendesain UI/UX aplikasi dari awal menggunakan Figma.',
                    'Mengembangkan role-based access untuk empat role pengguna: Admin, Guru, Pengawas Ujian, dan Siswa — masing-masing dengan hak akses dan alur kerja yang berbeda.',
                    'Membangun sistem penilaian otomatis untuk berbagai tipe soal (pilihan ganda, multiple selection, true/false) dengan alur koreksi manual untuk soal isian dan essay.',
                    'Mengembangkan fitur manajemen jadwal dan waktu ujian, termasuk auto-submit saat waktu habis dan pembatasan akses di luar jadwal.',
                    'Membangun modul pengawasan ujian real-time untuk Pengawas Ujian, mencakup monitoring aktivitas siswa, lock/unlock akses bagi siswa yang keluar dari ujian, dan tampilan sisa waktu.',
                    'Mengembangkan indikator tingkat kesulitan otomatis dan grafik performa siswa yang dihasilkan berdasarkan rasio jawaban benar dan salah.',
                    'Mengonfigurasi Safe Exam Browser (SEB) untuk membatasi akses ujian pada laptop ke lingkungan browser yang terkontrol.',
                    'Mengembangkan sistem autentikasi menggunakan prinsip OOP, RBAC, dan pengiriman token aktivasi otomatis via email.',
                    'Memberikan pelatihan penggunaan sistem kepada end user dan menyusun End User Documentation (EUD) yang terstruktur sebagai panduan referensi.',
                ],
                skills: ['Django', 'Python', 'PostgreSQL', 'Figma', 'Safe Exam Browser'],
            },
            {
                id: 4,
                app: 'GrandMedica',
                link: 'https://grandmedica.co.id/',
                client: 'Klinik GrandMedica Indonesia',
                desc: [
                    'Mendesain ulang dan mengembangkan halaman utama dari awal, mencakup desain UI/UX dan implementasi, agar lebih informatif dan responsif.',
                    'Membangun modul pendaftaran pasien yang terintegrasi dengan sistem antrian, barcode, dan formulir online untuk mempercepat proses registrasi dan meminimalkan kesalahan input.',
                    'Membangun modul pemanggilan antrian dari awal yang memungkinkan admin dan operator mengontrol proses pemanggilan secara fleksibel.',
                    'Mengembangkan sistem pelabelan sampel medis yang sudah ada dengan menambahkan fitur cetak gelang pasien berisi barcode dan nama pasien, yang sebelumnya hanya mendukung cetak label barcode biasa.',
                ],
                skills: ['Django', 'Python', 'Barcode Generator & Scanner', 'PostgreSQL', 'Figma'],
            },
            {
                id: 5,
                app: 'Kasijasa',
                link: 'https://kasijasa.com/',
                client: 'PT. Sila Teknologi Utama',
                desc: [
                    'Mendiagnosis dan memperbaiki sistem real-time chat yang sudah ada menggunakan Django Channels, WebSocket, dan Redis yang sebelumnya tidak berfungsi dengan baik, memastikan komunikasi dua arah yang stabil dan andal.',
                    'Mengembangkan fitur service rental workflow dari awal, mencakup siklus penuh dari penerimaan tawaran, tracking progres (on progress, selesai), review klien, hingga submission portofolio jobseeker.',
                    'Mendesain ulang halaman utama dan halaman testimoni.',
                ],
                skills: ['Django', 'Django Channels', 'WebSocket', 'Redis', 'PostgreSQL'],
            },
            {
                id: 6,
                app: 'Yoline',
                link: 'https://yoline.co.id/',
                client: 'Yova Supermart',
                desc: [
                    'Memperbaiki bug terkait transaksi, stok, dan integrasi API pada sistem production.',
                    'Mendesain ulang halaman utama untuk meningkatkan tampilan visual dan pengalaman pengguna.',
                    'Memperbaiki masalah UI pada halaman transaksi aplikasi mobile Flutter, termasuk halaman detail order dan pembayaran.',
                ],
                skills: ['Django', 'Python', 'Flutter', 'Dart', 'REST API', 'PostgreSQL'],
            },
            {
                id: 7,
                app: 'LajuPos',
                link: '',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Mendesain UI/UX aplikasi dari awal menggunakan Figma.',
                    'Mengembangkan aplikasi Flutter dengan Django REST API untuk pembelian tiket di tempat, mencakup daftar tiket, pemilihan kuota, dan alur konfirmasi pesanan.',
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
            {
                id: 8,
                app: 'Investor App',
                link: '',
                client: 'PT. Laju Lahan Digital (Lajuland)',
                desc: [
                    'Mendesain UI/UX aplikasi dari awal menggunakan Figma.',
                    'Berkontribusi dalam pengembangan aplikasi Flutter dengan Django REST API untuk monitoring penjualan real-time, mencakup ringkasan transaksi, grafik penjualan, dan rincian per tipe pembayaran.',
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
            {
                id: 9,
                app: 'HIPMI Balikpapan App',
                link: 'https://play.google.com/store/apps/details?id=com.hipmi.id',
                client: 'Himpunan Pengusaha Muda Indonesia',
                desc: [
                    'Mendesain UI/UX aplikasi dari awal menggunakan Figma.',
                    'Berkontribusi dalam pengembangan aplikasi Flutter dengan Django REST API untuk platform direktori anggota, mencakup halaman login, daftar anggota, dan detail anggota — dengan validasi admin untuk memastikan hanya anggota HIPMI yang terverifikasi yang dapat mengakses platform.',
                ],
                skills: ['Flutter', 'Dart', 'Django', 'REST API', 'PostgreSQL', 'Figma'],
            },
        ]
    },
    {
        id: 2,
        duration: 'OKT - DES 2023',
        company: 'PT. Mahakarya Inovasi Bangsa',
        role: 'Software Quality Assurance',
        desc: 'Melakukan UAT dan SIT pada website berbasis Laravel, menyusun dokumentasi pengujian, menganalisis bug, dan melaporkan temuan menggunakan Trello.',
        skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
        details: [
            {
                id: 1,
                app: 'Travelsya',
                link: 'https://www.travelsya.com/',
                client: 'PT. Travelsya Wisata Indonesia',
                desc: [
                    'Melakukan UAT dan SIT pada platform perjalanan yang mencakup fitur pemesanan tiket dan hotel.',
                    'Menganalisis dan melaporkan temuan bug melalui Trello.',
                ],
                skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
            },
            {
                id: 2,
                app: 'DLH Website',
                link: '',
                client: 'Dinas Lingkungan Hidup Balikpapan',
                desc: [
                    'Melakukan UAT dan SIT pada sistem kontrol operasional internal Dinas Lingkungan Hidup Balikpapan.',
                    'Menganalisis dan melaporkan temuan bug melalui Trello.',
                ],
                skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
            },
            {
                id: 3,
                app: 'Election Website',
                link: '',
                client: 'PT. Mahakarya Inovasi Bangsa',
                desc: [
                    'Melakukan UAT dan SIT pada website Pemilihan Kepala Daerah (Pilkada).',
                    'Menganalisis dan melaporkan temuan bug melalui Trello.',
                ],
                skills: ['UAT', 'SIT', 'Bug Report', 'Trello'],
            },
        ]
    },
]

export default WorkExperienceId;