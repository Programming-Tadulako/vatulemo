interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  height: number;
  width: number;
}

export const aboutGalleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/assets/images/about/activity-img1.png",
    alt: "activity documentation",
    height: 300,
    width: 400,
  },
  {
    id: "2",
    src: "/assets/images/about/activity-img2.png",
    alt: "activity documentation",
    height: 300,
    width: 400,
  },
  {
    id: "3",
    src: "/assets/images/about/activity-img3.png",
    alt: "activity documentation",
    height: 300,
    width: 400,
  },
];
