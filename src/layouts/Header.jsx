import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import { Link, NavLink } from "react-router-dom";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Header = () => {
  const { theme } = useTheme();
  return (
    <>
      <header class="sticky top-0 z-40 w-full p-4 backdrop-blur-sm">
        <div class="max-w-13xl m-auto px-2 pb-1 pt-2 sm:pb-2">
          <nav class="flex items-center justify-between mx-1 sm:mx-2 md:mx-3 lg:mx-4">
            <div class="flex items-center gap-6">
              <a class="group" target="_blank" href="/">
                <GithubOutlined className="text-[24px] cursor-pointer text-white/70 transition-all duration-300 group-hover:text-white" />
              </a>
              <a class="group" target="_blank" href="/">
                <FacebookOutlined className="text-[24px] cursor-pointer text-white/70 transition-all duration-300 group-hover:text-white" />
              </a>
              <a class="group" target="_blank" href="/">
                <InstagramOutlined className="text-[24px] cursor-pointer text-white/70 transition-all duration-300 group-hover:text-white" />
              </a>
            </div>
            <div class="flex items-center justify-center gap-6 rounded-full border border-white/50 px-6 py-2">
              <button
                type="button"
                class="text-black dark:text-white relative inline-flex px-2 py-0.5 transition-colors duration-300 font-bold hover:bg-hover rounded-lg"
                aria-selected="false"
                data-checked="false"
              >
                <span class="z-10">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive ? "text-primary" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </span>
              </button>
              <button
                type="button"
                class="text-black dark:text-white relative inline-flex px-2 py-0.5 font-medium transition-colors duration-300 hover:bg-hover rounded-lg"
                aria-selected="false"
                data-checked="false"
              >
                <span class="z-10">
                  <NavLink
                    to="/a"
                    className={({ isActive }) =>
                      `${isActive ? "text-primary" : ""}`
                    }
                  >
                    Showcases
                  </NavLink>
                </span>
              </button>
              <button
                type="button"
                class="text-black dark:text-white relative inline-flex px-2 py-0.5 font-medium transition-colors duration-300 hover:bg-hover rounded-lg"
                aria-selected="false"
                data-checked="false"
              >
                <span class="z-10">
                  <NavLink
                    to="/b"
                    className={({ isActive }) =>
                      `${isActive ? "text-primary" : ""}`
                    }
                  >
                    Certificates
                  </NavLink>
                </span>
              </button>
            </div>
            <button class="group cursor-pointer rounded-xl border-4 border-primary/70 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100">
              <div class="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-[#0D7C66] px-4 py-2 font-bold text-white">
                My CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right transition-all group-hover:translate-x-2 group-hover:scale-125"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <div class="absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]"></div>
              </div>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
