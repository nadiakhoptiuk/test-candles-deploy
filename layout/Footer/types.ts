export type FooterProps = {
  footer: {
    logoAriaLabelText: string;
    contacts: {
      href: string;
      icon: string;
      text: string;
    }[];
    nav_text: string;
    nav: {
      name: string;
      href?: string;
    }[];
    basketText: string;
    forBusinessBtnText: string;
    social_text: string;
    social: {
      href: string;
      icon: string;
      text: string;
    }[];
    soft_ryzen: { made: string; name: string; href: string };
  };
  information: {
    title: string;
    buttons: { text: string; data: string[] }[];
    className?: string;
  };
};
