export const contactsData = [
  {
    name: "phone",
    type: "phone",
    // href: "tel:+380981085033",
    href: "tel:+380981085033",
    icon: "/sprite.svg#icon-phone",
    contact: "+38 (098) 108-50-33",
  },

  {
    name: "facebook",
    type: "socialMedia",
    href: "https://www.facebook.com/malov.design.kiev",
    icon: "/sprite.svg#icon-facebook",
    contact: "Malov design group",
  },

  {
    name: "instagram",
    type: "socialMedia",
    href: "https://www.instagram.com/malov.and.partners.design",
    icon: "/sprite.svg#icon-instagram",
    contact: "@malov.design.kyiv",
  },
  {
    name: "viber",
    type: "socialMedia",
    href: "viber://chat?number=%2B380981085033",
    icon: "/sprite.svg#icon-viber",
    contact: "Malov&Partners",
  },

  {
    name: "telegram",
    type: "socialMedia",
    href: "https://t.me/+380981085033",
    icon: "/sprite.svg#icon-telegram",
    contact: "@MALOV&PARTNERS",
  },

  {
    name: "email",
    type: "email",
    href: "mailto:info@malov.design ",
    icon: "/sprite.svg#icon-email",
    contact: "info@malov.design ",
  },
];

export const phone = contactsData.find((el) => el.name === "phone");

export const contacts = contactsData.filter(
  (el) => el.name !== "facebook" && el.name !== "instagram"
);

export const socLinks = contactsData.filter((el) => el.type === "socialMedia");

export const faceInsta = contactsData.filter(
  (el) => el.name === "facebook" || el.name === "instagram"
);
