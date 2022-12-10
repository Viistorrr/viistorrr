import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  //ChatBubbleLeftEllipsisIcon,
  //CodeBracketIcon,
  //EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  //HandThumbUpIcon,
  //MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faThumbsUp,
  faComment,
  faEye,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const questions = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "@viistorrr",
      imageUrl:
        "https://lh3.googleusercontent.com/ogw/AOh-ky0Ijgtu2PmbIxx1jq9P-RWpSSFXZTqSgwJMzz6GOw=s32-c-mo",
      href: "#",
    },
    date: "December 7, 2022",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "Title Test",
    body: `
        <p>Lorem ipsum description test will be placed here.</p>

        <p>Lorem ipsum with more description bla bla bla test</p>
        
        <p>Lorem ipsum with more description bla bla bla testLorem ipsum with more description bla bla bla testLorem ipsum with more description bla bla bla testLorem ipsum with more description bla bla bla testLorem ipsum with more description bla bla bla testLorem ipsum with more description bla bla bla testLorem ipsum with more description bla bla bla test.</p>
        
      `,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Details = () => {
  return (
    <div>
      <ul role="list" className="space-y-4">
        {questions.map((question) => (
          <li
            key={question.id}
            className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
          >
            <article aria-labelledby={"question-title-" + question.id}>
              <div>
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={question.author.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-primary">
                      <a
                        href={question.author.href}
                        className="hover:underline"
                      >
                        {question.author.name}
                      </a>
                    </p>
                    <p className="text-sm text-primary">
                      <a href={question.href} className="hover:underline">
                        <time dateTime={question.datetime}>
                          {question.date}
                        </time>
                      </a>
                    </p>
                  </div>
                </div>
                <h2
                  id={"question-title-" + question.id}
                  className="mt-4 text-base font-bold text-primary"
                >
                  {question.title}
                </h2>
              </div>
              <div
                className="mt-2 space-y-4 text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: question.body }}
              />
              <div className="mt-2 ">
                <Link href="/blog">
                  <a className="font-bold text-primary text-xl hover:text-red">
                    Leer más...
                  </a>
                </Link>
              </div>

              <div className="mt-6 flex justify-between space-x-8">
                <div className="flex space-x-6">
                  <span className="inline-flex items-center text-sm">
                    <button
                      type="button"
                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    >
                      <FontAwesomeIcon icon={faThumbsUp} size="xl" />
                      <span className="font-medium text-gray-900">
                        {question.likes}
                      </span>
                      <span className="sr-only">likes</span>
                    </button>
                  </span>
                  <span className="inline-flex items-center text-sm">
                    <button
                      type="button"
                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    >
                      <FontAwesomeIcon icon={faComment} size="xl" />
                      <span className="font-medium text-gray-900">
                        {question.replies}
                      </span>
                      <span className="sr-only">replies</span>
                    </button>
                  </span>
                  <span className="inline-flex items-center text-sm">
                    <button
                      type="button"
                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    >
                      <FontAwesomeIcon icon={faEye} size="xl" />
                      <span className="font-medium text-gray-900">
                        {question.views}
                      </span>
                      <span className="sr-only">views</span>
                    </button>
                  </span>
                </div>
                <div className="flex text-sm">
                  <span className="inline-flex items-center text-sm">
                    <button
                      type="button"
                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                    >
                      <FontAwesomeIcon icon={faShare} size="xl" />
                      <span className="font-medium text-gray-900">Share</span>
                    </button>
                  </span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
