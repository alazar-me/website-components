// src/components/SocialMediaIcons.js
import React from "react";
import App from "../App";
const socialMediaLinks = [
  {
    href: "#",
    src: "https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png",
    alt: "Facebook",
  },
  {
    href: "#",
    src: "https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png",
    alt: "Twitter",
  },
  {
    href: "#",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    alt: "Instagram",
  },
  {
    href: "#",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    alt: "LinkedIn",
  },
  {
    href: "#",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    alt: "YouTube",
  },
];
const SocialMediaIcons = () => {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="my-2 transition-transform transform hover:scale-150"
        >
          <img src={link.src} alt={link.alt} className="w-10 h-10" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
