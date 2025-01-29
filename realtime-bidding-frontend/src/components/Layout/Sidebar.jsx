/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SideBarArrow } from "@/components/svgs";
import { SideBarData } from "./data";
import { useSelector } from "react-redux";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLElement>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(() => {
    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    return storedSidebarExpanded === "true";
  });

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains() ||
        trigger.current.contains()
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`sidebar ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* SIDEBAR HEADER */}
      <div className="flex items-center justify-between gap-2 mb-10">
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-white"
        >
          <SideBarArrow />
        </button>
      </div>

      {/* SIDEBAR NAVIGATION */}
      <ul className="flex flex-col gap-2">
        {SideBarData.map((ele, i) => (
          <li
            key={i}
            className={`rounded-xl px-6 py-5 ${
              location.pathname === ele.href
                ? "bg-blackRussian2 text-white cursor-pointer"
                : "text-silver"
            }`}
          >
            <Link to={ele.href} className="flex gap-4">
              {ele.icon} {ele.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* CURRENT PLAN STRIPE */}
      <div className="mt-auto px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-t-xl">
        Current Plan: <span className="uppercase">{user?.plan?.title}</span>
      </div>
    </aside>
  );
};

export default Sidebar;