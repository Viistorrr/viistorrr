import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faFacebook,
  faSpotify,
  faSlack,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const navigation = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/viistorrr/",
      target: "_blank",
      icon: faLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/Viistorrr",
      target: "_blank",
      icon: faGithub,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/viistorrr",
      target: "_blank",
      icon: faTwitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/viistorrr/",
      target: "_blank",
      icon: faInstagram,
    },
    {
      name: "Spotify Playlist",
      href: "https://open.spotify.com/playlist/02A9TTFAZf6k1lpTDalR1K?si=f631cb2f1e78455e",
      target: "_blank",
      icon: faSpotify,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        ></nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.target}
              className="text-gray-800 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <FontAwesomeIcon icon={item.icon} size="2xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
