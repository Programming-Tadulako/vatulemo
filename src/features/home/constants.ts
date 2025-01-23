interface GalleryImage {
  id: string;
  src: string;
  dimensions: {
    height: number;
    width: number;
  };
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

export const BATCH_DATA = [
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
