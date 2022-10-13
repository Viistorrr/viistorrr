import {
  CheckIcon,
  UserIcon,
  CodeIcon,
  ClockIcon,
  ArrowUpIcon,
} from "@heroicons/react/solid";

import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Timeline = ({ mentoring }): JSX.Element => {
  return (
    <div className="flow-root mx-8">
      <ul role="list" className="-mb-8">
        {mentoring?.steps?.map((item: any, eventIdx: number) => (
          <li key={item.name}>
            <div className="relative pb-8">
              {eventIdx !== mentoring.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  {item?.completed ? (
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{item.module}</p>
                  </div>

                  {/* <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={item.name}> - {item.module}</time>
                  </div> */}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
