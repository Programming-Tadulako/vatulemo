interface GalleryImage {
  id: string;
  src: string;
  dimensions: {
    height: number;
    width: number;
  };
}

interface BatchData {
  year: string;
  title: string;
  content: {
    description: string;
    list?: string[];
    image: string;
  };
}

interface FeaturesData {
  title: string;
  header: string;
  description?: string;
  span?: boolean;
}

interface FaqData {
  title: string;
  description: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "/assets/images/about/activity-img1.png",
    dimensions: {
      height: 300,
      width: 400,
    },
  },
  {
    id: "2",
    src: "/assets/images/about/activity-img2.png",
    dimensions: {
      height: 300,
      width: 400,
    },
  },
  {
    id: "3",
    src: "/assets/images/about/activity-img3.png",
    dimensions: {
      height: 300,
      width: 400,
    },
  },
];

export const BATCH_DATA: BatchData[] = [
  {
    year: "2019",
    title: "Fiery Hydrogen",
    content: {
      description:
        "Batch Fiery Hydrogen adalah Batch yang terdiri dari angkatan 2019 prodi Teknik Informatika, dan juga prodi Sistem Informasi yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Python", "Git dan Github", "Netlify"],
      image: "/assets/images/batch/batch-fieryhydrogen.png",
    },
  },
  {
    year: "2020",
    title: "Apollo",
    content: {
      description:
        "Batch Apollo adalah Batch yang terdiri dari angkatan 2020 prodi Teknik Informatika, dan juga prodi Sistem Informasi, yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Golang", "Git dan Github", "ReactJS"],
      image: "/assets/images/batch/batch-apollo.png",
    },
  },
  {
    year: "2021",
    title: "Voyager",
    content: {
      description:
        "Batch Voyager adalah Batch yang terdiri dari angkatan 2020-2021 prodi Teknik Informatika, dan juga prodi Sistem Informasi, yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Git dan Github", "Deploy Project"],
      image: "/assets/images/batch/batch-voyager.png",
    },
  },
  {
    year: "2022",
    title: "Rover",
    content: {
      description:
        "Batch Rover adalah Batch yang terdiri dari angkatan 2021-2022 prodi Teknik Informatika, dan juga prodi Sistem Informasi, yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Git dan Github", "ReactJS / Golang"],
      image: "/assets/images/batch/batch-rover.png",
    },
  },
  {
    year: "2023",
    title: "Astrosphere",
    content: {
      description:
        "Batch Astrosphere adalah Batch yang terdiri dari angkatan 2022-2023 prodi Teknik Informatika, dan juga prodi Sistem Informasi, yang mempelajari:",
      list: ["HTML, CSS, dan JS", "Git dan Github", "ReactJS / Golang"],
      image: "/assets/images/batch/batch-astrosphere.png",
    },
  },
  {
    year: "2024",
    title: "Soyuz",
    content: {
      description: "Coming Soon",
      image: "/assets/images/batch/batch-soyuz.png",
    },
  },
];

export const FEATURES_DATA: FeaturesData[] = [
  {
    title: "Build Your Tech Foundation",
    header: "/assets/images/features/features_header1.png",
    description:
      "Mulai dengan HTML/CSS/JS dasar, dan pilih path-mu: Frontend with React atau Backend with Golang. Lengkapi dengan Git/Github workflow!",
    span: true,
  },
  {
    title: "Master Modern Stacks",
    header: "/assets/images/features/features_header2.png",
  },
  {
    title: "Never Code Alone",
    header: "/assets/images/features/features_header3.png",
    description: "Ada banyak mentor berpengalaman yang siap membantumu.",
  },
  {
    title: "Code Chill Repeat",
    header: "/assets/images/features/features_header4.png",
    description:
      "Yuk liburan bareng kami! Jauhkan sejenak dari rutinitas, recharge energi, dan upgrade skill. Coding, chill, repeat!",
    span: true,
  },
];

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
