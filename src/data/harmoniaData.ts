export interface TocItem {
  label: string;
  page: number;
  targetId: string;
}

export const TOC_ITEMS: TocItem[] = [
  { label: 'Daftar Isi', page: 1, targetId: 'daftar-isi' },
  { label: 'Selayang Pandang', page: 2, targetId: 'selayang-pandang' },
  { label: 'HSH - Jatinangor, Sumedang', page: 4, targetId: 'hsh-jatinangor' },
  { label: 'HSH - Dramaga, Bogor', page: 15, targetId: 'hsh-dramaga' },
  { label: 'GRV - Citarik, Sukabumi', page: 23, targetId: 'grv-citarik' },
  { label: 'HMG - Rangkasbitung, Lebak', page: 28, targetId: 'hmg-rangkasbitung' },
  { label: 'Penutup', page: 31, targetId: 'penutup' },
];

export const COMPANY_INFO = {
  brand: 'HARMONIA GROUP',
  ptShort: 'PT HARMONIA',
  ptFull: 'PT. HARAPAN MODERN NIAGA',
  phone: '0881 - 01234 - 0 - 567',
  tower: 'Tower F, Berveley Park Jatinangor',
  address: 'JL. CIKUDA NO.37, CILELES, KEC. JATINANGOR, KABUPATEN SUMEDANG, JAWA BARAT 45363',
  addressMixed: 'Jl. Cikuda No.37, Cileles, Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat 45363',
  tagline: 'INVESTASI',
  subTagline: ['KINI', 'SAAT INI', 'NANTI'],
  expansionTag: '- Harmonia Ekspansi -',
  phaseTag: '- TAHAP 2 -',
};

export const SELAYANG_PANDANG = {
  kicker: 'KILAS BALIK',
  title: 'SELAYANG PANDANG',
  subtitle: 'DARI BARAT JAWA, MENUJU JAWA BARAT.',
  introParagraphs: [
    'Harmonia lahir dari langkah awal di Bintaro, tempat kantor pertama kami berdiri dan perjalanan pengembangan properti kami dimulai.',
    'Membawa semangat yang sama untuk menghadirkan properti dengan karakter dan kebutuhan yang beragam.',
  ],
  quote: '"BUMI PASUNDAN LAHIR KETIKA TUHAN SEDANG TERSENYUM"',
  quoteAuthor: '- M.A.W. BROUWER -',
  journeyParagraphs: [
    'Harmonia lahir dari rahim Bintaro, membawa harapan dan semangat untuk tumbuh, lalu menempuh perjalanan ke Jatinangor. Dari Barat Jawa menuju Jawa Barat, Harmonia menemukan ruang untuk berkembang, membangun kebersamaan, dan merangkai kisah baru.',
    'Dari setiap langkah perjalanan, Harmonia terus belajar, beradaptasi, dan bertumbuh bersama komunitasnya. Berbekal nilai kebersamaan dan tekad untuk memberi manfaat, Harmonia melangkah ke depan sambil menjaga akar yang telah membawanya sampai di sini.',
  ],
};

export const JATINANGOR_DATA = {
  introParagraphs: [
    'Jatinangor, tak jauh dari Bandung Raya yang selalu punya cerita, sebuah kisah baru mulai ditulis. HARMONIA STUDENT HOUSE hadir sebagai langkah awal sebuah ikhtiar untuk menghadirkan hunian dekat UNPAD, ITB, dan IKOPIN, tempat mimpi-mimpi muda tumbuh dan hari-hari baru bermula. Dengan pilihan unit full-furnished, Harmonia ingin menjadi ruang singgah yang nyaman di tengah perjalanan panjang para mahasiswa meraih cita-cita.',
    'Lebih dari sekadar bangunan, Harmonia diharapkan menjadi bagian dari cerita kuliah: tempat melepas lelah, merayakan pencapaian kecil, dan menemukan rasa pulang di tanah rantau. Bagi investor, proyek awal ini membuka kesempatan untuk ikut menanam benih aset produktif di kawasan pendidikan Jatinangor, dengan potensi pendapatan sewa dan pertumbuhan nilai seiring perkembangan kawasan. Sebab setiap perjalanan besar berawal dari satu langkah dan Harmonia sedang memulai langkahnya di sini.',
  ],
  heroBannerTitle: 'INVESTASI KOST PREMIUM',
  heroBannerSubtitle: 'Ring 1 Kawasan Kampus Jatinangor',
  heroBannerDesc:
    'Investasi yang dirancang untuk memenuhi kebutuhan hunian mahasiswa di kawasan pendidikan paling berkembang di Jawa Barat',
  passiveTitle: 'Bukan Sekadar Aset Properti, Tetapi Sumber Passive Income.',
  passiveDesc:
    'Di tengah kondisi ekonomi yang terus berubah, banyak investor mulai mencari instrumen yang tidak hanya berpotensi mengalami kenaikan nilai aset, tetapi juga dapat menghasilkan pendapatan secara berkala. Properti kost menjadi salah satu pilihan karena menggabungkan potensi cashflow dan capital appreciation dalam satu investasi.',
  passiveBadges: ['PENDAPATAN TIAP BULAN', 'HARGA TANAH TERUS NAIK'],
  conceptDesc:
    'Harmonia Student House Jatinangor adalah hunian investasi dengan konsep modern minimalis, berlokasi di kawasan pendidikan terkemuka, menghadirkan kenyamanan, fasilitas lengkap, dan potensi pendapatan berkelanjutan.',
  conceptPillars: ['Lokasi Strategis', 'Desain Modern', 'Fasilitas Lengkap', 'Legalitas Aman'],
  distances: [
    { place: 'UNPAD Jatinangor', time: '± 5 Menit' },
    { place: 'ITB Jatinangor', time: '± 6 Menit' },
    { place: 'IKOPIN Jatinangor', time: '± 7 Menit' },
    { place: 'Area Kuliner', time: '± 1 Menit' },
    { place: 'Pusat Perbelanjaan', time: '± 3 Menit' },
    { place: 'Gerbang Tol', time: '± 10 Menit' },
  ],
  profitTitle: 'Dua Potensi Keuntungan dalam Satu Investasi.',
  profitDesc:
    'Berbeda dengan banyak instrumen investasi yang hanya mengandalkan pertumbuhan nilai aset atau hasil investasi secara berkala, properti kost memiliki keunggulan karena mampu menggabungkan keduanya. Investor tidak hanya memiliki aset properti, tetapi juga berpotensi memperoleh pendapatan dari penyewaan selama properti dikelola dengan baik.',
  profitCards: [
    {
      title: 'Cashflow',
      desc: 'Pendapatan dari penyewaan kamar yang berpotensi diterima secara berkala selama tingkat hunian terjaga.',
      image: '/images/harmonia/jatinangor-cashflow-img.jpg',
    },
    {
      title: 'Capital Gain',
      desc: 'Nilai tanah dan bangunan berpotensi meningkat seiring perkembangan kawasan dan meningkatnya permintaan.',
      image: '/images/harmonia/jatinangor-capgain-img.jpg',
    },
  ],
  legalitasTitle: 'Legalitas Sudah SHM',
  legalitasDesc: [
    'Dokumen kepemilikan tanah menjadi bagian penting dalam memastikan bahwa aset yang Anda investasikan memiliki dasar legalitas yang jelas dan dapat dipertanggungjawabkan.',
    'Bukti legalitas tanah kami tampilkan secara transparan sebagai bagian dari komitmen Harmonia terhadap keterbukaan kepada calon investor.',
  ],
  ownershipTitle: 'Sistem Kepemilikan Mudah',
  ownershipDesc:
    'Sistem kepemilikan Harmonia dirancang untuk memberikan kemudahan, kejelasan, dan fleksibilitas bagi calon pemilik. Kemudahan tersebut tercermin dari bentuk kepemilikan, pilihan pembayaran, serta aspek legalitas yang menjadi bagian dari setiap unit.',
  ownershipItems: [
    {
      title: 'Sertifikat',
      desc: 'Kepemilikan terhadap unit kost adalah sertifikat hak milik (SHM) atas sebidang tanah dan bangunan dengan beberapa opsi yaitu:\n4 kamar (Apartkost)\n4 kamar (Rukost)\n4 kamar mezzaninne (Rukost)\n6 kamar (Rukost)',
    },
    {
      title: 'Pembayaran',
      desc: 'Harmonia Student House menyediakan pilihan pembayaran secara cash keras maupun cicilan, dengan skema yang dirancang sesuai prinsip syariah, tanpa riba, tanpa KPR bank, dan tanpa gharar.',
    },
    {
      title: 'Legalitas',
      desc: 'Harmonia Student House Jatinangor Insya Allah dikembangkan dan dikelola dengan mengacu pada prinsip-prinsip syariah serta ketentuan hukum yang berlaku di Indonesia.',
    },
  ],
  proximityTitle: 'Dekat Kampus, Dekat dengan Kebutuhan Pasar.',
  proximityItems: [
    { time: '± 5 Menit', label: 'Ke Kampus UNPAD.' },
    { time: '± 6 Menit', label: 'Ke Kampus ITB.' },
    { time: '± 6 Menit', label: 'Ke Kampus IKOPIN.' },
  ],
  proximityFootnote:
    '*Hasil pengukuran jarak + waktu (real time), dilakukan secara akurat pada pagi hari (Rush Hour, 07.00), siang hari (12.00), sore hari (Rush Hour, 16.00), serta malam hari (20.00).',
  keunggulanSubtitle: 'Harmonia Student House Jatinangor memberikan nilai lebih bagi investor dengan berbagai keunggulan:',
  keunggulan: [
    { title: 'One Gate System', desc: 'Sistem keamanan dengan akses satu gerbang' },
    { title: 'Full Furnish', desc: 'Harmonia menyediakan unit dengan kamar yang sudah siap huni' },
    { title: 'Target Market Luas', desc: 'Dekat dengan UNPAD, ITB, dan IKOPIN membuka pasar hunian yang tinggi' },
    { title: 'ROI Tinggi', desc: 'Investasi menguntungkan dengan potensi tinggi dan berkelanjutan.' },
    { title: 'Parkir Umum yang Luas', desc: 'Area parkir mendukung penyewa yang membawa mobil' },
    { title: 'Desain Modern', desc: 'Dirancang dengan desain modern yang menunjang kenyamanan hunian' },
    { title: 'CCTV Kawasan', desc: 'Kawasan yang terpantau CCTV 24 jam untuk keamanan dan kenyamanan.' },
    { title: 'Security', desc: 'Petugas keamanan siaga untuk menjaga keamanan kawasan 24 jam.' },
  ],
  pbgTitle: 'Proses Legalitas Bangunan',
  pbgDesc:
    'Harmonia Student House terus melengkapi tahapan legalitas pembangunan. Saat ini, Persetujuan Bangunan Gedung (PBG) sedang dalam proses pengurusan sesuai dengan ketentuan administratif dan teknis yang berlaku.',
  unitTypes: [
    {
      id: 'apart-kost',
      name: 'Unit Apart Kost',
      desc: 'Konsep dua unit dalam satu bangunan menghadirkan pilihan kepemilikan yang lebih fleksibel. Dengan satu tangga bersama di tengah, setiap unit memiliki pembagian ruang yang jelas dan dapat dimanfaatkan sesuai kebutuhan pemilik.',
      specs: [
        'Luas Tanah 31 M2',
        'Luas Bangunan 61 M2',
        '4 Kamar Tidur',
        '4 Kamar Mandi',
        'Full Furnish',
        'Dapur Bersama',
      ],
      denahTitle: 'Denah Apart Kost',
      denahDesc: 'Tata ruang yang efisien untuk memaksimalkan kenyamanan, fungsi, dan potensi setiap unit apartkost.',
      photos: [
        '/images/harmonia/jatinangor-apartkost-ext.jpg',
        '/images/harmonia/jatinangor-apartkost-int1.jpg',
        '/images/harmonia/jatinangor-apartkost-int2.jpg',
      ],
      denahImage: '/images/harmonia/jatinangor-denah-apartkost.jpg',
    },
    {
      id: 'rukost-4',
      name: 'Unit Rumah Kost 4 Kamar',
      desc: 'Setiap unit rumah kost memiliki akses masuk dan tangga pribadi, dengan seluruh kamar berada dalam satu kepemilikan. Konsep ini memberikan privasi, keleluasaan pengelolaan, serta ruang yang lebih mandiri bagi setiap pemilik.',
      specs: [
        'Luas Tanah 40 M2',
        'Luas Bangunan 77 M2',
        '4 Kamar Tidur',
        '4 Kamar Mandi',
        'Full Furnish',
      ],
      denahTitle: 'Denah Rumah Kost',
      denahDesc: 'Tata ruang yang efisien untuk memaksimalkan kenyamanan, fungsi, dan potensi setiap unit apartkost.',
      photos: [
        '/images/harmonia/jatinangor-rukost4-ext.jpg',
        '/images/harmonia/jatinangor-rukost4-int1.jpg',
        '/images/harmonia/jatinangor-rukost4-int2.jpg',
      ],
      denahImage: '/images/harmonia/jatinangor-denah-rukost4.jpg',
    },
    {
      id: 'kalyca',
      name: 'Tipe Kalyca (Mezzanine) - 4 kamar',
      desc: 'Full Furnish: AC, Kasur, K. M.Dalam, Lemari, Meja & Kursi, Smart Doorlock',
      specs: ['LT 40 M²', 'LB 90 M²', '2 Lantai, 4 Kamar', 'AC', 'Kasur', 'K. M.Dalam', 'Lemari', 'Meja & Kursi', 'Smart Doorlock'],
      denahTitle: 'Denah Tipe Kalyca (Mezzanine - 4 kamar, LT 1)',
      denahDesc: 'Lantai 1 (Unit A 1 & Unit A 2) & Lantai (Mezzanine) (Unit A 1 & Unit A 2).',
      photos: [
        '/images/harmonia/jatinangor-kalyca-ext.jpg',
        '/images/harmonia/jatinangor-kalyca-int1.jpg',
        '/images/harmonia/jatinangor-kalyca-int2.jpg',
      ],
      denahImage: '/images/harmonia/jatinangor-denah-kalyca.jpg',
    },
    {
      id: 'kencana-6',
      name: 'Tipe Kencana (6 Kamar)',
      desc: 'Full Furnish: AC, Kasur, K. M.Dalam, Lemari, Meja & Kursi, Smart Doorlock',
      specs: ['LT 40 M²', 'LB 116 M²', '3 Lantai, 6 Kamar', 'AC', 'Kasur', 'K. M.Dalam', 'Lemari', 'Meja & Kursi', 'Smart Doorlock'],
      denahTitle: 'Denah Tipe Kencana (6 Kamar)',
      denahDesc: 'Lantai 1, Lantai 2, Lantai 3 (Unit D 1 & Unit D 2).',
      photos: [
        '/images/harmonia/jatinangor-kencana-ext.jpg',
        '/images/harmonia/jatinangor-kencana-int1.jpg',
        '/images/harmonia/jatinangor-kencana-int2.jpg',
      ],
      denahImage: '/images/harmonia/jatinangor-denah-kencana.jpg',
    },
  ],
  financialTable: {
    title: 'Tabel Proyeksi Keuangan Komperatif',
    sideLabel: 'ESTIMASI BEP & ROI',
    columns: [
      { key: 'apartkost4', title: 'TYPE KENCANA', subtitle: '(Apartkost 4 Kamar)' },
      { key: 'rukost4', title: 'TYPE KENCANA', subtitle: '(Rukost 4 Kamar)' },
      { key: 'kalyca4', title: 'TYPE KALYCA', subtitle: '(Mezzanine 4 Kamar)' },
      { key: 'kencana6', title: 'TYPE KENCANA', subtitle: '(6 kamar)' },
    ],
    rows: [
      { label: 'Total Kamar', values: ['4 Kamar', '4 Kamar', '4 Kamar', '6 Kamar'] },
      { label: 'Pendapatan Sewa / Kamar', values: ['Rp 1.300.000,00', 'Rp 1.700.000,00', 'Rp 2.000.000,00', 'Rp 1.700.000,00'] },
      { label: 'TOTAL PENDAPATAN / BULAN', values: ['Rp 5.200.000,00', 'Rp 6.800.000,00', 'Rp 8.000.000,00', 'Rp 10.200.000,00'], bold: true },
    ],
    operationalHeader: 'BIAYA OPERASIONAL BULAN',
    operationalRows: [
      { label: 'Biaya Ijaroh (Management Fee)', values: ['Rp 1.000.000,00', 'Rp 1.000.000,00', 'Rp 1.000.000,00', 'Rp 1.500.000,00'] },
    ],
    includeItems: [
      'Biaya Iklan/Pemasaran',
      'Biaya IPL Kawasan',
      'Biaya Utilitas (Wi-Fi / Internet))',
      'Biaya House Keeping',
      'Biaya Perawatan/Maintenance (Peralatan & Unit)',
    ],
    totalOperationalRow: {
      label: 'TOTAL BIAYA OPERASIONAL',
      values: ['Rp 1.000.000,00', 'Rp 1.000.000,00', 'Rp 1.000.000,00', 'Rp 1.500.000,00'],
    },
    profitHeader: 'PROYEKSI PROFITABILITAS',
    profitRows: [
      { label: 'NET PROFIT / BULAN', values: ['Rp 4.200.000,00', 'Rp 5.800.000,00', 'Rp 7.000.000,00', 'Rp 8.700.000,00'], highlight: true },
      { label: 'NET PROFIT / TAHUN\n(Kerja Sama Pengelolaan)', values: ['Rp 50.400.000,00', 'Rp 69.600.000,00', 'Rp 84.000.000,00', 'Rp 104.400.000,00'], highlight: true },
      { label: 'NET PROFIT / TAHUN\n(Tanpa Kerja Sama)', values: ['Rp 62.400.000,00', 'Rp 81.600.000,00', 'Rp 96.000.000,00', 'Rp 122.400.000,00'], highlight: true },
    ],
    roiSectionHeader: 'METRIK INVESTASI & ROI (RETURN ON INVESTMENT)',
    roiRows: [
      { label: 'Nilai Investasi Awal', values: ['Rp. 666.000.000', 'Rp. 888.000.000', 'Rp 999.000.000', 'Rp 1.111.000.000'] },
      { label: 'ROI Bisnis Kostan (Kerja Sama)', values: ['7,57%', '7,84%', '8,41%', '9,41%'] },
      { label: 'Estimasi ROI Capital Gain/Tahun', values: ['5,00%', '5,00%', '5,00%', '5,00%'] },
      { label: 'TOTAL ROI + CAPITAL GAIN\n(Kerja Sama)', values: ['12,57%', '12,84%', '13,41%', '14,41%'], highlight: true },
    ],
  },
  buildingSpecs: {
    title: 'Spesifikasi Bangunan Harmonia',
    subtitle:
      'Harmonia dirancang dengan bangunan modern dan fungsional, menggunakan material berkualitas dari struktur, fasad, kamar, kamar mandi, hingga interior untuk menunjang kenyamanan penghuni.',
    categories: [
      {
        name: 'Struktur',
        items: ['Besi D12', 'Semen Gresik/Semen Padang/Setara', 'Dak dengan Wiremeh dan Bondek 0.75mm'],
      },
      {
        name: 'Arsitektur',
        items: [
          'Bata ringan 7.5 cm',
          'Keramik 60 x 80 Matt Surface Gray ex. Sandimas/Setara',
          'Keramik 60 x 80 Matt Surface Gray ex. Sandimas/Setara',
          'Keramik 30 x 90 Matt Surface Gray ex. Sandimas/Setara',
          'Pintu Kamar Solid Engineering + Smart Doorlock ex.CienP/Setara',
          'Pintu Kamar Mandi uPVC',
          'Kusen Pintu alumunium Ex. Inkalum',
          'Kusen Jendela alumunium ex. Inkalum + kaca 5 mm',
          'Ruang Shaft/Ruang maintanance pipa (Untuk Apartkos)',
          'Cat Interior ex.Dulux putih',
          'Cat Ekstrior Weathershield putih',
          'Railing tangga besi hollow 40/40 dan 40/60',
        ],
      },
      {
        name: 'Sanitair',
        items: [
          'Pipa Air Hujan,Kotor Dan bekas PVC Tipe D ex. Rucika',
          'Pipa Air Bersih PVC Tipe AW Ex. Rucika',
          'Closet Duduk Ex. Vlok 680/setara',
          'Floordrain/Roofdrain Ex. Onda',
          'Showe set Ex. Onda',
          'Toren Kapasitas 1000 liter ex. Profil Tank/Setara',
          'Biotank Ex. Biofill/setara',
        ],
      },
      {
        name: 'Atap',
        items: ['Multiroof pasir Dark Gray', 'Rangka Baja Ringan C 0.75'],
      },
    ],
  },
  interiorSpecs: {
    title: 'Spesifikasi Interior Harmonia',
    subtitle:
      'Interior Harmonia dirancang modern dan fungsional, dilengkapi furniture serta fasilitas yang menunjang kenyamanan dan kebutuhan penghuni',
    rows: [
      { no: 1, item: 'Lemari', dim: '50cm x 60cm x 190cm', spec: 'Plywood 9mm-18mm' },
      { no: 2, item: 'Meja Belajar', dim: '80cm x 60cm x 75cm', spec: 'Plywood 9mm-18mm, hollow' },
      { no: 3, item: 'Kursi Belajar', dim: 'Ukruan Standart', spec: '-' },
      { no: 4, item: 'Dipan', dim: '200cm x 90cm x 30cm', spec: 'Kayu Pallete fin. Plitur' },
      { no: 5, item: 'Kasur', dim: '200cm x 90cm x 30cm', spec: 'Royal Foam Grand' },
      { no: 6, item: 'Ac', dim: '1/2 PK', spec: 'MIDEA / setara' },
      { no: 7, item: 'Smart TV', dim: '32 Inch', spec: 'CooCaa' },
      { no: 8, item: 'Water Heater', dim: '10 Liter', spec: 'Ariston' },
      { no: 9, item: 'Bantal', dim: '-', spec: '-' },
      { no: 10, item: 'Guling', dim: '-', spec: '-' },
      { no: 11, item: 'Sprei + Selimu bed Cover', dim: '-', spec: '-' },
      { no: 12, item: 'Curtain', dim: '-', spec: '-' },
    ],
  },
  occupancy: {
    title: 'Jaminan Okupansi',
    desc: 'Harmonia Student House didukung tim manajemen kost berpengalaman sejak 2021 yang terus mengembangkan strategi pemasaran sesuai kebutuhan pasar. Berbagai strategi diterapkan untuk menjaga okupansi dan mendukung target hunian hingga 100%',
    label: 'Upaya Pemenuhan Okupansi:',
    items: [
      {
        title: 'Hadir di Platform Kost',
        desc: 'Memasarkan unit melalui platform seperti Mamikos untuk menjangkau calon penghuni.',
      },
      {
        title: 'Promosi Kamar Tersedia',
        desc: 'Mempromosikan kamar kosong secara aktif melalui berbagai media sosial.',
      },
      {
        title: 'Peningkatan Layanan',
        desc: 'Mengembangkan layanan kost untuk meningkatkan kenyamanan dan kepuasan penghuni.',
      },
      {
        title: 'Shuttle ke Kampus',
        desc: 'Menyediakan shuttle untuk memudahkan mobilitas penghuni menuju kampus.',
      },
    ],
  },
  closingNarrative:
    'Di tengah kesibukan kampus dan langkah mahasiswa yang merajut masa depan, Harmonia memulai bab pertamanya di Jatinangor menjadi ruang singgah untuk belajar, tumbuh, dan menemukan rasa pulang.',
  closingQuote: '“Bagiku bukan cuma, Urusan wilayah Belaka”.',
  closingNext: 'Kini, cerita itu bergerak ke Bogor, Dramaga.',
};

export const DRAMAGA_DATA = {
  title: 'HARMONIA',
  subtitle: 'Dramaga – Bogor',
  introParagraphs: [
    'Dramaga, Bogor, pagi kerap dimulai dengan langkah-langkah yang menuju ruang belajar, sementara sore membawa pulang cerita dari hari yang panjang. Di tengah ritme kehidupan kampus itu, tumbuh sebuah kisah baru: Harmonia Student House Dramaga, hunian yang hadir untuk menemani perjalanan mahasiswa dalam menuntut ilmu dan merangkai cita-cita. Berada dekat dengan kampus IPB, Harmonia menawarkan ruang yang terasa praktis sekaligus nyaman, tempat untuk memulai hari, menyelesaikan tugas, beristirahat, dan menyimpan harapan tentang masa depan.',
    'Dirancang dengan konsep Tropical Contemporary, Harmonia memadukan kesan modern dengan suasana yang hangat. Pilihan unit dan tata ruangnya disiapkan untuk mendukung kebutuhan tinggal mahasiswa, dengan kamar yang telah dilengkapi furnitur serta fasilitas bersama yang menunjang keseharian.',
    'Kini, Harmonia Student House Dramaga membuka lembaran pertamanya di Bogor. Dari lingkungan yang lekat dengan ilmu dan harapan, hunian ini mengundang para mahasiswa untuk memulai babak baru, menata kehidupan di perantauan, mengejar cita-cita, dan tumbuh dengan cerita mereka sendiri. Karena setiap mimpi membutuhkan ruang untuk berakar, dan setiap perjalanan besar selalu memiliki tempat untuk memulai.',
  ],
  twilightParagraphs: [
    'Harmonia Student House Dramaga-Bogor, adalah hunian investasi dengan konsep modern minimalis, berlokasi di kawasan pendidikan terkemuka, menghadirkan kenyamanan, fasilitas lengkap, dan potensi pendapatan berkelanjutan.',
    'Permintaan hunian mahasiswa terus meningkat setiap tahun, menjadikan Harmonia pilihan tepat untuk investasi jangka panjang. Aset properti kost modern di lokasi strategis Dramaga-Bogor, dirancang untuk kebutuhan mahasiswa masa kini.',
  ],
  ownershipItems: [
    {
      title: 'Sertifikat',
      desc: 'Kepemilikan terhadap unit kost adalah sertifikat hak milik (SHM) atas sebidang tanah dan bangunan dengan beberapa opsi yaitu:\n4 kamar (Apartkost)\n5 kamar (Rukost)\n6 kamar (Rukost)\nRuko',
    },
    {
      title: 'Pembayaran',
      desc: 'Harmonia Student House menyediakan pilihan pembayaran secara cash keras maupun cicilan, dengan skema yang dirancang sesuai prinsip syariah, tanpa riba, tanpa KPR bank, dan tanpa gharar.',
    },
    {
      title: 'Legalitas',
      desc: 'Harmonia Student House Dramaga-Bogor Insya Allah dikembangkan dan dikelola dengan mengacu pada prinsip-prinsip syariah serta ketentuan hukum yang berlaku di Indonesia.',
    },
  ],
  campusHighlight: 'IPB – Dramaga ± 4 Menit',
  distances: [
    { label: 'Area Kuliner', time: '± 1 Menit' },
    { label: 'ATM Center', time: '± 1 Menit' },
    { label: 'Pusat Perbelanjaan', time: '± 3 Menit' },
    { label: 'Kawasan Wisata', time: '± 3 Menit' },
    { label: 'Stasiun Kereta', time: '± 18 Menit' },
  ],
  keunggulan: [
    { title: 'One Gate System', desc: 'Sistem keamanan dengan akses satu gerbang' },
    { title: 'Full Furnish', desc: 'Harmonia menyediakan unit dengan kamar yang sudah siap huni' },
    { title: 'Target Market Jelas', desc: 'Dekat dengan IPB Dramaga-Bogor membuka pasar hunian yang tinggi' },
    { title: 'ROI Tinggi', desc: 'Investasi menguntungkan dengan potensi tinggi dan berkelanjutan.' },
    { title: 'Parkir Umum yang Luas', desc: 'Area parkir mendukung penyewa yang membawa mobil' },
    { title: 'Desain Modern', desc: 'Dirancang dengan desain modern yang menunjang kenyamanan hunian' },
    { title: 'CCTV Kawasan', desc: 'Kawasan yang terpantau CCTV 24 jam untuk keamanan dan kenyamanan.' },
    { title: 'Security', desc: 'Petugas keamanan siaga untuk menjaga keamanan kawasan 24 jam.' },
  ],
  unitTypes: [
    {
      id: 'rukost-5',
      name: 'Unit Rumah Kost 5 Kamar',
      desc: 'Setiap unit rumah kost memiliki akses masuk dan tangga pribadi, dengan seluruh kamar berada dalam satu kepemilikan. Konsep ini memberikan privasi, keleluasaan pengelolaan, serta ruang yang lebih mandiri bagi setiap pemilik.',
      specs: [
        'Luas Tanah 54 M2',
        'Luas Bangunan 101 M2',
        '5 Kamar Tidur',
        '5 Kamar Mandi',
        'Full Furnish',
        'Dapur Bersama',
      ],
      denahTitle: 'Denah Rukost 5 Kamar',
      denahDesc: 'Tata ruang yang efisien untuk memaksimalkan kenyamanan, fungsi, dan potensi setiap unit apartkost.',
      photos: [
        '/images/harmonia/dramaga-rukost5-ext1.jpg',
        '/images/harmonia/dramaga-rukost5-ext2.jpg',
        '/images/harmonia/dramaga-rukost5-int1.jpg',
        '/images/harmonia/dramaga-rukost5-int2.jpg',
      ],
      denahImage: '/images/harmonia/dramaga-denah-rukost5.jpg',
    },
    {
      id: 'apart-kost-dramaga',
      name: 'Unit Apart Kost',
      desc: 'Konsep dua unit dalam satu bangunan menghadirkan pilihan kepemilikan yang lebih fleksibel. Dengan satu tangga bersama di tengah, setiap unit memiliki pembagian ruang yang jelas dan dapat dimanfaatkan sesuai kebutuhan pemilik.',
      specs: [
        'Luas Tanah 32,5 M2',
        'Luas Bangunan 65 M2',
        '4 Kamar Tidur',
        '4 Kamar Mandi',
        'Full Furnish',
        'Dapur Bersama',
      ],
      denahTitle: 'Denah Apart Kost',
      denahDesc: 'Tata ruang yang efisien untuk memaksimalkan kenyamanan, fungsi, dan potensi setiap unit apartkost.',
      photos: [
        '/images/harmonia/dramaga-apartkost-ext.jpg',
        '/images/harmonia/dramaga-apartkost-int1.jpg',
        '/images/harmonia/dramaga-apartkost-int2.jpg',
      ],
      denahImage: '/images/harmonia/dramaga-denah-apartkost.jpg',
    },
    {
      id: 'rukost-9',
      name: 'Unit Rumah Kost 9 Kamar',
      desc: 'Sama dengan halnya rukost 5 kamar, setiap unit rumah kost memiliki akses masuk dan tangga pribadi, dengan seluruh kamar berada dalam satu kepemilikan. Konsep ini memberikan privasi, keleluasaan pengelolaan, serta ruang yang lebih mandiri bagi setiap pemilik.',
      specs: [
        'Luas Tanah 55 M2',
        'Luas Bangunan 157 M2',
        '9 Kamar Tidur',
        '9 Kamar Mandi',
        'Full Furnish',
      ],
      denahTitle: 'Denah Rukost 9 Kamar',
      denahDesc: 'Denah yang dirancang secara efisien untuk memaksimalkan fungsi ruang dan kenyamanan dalam 9 kamar.',
      photos: [
        '/images/harmonia/dramaga-rukost9-ext1.jpg',
        '/images/harmonia/dramaga-rukost9-ext2.jpg',
        '/images/harmonia/dramaga-rukost9-int1.jpg',
        '/images/harmonia/dramaga-rukost9-int2.jpg',
      ],
      denahImage: '/images/harmonia/dramaga-denah-rukost9.jpg',
    },
    {
      id: 'ruko-harmonia',
      name: 'Unit Ruko Harmonia',
      desc: 'Berada di kawasan Harmonia Student House Bogor, unit ruko dirancang untuk mendukung berbagai kebutuhan usaha dengan lokasi strategis di lingkungan hunian. Pilihan tepat untuk mengembangkan bisnis sekaligus investasi properti.',
      specs: [
        'Luas Tanah 36 M2',
        'Luas Bangunan 62 M2',
        '2 Area Display',
        '1 Kamar Mandi',
      ],
      denahTitle: 'Denah Ruko Harmonia Dramaga',
      denahDesc: 'Denah yang dirancang secara efisien untuk memaksimalkan fungsi ruang dan kenyamanan dalam 9 kamar.',
      photos: [
        '/images/harmonia/dramaga-ruko-ext1.jpg',
        '/images/harmonia/dramaga-ruko-ext2.jpg',
      ],
      denahImage: '/images/harmonia/dramaga-denah-ruko.jpg',
    },
  ],
  roiDesc:
    'Simulasikan potensi keuntungan investasi Harmonia Student House berdasarkan harga unit, estimasi pendapatan sewa, serta biaya operasional untuk melihat gambaran return investasi.',
  roiTable1: {
    subtitle: 'TYPE RUKO, TYPE KENCANA, & TYPE GEDE',
    columns: [
      { title: 'TYPE RUKO', subtitle: '' },
      { title: 'TYPE KENCANA', subtitle: '(4 Kamar)' },
      { title: 'TYPE GEDE', subtitle: '(4 Kamar)' },
    ],
    rows: [
      { label: 'Total Kamar/Lantai', values: ['2 Lantai', '4 Kamar', '4 Kamar'] },
      { label: 'Pendapatan Sewa / Kamar', values: ['Rp 2.500.000,00', 'Rp 1.300.000,00', 'Rp 1.600.000,00'] },
      { label: 'TOTAL PENDAPATAN / BULAN', values: ['Rp 2.500.000,00', 'Rp 5.200.000,00', 'Rp 6.400.000,00'], bold: true },
    ],
    operationalRows: [
      { label: 'Biaya Ijaroh (Management Fee)', values: ['Rp 250.000,00', 'Rp 1.000.000,00', 'Rp 1.000.000,00'] },
    ],
    includeItems: [
      'Biaya Iklan/Pemasaran',
      'Biaya IPL Kawasan',
      'Biaya Utilitas (Wi-Fi / Internet))',
      'Biaya House Keeping',
      'Biaya Perawatan/Maintenance',
    ],
    totalOperational: ['Rp 250.000,00', 'Rp 1.000.000,00', 'Rp 1.000.000,00'],
    profitRows: [
      { label: 'NET PROFIT / BULAN', values: ['Rp 2.250.000,00', 'Rp 4.200.000,00', 'Rp 5.400.000,00'], highlight: true },
      { label: 'NET PROFIT / TAHUN\n(Kerja Sama Pengelolaan)', values: ['Rp 27.000.000,00', 'Rp 50.400.000,00', 'Rp 64.800.000,00'], highlight: true },
      { label: 'NET PROFIT / TAHUN\n(Tanpa Kerja Sama)', values: ['Rp 30.000.000,00', 'Rp 62.400.000,00', 'Rp 76.800.000,00'], highlight: true },
    ],
    roiRows: [
      { label: 'Nilai Investasi Awal', values: ['Rp. 575.580.023', 'Rp. 687.598.081', 'Rp. 737.598.081'] },
      { label: 'ROI Bisnis Kostan (Kerja Sama)', values: ['4,69%', '7,33%', '8,79%'] },
      { label: 'Estimasi ROI Capital Gain/Tahun', values: ['5,00%', '5,00%', '5,00%'] },
      { label: 'TOTAL ROI + CAPITAL GAIN\n(Kerja Sama)', values: ['9,69%', '12,33%', '13,79%'], highlight: true },
    ],
  },
  roiTable2: {
    subtitle: 'TYPE PANGRANGO & TYPE SALAK',
    columns: [
      { title: 'TYPE PANGRANGO', subtitle: '(5 Kamar)' },
      { title: 'TYPE SALAK', subtitle: '(9 Kamar)' },
    ],
    rows: [
      { label: 'Total Kamar', values: ['5 Kamar', '9 Kamar'] },
      { label: 'Pendapatan Sewa / Kamar', values: ['Rp 1.800.000,00', 'Rp 1.800.000,00'] },
      { label: 'TOTAL PENDAPATAN / BULAN', values: ['Rp 9.000.000,00', 'Rp 16.200.000,00'], bold: true },
    ],
    operationalRows: [
      { label: 'Biaya Ijaroh (Management Fee)', values: ['Rp 1.250.000,00', 'Rp 2.250.000,00'] },
    ],
    includeItems: [
      'Biaya Iklan/Pemasaran',
      'Biaya IPL Kawasan',
      'Biaya Utilitas (Wi-Fi / Internet))',
      'Biaya House Keeping',
      'Biaya Perawatan/Maintenance',
    ],
    totalOperational: ['Rp 1.250.000,00', 'Rp 2.520.000,00'],
    profitRows: [
      { label: 'NET PROFIT / BULAN', values: ['Rp 7.750.000,00', 'Rp 13.950.000,00'], highlight: true },
      { label: 'NET PROFIT / TAHUN\n(Kerja Sama Pengelolaan)', values: ['Rp 93.000.000,00', 'Rp 167.400.000,00'], highlight: true },
      { label: 'NET PROFIT / TAHUN\n(Tanpa Kerja Sama)', values: ['Rp 108.000.000,00', 'Rp 194.400.000,00'], highlight: true },
    ],
    roiRows: [
      { label: 'Nilai Investasi Awal', values: ['Rp. 888.670.034', 'Rp. 1.376.000.000'] },
      { label: 'ROI Bisnis Kostan (Kerja Sama)', values: ['10,47%', '12,17%'] },
      { label: 'Estimasi ROI Capital Gain/Tahun', values: ['5,00%', '5,00%'] },
      { label: 'TOTAL ROI + CAPITAL GAIN\n(Kerja Sama)', values: ['15,47%', '17,17%'], highlight: true },
    ],
  },
  gallery: [
    '/images/harmonia/dramaga-gallery-1.jpg',
    '/images/harmonia/dramaga-gallery-2.jpg',
    '/images/harmonia/dramaga-gallery-3.jpg',
    '/images/harmonia/dramaga-gallery-4.jpg',
    '/images/harmonia/dramaga-gallery-5.jpg',
  ],
  closingNarrative:
    'Ada perjalanan yang tak benar-benar usai ketika sampai di penghujungnya. Begitulah kisah Harmonia Student House: hadir menemani langkah para mahasiswa di Jatinangor dan Dramaga, menjadi bagian kecil dari masa muda yang kelak akan mereka kenang sebagai rumah.',
  closingQuote: '“Bumi Priangan, Tanah Pejajaran”.',
  closingNext: 'Cerita kembali bergerak menuju Parahyangan.',
};

export const GRV_DATA = {
  brandTitle: 'GRANADA RIVERVIEW',
  brandSubtitle: 'CITARIK - SUKABUMI',
  brandPartOf: 'Part of Harmonia Group',
  overviewTag: 'PRODUCT OVERVIEW',
  headline: 'KAVLING VILA WISATA IMPIAN',
  subheadline:
    'Aset kavling eksklusif dan Cabin Villa di kawasan wisata Citarik, Sukabumi dengan akses strategis dan nilai investasi yang potensial untuk terus bertumbuh setiap tahunnya.',
  instagram: '@granadariverview',
  address: 'Jl. Gunung Paok-Pajagan, Cikiray, Kec. Cikidang, Kab. Sukabumi, Jawa Barat 43367',
  ekowisataKicker: 'EKOWISATA',
  ekowisataTitle: 'GRANADA RIVERVIEW',
  ekowisataScript: 'Citarik – Sukabumi',
  ekowisataPara1:
    'Ada tempat-tempat yang membuat kita ingin berhenti sejenak, menarik napas lebih dalam, mendengarkan alam, dan membayangkan hari-hari yang terasa lebih lapang. Di Citarik, Sukabumi, Granada RiverView hadir membawa kisah tentang ruang untuk beristirahat dan menikmati kedekatan dengan alam. Di antara aliran sungai dan suasana yang menenangkan, setiap kunjungan dapat menjadi awal dari kenangan baru.',
  ekowisataPara2:
    'INILAH GRANADA RIVERVIEW CITARIK–SUKABUMI, BAGIAN DARI HARMONIA GROUP: SEBUAH LANGKAH MENUJU PENGALAMAN WISATA YANG MEMBERI RUANG BAGI WAKTU BERSAMA, KETENANGAN, DAN CERITA YANG INGIN DIKENANG. SELAMAT DATANG DI TEMPAT DI MANA PERJALANAN BISA MELAMBAT, ALAM TERASA LEBIH DEKAT, DAN SETIAP MOMEN MENEMUKAN MAKNANYA SENDIRI.',
  mengenalTitle: 'MENGENAL GRANADA RIVERVIEW',
  mengenalParagraphs: [
    'Granada Riverview merupakan kawasan kavling vila eksklusif yang terintegrasi dengan berbagai ekosistem wisata di Citarik, Sukabumi.',
    'Terletak dekat dengan akses tol langsung serta deretan objek pariwisata unggulan, kawasan ini memiliki traffic pengunjung tinggi setiap tahunnya.',
    'Dengan fasilitas yang lengkap, kepemilikan kavling vila Granada Riverview adalah langkah cerdas untuk mewujudkan tempat wisata impian sekaligus sebgai aset yang terus bertumbuh.',
  ],
  lokasiTitle: 'LOKASI STRATEGIS GRANADA RIVERVIEW',
  lokasiMetrics: [
    { value: '50 MENIT', label: 'DARI EXIT TOL BOCIMI PARUNGKUDA' },
    { value: '35 MENIT', label: 'DARI PANTAI PELABUHAN RATU' },
    { value: '05 MENIT', label: 'DARI WISATA RAFTING CITARIK' },
  ],
  wisataTitle: 'RAMAINYA OBJEK WISATA UNGGULAN',
  wisataCards: [
    {
      subtitle: 'Pesona Senja',
      title: 'Pantai Pelabuhan Ratu',
      image: '/images/harmonia/grv-wisata-1.jpg',
    },
    {
      subtitle: 'Tantangan Adrenalin',
      title: 'Wisata Rafting Citarik',
      image: '/images/harmonia/grv-wisata-2.jpg',
    },
  ],
  visitorStatPrefix: 'Data dari portal resmi pariwisata Kabupaten Sukabumi menunjukkan',
  visitorStatNumber: '500rb',
  visitorStatSuffix: 'jumlah pengunjung yang datang ke Pelabuhan Ratu-Citarik setiap tahun.',
  siteplanTitle: 'SITE PLAN KAVLING VILA',
  siteplanDesc:
    'Terdiri dari 5 Blok yang dibagi menjadi 78 kavling, dilengkapi Area Wisata seluas 4152 m² dengan fasilitas yang lengkap meliputi Mushola, Riverside Cafe, Glamping, Children Playground, hingga Wisata Air.',
  siteplanArea: 'LUAS TOTAL 29.122 M²',
  cabinTitle: 'TIPE-TIPE CABIN VILLA',
  cabinTypes: [
    {
      name: 'TYPE SIGNATURE',
      tableName: 'CABIN TYPE SIGNATURE',
      image: '/images/harmonia/grv-signature.jpg',
      oldPrice: '320JT',
      price: '250Jt',
      features: '1 Kamar | 1 Kamar Mandi\nTeras | Full-Furnished',
      lt: '104 m²',
      lb: '18 m² (6 x 3 m)',
      lowestPrice: 'Rp 252.378.478',
      annualIncome: 'Rp 38.400.000',
      roi: '15%',
    },
    {
      name: 'TYPE DELUXE',
      tableName: 'CABIN TYPE DELUXE',
      image: '/images/harmonia/grv-deluxe.jpg',
      oldPrice: '400JT',
      price: '335Jt',
      features: '2 Cabin | 2 Kamar | 2 Kamar Mandi\nPrivate Pool (opt.) | Full-Furnished',
      lt: '104 m²',
      lb: '36 m² (18m² x 2)',
      lowestPrice: 'Rp 337.378.478',
      annualIncome: 'Rp 62.400.000',
      roi: '18%',
    },
    {
      name: 'TYPE ROYALE',
      tableName: 'CABIN TYPE ROYALE',
      image: '/images/harmonia/grv-royale.jpg',
      oldPrice: '550JT',
      price: '490Jt',
      features: '2 Lantai | 1 Kamar | 1 Kamar Mandi\nKitchen | Carport | Full-Furnished',
      lt: '104 m²',
      lb: '50,4 m² (7 x 7.2 m)',
      lowestPrice: 'Rp 492.378.478',
      annualIncome: 'Rp 96.000.000',
      roi: '19%',
    },
  ],
  fasilitasTitle: 'FASILITAS KAVLING:',
  fasilitasList: ['Riverside Cafe', 'Riverside Glamping', 'Eco Park', 'Prayer Room', 'Kids Playground', 'Wisata Air'],
  kelebihanTitle: 'KELEBIHAN:',
  kelebihanList: [
    'Akses jalan sudah bagus',
    'Dilalui jalur touring pemotor',
    'Pusat pelatihan Kano Jawa Barat',
    'Sering diadakan event Water Sport',
    'Auto pilot management',
    'Dikelola tim profesional',
  ],
  gratisLabel: 'GRATIS',
  gratisItems: ['AJB', 'SHM', 'Hadiah menarik tanpa diundi', 'Bibit durian'],
  closingNarrative:
    'Setiap perjalanan menyimpan jejak tentang tempat yang pernah disinggahi, waktu yang dibagikan, dan kenangan yang akan dibawa pulang. Granada RiverView Citarik telah menjadi bagian dari kisah Harmonia Group: sebuah ruang untuk sejenak menjauh dari riuh, kembali dekat dengan alam, dan mengisi hari bersama orang-orang terkasih. Terima kasih kepada setiap pihak yang telah menjadi bagian dari perjalanan ini.',
  closingQuote: '“Hanya perpindahan, Segala pertanyaan tak kunjung terpecahkan”.',
  closingNext: 'Memandang persiapan masa depan dengan kepedulian, ketenangan, dan penghargaan terhadap kehidupan.',
};

export const HMG_DATA = {
  brandTitle: 'HARMONIA MEMORIAL GARDEN',
  topLeftNote: 'Tempat Penuh Kedamaian',
  topRightNote: 'Makam Eksklusif Lebak, Banten',
  heroDesc:
    'Kawasan pemakaman Muslim eksklusif di Lebak, Banten. Dengan sentuhan arsitektur Turki Utsmani yang elegan, asri dan menenangkan.',
  instagram: '@harmoniamemorialgarden',
  website: 'www.harmoniamemorialgarden.com',
  facebook: '@harmoniamemorialgarden',
  hashtag: '#A PLACE OF PEACE',
  aboutTitle: 'Mengenal Lebih Dekat Harmonia Memorial Garden',
  aboutParagraphs: [
    'Harmonia Memorial Garden merupakan grup usaha yang berada di bawah naungan PT Harapan Modern Niaga.',
    'Harmonia terus mengembangkan berbagai sektor properti melalui sejumlah proyek, di antaranya Harmonia Student House (Rukos) di Jatinangor dan Bogor, Granada River View berupa kawasan kavling wisata di Citarik, Sukabumi, serta Harmonia Memorial Garden kawasan Pemakaman Muslim Eksklusif di Lebak, Banten dengan konsep taman Islami bernuansa Turki Utsmani.',
  ],
  portfolioThumbs: [
    { label: 'Harmonia Memorial Garden Lebak, Banten', image: '/images/harmonia/hmg-building-render.jpg' },
    { label: 'Harmonia Student House Jatinangor', image: '/images/harmonia/hmg-thumb-jatinangor.jpg' },
    { label: 'Harmonia Student House Dramaga Bogor', image: '/images/harmonia/hmg-thumb-dramaga.jpg' },
    { label: 'Granada River View Citarik', image: '/images/harmonia/hmg-thumb-grv.jpg' },
  ],
  locationFooter: 'Rangkasbitung, Lebak - Banten',
  whyTitle: 'Mengapa harus Harmonia Memorial Garden',
  whyItems: [
    'Dekat Exit Tol Rangkasbitung',
    'Keamanan terjaga 24 jam',
    'Makam aman, tidak ditumpuk',
    'Fasilitas dan fitur lengkap',
    'Prosesi sesuai Syariat Islam',
    'Lahan siap pakai dan bebas banjir',
  ],
  siteplanTitle: 'Site Plan Harmonia Memorial Garden',
  siteplanSubtitle: 'Site Plan Kavling Makam',
  siteplanArea: '(Luas Tanah : 28.751.12 m2)',
  plotCounts: [
    { type: 'Tipe Single', count: '176', unit: 'Kavling makam' },
    { type: 'Tipe Couple', count: '44', unit: 'Kavling makam' },
    { type: 'Tipe Family', count: '15', unit: 'Kavling makam' },
  ],
  lokasiTitle: 'Lokasi Strategis Harmonia Memorial Garden',
  lokasiDistances: [
    { distance: '±4 KM', desc: '10 menit dari Exit tol Rangkasbitung' },
    { distance: '±7 KM', desc: '15 menit dari Terminal Rangkasbitung' },
    { distance: '±8 KM', desc: '20 menit dari Stasiun Rangkasbitung' },
  ],
  lokasiAddress: 'Desa Pasir Pogor, Kecamatan Warunggunung, Kabupaten Lebak, Banten, 42352',
  biayaWajibTitle: 'Biaya Wajib Harmonia Memorial Garden',
  biayaWajibPrice: '( Rp 7.000.000,- di luar biaya kavling)',
  biayaWajibBullets: [
    'Proses dan Upacara Pemakaman',
    'Batu Nissan Ukuran 30x35cm, jenis batu granit tile hitam',
    'Penanaman Rumput Jepang hijau untuk semua tipe unit',
  ],
  valueText:
    'Value Harmonia Memorial Garden merupakan komitmen dalam menghadirkan kawasan Pemakaman Muslim yang mengedepankan nilai-nilai Islami, kepercayaan, kepedulian, kenyamanan dan penghormatan. Berlandaskan pelayanan yang amanah dan profesional, Harmonia berupaya memberikan ketenangan serta kenyamanan bagi setiap keluarga dalam mempersiapkan tempat peristirahatan terakhir yang layak dan terawat.',
  biayaOptionalTitle: 'Biaya Optional Harmonia Memorial Garden',
  biayaJasaOptional: [
    {
      title: 'Jasa pemulasaraan',
      desc: 'Memandikan, mengkafani, menyolatkan Rp 1.000.000,-',
    },
    {
      title: 'Jasa Mobil jenazah',
      desc: 'Menjemput dari rumah duka ke lokasi pemakaman - Rp. 2.500.000 (khusus jabodetabek / radius 160KM dari lokasi).',
    },
    {
      title: 'Jasa pemulasaraan dan Jemputan',
      desc: 'Memandikan, mengkafani & mobil jenazah menjemput dari rumah duka ke lokasi pemakaman - Rp. 3.500.000 (s&k).',
    },
  ],
  biayaJasaNote: '*Karena sifatnya tidak wajib bisa menggunakan jasa kami bisa tidak',
  iplItems: [
    'Gratis perawatan makam 5 tahun pertama setelah pembelian (penggunaan).',
    'Biaya IPL (perawatan makam) Rp 200.000,- / per-tahun.',
    'Dibayarkan per 5 tahun jd total Rp 1.000.000,- / per 5 tahun (perawatan kavling, perapihan kavling dan tanah bila ada amblas dll).',
    'Gratis ganti nisan retak 1 tahun sejak pemakaman.',
  ],
  plotTypes: [
    { name: 'Tipe Single', size: 'Luas 1,5 x 3M (4,2m2)', access: 'Double WalkWay', price: 'Rp 5.000.000' },
    { name: 'Tipe Couple', size: 'Luas 4 x 3,5M (14m2)', access: 'Double WalkWay', price: 'Rp 10.000.000' },
    { name: 'Tipe Family', size: 'Luas 7,5 x 4M (30m2)', access: 'Double WalkWay', price: 'Rp 20.000.000' },
  ],
  parkFeatures: ['Vegetasi', 'Masjid Raya', 'Area Parkir Luas', 'Walkway Kawasan', 'One Gate Security'],
  caraPemesanan: [
    'Tentukan tipe unit kavling dan lokasi unit yang ingin dipesan.',
    'Pilih skema pembayaran yang diinginkan.',
    'Siapkan data yang diperlukan : Foto KTP & NPWP, No HP dengan Whatsapp aktif, Alamat Email, Alamat serta menyurat.',
    'Pembayaran melalui Rekening resmi PT BUMI BERKAH PROPERTINDO.',
    'Mengisi dan menandatangani Surat Pemesanan Kavling.',
    'Kwitansi dan Sertifikat unit lahan makam akan diberikan ke alamat pemesan.',
  ],
  preUse: [
    'Booking fee dilakukan untuk memesan tipe dan posisi unit (dikenakan Rp 2.000.000,- *masuk kebiaya unit saat pelunasan).',
    'Skema Cash keras pemesanan dengan maksimal pelunasan 7 hari sejak booking fee.',
  ],
  forUse: [
    'Melengkapi data pemesan dan mengisi form pemakaman.',
    'Melakukan pembayaran lahan makam dan biaya wajib jasa pemakaman.',
    'Persiapan pemakaman membutuhkan waktu 4-5 jam sejak konfirmasi pembayaran diterima.',
  ],
  jasaPemakamanItems: [
    'Jasa gali / tutup lubang (L 80 cm x P 200 cm x T 150 cm)',
    'Ustadz Pendamping untuk mendampingi proses pemakaman dan doa',
    'Dokumentasi Video',
    'Papan ari',
    'Papan nisa sementara',
    '1 Tenda ukuran 5x5',
    'Kursi 25 pcs (tambahan kursi kena biaya tambahan)',
    'Tangga',
    'Karpet lantai',
    'Karpet walkaway',
    'Sound system',
    'Podium',
    'Bunga karangan turut berduka cita',
    'Kipas angin',
    'Bak cuci tangan',
    'Bunga tabur',
    'Air mineral kemasan',
    'Tisu basah',
    'Pengawalan jalan dari Exit tol',
  ],
  closingParagraphs: [
    'Di tengah perjalanan hidup, ada bentuk kasih yang tetap ingin menjaga bahkan ketika waktunya tiba untuk melepas. Sebuah tempat untuk mengenang dengan tenang, dalam suasana yang asri, tertata, dan penuh penghormatan.',
    'Berlandaskan nilai Islami, Harmonia berupaya menghadirkan ketenteraman bagi keluarga dalam mempersiapkan tempat peristirahatan terakhir bagi orang terkasih. Cinta dan penghormatan akan selalu menemukan cara untuk tinggal.',
  ],
};

export const PENUTUP_DATA = {
  badgeTop: 'TAHAP 2 HSHJ',
  ctaPill: 'Ekspansi HG',
  letterParagraphs: [
    'Setiap perjalanan hidup membutuhkan ruang. Ada ruang untuk belajar dan tumbuh, ruang untuk beristirahat serta menikmati waktu bersama, dan ruang untuk mengenang kehidupan dengan penuh hormat. Dari keyakinan bahwa sebuah ruang dapat menjadi bagian penting dalam perjalanan manusia, Harmonia mengembangkan beragam proyek yang menjawab kebutuhan di setiap babak kehidupan.',
    'Perjalanan itu tumbuh melalui Harmonia Student House di Jatinangor dan Dramaga hunian bagi mahasiswa yang sedang mengejar cita-cita; Granada RiverView di Citarik, ruang untuk mendekat kembali dengan alam; hingga Harmonia Memorial Garden di Lebak, kawasan pemakaman Muslim yang dirancang dengan nilai Islami, kepedulian, dan penghormatan. Berbeda dalam tujuan dan suasana, setiap proyek berangkat dari niat yang sama: menghadirkan ruang yang bermakna, dengan pelayanan yang amanah dan perhatian kepada manusia.',
    'Inilah perjalanan Harmonia Group: merangkai tempat untuk bertumbuh, menikmati kehidupan, dan mengenang dengan tenang. Sebuah perjalanan yang terus berkembang, mengikuti kebutuhan manusia, sembari menjaga nilai yang menjadi dasarnya kepedulian, kenyamanan, dan harmoni.',
    'Dari ruang-ruang tempat mahasiswa memulai langkahnya, ke alam yang mengundang kita untuk sejenak beristirahat, hingga taman yang disiapkan dengan penuh penghormatan bagi mereka yang telah berpulang, setiap proyek Harmonia menyimpan kisah tentang kehidupan. Kisah tentang harapan yang dirawat, waktu yang dibagikan, dan kepedulian yang hadir dalam berbagai bentuk.',
    'Perjalanan ini mengingatkan kita bahwa properti bukan semata tentang membangun tempat, melainkan tentang memahami arti sebuah ruang bagi orang-orang yang mengisinya. Dengan nilai dan pengalaman yang telah tumbuh di setiap proyek, Harmonia Group akan terus melangkah, membuka peluang baru dan menghadirkan karya yang bermakna. Terima kasih telah menjadi bagian dari perjalanan ini. Semoga setiap ruang yang kami hadirkan dapat membawa kebaikan hari ini, esok, dan dalam kenangan yang tinggal.',
  ],
};
