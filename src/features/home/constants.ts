interface GalleryImage {
  src: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/assets/images/about/pt-banner.webp",
    alt: "Programming Tadulako Banner",
  },
  {
    src: "/assets/images/about/gallery-img1.webp",
    alt: "Programming Tadulako Gallery 1",
  },
  {
    src: "/assets/images/about/gallery-img2.webp",
    alt: "Programming Tadulako Gallery 2",
  },
  {
    src: "/assets/images/about/gallery-img3.webp",
    alt: "Programming Tadulako Gallery 3",
  },
];

interface BatchData {
  year: string;
  title: string;
  content: {
    description: string;
    list?: string[];
    image: string;
  };
}

export const BATCH_DATA: BatchData[] = [
  {
    year: "2019",
    title: "Fiery Hydrogen",
    content: {
      description:
        "Batch Fiery Hydrogen adalah Batch yang terdiri dari angkatan 2019 prodi Teknik Informatika, dan juga prodi Sistem Informasi yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Python", "Git dan Github", "Netlify"],
      image: "/assets/images/batch/batch-fieryhydrogen.webp",
    },
  },
  {
    year: "2020",
    title: "Apollo",
    content: {
      description:
        "Batch Apollo adalah Batch yang terdiri dari angkatan 2020 prodi Teknik Informatika, dan juga prodi Sistem Informasi, yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Golang", "Git dan Github", "ReactJS"],
      image: "/assets/images/batch/batch-apollo.webp",
    },
  },
  {
    year: "2021",
    title: "Voyager",
    content: {
      description:
        "Batch Voyager adalah Batch yang terdiri dari angkatan 2020-2021 prodi Teknik Informatika, dan juga prodi Sistem Informasi, yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Git dan Github", "Deploy Project"],
      image: "/assets/images/batch/batch-voyager.webp",
    },
  },
  {
    year: "2022",
    title: "Rover",
    content: {
      description:
        "Batch Rover adalah Batch yang terdiri dari angkatan 2021-2022 prodi Teknik Informatika, dan juga prodi Sistem Informasi, yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Git dan Github", "ReactJS / Golang"],
      image: "/assets/images/batch/batch-rover.webp",
    },
  },
  {
    year: "2023",
    title: "Astrosphere",
    content: {
      description:
        "Batch Astrosphere adalah Batch yang terdiri dari angkatan 2022-2023 prodi Teknik Informatika, dan juga prodi Sistem Informasi, yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Git dan Github", "ReactJS / Golang"],
      image: "/assets/images/batch/batch-astrosphere.webp",
    },
  },
  {
    year: "2024",
    title: "Soyuz",
    content: {
      description:
        "Batch Soyuz adalah Batch yang terdiri dari angkatan 2023-2024 prodi Teknik Informatika, dan juga prodi Sistem Informasi, yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Git dan Github", "ReactJS / Golang"],
      image: "/assets/images/batch/batch-soyuz.webp",
    },
  },
  {
    year: "2025",
    title: "Coming Soon",
    content: {
      description: "Coming Soon",
      list: ["HTML, CSS, dan JS", "Git dan Github", "ReactJS / Golang"],
      image: "/assets/images/batch/batch-comingsoon.webp",
    },
  },
];

interface FeaturesData {
  title: string;
  header: string;
  description?: string;
  span?: boolean;
}

export const FEATURES_DATA: FeaturesData[] = [
  {
    title: "Build Your Tech Foundation",
    header: "/assets/images/features/features_header1.webp",
    description:
      "Mulai dengan HTML/CSS/JS dasar, dan pilih path-mu: Frontend with React atau Backend with Golang. Lengkapi dengan Git/Github workflow!",
    span: true,
  },
  {
    title: "Master Modern Stacks",
    header: "/assets/images/features/features_header2.webp",
  },
  {
    title: "Never Code Alone",
    header: "/assets/images/features/features_header3.webp",
    description: "Ada banyak mentor berpengalaman yang siap membantumu.",
  },
  {
    title: "Code Chill Repeat",
    header: "/assets/images/features/features_header4.webp",
    description:
      "Yuk liburan bareng kami! Jauhkan sejenak dari rutinitas, recharge energi, dan upgrade skill. Coding, chill, repeat!",
    span: true,
  },
];

interface FaqData {
  title: string;
  description: string;
}

export const FAQ_DATA: FaqData[] = [
  {
    title: "Apa itu Programming Tadulako?",
    description:
      "Programming Tadulako adalah komunitas yang berfokus pada pengembangan pengetahuan teknologi dan pemrograman, didirikan pada tahun 2012 untuk memberikan wadah bagi Mahasiswa Universitas Tadulako dalam mempelajari dan mengasah keterampilan programming.",
  },
  {
    title: "Apa saja yang dipelajari di sini?",
    description:
      "Di Programming Tadulako, kamu akan mempelajari dasar-dasar web development (HTML, CSS, JS), Git & Github, serta bisa memilih jalur Frontend (ReactJS) atau Backend (Golang). Semua materi diajarkan oleh mentor yang berpengalaman.",
  },
  {
    title: "Siapa saja yang bisa bergabung?",
    description:
      "Mahasiswa aktif Universitas Tadulako dari program studi Teknik Informatika dan Sistem Informasi. Yang memiliki kemauan untuk belajar programming.",
  },
  {
    title: "Bagaimana cara bergabung?",
    description: "Kamu bisa mengikuti informasi pendaftaran batch terbaru melalui website dan media sosial kami.",
  },
  {
    title: "Apakah ada biaya untuk bergabung?",
    description:
      "Programming Tadulako adalah komunitas non-profit. Semua kegiatan pembelajaran dan mentoring diberikan secara gratis untuk mahasiswa Universitas Tadulako.",
  },
];

interface Project {
  id: number;
  title: string;
  username: string;
  url: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Explore",
    username: "avavsam",
    url: "https://avavsam.github.io/astro_submission",
  },
  {
    id: 2,
    title: "Bagus Garden",
    username: "diL-duL",
    url: "https://github.com/diL-duL/bagusGarden",
  },
  {
    id: 3,
    title: "Serayapus",
    username: "serayapus",
    url: "https://serayapus.netlify.app",
  },
  {
    id: 4,
    title: "Avofit",
    username: "farizzidirli",
    url: "https://submission-soyuz-farizzidirli.vercel.app",
  },
  {
    id: 5,
    title: "Kuliner Nusantara",
    username: "Lieff246",
    url: "https://lieff246.github.io/Submission-Soyuz",
  },
  {
    id: 6,
    title: "Disaster Edu",
    username: "yulii18",
    url: "https://github.com/yulii18/submission_soyuz.git",
  },
  {
    id: 7,
    title: "JurnalBatik",
    username: "Dareaan",
    url: "https://inquisitive-babka-201d43.netlify.app/home",
  },
  {
    id: 8,
    title: "InfraScan",
    username: "andizazz",
    url: "https://andizazz.github.io/infrascan",
  },
  {
    id: 9,
    title: "Happy Keliling",
    username: "Raaiyaann",
    url: "https://happykeliling.netlify.app",
  },
  {
    id: 10,
    title: "Travel",
    username: "Farhan1705",
    url: "https://travelbeautifulindonesia.vercel.app",
  },
  {
    id: 11,
    title: "Sulteng Hidden Gem",
    username: "sulteng-explorer",
    url: "https://sultenghiddengem.netlify.app",
  },
  {
    id: 12,
    title: "Spot Cafe",
    username: "dila461",
    url: "https://github.com/dila461/submission.git",
  },
  {
    id: 13,
    title: "BUGIS",
    username: "Sappo77",
    url: "https://sappo77.github.io/BUGIS",
  },
  {
    id: 14,
    title: "KepalKuy",
    username: "amelsss",
    url: "https://kepalkuy.netlify.app",
  },
];
