import Layout from "@components/Layout";
import { DeviceMobileIcon, CodeIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import Link from "next/link";

const timeline = [
  {
    id: 1,
    content: "Founder",
    target: "for Negros",
    href: "https://www.fornegros.com/",
    date: "Sept 2023",
    datetime: "2013-09-20",
    icon: PaperAirplaneIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 2,
    content: "Sr Frontend",
    target: "BairesDev",
    href: "https://www.bairesdev.com/",
    date: "April 2022",
    datetime: "2013-09-20",
    icon: CodeIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 3,
    content: "Sr Frontend  ",
    target: "Overactive",
    href: "https://www.perficient.com/",
    date: "Sep 2021",
    datetime: "2013-09-20",
    icon: CodeIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 4,
    content: "Mobile Developer ",
    target: "Hola Dr",
    href: "https://holadr.com.co/",
    date: "2020 - 2021",
    datetime: "2013-09-20",
    icon: DeviceMobileIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 5,
    content: " Desarrollador Web ",
    target: "BitsAmericas SAS",
    href: "https://www.bitsamericas.com/",
    date: "2018 - 2020",
    datetime: "2013-09-20",
    icon: CodeIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 6,
    content: " Desarrollador Web Freelance",
    target: "Papayote Travel SAS",
    href: "https://papayotetravel.com/en/",
    date: "2015 - 2019",
    datetime: "2013-09-20",
    icon: CodeIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 7,
    content: " Desarrollador Web",
    target: "Wizard3D",
    href: "#",
    date: "2014",
    datetime: "2013-09-20",
    icon: CodeIcon,
    iconBackground: "bg-primary",
  },
  {
    id: 8,
    content: " Desarrollador Web Freelance",
    target: "PanamaCOM",
    href: "#",
    date: "2013 - 2018",
    datetime: "2013-09-20",
    icon: CodeIcon,
    iconBackground: "bg-primary",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Layout pageTitle="Experiencia">
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {timeline &&
            timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                        )}
                      >
                        <event.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          {event.content}
                          {" en "}
                          <strong>
                            <Link href={event.href}>
                              <a
                                target="_blank"
                                className="font-medium text-gray-900"
                              >
                                {event.target}
                              </a>
                            </Link>
                          </strong>
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
}
