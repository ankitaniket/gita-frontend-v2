"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import classNames from "../../utils/classNames";

interface IconProps {
  className: string;
  ariaHidden: boolean;
}

const navigation = {
  main: [
    { name: "About Us", href: "/about", newTab: false },
    { name: "Privacy Policy", href: "/privacy-policy", newTab: false },
    { name: "Terms", href: "/terms-of-service", newTab: false },
    { name: "Blog", href: "https://radhakrishna.net/", newTab: true },
    {
      name: "Donate",
      href: "https://opencollective.com/the-gita-initiative",
      newTab: true,
    },
    {
      name: "API",
      href: "https://rapidapi.com/bhagavad-gita-bhagavad-gita-default/api/bhagavad-gita3",
      newTab: true,
    },
    {
      name: "Contact Us",
      href: "mailto:admin@bhagavadgita.io",
      newTab: false,
    },
  ],
  social: [
    {
      name: "Facebook",
      href: " https://www.facebook.com/iiRadhaKrishnaii/",
      icon: ({ className, ariaHidden }: IconProps) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className={className}
          aria-hidden={ariaHidden}
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ShriKrishna?s=20&t=92c4he0cK-nq_Bo6WOx0ZQ",
      icon: ({ className, ariaHidden }: IconProps) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className={className}
          aria-hidden={ariaHidden}
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: " https://github.com/gita",
      icon: ({ className, ariaHidden }: IconProps) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className={className}
          aria-hidden={ariaHidden}
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <div className="w-full mt-24 bottom-0 bg-white dark:bg-dark-100 font-inter border-gray-200 border-t border-b">
      <div className="py-1 lg:py-8">
        <div className="flex justify-between lg:justify-center items-center">
          <div className="flex-none w-1/2 lg:w-1/5 lg:hidden">
            <Menu
              as="div"
              className="relative inline-block text-left lg:hidden"
            >
              {({ open }) => (
                <>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-bottom-left absolute left-0 bottom-10 mt-2 w-56 rounded-lg shadow-lg bg-white dark:bg-dark-bg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700 dark:text-gray-400",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              English
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700 dark:text-gray-400",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              French
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700 dark:text-gray-400",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Spanish
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700 dark:text-gray-400",
                                  "block w-full text-left px-4 py-2 text-sm"
                                )}
                              >
                                Hindi
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                  {/* commented out for now  until next release
                  <div>
                    <Menu.Button className="inline-flex justify-centerw-full rounded-lg border border-gray-300 shadow-sm px-2 py-2 bg-white dark:bg-dark-100 text-xs text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-700 focus:ring-my-orange">
                      Language
                      {open ? (
                        <ChevronUpIcon
                          className="-mr-1 ml-1 h-4 w-4 rotate-180"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronUpIcon
                          className="-mr-1 ml-1 h-4 w-4"
                          aria-hidden="true"
                        />
                      )}
                    </Menu.Button>
                  </div>
                */}
                </>
              )}
            </Menu>

            <Menu
              as="div"
              className="relative inline-block text-left lg:hidden"
            >
              {({ open }) => (
                <>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-bottom-left absolute left-0 bottom-10 mt-2 w-56 rounded-lg shadow-lg bg-white dark:bg-dark-bg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/about"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700 dark:text-gray-400",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              About Us
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="https://radhakrishna.net/"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700 dark:text-gray-400",
                                "block px-4 py-2 text-sm"
                              )}
                              target="_blank"
                            >
                              Blog
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="https://opencollective.com/the-gita-initiative"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700 dark:text-gray-400",
                                "block px-4 py-2 text-sm"
                              )}
                              target="_blank"
                            >
                              Donate
                            </a>
                          )}
                        </Menu.Item>
                        {/* 
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700 dark:text-gray-400",
                                "block px-4 py-2 text-sm"
                              )}
                              target="_blank"
                            >
                              Press
                            </a>
                          )}
                        </Menu.Item>
                        */}
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="https://rapidapi.com/bhagavad-gita-bhagavad-gita-default/api/bhagavad-gita3"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700 dark:text-gray-400",
                                "block px-4 py-2 text-sm"
                              )}
                              target="_blank"
                            >
                              API
                            </a>
                          )}
                        </Menu.Item>
                        <div className="py-1  border-t border-gray-200">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://www.facebook.com/iiRadhaKrishnaii/"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700 dark:text-gray-400",
                                  "block px-4 py-2 text-sm"
                                )}
                                target="_blank"
                              >
                                Facebook
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://www.instagram.com/iiradhakrishnaii1008/"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700 dark:text-gray-400",
                                  "block px-4 py-2 text-sm"
                                )}
                                target="_blank"
                              >
                                Instagram
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://twitter.com/ShriKrishna?s=20&t=92c4he0cK-nq_Bo6WOx0ZQ"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700 dark:text-gray-400",
                                  "block px-4 py-2 text-sm"
                                )}
                                target="_blank"
                              >
                                Twitter
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href=" https://github.com/gita"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700 dark:text-gray-400",
                                  "block px-4 py-2 text-sm"
                                )}
                                target="_blank"
                              >
                                Github
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                  <div>
                    <Menu.Button className="inline-flex justify-centerw-full rounded-lg border border-gray-300 shadow-sm px-2 py-2 bg-white dark:bg-dark-100 text-xs text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-700 focus:ring-my-orange ml-3">
                      More
                      {open ? (
                        <ChevronUpIcon
                          className="-mr-1 ml-1 h-4 w-4 rotate-180"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronUpIcon
                          className="-mr-1 ml-1 h-4 w-4"
                          aria-hidden="true"
                        />
                      )}
                    </Menu.Button>
                  </div>
                </>
              )}
            </Menu>
          </div>
          <div className="flex-none hidden lg:block">
            <footer className="bg-white dark:bg-dark-100">
              <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                <nav
                  className="-mx-5 -my-2 flex flex-wrap justify-center"
                  aria-label="Footer"
                >
                  {navigation.main.map((item) => (
                    <div key={item.name} className="px-5 py-2">
                      {
                        item.newTab ?
                          <a
                            href={item.href}
                            className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            target="_blank"
                          >
                            {item.name}
                          </a>
                          :
                          <Link className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white" href={item.href} passHref>
                            {item.name}
                          </Link>
                      }
                    </div>
                  ))}
                </nav>
              </div>
            </footer>
          </div>
          <div className="flex flex-1 justify-end lg:w-1/5 lg:hidden max-h-10 mr-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.gitainitiative.bhagavadgita"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/play_store.svg"
                alt="Bhagavad Gita"
                height={40}
                width={140}
                className="rounded pr-1"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/bhagavad-gita-hindi-english/id1602895635"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/app_store.svg"
                alt="Bhagavad Gita"
                height={40}
                width={140}
                className="rounded"
              />
            </a>
          </div>
        </div>
        <div className="flex-none text-right w-1/3 lg:w-full">
          <div className="mt-5 justify-center hidden lg:flex items-center space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-white"
                target="_blank"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" ariaHidden={true} />
              </a>
            ))}
            {/* <a href="#">App Icon</a> */}
          </div>
          {/* <a href="#" className="text-right block lg:hidden">
          App Icon
        </a> */}
        </div>
      </div>
      <hr />
      <div className="flex px-4 py-1 justify-between items-center">
        <div className="flex-none w-1/2 lg:w-1/5 hidden lg:inline-block">
          {/* commented out for now  until next release
          <Menu as="div" className="relative text-left ">
            {({ open }) => (
              <>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-bottom-left absolute left-0 bottom-10 mt-2 w-56 rounded-lg shadow-lg bg-white dark:bg-dark-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-400",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            English
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-400",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            French
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-400",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Spanish
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
                                  : "text-gray-700 dark:text-gray-400",
                                "block w-full text-left px-4 py-2 text-sm"
                              )}
                            >
                              Hindi
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
                <div>
                  <Menu.Button className="inline-flex justify-centerw-full rounded-lg border border-gray-300 shadow-sm px-2 py-2 bg-white dark:bg-dark-100 text-xs text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-700 focus:ring-my-orange">
                    Language
                    {open ? (
                      <ChevronUpIcon
                        className="-mr-1 ml-1 h-4 w-4 rotate-180"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronUpIcon
                        className="-mr-1 ml-1 h-4 w-4"
                        aria-hidden="true"
                      />
                    )}
                  </Menu.Button>
                </div>
              </>
            )}
          </Menu>
          */}
        </div>

        <div className="flex-none block w-full lg:w-3/5">
          <p className="text-sm text-center text-gray-400">
            {`© ${new Date().getFullYear()} Copyright: `}
            <a
              href="https://vedvyas.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-my-orange hover:underline"
            >
              Ved Vyas Foundation.
            </a>
            <br className="sm:hidden" />
            <span className="sm:inline"> All rights reserved.</span>
          </p>
        </div>
        <div className="flex lg:w-1/5 justify-end items-center lg:space-x-1  lg:flex">
          <a
            href="https://play.google.com/store/apps/details?id=com.gitainitiative.bhagavadgita"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10"
          >
            <Image
              src="/play_store.svg"
              alt="Bhagavad Gita"
              className="object-contain h-full rounded"
              height={40}
              width={140}
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/bhagavad-gita-hindi-english/id1602895635"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10"
          >
            <Image
              src="/app_store.svg"
              alt="Bhagavad Gita"
              className="object-contain h-full"
              height={40}
              width={140}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
