import "firebase/firestore";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDoc,
  doc,
} from "firebase/firestore";
import { CheckIcon, HandIcon, UserIcon } from "@heroicons/react/solid";
import { firestore } from "../../firebaseConfig";

/**
 * TODO: Get correct data fromfirebase to get a single user data
 * Currently geeting an object instead an array. Must be fixed
 */

const timeline = [
  {
    id: 1,
    content: "NextJS",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "ReactJS",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 3,
    content: "Javascript",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: HandIcon,
    iconBackground: "bg-gray-500",
  },
  {
    id: 4,
    content: "TailwindCSS",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-gray-500",
  },
  {
    id: 5,
    content: "CSS3",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-gray-500",
  },
  {
    id: 6,
    content: "HTML5",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: HandIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 7,
    content: "Gestión Efectiva del Tiempo",
    target: "Katherine Snyder",
    href: "#",
    date: "Sep 12",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Modules = (): JSX.Element => {
  const [modules, setModules] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const q = query(collection(firestore, "modules"), orderBy("order", "asc"));
    onSnapshot(q, (querySnapshot) => {
      setModules(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(firestore, "contact", "C4vgKNKCayMU1kZcIJjP");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getUser();
  }, []);
  console.log({ userData });

  return (
    <div className="relative mx-auto max-w-xl w-full">
      <div className="grid text-start">
        <h1 className="py-8">Módulos</h1>
        <div className="flex justify-content items-center">
          <div className="flow-root">
            <ul role="list" className="">
              {modules.map((event) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {event.id !== timeline.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={
                            "bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                          }
                        >
                          <HandIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            <a
                              href={event.data.name}
                              className="font-medium text-gray-900"
                            >
                              {event.data.order} . {event.data.name}
                            </a>
                          </p>
                          <div>
                            {event.data.actividades.map((actividad, index) => (
                              <p key={index} className="text-sm text-gray-500">
                                {actividad.name ? actividad.name : "No indica"}{" "}
                                -{" "}
                                {actividad.completed
                                  ? "Completado"
                                  : "Pendiente"}
                              </p>
                            ))}
                            Reto final
                          </div>
                        </div>

                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          <time dateTime="Sep 22, 2022">Sep 22, 2022</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
