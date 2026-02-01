import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faSpotify,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHourglassStart,
  faRobot,
  faBurger,
  faCalendarAlt,
  faCamera,
  faClock,
  faListCheck,
  faListAlt,
  faListDots,
} from "@fortawesome/free-solid-svg-icons";

const navigation = {
  social: [
    {
      name: "Agenda",
      href: "https://calendly.com/viistorrr/",
      target: "_blank",
      icon: faCalendarAlt,
    },
    {
      name: "Progreso del Año",
      href: "https://lifestreamoftime.lovable.app?utm_source=viistorrr.com&utm_medium=web",
      target: "_blank",
      icon: faClock,
    },
    {
      name: "Progreso del Año",
      href: "https://vyearprogress.vercel.app?utm_source=viistorrr.com&utm_medium=web",
      target: "_blank",
      icon: faHourglassStart,
    },
    {
      name: "for Negros",
      href: "https://fornegros.com/?utm_source=viistorrr.com&utm_medium=web",
      target: "_blank",
      icon: faRobot,
    },
    {
      name: "cosas simples",
      href: "https://www.canva.com/design/DAGF0FssNXg/1yJqeloN5LcS0lFZFenSkQ/view?utm_content=DAGF0FssNXg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      target: "_blank",
      icon: faListCheck,
    },
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
      icon: faXTwitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/viistorrrmmn/",
      target: "_blank",
      icon: faInstagram,
    },
    {
      name: "Shutterstock",
      href: "https://www.shutterstock.com/es/g/viistorrr",
      target: "_blank",
      icon: faCamera,
    },
    {
      name: "Burger",
      href: "https://www.buymeacoffee.com/viistorrr",
      target: "_blank",
      icon: faBurger,
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
    <footer className="flex bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex justify-center" aria-label="Footer">
          <div className="mt-8 justify-center space-x-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                className="text-gray-800 hover:text-orange-400"
              >
                <span className="sr-only">{item.name}</span>
                <FontAwesomeIcon icon={item.icon} size="2xl" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}
