interface FooterLink {
  name: string;
  url: string;
}

interface FooterType {
  navigate: {
    title: string;
    data: FooterLink[];
  };
  contact: {
    title: string;
    data: { value: string; url?: string }[];
  };
  social: {
    title: string;
    data: FooterLink[];
  };
}

export const FOOTER_DATA: FooterType = {
  navigate: {
    title: "Navigate",
    data: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About",
        url: "/#about",
      },
      {
        name: "Event",
        url: "/#event",
      },
    ],
  },
  contact: {
    title: "Contact",
    data: [
      {
        value: "Tondo, Palu Timur, Palu City",
        url: "https://www.google.com/maps?q=-0.84691971540451,119.894821166992",
      },
      {
        value: "protad123@gmail.com",
        url: "mailto:protad123@gmail",
      },
      {
        value: "+62 853 4820 3913",
        url: "https://wa.me/6285348203913",
      },
    ],
  },
  social: {
    title: "Social",
    data: [
      {
        name: "Discord",
        url: "https://discord.gg/gyBWNxAb",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/programming.tadulako",
      },
    ],
  },
};
