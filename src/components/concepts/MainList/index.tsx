import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/solid";

const positions = [
  {
    id: 1,
    title: "Title Test",
    department: "frontend",
    closeDate: "2022-12-07",
    closeDateFull: "Dec 7, 2022",
  },
  {
    id: 2,
    title: "Diferencia entre var, let y const",
    department: "javascript",
    closeDate: "2022-12-09",
    closeDateFull: "Dec 9, 2022",
  },
  {
    id: 3,
    title: "Arrow functions",
    department: "javascript",
    closeDate: "2022-12-11",
    closeDateFull: "Dec 11, 2022",
  },
  {
    id: 4,
    title: "Functional components",
    department: "reactjs",
    closeDate: "2022-12-11",
    closeDateFull: "Dec 11, 2022",
  },
  {
    id: 5,
    title: "Operador ternario",
    department: "reactjs",
    closeDate: "2022-12-11",
    closeDateFull: "Dec 11, 2022",
  },
];

export default function MainList() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {positions.map((position) => (
          <li key={position.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="truncate font-medium text-primary">
                        {position.title}
                      </p>
                      <p className="ml-1 flex-shrink-0 font-bold text-gray-500">
                        #{position.department}
                      </p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <p>
                          Added on{" "}
                          <time dateTime={position.closeDate}>
                            {position.closeDateFull}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
