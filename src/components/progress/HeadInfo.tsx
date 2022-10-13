import { PhoneIcon, MailIcon } from "@heroicons/react/solid";

const HeadInfo = ({ mentoring }: any) => {
  return (
    <div className="py-8 w-full">
      <div className="flex flex-col border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <div className="flex items-center">
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {mentoring?.name?.toUpperCase()}
                </h3>
                <p className="text-sm text-gray-500">{mentoring?.email}</p>
                <p className="text-sm text-gray-500">{mentoring?.profession}</p>
              </div>
            </div>
          </div>
          <div className="ml-8 mt-4 flex flex-shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <PhoneIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>{mentoring?.phone}</span>
            </button>
            <button
              type="button"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <MailIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>{mentoring?.email}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadInfo;
