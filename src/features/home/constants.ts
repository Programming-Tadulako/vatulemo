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
