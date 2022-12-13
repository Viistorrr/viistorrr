import {
  CheckIcon,
  ArrowUpIcon,
  CodeIcon,
  ClockIcon,
  LinkIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const users = {
  name: "Nombre del Usuario",
  email: "Email del Usuario",
  phone: "+57 300 000 0000",
  profession: "Profesion del Usuario",
  steps: [
    {
      completed: "si",
      link: "https://www.viistorrr.com",
      module: "Modulo Nombre",
      name: "Primer Paso Completado",
    },
    {
      completed: "no",
      link: "https://www.viistorrr.com",
      module: "Modulo Nombre",
      name: "Segundo Paso pendiente",
    },
    {
      completed: "no",
      link: "https://www.viistorrr.com",
      module: "Modulo Nombre",
      name: "Tercer Paso pendiente",
    },
  ],
};

const Steps = () => {
  return (
    <>
      <div className="flow-root mx-8">
        <ul role="list" className="-mb-8">
          {users?.steps?.map((item: any, eventIdx: number) => (
            <li key={item.name}>
              <div className="relative pb-8">
                {eventIdx !== users.steps.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    {item?.completed === "si" || item?.completed === true ? (
                      <span
                        className={classNames(
                          "bg-green-400",
                          "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                        )}
                      >
                        {item?.reto ? (
                          <CodeIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        ) : (
                          <CheckIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    ) : (
                      <span
                        className={classNames(
                          "bg-gray-400",
                          "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                        )}
                      >
                        {item?.reto ? (
                          <CodeIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        ) : (
                          <ClockIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3 w-full">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <div className="w-4 h-4 mx-2">
                          <Link href={item.link}>
                            <a
                              target="_blank"
                              className="font-medium text-sky-600 hover:text-sky-500"
                            >
                              <LinkIcon />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{item.module}</p>
                    </div>

                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime="{item.name}"> - 20:40</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Steps;
